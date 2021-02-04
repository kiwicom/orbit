import { RuleTester } from "eslint";

const ruleTester = new RuleTester({
  parser: require.resolve("babel-eslint"),
  parserOptions: {
    ecmaVersion: 2018,
  },
});

export default ruleTester;
