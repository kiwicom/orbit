// @noflow

module.exports = {
  displayName: "eslint-plugin-orbit-components",
  testEnvironment: "node",
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
};
