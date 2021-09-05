// @flow
const { defineTest } = require("jscodeshift/dist/testUtils");

defineTest(__dirname, "inkLighter", null, null, { parser: "flow" });
defineTest(__dirname, "inkLighter", null, null, { parser: "tsx" });
