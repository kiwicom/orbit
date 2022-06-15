module.exports = {
  presets: [require.resolve("babel-preset-gatsby")],
  plugins: [
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
