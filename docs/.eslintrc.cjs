const path = require("path");

module.exports = {
  extends: ["../.eslintrc.cjs"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      { packageDir: [__dirname, path.resolve(__dirname, "../")] },
    ],
    "global-require": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["warn", "error", "info", "table"] }],
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-duplicate-enum-values": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    {
      files: "*.mdx",
      extends: ["plugin:mdx/recommended"],
      rules: {
        "react/jsx-filename-extension": ["error", { extensions: [".mdx"] }],
        "mdx/no-unescaped-entities": "off",
        "remark-lint-maximum-heading-length": "off",
        "react/function-component-definition": "off",
        "react/no-unescaped-entities": "off",
        "@babel/no-unused-expressions": "off",
        "react/self-closing-comp": "off",
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
            map: [["snippets", `${__dirname}/src/snippets`]],
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
        Container: false,
        Grid: false,
        UsageDontUse: false,
      },
    },
    {
      files: "src/**",
      env: {
        browser: true,
      },
    },
    {
      files: "./src/snippets/*",
      globals: {
        // Ignore props being marked as undefined
        props: false,
      },
      rules: {
        "no-unused-expressions": "off",
        "jsx-a11y/heading-has-content": "off",
        "jsx-a11y/anchor-has-content": "off",
        "react/jsx-no-useless-fragment": "off",
      },
    },
    {
      files: ["plugins/**", "services/**"],
      rules: {
        "import/no-relative-packages": "off",
      },
    },
    {
      files: "**/__examples__/**/*.*",
      rules: {
        "import/no-useless-path-segments": ["error", { noUselessIndex: false }],
        "react/no-unstable-nested-components": "off",
      },
    },
  ],
};
