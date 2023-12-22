module.exports = {
  "*.{js,ts,tsx}": "eslint --fix --report-unused-disable-directives",
  "*.{ts,tsx,d.ts}": () => "tsc-files --noEmit",
  "*.{md,json,yaml,yml}": "prettier --write",
  "*.mdx": "eslint --report-unused-disable-directives",
  "**/!(snippets)/*.mdx": "remark -q -u validate-links --no-config",
  ".browserslistrc": () => ["yarn update-supported-browsers"],
};
