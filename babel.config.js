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

const target = process.env.BABEL_TARGET || "js";

module.exports = function(api /* : ApiType */) {
  api.assertVersion(7);
  api.cache.forever();

  return {
    presets: [["@adeira/babel-preset-adeira", { target }]],
    plugins: ["babel-plugin-styled-components"],
    env: {
      test: {
        plugins: ["require-context-hook"],
      },
    },
  };
};
