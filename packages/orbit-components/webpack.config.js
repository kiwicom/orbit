// @noflow
const PnpWebpackPlugin = require("pnp-webpack-plugin");

module.exports = {
  output: {
    path: `${__dirname}/umd`,
    library: "Orbit",
    libraryTarget: "umd",
    filename: "orbit-components.min.js",
  },

  performance: {
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
        },
      },
    ],
  },

  externals: {
    react: "React",
    "react-dom": "reactDOM",
  },

  resolve: {
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
};
