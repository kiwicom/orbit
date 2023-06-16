import { RuleTester } from "eslint";

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    babelOptions: {
      configFile: require.resolve("../babel.config.cjs"),
      presets: ["@babel/preset-react", "@babel/preset-env"],
    },
  },
});

export default ruleTester;
