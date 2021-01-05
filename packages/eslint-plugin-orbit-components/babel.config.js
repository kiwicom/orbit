// @flow
const browserslist = require("@kiwicom/browserslist-config");

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: true,
          browsers: browserslist,
        },
      },
    ],
    "@babel/preset-typescript",
  ],
};
