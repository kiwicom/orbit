// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const babelOptions = {
  presets: [
    "@babel/react",
    "@babel/flow",
    [
      "@babel/env",
      { modules: false, targets: { browsers: ["last 2 versions", "ie >= 11", "Edge >= 38"] } },
    ],
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "babel-plugin-styled-components",
  ],
  babelrc: false,
};

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.js?$/,
    use: [
      {
        options: babelOptions,
        loader: "babel-loader",
      },
    ],
    exclude: /node_modules\/(?!(loki)\/).*/, // Loki is not transpilled, throws error in IE 11
  });

  return config;
};
