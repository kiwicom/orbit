exports.plugins = [
  [require("remark-frontmatter"), ["yaml"]],
  [require("remark-lint-first-heading-level"), 2],
  require("remark-preset-lint-markdown-style-guide"),
  // it only supports one extension, but we need both "md" and "mdx"
  [require("remark-lint-file-extension"), false],
  require("remark-preset-lint-recommended"),
  require("remark-preset-prettier"),
];
