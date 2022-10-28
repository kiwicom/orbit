const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => {
  return {
    entry: {
      bundle: "./src/index.jsx",
    },

    performance: {
      hints: false,
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },

    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        hash: true,
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./src/assets",
            to: "assets",
          },
        ],
      }),
    ],
  };
};
