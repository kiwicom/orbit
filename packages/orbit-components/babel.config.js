// @noflow

module.exports = {
  presets: [
    [require.resolve("@babel/preset-env"), { bugfixes: true }],
    [require.resolve("@babel/preset-react"), { runtime: "classic" }],
    require.resolve("@babel/preset-flow"),
  ],
  plugins: [
    require.resolve("babel-plugin-styled-components"),
    require.resolve("@babel/plugin-proposal-class-properties"),
    // the private methods plugin is needed for Storybook build to succeed
    // https://github.com/storybookjs/storybook/issues/12093#issuecomment-675123136
    require.resolve("@babel/plugin-proposal-private-methods"),
    require.resolve("@babel/plugin-proposal-object-rest-spread"),
    require.resolve("@babel/plugin-proposal-nullish-coalescing-operator"),
    require.resolve("@babel/plugin-transform-runtime"),
    require.resolve("@adeira/babel-preset-adeira/src/adeira-js-warning"),
    require.resolve("@adeira/babel-preset-adeira/src/adeira-js-invariant"),
  ],
  env: {
    esm: {
      presets: [[require.resolve("@babel/preset-env"), { modules: false, bugfixes: true }]],
      plugins: [
        require.resolve("babel-plugin-styled-components"),
        [require.resolve("@babel/plugin-transform-runtime"), { useESModules: true }],
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
