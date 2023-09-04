import { AST_NODE_TYPES, TSESTree as t } from "@typescript-eslint/utils";

import ruleCreator from "../utils/ruleCreator";

const uniqueId = ruleCreator({
  name: "unique-id",
  meta: {
    type: "problem",
    docs: {
      description: "Prevents id namespace collisions",
    },
    messages: {
      error: `{{ name }}="{{ value }}", do not use literal value as ID, you should use randomID utility function`,
    },
    schema: [],
  },
  defaultOptions: [],

  create: context => {
    return {
      JSXAttribute(node: t.JSXAttribute) {
        if (node.value) {
          if (
            node.name.name === "id" &&
            node.value.type !== AST_NODE_TYPES.JSXExpressionContainer &&
            node.value.type !== AST_NODE_TYPES.JSXSpreadChild
          ) {
            context.report({
              node,
              messageId: "error",
              data: {
                name: node.name.name,
                value: node.value.value,
              },
            });
          }
        }
      },
    };
  },
});

export default uniqueId;
