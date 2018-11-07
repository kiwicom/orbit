// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
module.exports = {
  resolve: {
    extensions: [".js", ".json"],
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: require.resolve('babel-loader'),
      // use: "babel-loader",
      exclude: /node_modules/,
      options: {
        // babelrc: false,
        presets: ['react-app'],
        plugins: [
          [
            "module-resolver",
            {
              "alias": {
                "react-native": "./node_modules/react-native-web",
              }
            }
          ]
        ],
        cacheDirectory: true,
      },
    }]
  }
};
