// @noflow
const browserslist = require("browserslist");
const caniuse = require("caniuse-db/data.json").agents;

module.exports = {
  transforms: {
    SUPPORTED_BROWSERS: () => {
      return browserslist()
        .map(b => {
          const [id, version] = b.split(" ");
          return `- ${caniuse[id].browser} ${version}`;
        })
        .join("\n");
    },
  },
};
