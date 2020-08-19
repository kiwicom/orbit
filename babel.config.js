// @flow strict

/* ::

type ApiType = {|
  +assertVersion: number => void,
  +cache: {|
    forever: () => void,
  |},
  +caller: (Caller => boolean) => boolean,
|};

type Caller = {|
  +name: string,
|};

*/

// Use "flow", "js", "js-esm" or special "storybook" for storybook deployment
const target = process.env.BABEL_TARGET || "js";
const browsers = require("browserslist")();

const environments = {
  node: "current",
  browsers,
};

module.exports = function (api /* : ApiType */) {
  api.assertVersion(7);
  api.cache.forever();

  return {
    presets:
      target === "storybook" ? [] : [["@adeira/babel-preset-adeira", { target, environments }]],
    plugins: ["babel-plugin-styled-components"],
    env: {
      test: {
        plugins: ["require-context-hook"],
      },
    },
  };
};
