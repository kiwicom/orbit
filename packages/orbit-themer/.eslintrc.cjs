module.exports = {
  extends: "../../.eslintrc.cjs",
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
