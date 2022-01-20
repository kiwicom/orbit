import { TMP_FOLDER } from "./consts";
import processor from "./orbitProcessor";

module.exports = {
  crawlFrom: TMP_FOLDER,
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
  processors: [processor],
};
