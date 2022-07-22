import { defineTest } from "jscodeshift/dist/testUtils";

defineTest(__dirname, "flowAst", null, null, { parser: "flow" });
