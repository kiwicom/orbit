// @noflow

module.exports = {
  presets: [
    [require.resolve("@babel/preset-env"), { loose: true, bugfixes: true }],
    [require.resolve("@babel/preset-react"), { runtime: "classic" }],
    require.resolve("@babel/preset-flow"),
  ],
  plugins: [
    require.resolve("babel-plugin-styled-components"),
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    [
      "@babel/plugin-proposal-private-methods",
      {
        loose: true,
      },
    ],
    require.resolve("@babel/plugin-proposal-object-rest-spread"),
    require.resolve("@babel/plugin-proposal-nullish-coalescing-operator"),
    [
      require.resolve("@babel/plugin-transform-runtime"),
      { version: require("@babel/runtime/package.json").version },
    ],
    require.resolve("@adeira/babel-preset-adeira/src/adeira-js-warning"),
    require.resolve("@adeira/babel-preset-adeira/src/adeira-js-invariant"),
  ],
  env: {
    esm: {
      presets: [[require.resolve("@babel/preset-env"), { modules: false, bugfixes: true }]],
      plugins: [
        require.resolve("babel-plugin-styled-components"),
        [
          require.resolve("@babel/plugin-transform-runtime"),
          { useESModules: true, version: require("@babel/runtime/package.json").version },
        ],
      ],
    },
    test: {
      plugins: [
        require.resolve("babel-plugin-styled-components"),
        require.resolve("babel-plugin-require-context-hook"),
      ],
    },
  },
};
