// @noflow

module.exports = api => {
  api.assertVersion(7);
  return {
    presets: [
      ["@babel/preset-env", { modules: api.env("esm") ? false : "cjs" }],
      "@babel/preset-flow",
    ],
  };
};
