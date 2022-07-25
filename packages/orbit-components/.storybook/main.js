// @noflow
/* eslint-disable no-param-reassign */
const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
    options: {
      lazyCompilation: true,
    },
  },
  staticDirs: [path.resolve(__dirname, "../static")],
  stories: ["../src/**/*.stories.*"],
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
  ],
  features: {
    babelModeV7: true,
  },
  webpackFinal(config) {
    // resolve to .js rather than .mjs to avoid webpack failing because of ambiguous imports
    config.resolve.alias["@adeira/js"] = require.resolve("@adeira/js/src/index.js");
    config.resolve.extensions = config.resolve.extensions.filter(ext => ext !== ".mjs");
    return config;
  },
};
