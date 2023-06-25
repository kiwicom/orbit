module.exports = {
  "*.{js,flow,ts,tsx}": "nx affected --target check:lint --uncommitted",
  "*.{ts,tsx,d.ts}": () => "nx affected --target check:types --uncommitted",
  "*.{md,json,yaml,yml}": "nx format:write --uncommitted",
  "*.mdx": "eslint --report-unused-disable-directives",
  "**/!(snippets)/*.mdx": "remark -q -u validate-links --no-config",
  ".browserslistrc": () => ["yarn update-supported-browsers"],
};
