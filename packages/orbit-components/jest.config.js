// @noflow
module.exports = {
  displayName: "orbit-components",
  testEnvironment: "jsdom",
  setupFiles: ["raf/polyfill", "./config/registerContext.ts"],
  setupFilesAfterEnv: ["./config/jestSetupFramework.ts"],
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
};
