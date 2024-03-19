const path = require("path");
const orbitPreset = require("@kiwicom/orbit-tailwind-preset");

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
  settings: {
    tailwindcss: {
      config: orbitPreset(),
    },
  },
  overrides: [
    {
      files: ["cypress/**/*.ts?(x)", "config/**/*.mts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    // TODO: temporary disabled because of the issue: https://github.com/typescript-eslint/typescript-eslint/issues/4608
    {
      files: ["src/**/*.ts?(x)"],
      rules: {
        "@typescript-eslint/consistent-type-imports": "warn",
        "tailwindcss/no-custom-classname": ["error", { whitelist: ["(orbit\\-).*"] }],
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
      files: ["src/**/*.test.ts?(x)", "src/test-utils.tsx"],
      rules: {
        "orbit-components/unique-id": "off",
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
        "import/no-extraneous-dependencies": [
          "error",
          {
            packageDir: [__dirname, path.resolve(__dirname, "../../")],
          },
        ],
      },
    },
  ],
};
