module.exports = {
  presets: [
    [
      require.resolve("babel-preset-gatsby"),
      {
        reactRuntime: "automatic",
        jsxRuntime: "automatic",
      },
    ],
    [
      require.resolve("@babel/preset-typescript"),
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  plugins: [
    "@kiwicom/babel-plugin-orbit-components",
    require.resolve("babel-plugin-styled-components"),
    [
      require.resolve("babel-plugin-inline-react-svg"),
      {
        svgo: {
          // keep IDs as-is, so that there are no duplicates
          plugins: [{ cleanupIDs: false }],
        },
      },
    ],
  ],
};
