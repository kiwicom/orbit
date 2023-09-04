module.exports = {
  displayName: "@kiwicom/eslint-plugin-orbit-components",
  testEnvironment: "node",
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};
