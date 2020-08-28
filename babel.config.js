// @noflow

// Use "flow", "js", "js-esm" or special "storybook" for storybook deployment
const target = process.env.BABEL_TARGET || "js";
const browsers = require("browserslist")();

const environments = {
  node: "current",
  browsers,
};

module.exports = {
  presets: [["@adeira/babel-preset-adeira", { target, environments }]],
  plugins: ["babel-plugin-styled-components"],
  env: {
    test: {
      plugins: ["require-context-hook"],
    },
  },
};
