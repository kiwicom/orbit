// @noflow

module.exports = api => {
  api.assertVersion(7);
  const testEnv = api.env("test");
  return {
    presets: [
      ["@babel/preset-env", { modules: api.env("esm") ? false : "cjs", bugfixes: true }],
      ["@babel/preset-react", { runtime: "classic" }],
      "@babel/preset-flow",
    ],
    plugins: [
      ["babel-plugin-styled-components", { ssr: !testEnv }],
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      ["@babel/plugin-transform-runtime", { useESModules: api.env("esm") }],
      "@adeira/babel-preset-adeira/src/adeira-js-warning",
      "@adeira/babel-preset-adeira/src/adeira-js-invariant",
    ],
    env: {
      test: {
        plugins: ["babel-plugin-require-context-hook"],
      },
    },
  };
};
