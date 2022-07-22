// adding an ESLint config disables Gatbsy's built-in eslint-loader
module.exports = {
  rules: {
    "import/no-extraneous-dependencies": ["error", { packageDir: [__dirname, `${__dirname}/..`] }],
  },
};
