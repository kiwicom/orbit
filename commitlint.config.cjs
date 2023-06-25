const fg = require("fast-glob");

function fetchComponentDirs() {
  function filterOut(result, dirent) {
    const name = dirent.split("/").pop();

    if (name[0] === name[0].toUpperCase() || name.startsWith("use")) {
      return [...result, name];
    }

    return result;
  }

  const dirs = fg.sync("./packages/orbit-components/src/**/*", {
    onlyDirectories: true,
    absolute: false,
    ignore: [
      "**/__tests__/",
      "**/__test__/",
      "**/__snapshots__/",
      "**/__fixtures__/",
      "**/__generated__/",
      "**/__stories__/",
      "**/__typetests__/",
      "**/utils/",
      "**/data/",
      "**/common/",
      "**/helpers/",
    ],
  });

  const whiteListedDirs = [
    "tokens",
    "docs",
    "hooks",
    "eslint-plugin",
    "babel-plugin",
    "themer",
    "examples",
    "icons",
    "tracking",
    "tailwind",
    "icons",
  ];

  return dirs.reduce(filterOut, whiteListedDirs);
}

module.exports = {
  extends: [require.resolve("@commitlint/config-conventional")],
  rules: {
    "scope-case": [0],
    "scope-enum": [2, "always", fetchComponentDirs()],
    "footer-max-line-length": [2, "always", 150],
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
