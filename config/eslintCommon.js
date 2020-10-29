// @noflow
const path = require("path");

module.exports = {
  extends: ["prettier/react"],
  plugins: ["import", "prettier", "jest", "react-hooks", "plugin:react/recommended"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: [
          path.join(__dirname, "../"),
          path.join(__dirname, "../packages/babel-plugin-orbit-components"),
          path.join(__dirname, "../packages/orbit-components"),
        ],
        devDependencies: [
          "**/*.test.js",
          "**/__tests__/**",
          "**/*.spec.js",
          "**/*.stories.js",
          "**/*.config.js",
          "**/stories/**",
          "packages/*/.storybook/**",
          "packages/*/config/**",
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
    "react/no-multi-comp": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off", // Optional props can be undefined.
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "import/no-self-import": "off",
    "react/destructuring-assignment": "off",
    "react/no-access-state-in-setstate": "off",
    "no-await-in-loop": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jest/no-identical-title": "error",
    "jest/no-standalone-expect": "error",
    "jest/no-if": "error",
    "jest/consistent-test-it": "warn",
    "jest/no-focused-tests": "error",
  },
};
