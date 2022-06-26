/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  displayName: "orbit.kiwi",
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
  setupFilesAfterEnv: ["./config/jest-setup"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    uuid: require.resolve("uuid"),
  },
};
