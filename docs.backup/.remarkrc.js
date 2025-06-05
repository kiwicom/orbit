exports.plugins = [
  [require("remark-frontmatter"), ["yaml"]],
  [require("remark-lint-first-heading-level"), 2],
  require("remark-preset-lint-markdown-style-guide"),
  require("remark-preset-lint-recommended"),
  require("remark-preset-prettier"),
];
