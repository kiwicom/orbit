module.exports = {
  displayName: "orbit-tailwind-preset",
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
  testPathIgnorePatterns: ["/node_modules/"],
};
