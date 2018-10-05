const path = require("path");

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules =[
    ...storybookBaseConfig.module.rules,
    {
      test: /\.(js|jsx|mjs)$/,
      exclude: [/node_modules/],
      loader: require.resolve('babel-loader'),
      options: {
        babelrc: false,
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
    },
    {
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: "url-loader",
        options: { name: "[name].[ext]" }
      }
    }
  ];

  return storybookBaseConfig;
};