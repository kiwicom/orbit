module.exports = {
  extends: "../../.eslintrc.js",
  overrides: [
    {
      files: ["tsup.config.cjs"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
