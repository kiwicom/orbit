import { $, path, fetch } from "zx";
import dotenv from "dotenv-safe";
import conventionalChangelog from "conventional-changelog";
import { getPackages } from "@lerna/project";
import { obj as transform } from "through2";
import mergeStreams from "merge-stream";
import markdownChalk from "markdown-chalk";
import slackify from "slackify-markdown";
import { Octokit } from "@octokit/rest";

import { parseSlackMessages } from "./helpers.mjs";

const TITLE = `New orbit release 🚀`;
const CHANNEL = `orbit-react`;
const COLOR_CORE = `#00A58E`;
const COLOR_PING = `#0172CB`;

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

const apiRequest = ({ method = "GET", url, body }) =>
  fetch.call(null, url, {
    method,
    body,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
      Accept: "application/json",
    },
  });

async function getLatestReleaseTime() {
  const res = await octokit.rest.repos.getLatestRelease({
    owner: "kiwicom",
    repo: "orbit",
  });

  return new Date(res.data.published_at).getTime() / 1000;
}

function installDependencies() {
  return new Promise((resolve, reject) =>
    $.spawn("yarn", ["install"], { stdio: "inherit" })
      .on("close", c => resolve(c))
      .on("error", err => reject(err)),
  );
}

function publishPackages() {
  return new Promise((resolve, reject) =>
    $.spawn(
      "yarn",
      ["lerna", "publish", "--no-private", "--conventional-commits", "--create-release", "github"],
      { stdio: "inherit" },
    )
      .on("close", c => resolve(c))
      .on("error", err => reject(err)),
  );
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

    if (!res.ok) return res.error;
    const { messages } = await res.json();
    return parseSlackMessages(messages);
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
            text: slackify(adjustChangelog(changelog)),
            color: COLOR_CORE,
          },
          {
            text: names ? [...new Set(names)].join(",") : "",
            color: COLOR_PING,
          },
        ],
      }),
    });
    if (!res.ok) return res.error;
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

async function previewChangelog() {
  const packages = await getPackages();
  const streams = packages
    .filter(pkg => !/orbit.kiwi|orbit-tracking/gm.test(pkg.name))
    .map(pkg => {
      return conventionalChangelog(
        {
          lernaPackage: pkg.name,
          preset: "angular",
        },
        {
          host: "https://github.com",
          owner: "kiwicom",
          repository: "orbit",
          linkCompare: false,
          version: pkg.version,
        },
        {
          path: path.join("packages", pkg.name.replace("@kiwicom/", "")),
        },
      ).pipe(
        transform((chunk, _, cb) => {
          const changelog = chunk.toString();
          if (changelog.trim().includes("\n")) {
            // eslint-disable-next-line no-console
            console.log(markdownChalk(changelog));
            cb(null, changelog);
          }
        }),
      );
    });

  return new Promise((resolve, reject) => {
    mergeStreams(...streams)
      .on("data", data => {
        resolve(data);
      })
      .on("error", err => {
        reject(err);
      });
  });
}

(async () => {
  try {
    await configureGitHubToken();
    await installDependencies();
    await publishPackages();
    const timestamp = await getLatestReleaseTime();
    const names = await getUserNames(timestamp);
    const changelog = await previewChangelog();
    if (changelog) {
      await postSlackNotification(changelog, names);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
