import { RuleTester } from "@typescript-eslint/rule-tester";
import path from "path";
import filedirname from "filedirname";

const [_, __dirname] = filedirname();

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: path.resolve(__dirname, "__fixtures__"),
    project: path.resolve(__dirname, "..", "tsconfig.json"),
  },
});

export default ruleTester;
