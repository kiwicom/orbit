// @noflow
/* eslint-disable no-console */
const { spawn } = require("child_process");
const { series } = require("gulp");
const conventionalChangelog = require("conventional-changelog");
const { getPackages } = require("@lerna/project");
const markdownChalk = require("markdown-chalk");
const mergeStream = require("merge-stream");
const transform = require("through2").obj;
const path = require("path");

async function previewChangelog(done) {
  const packages = await getPackages();
  const streams = packages.map(pkg => {
    return conventionalChangelog(
      {
        lernaPackage: pkg.name,
        preset: "angular",
      },
      {
        host: "https://github.com",
        owner: "kiwicom",
        repository: "orbit",
      },
      {
        path: path.join("packages", pkg.name.replace("@kiwicom/", "")),
      },
    ).pipe(
      transform((chunk, enc, cb) => {
        const changelog = chunk.toString();
        if (changelog.trim().includes("\n")) {
          console.log(markdownChalk(changelog));
        }
        cb();
      }),
    );
  });

  mergeStream(...streams)
    .on("done", () => {
      done();
    })
    .on("error", err => {
      done(err);
    });
}

function publishPackages() {
  return spawn(
    "yarn",
    ["lerna", "publish", "--conventional-commits", "--create-release", "github"],
    { stdio: "inherit" },
  );
}

module.exports = {
  publish: series(previewChangelog, publishPackages),
};
