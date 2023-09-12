import { TMP_FOLDER } from "./consts";
import processor from "./orbitProcessor";

export default {
  crawlFrom: TMP_FOLDER,
  includeSubComponents: true,
  deprecated: [],
  globs: ["**/!(*.test|*.spec|*.d).@(js|ts)?(x)"],
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
