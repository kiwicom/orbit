const { DEV_DEPENDENCIES } = require("../../utils/eslint");

module.exports = {
  overrides: [
    {
      files: [
        ...DEV_DEPENDENCIES,
        "./utils/**",
        "./cypress/**",
        "**/*.stories.*",
        "./.storybook/**",
      ],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { packageDir: [__dirname, `${__dirname}/../..`] },
        ],
      },
    },
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
