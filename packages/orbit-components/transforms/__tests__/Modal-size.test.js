// @flow
const { defineTest } = require("jscodeshift/dist/testUtils");

defineTest(__dirname, "Modal-size", null, null, { parser: "flow" });
defineTest(__dirname, "Modal-size", null, null, { parser: "tsx" });
