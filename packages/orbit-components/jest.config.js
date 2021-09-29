// @noflow

module.exports = {
  displayName: "orbit-components",
  testEnvironment: "jsdom",
  setupFiles: [require.resolve("raf/polyfill"), "./config/registerContext"],
  setupFilesAfterEnv: ["./config/jestSetupFramework"],
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
};
