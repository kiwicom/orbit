module.exports = {
  extends: "../../.eslintrc.cjs",
  overrides: [
    {
      files: ["tsup.config.cjs", "src/**/*.ts?(x)", "config/**/*.ts?(x)"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["tailwind.config.ts"],
      rules: {
        "import/extensions": "off",
        "import/no-unresolved": "off",
      },
    },
  ],
};
