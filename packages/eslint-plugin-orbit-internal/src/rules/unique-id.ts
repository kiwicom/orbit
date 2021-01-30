import { Rule } from "eslint";
import { types as t } from "@babel/core";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "Prevents id namespace collisions",
      category: "Possible Errors",
      recommended: true,
    },
  },

  create: (context: Rule.RuleContext) => {
    return {
      JSXAttribute(node: t.JSXAttribute) {
        if (node.value) {
          if (node.name.name === "id" && !t.isJSXExpressionContainer(node.value)) {
            context.report({
              // @ts-expect-error node
              node,
              // @ts-expect-error node
              message: `${node.name.name}="${node.value.value}", do not use literal value as ID, you should use randomID utility function`,
            });
          }
        }
      },
    };
  },
};
