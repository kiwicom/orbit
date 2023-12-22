const { defineTest } = require("jscodeshift/dist/testUtils");

defineTest(__dirname, "translations", null, null, { parser: "tsx" });
