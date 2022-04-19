// @noflow
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
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.*",
          "**/__tests__/**",
          "**/__testfixtures__/**",
          "**/__examples__/**",
          "**/cypress/**",
          "**/*.stories.*",
          "**/*.config.*",
          "**/stories/**",
          "**/tasks/**",
          "docs/**",
          "packages/eslint-plugin-orbit-components/**",
          "packages/orbit-design-tokens/src/**",
          "packages/*/.storybook/**",
          "**/config/**",
          "**/scripts/**",
          "gulpfile.js",
          "**/.remarkrc.js",
          "**/.size-limit.js",
        ],
      },
    ],
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
  },
  overrides: [
    {
      files: ["*.js?(x)", "*.js?(x).flow"],
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
        project: [
          "./tsconfig.json",
          "./docs/tsconfig.json",
          "./packages/orbit-components/cypress/tsconfig.json",
          "./packages/orbit-tracking/tsconfig.json",
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
      files: "packages/orbit-design-tokens/**/*",
      rules: {
        // we're not using Flow in orbit-design-tokens
        "flowtype/require-valid-file-annotation": "off",
        "import/no-extraneous-dependencies": "off",
        // if we stick to pure functions readonly is not needed
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
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
      files: ["packages/orbit-components/transforms/**/*"],
      rules: {
        "orbit-components/no-deprecated-token": "off",
      },
    },
    {
      files: ["packages/orbit-tracking/src/**/*"],
      rules: {
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-restricted-syntax": "off",
        "guard-for-in": "off",
        "no-console": "off",
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
      files: [
        "packages/orbit-components/{src,es,lib}/**/*.js?(x)",
        "packages/orbit-design-tokens/{src,es,lib}/**/*.js?(x)",
        "*.js?(x).flow",
      ],
      rules: {
        "flowtype/require-valid-file-annotation": ["error", "always"],
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
