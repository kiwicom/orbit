import webpack from "webpack";

export default ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({ Buffer: ["buffer", "Buffer"] }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ],
    resolve: {
      extensions: [".ts", ".tsx"],
      fallback: {
        path: require.resolve("path-browserify"),
        fs: require.resolve("browserify-fs"),
        buffer: require.resolve("buffer"),
        stream: require.resolve("stream-browserify"),
      },
    },
  });
};
