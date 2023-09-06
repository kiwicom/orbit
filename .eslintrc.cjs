const { DEV_DEPENDENCIES } = require("./utils/eslint");

const CONFIGS = [
  "airbnb",
  "plugin:react-hooks/recommended",
  "plugin:prettier/recommended",
  "plugin:tailwindcss/recommended",
];

module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  extends: CONFIGS,
  plugins: ["@babel"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-unused-expressions": "off",
    "@babel/no-unused-expressions": "error",
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], ["parent", "sibling"], "index"],
        pathGroups: [{ pattern: "@kiwicom/**", group: "external" }],
        "newlines-between": "always",
      },
    ],
    "import/newline-after-import": "error",
    "import/no-mutable-exports": "error",
    "import/no-absolute-path": "error",
    "import/no-cycle": ["error", { maxDepth: 1 }],
    "import/prefer-default-export": "off",
    "react/jsx-no-bind": "error",
    "react/no-multi-comp": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off", // Optional props can be undefined.
    "react/jsx-filename-extension": ["error", { extensions: [".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": ["error", "syntax"],
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "jsx-a11y/label-has-for": "off", // control is wrapped in a label
    "jsx-a11y/href-no-hash": "off", // broken rule
    "import/no-self-import": "off",
    "react/destructuring-assignment": "off",
    "react/no-access-state-in-setstate": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-await-in-loop": "off",
    "tailwindcss/classnames-order": "off",
    "tailwindcss/no-custom-classname": [1, { whitelist: ["(orbit\\-).*"] }],
    ...(!process.env.CI
      ? {
          "import/no-named-as-default": "off",
          "import/no-cycle": "off",
          "import/no-unused-modules": "off",
          "import/no-deprecated": "off",
        }
      : null),
  },
  overrides: [
    {
      files: DEV_DEPENDENCIES,
      rules: {
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      },
    },
    {
      files: ["*.ts?(x)", "*.mts", "*.d.ts"],
      extends: [
        // disables core ESLint rules which are handled by TypeScript
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      parserOptions: {
        extraFileExtensions: [".mts"],
        tsconfigRootDir: __dirname,
        project: [
          "./tsconfig.scripts.json",
          "./tsconfig.json",
          "./packages/*/tsconfig.json",
          "./packages/*/scripts/tsconfig.json",
          "./packages/orbit-components/.storybook/tsconfig.json",
          "./docs/tsconfig.json",
          "./packages/orbit-components/cypress/tsconfig.json",
        ],
        ecmaVersion: 2020,
        sourceType: "module",
      },
      settings: {
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            varsIgnorePattern: "^_",
          },
        ],
        "no-restricted-exports": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@babel/no-unused-expressions": "off",
        "react/function-component-definition": "off",
        "react/no-unknown-property": ["error", { ignore: ["css"] }],
        "@typescript-eslint/no-unused-expressions": "error",
        "no-use-before-define": "off", // disable conflicting rule
        "@typescript-eslint/no-use-before-define": "error",
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
          },
        ],
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
        "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
        "import/named": "off",
        "import/namespace": "off",
        "import/no-unresolved": "error",
        "import/default": "off",
        "import/no-named-as-default-member": "off",
      },
    },
    {
      files: [
        // React components
        "**/[A-Z]*.ts?(x)",
        "**/[A-Z]*/index.ts?(x)",
        "**/__typetests__/**",
        "**/__testfixtures__/**",
      ],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: "*.d.ts",
      rules: {
        "no-undef": "error",
        "react/prefer-stateless-function": "off",
      },
    },
    {
      files: ["**/__tests__/**", "*.test.*", "test-utils.*"],
      env: {
        jest: true,
        browser: true,
      },
      plugins: ["jest"],
      rules: {
        "global-require": "off",
        "jest/no-identical-title": "error",
        "jest/no-standalone-expect": "error",
        "jest/no-if": "error",
        "jest/consistent-test-it": "warn",
        "jest/no-focused-tests": "error",
        "react/no-unstable-nested-components": "off",
      },
    },
    {
      files: "**/config/**",
      globals: {
        argv: false,
      },
      rules: {
        "no-restricted-syntax": "off",
        "no-console": "off",
      },
    },
    {
      files: ["**/*.config.js", "**/.remarkrc.js"],
      rules: {
        "global-require": "off",
      },
    },
  ],
};
