const { consts, orbitProcessor } = require("@kiwicom/orbit-tracking");

module.exports = {
  crawlFrom: consts.TMP_FOLDER,
  includeSubComponents: true,
  deprecated: [],
  importedFrom: /@kiwicom\/orbit-components/,
  exclude: [
    "node_modules",
    "__fixtures__",
    "test-utils",
    "mocks",
    "server",
    "flow-typed",
    "scripts",
    "codemodes",
    "cypress",
    "dist",
    "types",
  ],
  processors: [orbitProcessor],
};
