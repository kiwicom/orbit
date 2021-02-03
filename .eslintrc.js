// @noflow
const path = require("path");

module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  extends: [
    "airbnb",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:orbit-internal/recommended",
    "prettier/react",
  ],
  plugins: ["babel"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-unused-expressions": "off",
    "babel/no-unused-expressions": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: [
          __dirname,
          path.join(__dirname, "packages/babel-plugin-orbit-components"),
          path.join(__dirname, "packages/eslint-plugin-orbit-components"),
          path.join(__dirname, "packages/eslint-plugin-orbit-internal"),
          path.join(__dirname, "packages/orbit-components"),
          path.join(__dirname, "packages/orbit-design-tokens"),
          path.join(__dirname, "docs"),
        ],
        devDependencies: [
          "**/*.test.js",
          "**/__tests__/**",
          "**/__testfixtures__/**",
          "**/*.stories.js",
          "**/*.config.js",
          "**/stories/**",
          "**/tasks/**",
          "docs/**",
          "packages/eslint-plugin-orbit-internal/**",
          "packages/*/.storybook/**",
          "**/config/**",
          "**/scripts/**",
          "gulpfile.js",
        ],
      },
    ],
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], ["parent", "sibling"], "index"],
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
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }], // Don't use jsx
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
  },
  overrides: [
    {
      files: ["*.js", "*.js.flow"],
      extends: ["plugin:flowtype/recommended", "prettier/flowtype"],
      plugins: ["adeira"],
      rules: {
        "flowtype/require-exact-type": "error",
        "react/default-props-match-prop-types": "off", // Conflict between Flow and ESLint
        "flowtype/require-valid-file-annotation": ["error", "always"],
        "adeira/no-internal-flow-type": "error",
      },
    },
    {
      files: "*.ts?(x)",
      extends: [
        // disables core ESLint rules which are handled by TypeScript
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
      ],
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2018,
        sourceType: "module",
      },
      settings: {
        "import/resolver": {
          node: {
            extensions: [".d.ts", ".ts", ".tsx"],
          },
        },
      },
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "error",
        "@typescript-eslint/no-empty-function": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "babel/no-unused-expressions": "off",
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
      },
    },
    {
      files: "*.d.ts",
      rules: {
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
      files: ["packages/orbit-components/src/**/*", "docs/src/**/*"],
      env: {
        browser: true,
      },
    },
    {
      files: "docs/**",
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
      files: "**/__testfixtures__/**",
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    // some ESLint rules fail in certain cases, so we're disabling them
    {
      files: ["packages/orbit-components/src/utils/**/*"],
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "OFF",
      },
    },
    {
      files: ["packages/eslint-plugin-orbit-internal/src/**"],
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["*.stories.js", "**/__examples__/**", "*.test.js"],
      rules: {
        "orbit-internal/unique-id": "off",
      },
    },
  ],
};
