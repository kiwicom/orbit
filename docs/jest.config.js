module.exports = {
  displayName: "orbit.kiwi",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./config/jest-setup"],
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
};
