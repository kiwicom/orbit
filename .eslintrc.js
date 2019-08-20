module.exports = {
  root: true,
  extends: ['@kiwicom/eslint-config'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true
  },
  rules: {
    "no-unused-vars": "off",
    "react/no-access-state-in-setstate": "off",
    "prefer-named-capture-group": "off",
    "jest/no-identical-title": "off",
    "jest/no-standalone-expect": "off",
    "jest/prefer-called-with": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-cycle": "off",
  }
};
