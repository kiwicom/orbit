// @noflow
module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
  ],
  plugins: ["import", "flowtype", "prettier", "jest", "react-hooks"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.js",
          "**/__tests__/**",
          "**/*.spec.js",
          "**/*.stories.js",
          "**/*.config.js",
          "**/stories/**",
          "packages/*/.storybook/**",
          "packages/*/config/**",
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
    "react/default-props-match-prop-types": "off", // Conflict between Flow and ESLint
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }], // Don't use jsx
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": ["error", "syntax"],
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "jsx-a11y/label-has-for": "off", // control is wrapped in a label
    "jsx-a11y/href-no-hash": "off", // broken rule
    "flowtype/require-valid-file-annotation": ["error", "always"],
    "import/no-self-import": "off",
    "react/destructuring-assignment": "off",
    "react/no-access-state-in-setstate": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-await-in-loop": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
