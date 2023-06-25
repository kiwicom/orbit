// @noflow
const browserslist = require("browserslist");
// the recommended command `npx browserslist@latest --update-db` removes caniuse-lite from package.json
// so we're going to use it as a transitive dependency
// eslint-disable-next-line import/no-extraneous-dependencies
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
