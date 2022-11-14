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
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], ["parent", "sibling"], "index"],
        pathGroups: [
          { pattern: "@kiwicom/**", group: "external" },
          { pattern: "eslint-plugin-orbit-components", group: "external" },
        ],
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
      files: ["*.js?(x)", "*.js?(x).flow"],
      extends: ["plugin:flowtype/recommended", "prettier"],
      rules: {
        "flowtype/require-exact-type": "error",
        "react/default-props-match-prop-types": "off", // Conflict between Flow and ESLint
      },
    },
    {
      files: ["packages/orbit-components/{src,es,lib}/**/*.js?(x)", "*.js?(x).flow"],
      rules: {
        "flowtype/require-valid-file-annotation": ["error", "always"],
      },
    },
    {
      files: ["packages/orbit-components/src/**/*.ts?(x)"],
      rules: {
        "@typescript-eslint/consistent-type-imports": "error",
      },
    },
    {
      files: ["*.ts?(x)", "*.mts"],
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
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
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
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["packages/orbit-components/src/**/*", "docs/src/**/*", "packages/orbit-themer/**/*"],
      env: {
        browser: true,
      },
    },
    {
      files: "docs/**",
      rules: {
        // these make sense for libraries, but not documentation
        "global-require": "off",
        camelcase: "off",
        "no-console": ["error", { allow: ["warn", "error", "info", "table"] }],
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
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
        ComponentStructure: false,
        Do: false,
        Dont: false,
        DoImage: false,
        DontImage: false,
        FancyLink: false,
        FigmaFile: false,
        FigmaIframe: false,
        GitHubContributors: false,
        GuidelineImages: false,
        Guideline: false,
        GuidelinesSideBySide: false,
        ImageContainer: false,
        InlineToken: false,
        ReactExample: false,
        Usage: false,
        UsageUse: false,
        UsageDontUse: false,
      },
    },
    // some ESLint rules fail in certain cases, so we're disabling them
    {
      files: ["packages/orbit-components/src/utils/**/*"],
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
      },
    },
    {
      files: ["packages/orbit-components/scripts/*"],
      rules: {
        "no-console": "off",
        "no-restricted-syntax": "off",
      },
    },
    {
      files: ["packages/orbit-tracking/src/**/*", "packages/orbit-components/config/**/*"],
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-restricted-syntax": "off",
        "guard-for-in": "off",
        "no-console": "off",
        "import/extensions": "off",
      },
    },
    {
      files: ["packages/eslint-plugin-orbit-components/src/**"],
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
      },
    },
    {
      files: "**/__examples__/**/*.*",
      rules: {
        "import/no-useless-path-segments": ["error", { noUselessIndex: false }],
      },
    },
    {
      files: ["*.stories.*", "**/__examples__/**", "*.test.*"],
      rules: {
        "orbit-components/unique-id": "off",
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
    {
      files: "docs/plugins/**",
      rules: {
        "import/no-extraneous-dependencies": ["error", { packageDir: `${__dirname}/docs` }],
      },
    },
  ],
};
