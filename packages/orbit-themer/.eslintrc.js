module.exports = {
  extends: ["../../.eslintrc.js"],
  overrides: [
    {
      files: ["**/*"],
      env: {
        browser: true,
      },
    },
  ],
};
