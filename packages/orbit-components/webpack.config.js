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

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/, /\.m?js$/],
        resolve: {
          fullySpecified: false,
        },
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
};
