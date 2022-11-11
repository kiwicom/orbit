module.exports = {
  rules: {
    // jscodeshift testing utility only supports .js extension
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".tsx"] }],
  },
  overrides: [
    {
      files: "__testfixtures__/**",
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
