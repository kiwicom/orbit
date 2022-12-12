// @noflow

module.exports = {
  "*.{js,flow,ts,tsx}": "eslint --fix --report-unused-disable-directives",
  "*.{md,json,yaml,yml}": "prettier --write",
  "*.mdx": "eslint --fix --report-unused-disable-directives",
  "**/!(snippets)/*.mdx": "remark -q -u validate-links --no-config",
  ".browserslistrc": () => ["yarn update-supported-browsers"],
};
