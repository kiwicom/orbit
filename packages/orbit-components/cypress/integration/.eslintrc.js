module.exports = {
  settings: {
    // one way to get import/no-extraneous-dependencies to stop complaining
    "import/internal-regex": "@kiwicom/orbit-components",
  },
  rules: {
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-expressions": "off",
  },
};
