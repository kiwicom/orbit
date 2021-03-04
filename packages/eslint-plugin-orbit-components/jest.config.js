// @noflow

module.exports = {
  displayName: "eslint-plugin-orbit-components",
  testEnvironment: "node",
  transform: {
    "\\.ts$": "@swc/jest",
  },
};
