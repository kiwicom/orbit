module.exports = {
  extends: ["../../.eslintrc.cjs"],
  overrides: [
    {
      files: ["src/**"],
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["src/**/__tests__/**", "src/ruleTester.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
