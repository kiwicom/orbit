module.exports = {
  root: true,
  overrides: [
    {
      files: '*.js',
      extends: ['./config/eslintJS'],
    },
    {
      files: '*.ts',
      extends: ['./config/eslintTS'],
    },
  ],
};
