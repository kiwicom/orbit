// @noflow
const browserslist = require("browserslist");
const caniuse = require("caniuse-lite").agents;

module.exports = {
  transforms: {
    SUPPORTED_BROWSERS: () => {
      const browsers = browserslist().map(b => {
        const [id, version] = b.split(" ");
        return `- ${caniuse[id].browser} ${version}`;
      });
      return `\n${browsers.join("\n")}\n`;
    },
  },
};
