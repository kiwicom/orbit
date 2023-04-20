exports.plugins = [
  ...require("../../.remarkrc").plugins,
  ["lint-first-heading-level", ["off"], ["max-line-heading-length", ["off"]]],
];
