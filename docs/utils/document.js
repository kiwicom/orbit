const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const rePathNumbers = new RegExp(`(${path.sep})\\d+-`, "g");
const omitNumbers = filePath => filePath.replace(rePathNumbers, "$1");

const ROOT = path.resolve(__dirname, "../src/documentation");

function getMetaPath(dir) {
  return path.join(ROOT, dir, "meta.yml");
}

function getMetaFileData(dir) {
  const metaPath = getMetaPath(dir);
  return fs.existsSync(metaPath) ? yaml.load(fs.readFileSync(metaPath)) : {};
}

function doesPageHaveTabs(dir) {
  const meta = getMetaFileData(dir);
  return meta.type === "tabs";
}

function getDocumentUrlPath(dir, base, name) {
  if (!base.startsWith("01-")) {
    return omitNumbers(path.join(dir, name, "/"));
  }
  return doesPageHaveTabs(dir)
    ? omitNumbers(path.join(dir, "/"))
    : omitNumbers(path.join(dir, name, "/"));
}

module.exports = {
  doesPageHaveTabs,
  getDocumentUrlPath,
  getMetaFileData,
};
