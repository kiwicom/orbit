module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["./etc/setupJest.js"],
  testPathIgnorePatterns: ["dist"],
};
