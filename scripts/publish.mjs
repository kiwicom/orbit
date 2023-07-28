import { $, fetch, argv } from "zx";
import dotenv from "dotenv-safe";
import conventionalChangelog from "conventional-changelog";
import { getPackages } from "@lerna/project";
import slackify from "slackify-markdown";
import { Octokit } from "@octokit/rest";

import { parseSlackMessages } from "./helpers.mjs";

/* eslint-disable no-console */

const TITLE = `New orbit release 🚀`;
const CHANNEL = `orbit-react`;
const COLOR_CORE = `#00A58E`;
const COLOR_PING = `#0172CB`;

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

const apiRequest = async ({ method = "GET", url, body }) =>
  fetch(url, {
    method,
    body,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
      Accept: "application/json",
    },
  }).then(res => res.json());

async function getLatestReleaseTime() {
  const res = await octokit.rest.repos.getLatestRelease({
    owner: "kiwicom",
    repo: "orbit",
  });

  return new Date(res.data.published_at).getTime() / 1000;
}

function adjustChangelog(str) {
  const output = str
    .replace("Bug Fixes", "Bug Fixes 🐛")
    .replace("Features", "Features 🆕")
    .replace("BREAKING CHANGES", "BREAKING CHANGES 🚨")
    .replace("Reverts", "Reverts 🔄");

  return output;
}

async function getUserNames(timestamp) {
  try {
    $.verbose = false;
    const res = await apiRequest({
      url: `${process.env.SLACK_API_READ_PLZ_ORBIT}&oldest=${timestamp}`,
    });

    return parseSlackMessages(res.messages);
  } catch (err) {
    console.error(err);
  }

  return undefined;
}

async function postSlackNotification(changelog, names) {
  try {
    $.verbose = false;
    const res = await apiRequest({
      url: process.env.SLACK_API_POST_RELEASE_MESSAGE,
      method: "POST",
      body: JSON.stringify({
        channel: CHANNEL,
        attachments: [
          {
            title: TITLE,
            text: changelog,
            color: COLOR_CORE,
          },
          {
            text: names ? [...new Set(names)].join(",") : "",
            color: COLOR_PING,
          },
        ],
      }),
    });

    return res;
  } catch (err) {
    console.error(err);
  }

  return undefined;
}

async function configureGitHubToken() {
  try {
    dotenv.config({
      allowEmptyValues: true,
      example: ".env.example",
    });
  } catch (err) {
    if (/SLACK_TOKEN/g.test(err.message)) {
      throw new Error(
        "Slack token is missing in the .env file, please add it.\nLearn how to create one: https://slack.com/intl/en-cz/help/articles/215770388-Create-and-regenerate-API-tokens",
      );
    }

    if (/GH_TOKEN/g.test(err.message)) {
      throw new Error(
        "GitHub token is missing in the .env file, Lerna needs it to create GitHub releases.\nLearn how to create one: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token.",
      );
    }
  }
}

async function getChangelogMessage() {
  const packages = await getPackages();

  return new Promise((resolve, reject) => {
    let changelog = "";
    const pkg = packages.find(p => p.name === "@kiwicom/orbit-components");
    const stream = conventionalChangelog(
      {
        lernaPackage: pkg.name,
        preset: "angular",
      },
      {
        host: "https://github.com",
        title: "@kiwicom/orbit-components",
        owner: "kiwicom",
        repository: "orbit",
        linkCompare: true,
        version: pkg.version,
      },
    );

    stream.on("data", data => {
      changelog += data.toString();
    });

    stream.on("end", () => {
      changelog = slackify(adjustChangelog(changelog));
      resolve(changelog);
    });

    stream.on("error", err => {
      reject(err);
    });
  });
}

(async () => {
  try {
    await configureGitHubToken();
    const changelog = await getChangelogMessage();

    if (argv.dry) {
      console.info(changelog);
      process.exit(0);
    } else {
      await $`yarn install`;
      await $`yarn lerna publish --no-private --conventional-commits --create-release github`;
      await $`yarn docs changelog`;
      await $`git add docs/src/data/log.md && git commit -m "docs: update changelog" && git push`;
      const timestamp = await getLatestReleaseTime();
      const names = await getUserNames(timestamp);
      await postSlackNotification(changelog, names);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
