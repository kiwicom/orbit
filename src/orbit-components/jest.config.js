// @flow
const path = require("path");

const config = require("../../jest.config.js");

module.exports = Object.assign({}, config, {
  displayName: "orbit-components",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  setupFiles: [
    "raf/polyfill",
    path.join(__dirname, "./config/enzymeConfig"),
    path.join(__dirname, "./config/registerContext"),
  ],
  setupFilesAfterEnv: [path.join(__dirname, "./config/jestSetupFramework")],
  snapshotSerializers: ["enzyme-to-json/serializer"],
});
