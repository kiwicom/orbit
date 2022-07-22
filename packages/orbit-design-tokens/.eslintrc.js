const { DEV_DEPENDENCIES } = require("../../utils/eslint");

module.exports = {
  overrides: [
    {
      files: [...DEV_DEPENDENCIES, "./src/theo/**/*"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { packageDir: [__dirname, `${__dirname}/../..`] },
        ],
      },
    },
  ],
};
