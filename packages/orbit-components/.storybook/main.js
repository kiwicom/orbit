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
  webpackFinal(config) {
    // resolve to .js rather than .mjs to avoid webpack failing because of ambiguous imports
    config.resolve.alias["@adeira/js"] = require.resolve("@adeira/js/src/index.js");
    config.resolve.extensions = config.resolve.extensions.filter(ext => ext !== ".mjs");

    config.module.rules.push({
      test: [/\.jsx?$/, /\.tsx?$/],
      use: [
        {
          options: { envName: "esm", presets: ["@babel/preset-typescript"] },
          loader: require.resolve("babel-loader"),
        },
      ],
      exclude: /node_modules\/(?!(loki)\/).*/, // Loki is not transpilled, throws error in IE 11
    });

    const rules = [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-typescript",
            [
              "@babel/preset-env",
              {
                modules: "commonjs",
              },
            ],
          ],
        },
      },
    ];

    return {
      ...config,
      module: {
        rules: [...rules, ...config.module.rules],
      },
    };
  },
};
