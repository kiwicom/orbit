module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [require.resolve("@babel/preset-react"), { runtime: "classic" }],
  ],
};
