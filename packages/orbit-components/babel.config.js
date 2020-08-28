// @noflow
const baseConfig = require("../../babel.config");

module.exports = {
  ...baseConfig,
  presets: process.env.BABEL_TARGET === "storybook" ? [] : baseConfig.presets,
};
