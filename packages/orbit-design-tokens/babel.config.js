// @noflow

module.exports = {
  presets: [require.resolve("@babel/preset-env"), require.resolve("@babel/preset-flow")],
  env: {
    esm: {
      presets: [[require.resolve("@babel/preset-env"), { modules: false }]],
    },
  },
};
