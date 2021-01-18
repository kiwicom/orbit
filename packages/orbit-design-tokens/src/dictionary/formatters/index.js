// @flow
const javascriptFoundation = require("./javascript-foundation");
const javascriptTokens = require("./javascript-tokens");

const formatters = {
  ...javascriptFoundation,
  ...javascriptTokens,
};

const registerFormatters = StyleDictionary => {
  Object.values(formatters).forEach(formatter => {
    StyleDictionary.registerFormat(formatter);
  });
};

module.exports = registerFormatters;
