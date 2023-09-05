import { $, fetch, argv } from "zx";
import dotenv from "dotenv-safe";
import conventionalChangelog from "conventional-changelog";
import { getPackages } from "@lerna/project";
import slackify from "slackify-markdown";
import { simpleGit } from "simple-git";
import gitDiffParser from "gitdiff-parser";

/* eslint-disable no-console */

const CHANNEL = `orbit-react`;
const COLOR_CORE = `#00A58E`;
const PACKAGES = ["orbit-components", "orbit-tailwind-preset"];
const PACKAGE_PREFIX = "@kiwicom";
const SLACK_API_POST_RELEASE_MESSAGE = "https://slack.com/api/chat.postMessage";

function getTitle(pkg) {
  return `New ${pkg} release 🚀`;
}

const apiRequest = async ({ method = "GET", url, body }) =>
  fetch(url, {
    method,
    body,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
      Accept: "application/json",
    },
  });

function adjustChangelog(str) {
  const output = str
    .replace("Bug Fixes", "Bug Fixes 🐛")
    .replace("Features", "Features 🆕")
    .replace("BREAKING CHANGES", "BREAKING CHANGES 🚨")
    .replace("Reverts", "Reverts 🔄");

  return output;
}

function getDiff(tag, path) {
  return simpleGit().show([tag, path]);
}

function changelogPath(package_) {
  return `packages/${package_}/CHANGELOG.md`;
}

async function postSlackNotification(changelog, package_) {
  try {
    $.verbose = false;
    const res = await apiRequest({
      url: SLACK_API_POST_RELEASE_MESSAGE,
      method: "POST",
      body: JSON.stringify({
        channel: CHANNEL,
        attachments: [
          {
            title: getTitle(package_),
            text: changelog,
            color: COLOR_CORE,
          },
        ],
      }),
    });
    return res;
  } catch (err) {
    console.log("Error posting to Slack");
    console.error(err);
  }

  return undefined;
}

async function configureSlackToken() {
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
  }
}

async function getChangelogMessage(package_) {
  const packages = await getPackages();

  return new Promise((resolve, reject) => {
    let changelog = "";
    const pkg = packages.find(p => p.name === package_);

    const stream = conventionalChangelog(
      {
        lernaPackage: pkg.name,
        preset: "angular",
      },
      {
        host: "https://github.com",
        title: package_,
        owner: "kiwicom",
        repository: "orbit",
        linkCompare: true,
        version: pkg.version,
      },
      { path: pkg.location },
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

async function publishChangelog(package_) {
  try {
    const changelog = await getChangelogMessage(`${PACKAGE_PREFIX}/${package_}`);

    await simpleGit().fetch(["origin", "master", "--tags"]);
    const tags = await simpleGit().tags();
    const diff = await getDiff(tags.latest ?? "", changelogPath(package_));
    const files = gitDiffParser.parse(diff);
    if (files.length === 0) {
      console.log(`No changes in ${package_}`);
      return;
    }

    if (argv.dry) {
      console.info(changelog);
    } else {
      await configureSlackToken();
      await postSlackNotification(changelog, package_);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

(async () => {
  await Promise.all(
    PACKAGES.map(async package_ => {
      await publishChangelog(package_);
    }),
  );
  process.exit(0);
})();
