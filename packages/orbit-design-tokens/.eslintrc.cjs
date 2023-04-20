module.exports = {
  extends: "../../.eslintrc.js",
  overrides: [
    {
      files: ["./src/**", "./scripts/**"],
      rules: {
        "import/no-useless-path-segments": "off",
        "import/extensions": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
