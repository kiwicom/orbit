// @noflow

module.exports = {
  "*.{js,flow,ts,tsx}": "eslint --fix --report-unused-disable-directives",
  "*.{md,json,yaml,yml}": "prettier --write",
  "*.mdx": "eslint --fix --report-unused-disable-directives",
  "**/!(snippets)/*.mdx": "remark -q -u validate-links --no-config",
  "packages/orbit-components/**/*.svg": "yarn components check:icons",
  ".browserslistrc": () => ["yarn update-supported-browsers"],
};
