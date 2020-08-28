// @noflow

module.exports = {
  displayName: "orbit-components",
  setupFiles: ["raf/polyfill", "./config/enzymeConfig", "./config/registerContext"],
  setupFilesAfterEnv: ["./config/jestSetupFramework"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
