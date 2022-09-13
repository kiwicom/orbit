module.exports = {
  overrides: [
    {
      files: ["./src/theo/**/*", "./src/scripts/*.ts"],
      rules: {
        "import/no-useless-path-segments": "off",
        "import/extensions": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "import/no-extraneous-dependencies": [
          "error",
          { packageDir: [__dirname, `${__dirname}/../..`] },
        ],
      },
    },
  ],
};
