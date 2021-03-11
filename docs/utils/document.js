const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const rePathNumbers = new RegExp(`(${path.sep})\\d+-`, "g");
const omitNumbers = filePath => filePath.replace(rePathNumbers, "$1");

const ROOT = path.resolve(__dirname, "../src/documentation");

function getMetaFile(pathToFile) {
  return fs.existsSync(pathToFile) ? yaml.load(fs.readFileSync(pathToFile)) : {};
}

function getMetaPath(dir) {
  return path.join(ROOT, dir, "meta.yml");
}

// TODO: check if need or else move back to getDocumentUrlPath
function doesPageHaveTabs(dir) {
  const metaPath = getMetaPath(dir);
  const meta = getMetaFile(metaPath);
  return meta.type === "tabs";
}

function getDescriptionFromMeta(filePath) {
  const { dir } = path.parse(filePath);
  const metaPath = getMetaPath(dir);
  const meta = getMetaFile(metaPath);
  return meta.description;
}

function getDocumentUrlPath(filePath) {
  const { dir, base, name } = path.parse(filePath);
  if (!base.startsWith("01-")) {
    return omitNumbers(path.join(dir, name, "/"));
  }
  return doesPageHaveTabs(dir)
    ? omitNumbers(path.join(dir, "/"))
    : omitNumbers(path.join(dir, name, "/"));
}

module.exports = {
  getDocumentUrlPath,
  getDescriptionFromMeta,
};
