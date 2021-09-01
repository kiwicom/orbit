module.exports = {
  overrides: [
    {
      files: "cypress/**",
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-expressions": "off",
      },
    },
  ],
};
