const path = require("path");

module.exports = {
  extends: ["../../.eslintrc.cjs", "plugin:storybook/recommended"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: __dirname,
      },
    ],
  },
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ["{src,es,lib}/**/*.js?(x)", "*.js?(x).flow"],
      rules: {
        "flowtype/require-valid-file-annotation": ["error", "always"],
      },
    },
    {
      files: ["src/**/*.ts?(x)"],
      rules: {
        "@typescript-eslint/consistent-type-imports": "error",
      },
    },
    {
      files: ["*.js?(x)", "*.js?(x).flow"],
      parser: "@babel/eslint-parser",
      extends: ["plugin:flowtype/recommended", "prettier"],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        requireConfigFile: false,
      },
      rules: {
        "flowtype/require-exact-type": "error",
        "react/default-props-match-prop-types": "off", // Conflict between Flow and ESLint
      },
    },
    {
      files: "*.stories.*",
      rules: {
        "orbit-components/unique-id": "off",
        "react/no-unstable-nested-components": "off",
        // TODO: remove after migration to a new actions
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["src/utils/**/*"],
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
      },
    },
    {
      files: ["scripts/*"],
      rules: {
        "no-console": "off",
        "no-restricted-syntax": "off",
      },
    },
    {
      files: ["src/**/*.test.ts?(x)"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            packageDir: [__dirname, path.resolve(__dirname, "../../")],
          },
        ],
      },
    },
    {
      files: ["config/**", ".storybook/**"],
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-restricted-syntax": "off",
        "guard-for-in": "off",
        "no-console": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
