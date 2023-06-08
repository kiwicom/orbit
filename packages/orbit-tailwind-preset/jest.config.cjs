module.exports = {
  displayName: "orbit-tailwind-preset",
  testEnvironment: "jsdom",
  setupFiles: ["raf/polyfill", "./config/registerContext.ts"],
  setupFilesAfterEnv: ["./config/jestSetupFramework.ts"],
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { root: __dirname }],
  },
  testPathIgnorePatterns: ["/node_modules/"],
};
