module.exports = {
  root: true,
  overrides: [
    {
      files: '*.{js,js.flow}',
      extends: ['./config/eslintJS'],
    },
    {
      files: '*.ts',
      extends: ['./config/eslintTS'],
    },
  ],
};
