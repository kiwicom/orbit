const statsFilename = "loadable-stats.json";
const statsPath = `${process.cwd()}/public/${statsFilename}`;
const fs = require("fs");
const parser = require("@babel/parser");
const path = require("path");

const getSource = file => {
  const code = parser.parse(fs.readFileSync(file), {
    sourceType: "module",
    sourceFilename: path.basename(file),
  });
  return code;
};

module.exports = {
  statsPath,
  getSource,
};
