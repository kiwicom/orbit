const { defineTest } = require("jscodeshift/dist/testUtils");

defineTest(__dirname, "translations-new", null, null, { parser: "tsx" });
