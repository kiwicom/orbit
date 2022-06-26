// @noflow

module.exports = {
  "*.{js?(x),js?(x).flow,ts?(x)}": "eslint --fix --report-unused-disable-directives",
  "*.{md,json,yaml,yml}": "prettier --write",
  "*.mdx": "eslint --fix --report-unused-disable-directives",
  "**/!(snippets)/*.mdx": "remark -q -u validate-links --no-config",
  "packages/orbit-components/**/*.svg": "pnpm nx check:icons @kiwicom/orbit-components",
  ".browserslistrc": () => ["pnpm update-supported-browsers"],
};
