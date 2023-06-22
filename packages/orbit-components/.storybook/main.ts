/* eslint-disable no-param-reassign */
import path from "path";

const config = {
  staticDirs: [path.resolve(__dirname, "../static")],
  stories: ["../src/**/*.stories.*"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {},
  features: {
    babelModeV7: true,
  },
  addons: [
    "@storybook/addon-knobs",
    {
      name: "@storybook/addon-essentials",
      options: {
        controls: false,
      },
    },
  ],
  webpackFinal(cfg) {
    if (cfg) {
      // resolve to .js rather than .mjs to avoid webpack failing because of ambiguous imports
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
export default config;
