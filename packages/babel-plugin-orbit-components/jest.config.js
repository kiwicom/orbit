// @noflow

module.exports = {
  displayName: "babel-plugin-orbit-components",
  testEnvironment: "node",
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
};
