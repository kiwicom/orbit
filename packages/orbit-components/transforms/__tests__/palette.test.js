// @flow
const { defineTest } = require("jscodeshift/dist/testUtils");

defineTest(__dirname, "palette", null, null, { parser: "flow" });
defineTest(__dirname, "palette", null, null, { parser: "tsx" });
