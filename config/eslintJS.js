// @noflow
module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: "babel-eslint",
  extends: [
    "./eslintCommon.js",
    "airbnb",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
  ],
  plugins: ["flowtype", "eslint-plugin-adeira", ],
  rules: {
    "flowtype/require-exact-type": "error",
    "react/jsx-no-bind": "error",
    "react/default-props-match-prop-types": "off", // Conflict between Flow and ESLint
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }], // Don't use jsx
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": ["error", "syntax"],
    "jsx-a11y/label-has-for": "off", // control is wrapped in a label
    "jsx-a11y/href-no-hash": "off", // broken rule
    "flowtype/require-valid-file-annotation": ["error", "always"],
    "jsx-a11y/label-has-associated-control": "off",
    "adeira/no-internal-flow-type": "error",
  },
};
