import { AST_NODE_TYPES, TSESTree as t } from "@typescript-eslint/utils";

import ruleCreator from "../utils/ruleCreator";

const useClient = ruleCreator({
  name: "use-client-directive",
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description: "Prevents missing 'use client' directive in Orbit components",
    },
    messages: {
      error: "Missing 'use client' directive in Orbit components",
    },
    schema: [],
  },
  defaultOptions: [],

  create: context => {
    return {
      Program(node: t.Program) {
        if (node.sourceType !== "module") return;
        if (node.body.length === 0) return;

        const noDirective = node.body.some(n => n.type === AST_NODE_TYPES.ExpressionStatement);

        if (!noDirective) {
          context.report({
            node,
            messageId: "error",
            fix: fixer => {
              return fixer.insertTextBefore(node.body[0], `"use client";\n`);
            },
          });
        }
      },
    };
  },
});

export default useClient;
