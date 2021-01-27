// @noflow
/* eslint-disable no-console */
const { ESLint } = require("eslint");
const fsx = require("fs-extra");
const path = require("path");
const log = require("fancy-log");

async function eslintCI() {
  const eslint = new ESLint({
    reportUnusedDisableDirectives: "error",
  });

  function isCandidateForLinting(fileName) {
    return fileName.match(/\.(jsx?|tsx?|flow)$/);
  }

  function shouldLintAll(fileName) {
    return [
      path.basename(__filename),
      "package.json",
      "yarn.lock",
      ".eslintrc",
      ".eslintrc.js",
      ".eslintignore",
      "eslintJS.js",
      "eslintTS.js",
    ].some(f => fileName.endsWith(f));
  }

  // changed file names saved by GitHub Action "get changed files"
  // https://github.com/lots0logs/gh-action-get-changed-files
  const addedFiles = JSON.parse(await fsx.readFile(`${process.env.HOME}/files_added.json`));
  const modifiedFiles = JSON.parse(await fsx.readFile(`${process.env.HOME}/files_modified.json`));
  const renamedFiles = JSON.parse(await fsx.readFile(`${process.env.HOME}/files_renamed.json`));
  const candidateFiles = [...new Set([...addedFiles, ...modifiedFiles, ...renamedFiles])].filter(
    isCandidateForLinting,
  );
  const criticalFiles = candidateFiles.filter(shouldLintAll);

  let pathsToLint;

  if (criticalFiles.length > 0) {
    log("The following critical files have been changed:");
    criticalFiles.forEach(fileName => {
      log(`  ${fileName}`);
    });
    log("Running ESLint on all files...");
    pathsToLint = ".";
  } else {
    pathsToLint = candidateFiles;
  }

  const results = await eslint.lintFiles(pathsToLint);
  const errorResults = ESLint.getErrorResults(results); // --quiet

  if (results.errorCount > 0) {
    const formatter = await eslint.loadFormatter();
    console.log(formatter(errorResults));
    process.exit(1);
  }
}

module.exports = eslintCI;
