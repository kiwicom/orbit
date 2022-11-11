module.exports = {
  presets: [
    [require.resolve("@babel/preset-env"), { bugfixes: true, loose: true }],
    [require.resolve("@babel/preset-react"), { runtime: "classic" }],
    [require.resolve("@babel/preset-typescript"), { isTSX: true, allExtensions: true }],
  ],
  plugins: [
    require.resolve("babel-plugin-styled-components"),
    require.resolve("@adeira/babel-preset-adeira/src/adeira-js-warning"),
    require.resolve("@adeira/babel-preset-adeira/src/adeira-js-invariant"),
    [
      require.resolve("@babel/plugin-transform-runtime"),
      { version: require("@babel/runtime/package.json").version },
    ],
  ],
  env: {
    esm: {
      presets: [
        [require.resolve("@babel/preset-env"), { modules: false, bugfixes: true, loose: true }],
      ],
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
