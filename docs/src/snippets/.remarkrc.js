exports.plugins = [
  ...require("../../../.remarkrc").plugins,
  [require("remark-lint-first-heading-level"), false],
];
