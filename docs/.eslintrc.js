// adding an ESLint config disables Gatbsy's built-in eslint-loader
// https://www.gatsbyjs.com/docs/eslint/#disabling-eslint
module.exports = {
  rules: {
    "import/no-extraneous-dependencies": ["error", { packageDir: [__dirname, `${__dirname}/..`] }],
  },
};
