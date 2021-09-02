module.exports = [
  {
    path: `${__dirname}/lib/**/*.js`,
    limit: "218 kB",
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
  },
];
