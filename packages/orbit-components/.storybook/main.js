// @noflow
/* eslint-disable no-param-reassign */
const path = require("path");

module.exports = {
  core: { builder: "webpack5" },
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

    config.module.rules.push({
      test: /\.jsx?$/,
      use: [
        {
          options: { envName: "esm" },
          loader: require.resolve("babel-loader"),
        },
      ],
      exclude: /node_modules\/(?!(loki)\/).*/, // Loki is not transpilled, throws error in IE 11
    });

    return config;
  },
};
