/* eslint-disable no-restricted-syntax */
const { fs } = require("zx");
const _ = require("lodash");

const { peerDependencies } = require("./package.json");

const exportMatches = fs
  .readFileSync(`${__dirname}/src/index.js`)
  .toString()
  .matchAll(
    /export (\{ (default as )?(?<importedModules>.*) \}|\* as (?<importNamespace>.*)) from "(?<modulePath>.*)"/g,
  );

const entries = [];

for (const {
  groups: { importedModules, importNamespace, modulePath },
} of exportMatches) {
  const name = modulePath.startsWith(".")
    ? modulePath.replace(/^\.\//, "").split("/").slice(-1)[0]
    : modulePath;
  entries.push({
    name,
    path: `${__dirname}/es/index.js`,
    import: `{ ${importedModules || importNamespace} }`,
  });
}

module.exports = [
  {
    name: "Orbit ESM",
    path: `${__dirname}/es/size-measurer.js`,
    import: "{ Orbit }",
    limit: "185 kB",
  },
  {
    name: "Orbit CJS",
    path: `${__dirname}/lib/index.js`,
    import: "{ Orbit }",
    limit: "210 kB",
  },
  ..._.sortBy(entries, "name"),
].map(entry => ({
  ...entry,
  ignore: Object.keys(peerDependencies),
  modifyWebpackConfig(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve = {
      alias: {
        // resolve to .js rather than .mjs to avoid webpack failing to resolve modules
        "@adeira/js": require.resolve("@adeira/js/src/index.js"),
      },
    };
    return config;
  },
}));
