// @noflow
module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: "*.js",
      extends: ["./config/eslintJS"],
    },
    {
      files: "*.js.flow",
      extends: ["./config/eslintJS"],
    },
    {
      files: "*.ts?(x)",
      extends: ["./config/eslintTS"],
    },
    {
      files: "**/__tests__/**",
      rules: {
        "global-require": "off",
      },
    },
    {
      files: "**/__typetests__/**",
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: "packages/eslint-plugin-orbit-components/**/*.ts?(x)",
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: "docs/**/*",
      rules: {
        // we're not using Flow in docs
        "flowtype/require-valid-file-annotation": "off",
        // these make sense for libraries, but not documentation
        "global-require": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: "packages/orbit-design-tokens/**/*",
      rules: {
        // we're not using Flow in orbit-design-tokens
        "flowtype/require-valid-file-annotation": "off",
        // if we stick to pure functions readonly is not needed
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
      },
    },
    // some ESLint rules fail in certain cases, so we're disabling them
    {
      files: ["packages/orbit-components/src/utils/**/*"],
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "OFF",
      },
    },
  ],
};
