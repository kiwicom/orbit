// @flow
const javascriptFoundation = require("./javascriptFoundation");
const javascriptThemeableObject = require("./javascriptThemeableObject");

const formatters = {
  javascriptFoundation,
  javascriptThemeableObject,
};

const registerFormatters = StyleDictionary => {
  Object.keys(formatters).forEach(name => {
    StyleDictionary.registerFormat(formatters[name]);
  });
};

module.exports = registerFormatters;
