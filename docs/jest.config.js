module.exports = {
  displayName: "orbit.kiwi",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./config/jest-setup"],
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
  moduleNameMapper: {
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
  },
};
