// @noflow

module.exports = {
  "*.{js,js.flow,jsx,jsx.flow,ts}": "eslint --fix --report-unused-disable-directives",
  "*.{md,json,yaml,yml}": "prettier --write",
  "*.mdx": "eslint --fix --report-unused-disable-directives",
  "**/!(snippets)/*.mdx": "remark -q -u validate-links --no-config",
  "packages/orbit-components/**/*.svg": "yarn components check:icons",
  ".browserslistrc": () => ["yarn update-supported-browsers"],
  "**/__examples__/**/*.{js,jsx}": () => ["yarn components build:examples"],
};
