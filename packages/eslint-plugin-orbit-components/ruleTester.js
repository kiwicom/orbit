// @flow
// tried to add it to global config, did not work, not sure why, left for now like that
// eslint-disable-next-line import/no-extraneous-dependencies
import { RuleTester } from "eslint";

const ruleTester = new RuleTester({
  parser: require.resolve("babel-eslint"),
  parserOptions: {
    ecmaVersion: 2018,
  },
});

export default ruleTester;
