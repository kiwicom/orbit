// @noflow
module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: "*.js",
      extends: ["./config/eslintJS"],
    },
    {
      files: "*.js.flow",
      extends: ["./config/eslintJS"],
    },
    {
      files: "*.ts",
      extends: ["./config/eslintTS"],
    },
  ],
};
