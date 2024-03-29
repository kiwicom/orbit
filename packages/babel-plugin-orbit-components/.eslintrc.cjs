const path = require("path");

module.exports = {
  extends: "../../.eslintrc.cjs",
  overrides: [
    {
      files: ["__tests__/*.test.js"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { packageDir: [__dirname, path.resolve(__dirname, "../../")] },
        ],
      },
    },
  ],
};
