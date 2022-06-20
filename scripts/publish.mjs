import { $, path, fetch } from "zx";
import dotenv from "dotenv-safe";
import conventionalChangelog from "conventional-changelog";
import { getPackages } from "@lerna/project";
import { obj as transform } from "through2";
import mergeStreams from "merge-stream";
import markdownChalk from "markdown-chalk";
import slackify from "slackify-markdown";

const SLACK_API = `https://skypicker.slack.com/api/chat.postMessage`;
const TITLE = `New orbit release 🚀`;
const CHANNEL = `orbit-react`;
const COLOR = `#00A58E`;

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
    .replace("BREAKING CHANGES", "BREAKING CHANGES 🚨");
  return output;
}

async function postSlackNotification(changelog) {
  try {
    $.verbose = false;
    const res = await fetch(SLACK_API, {
      method: "POST",
      body: JSON.stringify({
        channel: CHANNEL,
        attachments: [
          {
            title: TITLE,
            text: slackify(adjustChangelog(changelog)),
            color: COLOR,
          },
        ],
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
        Accept: "application/json",
      },
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
    if (/GH_TOKEN|SLACK_TOKEN/g.test(err.message)) {
      throw new Error(
        "GitHub token or Slack token is missing in the .env file, Lerna needs it to create GitHub releases.\nLearn how to create one: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token.",
      );
    }
  }
}

async function previewChangelog() {
  const packages = await getPackages();
  const streams = packages
    .filter(pkg => !/orbit.kiwi|orbit-tracking|babel-plugin-orbit-components/gm.test(pkg.name))
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
  await configureGitHubToken();
  await installDependencies();
  const changelog = await previewChangelog();
  await publishPackages();
  await postSlackNotification(changelog);
})();
