module.exports =  {
  parser:  "@typescript-eslint/parser",
  extends:  [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    'plugin:prettier/recommended',
  ],
  plugins: ["import", "react"],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  "module",
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
