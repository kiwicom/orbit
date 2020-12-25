// @flow
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester({
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2016,
  },
});

export default ruleTester;
