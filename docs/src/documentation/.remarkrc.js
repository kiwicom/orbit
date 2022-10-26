exports.plugins = [
  ...require("../../../.remarkrc").plugins,
  ["lint-first-heading-level", ["off"]],
  ["lint-no-heading-punctuation", ["off"]],
  ["lint-no-duplicate-headings", ["off"]],
  ["lint-maximum-heading-length", ["off"]],
];
