/* eslint-disable no-restricted-syntax */
const fs = require("fs");

const { peerDependencies } = require("./package.json");

const sortBy = key => {
  return (a, b) => {
    if (a[key] > b[key]) return 1;
    if (b[key] > a[key]) return -1;
    return 0;
  };
};

const exportMatches = fs
  .readFileSync(`${__dirname}/src/index.ts`)
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
    name: "esm",
    path: `${__dirname}/es/size-measurer.js`,
    import: "{ Orbit }",
    limit: "190 kB",
  },
  ...entries.sort(sortBy("name")),
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
