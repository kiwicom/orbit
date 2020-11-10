// @flow
const { defineTest } = require("jscodeshift/dist/testUtils");

defineTest(__dirname, "Stack-spacing", null, null, { parser: "flow" });
defineTest(__dirname, "Stack-spacing", null, null, { parser: "tsx" });
