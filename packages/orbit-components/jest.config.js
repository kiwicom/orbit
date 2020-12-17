// @noflow

module.exports = {
  displayName: "orbit-components",
  testEnvironment: "jsdom",
  setupFiles: ["raf/polyfill", "./config/registerContext"],
  setupFilesAfterEnv: ["./config/jestSetupFramework"],
};
