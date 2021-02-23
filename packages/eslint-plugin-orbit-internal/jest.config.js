// @noflow

module.exports = {
  displayName: "jest-internal",
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
};
