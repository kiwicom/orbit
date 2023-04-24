module.exports = {
  extends: "../../.eslintrc.js",
  overrides: [
    {
      files: ["**/*"],
      env: {
        browser: true,
      },
      rules: {
        "import/no-extraneous-dependencies": "off",
        "no-restricted-syntax": "off",
      },
    },
  ],
};
