const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const rePathNumbers = new RegExp(`(${path.sep})\\d+-`, "g");
const omitNumbers = filePath => filePath.replace(rePathNumbers, "$1");

const ROOT = path.resolve(__dirname, "../src/documentation");

function getDocumentUrlPath(filePath) {
  const { dir, base, name } = path.parse(filePath);
  if (!base.startsWith("01-")) {
    return omitNumbers(path.join(dir, name, "/"));
  }
  const metaPath = path.join(ROOT, dir, "meta.yml");
  const meta = fs.existsSync(metaPath) ? yaml.load(fs.readFileSync(metaPath)) : {};
  return meta.type === "tabs"
    ? omitNumbers(path.join(dir, "/"))
    : omitNumbers(path.join(dir, name, "/"));
}

module.exports = {
  getDocumentUrlPath,
};
