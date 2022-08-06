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
    extensions: [".js", ".jsx", ".ts", ".tsx", ".mts"],
  },

  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/, /\.m?js$/, /\.mts$/],
        resolve: {
          fullySpecified: false,
        },
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            presets: ["@babel/preset-typescript"],
          },
        },
      },
    ],
  },

  externals: {
    react: "React",
    "react-dom": "reactDOM",
  },
};
