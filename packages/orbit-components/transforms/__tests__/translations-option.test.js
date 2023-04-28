// @flow
const { defineTest } = require("jscodeshift/dist/testUtils");

defineTest(__dirname, "translations-new", { withImport: false }, "translations-option", {
  parser: "tsx",
});
