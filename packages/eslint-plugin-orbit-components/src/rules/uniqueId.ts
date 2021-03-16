import { Rule } from "eslint";
import * as t from "@babel/types";

const uniqueId: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Prevents id namespace collisions",
      category: "Possible Errors",
      recommended: true,
    },
  },

  // @ts-expect-error node
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

export default uniqueId;
