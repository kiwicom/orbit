// @noflow

module.exports = {
  "*.{js?(x),js?(x).flow,ts?(x)}": "eslint --fix --report-unused-disable-directives",
  "*.{md,json,yaml,yml}": "prettier --write",
  "*.mdx": "eslint --fix --report-unused-disable-directives",
  "**/!(snippets)/*.mdx": "remark -q -u validate-links --no-config",
  "packages/orbit-components/**/*.svg": "yarn components check:icons",
  ".browserslistrc": () => ["yarn update-supported-browsers"],
  "**/__examples__/**/*.js?(x)": () => ["yarn components build:examples"],
};
