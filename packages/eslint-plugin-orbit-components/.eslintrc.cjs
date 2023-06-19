const { DEV_DEPENDENCIES } = require("../../utils/eslint");

module.exports = {
  extends: ["../../.eslintrc.cjs"],
  overrides: [
    {
      files: DEV_DEPENDENCIES,
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { packageDir: [__dirname, `${__dirname}/../..`] },
        ],
      },
    },
  ],
};
