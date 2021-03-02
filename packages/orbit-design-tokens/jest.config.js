// @noflow

module.exports = {
  displayName: "orbit-design-tokens",
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
};
