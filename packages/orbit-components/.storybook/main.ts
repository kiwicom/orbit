/* eslint-disable no-param-reassign */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const config = {
  core: {
    builder: "webpack5",
  },
  staticDirs: [path.resolve(__dirname, "../static")],
  stories: ["../src/**/*.stories.*"],
  framework: "@storybook/react",
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
  ],
  features: {
    babelModeV7: true,
  },
  webpackFinal(cfg) {
    if (cfg) {
      // resolve to .js rather than .mjs to avoid webpack failing because of ambiguous imports
      cfg.resolve.alias["@adeira/js"] = require.resolve("@adeira/js/src/index.js");
      cfg.resolve.extensions = cfg.resolve.extensions.filter(ext => ext !== ".mjs");

      cfg.module.rules.push({
        test: /\.(ts|tsx|mts)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["@babel/preset-typescript"],
        },
      });

      cfg.resolve.extensions.push(".ts", ".tsx", ".mts");

      return cfg;
    }

    return undefined;
  },
};

module.exports = config;
