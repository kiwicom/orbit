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
    const JSXAttributes: t.JSXAttribute[] = [];

    return {
      JSXAttribute(node: t.JSXAttribute) {
        if (node.value) {
          if (node.name.name === "id") {
            JSXAttributes.push(node);
          }
        }
      },

      "Program:exit": () => {
        JSXAttributes.forEach(n => {
          // @ts-expect-error t.isLiteral supposed to be used, but broken
          const { value } = n.value;

          if (!t.isJSXExpressionContainer(n.value)) {
            context.report({
              // @ts-expect-error node
              node: n,
              message: `${n.name.name}="${value}", do not use literal value as ID, you should use randomID utility function`,
            });
          }
        });
      },
    };
  },
};
