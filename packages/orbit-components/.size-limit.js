const globby = require("globby");
const path = require("path");

module.exports = [
  {
    name: "Orbit",
    path: `${__dirname}/lib/index.js`,
    limit: "210 kB",
  },
  ...globby
    .sync([`${__dirname}/lib/*/index.js`, `${__dirname}/lib/primitives/*/index.js`])
    .map(file => ({
      name: path.basename(path.dirname(file)),
      path: file,
    })),
  {
    name: "icons",
    path: `${__dirname}/lib/icons/index.js`,
  },
  // hooks we have documented + hooks that should probably be exposed as well
  ...["useFocusTrap", "useLockScrolling", "useMediaQuery", "useRandomId", "useTheme"].map(hook => ({
    name: hook,
    path: `${__dirname}/lib/hooks/${hook}/index.js`,
  })),
  ...["mediaQuery", "rtl"].map(utility => ({
    name: utility,
    path: `${__dirname}/lib/utils/${utility}/index.js`,
  })),
].map(part => ({
  ...part,
  ignore: ["react", "react-dom", "styled-components"],
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
