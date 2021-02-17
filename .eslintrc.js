// @noflow
const { DEV_DEPENDENCIES } = require("./utils/eslint");

module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  extends: [
    "airbnb",
    "plugin:react-hooks/recommended",
    "plugin:orbit-components/internal",
    "plugin:prettier/recommended",
  ],
  plugins: ["babel"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-unused-expressions": "off",
    "babel/no-unused-expressions": "error",
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: false }],
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
    // to improve performance locally
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#my-linting-feels-really-slow
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
      files: ["*.js", "*.js.flow"],
      extends: ["plugin:flowtype/recommended", "prettier"],
      plugins: ["adeira"],
      rules: {
        "flowtype/require-exact-type": "error",
        "react/default-props-match-prop-types": "off", // Conflict between Flow and ESLint
        "adeira/no-internal-flow-type": "error",
      },
    },
    {
      files: "*.ts?(x)",
      extends: [
        // disables core ESLint rules which are handled by TypeScript
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
          "./tsconfig.json",
          "./scripts/tsconfig.json",
          "./packages/*/tsconfig.json",
          "./packages/*/scripts/tsconfig.json",
          "./docs/tsconfig.json",
          "./packages/orbit-components/cypress/tsconfig.json",
        ],
        ecmaVersion: 2018,
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
        "@typescript-eslint/no-empty-interface": "off",
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
        // TypeScript has these checks
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#my-linting-feels-really-slow
        "import/named": "off",
        "import/namespace": "off",
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
        // other
        "docs/**",
      ],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
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
      files: "packages/eslint-plugin-orbit-components/**/*.ts",
      rules: {
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
        camelcase: "off",
        "no-console": ["error", { allow: ["warn", "error", "info", "table"] }],
      },
    },
    {
      files: "*.mdx",
      extends: ["plugin:mdx/recommended"],
      rules: {
        "react/jsx-filename-extension": ["error", { extensions: [".mdx"] }],
        "mdx/no-unescaped-entities": "OFF",
        "react/no-unescaped-entities": "OFF",
        "mdx/remark": "error",
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            ts: "never",
            tsx: "never",
          },
        ],
      },
      settings: {
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          alias: {
            map: [["snippets", "./docs/src/snippets"]],
          },
        },
      },
      globals: {
        // Ignore components added as shortcodes so they don't get marked as undefined
        Callout: false,
        ComponentStatus: false,
        Do: false,
        Dont: false,
        DoImage: false,
        DontImage: false,
        FancyLink: false,
        FigmaFile: false,
        GitHubContributors: false,
        GuidelineImages: false,
        Guideline: false,
        GuidelinesSideBySide: false,
        ImageContainer: false,
        InlineToken: false,
        ReactExample: false,
        FigmaIframe: false,
      },
    },
    {
      files: "**/__examples__/**/*.js",
      rules: {
        // even though we want to remove "/index" segments, there are too many in examples
        // and it would cause a lot of JSON files updates without any real gain
        "import/no-useless-path-segments": ["error", { noUselessIndex: false }],
      },
    },
    // some ESLint rules fail in certain cases, so we're disabling them
    {
      files: ["*.stories.*", "**/__examples__/**", "*.test.js"],
      rules: {
        "orbit-components/unique-id": "off",
      },
    },
    {
      files: [
        "packages/orbit-components/{src,es,lib}/**/*.js",
        "packages/orbit-design-tokens/{src,es,lib}/**/*.js",
        "*.js.flow",
      ],
      rules: {
        "flowtype/require-valid-file-annotation": ["error", "always"],
      },
    },
    {
      files: "**/scripts/**/*.ts",
      rules: {
        "no-console": "off",
        "no-restricted-syntax": "off",
      },
    },
  ],
};
