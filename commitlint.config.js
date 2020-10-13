// @flow
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-case": [2, "always", "pascal-case"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "improve",
      ],
    ],
  },
};
