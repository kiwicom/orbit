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

module.exports = function (api /* : ApiType */) {
  api.assertVersion(7);
  api.cache.forever();

  return {
    presets: target === "storybook" ? [] : [["@adeira/babel-preset-adeira", { target }]],
    plugins: ["babel-plugin-styled-components"],
    env: {
      test: {
        plugins: ["require-context-hook"],
      },
    },
  };
};
