// @flow
const prettier = require("prettier");

const getParserOption = platform => {
  if (platform === "typescript") {
    return "typescript";
  }
  // https://prettier.io/docs/en/options.html#parser
  // doesn't matter for flow or javascript
  return "babel";
};

function resolveConfig() {
  return prettier.resolveConfig.sync(prettier.resolveConfigFile.sync());
}

const formatCode = (code, platform) =>
  prettier.format(Array.isArray(code) ? code.join("\n") : code, {
    ...resolveConfig(),
    parser: getParserOption(platform),
  });

module.exports = formatCode;
