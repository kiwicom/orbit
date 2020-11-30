// @flow
const javascriptFoundation = require("./javascriptFoundation");
const javascriptThemeableObject = require("./javascriptThemeableObject");

const formatters = {
  javascriptFoundation,
  javascriptThemeableObject,
};

const registerFormatters = StyleDictionary => {
  Object.values(formatters).forEach(formatter => {
    StyleDictionary.registerFormat(formatter);
  });
};

module.exports = registerFormatters;
