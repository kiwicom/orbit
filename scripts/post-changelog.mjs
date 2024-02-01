import { $, fetch, argv } from "zx";
import dotenv from "dotenv-safe";
import slackifyMarkdown from "slackify-markdown";
import { simpleGit } from "simple-git";
import gitDiffParser from "gitdiff-parser";

/* eslint-disable no-console */

const CHANNEL = "orbit-react";
const COLOR_CORE = "#00A58E";
const PACKAGES = ["orbit-components", "orbit-tailwind-preset", "orbit-design-tokens"];
const SLACK_CHANGELOG_WEBHOOK_URL = process.env.SLACK_CHANGELOG_WEBHOOK_URL ?? "";

function getTitle(pkg) {
  return `New ${pkg} release 🚀`;
}
async function sendToWebhook({ content, webhookUrl }) {
  await fetch(webhookUrl, {
    method: "POST",
    body: JSON.stringify(content),
  })
    .then(res => {
      if (res.status !== 200) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

function format(str, package_, prefix = "@kiwicom") {
  const output = str
    .replace(/^#+ /, `# _${prefix}/${package_}_ `)
    .replace("Bug Fixes", "Bug Fixes 🐛")
    .replace("Features", "Features 🆕")
    .replace("BREAKING CHANGES", "BREAKING CHANGES 🚨")
    .replace("Reverts", "Reverts 🔄");

  return output;
}

function getChangelogFromDiff(files) {
  // Only one file as we're only looking at the changelog
  const [changelogFile] = files;
  const changelog = changelogFile.hunks
    .flatMap(hunk => hunk.changes.filter(({ isInsert }) => isInsert).map(({ content }) => content))
    .join("\n")
    .trim();
  return changelog;
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
    const res = await sendToWebhook({
      webhookUrl: SLACK_CHANGELOG_WEBHOOK_URL,
      content: {
        attachments: [
          {
            title: getTitle(package_),
            text: changelog,
            color: COLOR_CORE,
          },
        ],
      },
    });
    return res;
  } catch (err) {
    console.log("Error posting to Slack");
    console.error(err);
  }

  return undefined;
}

async function configureWebhookURL() {
  try {
    dotenv.config({
      allowEmptyValues: true,
      example: ".env.example",
    });
  } catch (err) {
    if (/SLACK_CHANGELOG_WEBHOOK_URL/g.test(err.message)) {
      throw new Error("SLACK_CHANGELOG_WEBHOOK_URL is not set");
    }
  }
}

async function publishChangelog(package_) {
  try {
    await simpleGit().fetch(["origin", "master", "--tags"]);
    const tags = await simpleGit().tags({ "--sort": "-taggerdate" });
    const diff = await getDiff(tags.latest ?? "", changelogPath(package_));
    const files = gitDiffParser.parse(diff);
    if (files.length === 0) {
      console.log(`No changes in ${package_}`);
      return;
    }
    const changelog = getChangelogFromDiff(files);
    const formattedChangelog = format(changelog, package_);
    const slackifiedChangelog = slackifyMarkdown(formattedChangelog);

    if (argv.dry) {
      console.info(formattedChangelog);
    } else {
      await configureWebhookURL();
      await postSlackNotification(slackifiedChangelog, package_);
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
