// @flow
const prettier = require("prettier");

const options = require("../../../../../prettier.config");

const getParserOption = platform => {
  if (platform === "typescript") {
    return "typescript";
  }
  // https://prettier.io/docs/en/options.html#parser
  // doesn't matter for flow or javascript
  return "babel";
};

const formatCode = (code, platform) =>
  prettier.format(Array.isArray(code) ? code.join("\n") : code, {
    ...options,
    parser: getParserOption(platform),
  });

module.exports = formatCode;
