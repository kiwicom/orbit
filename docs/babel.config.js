module.exports = {
  presets: ["gatsby", "@babel/preset-typescript"],
  plugins: [
    "styled-components",
    "@loadable/babel-plugin",
    [
      "inline-react-svg",
      {
        svgo: {
          // keep IDs as-is, so that there are no duplicates
          plugins: [{ cleanupIDs: false }],
        },
      },
    ],
  ],
};
