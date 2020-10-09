// @flow

const ERROR = 0;

module.exports = {
  rules: {
    "import/no-extraneous-dependencies": [
      ERROR,
      {
        devDependencies: ["/scripts/*.js"],
      },
    ],
  },
};
