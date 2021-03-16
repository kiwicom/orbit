import * as t from "@babel/types";
import { Rule } from "eslint";

export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prevents inconsistencies between Orbit and custom written colors",
      category: "Possible Errors",
      recommended: true,
    },
  },

  create: (context: Rule.RuleContext) => {
    const allowed = ["background", "background-color", "color"];

    return {
      TemplateElement(node: t.TemplateElement) {
        if (node.value.cooked) {
          const properties = node.value.cooked
            ?.replace(/\n/gm, "")
            .trim()
            .split(";")
            .map(v => v.trim())
            .filter(Boolean)
            .map(p => p.split(":"))
            .filter(([n]) => allowed.includes(n));

          properties.forEach(p => {
            if (p[1]) {
              context.report({
                // @ts-expect-error TODO
                node,
                message: `${p[0]} should be replaced with Orbit design token`,
              });
            }
          });
        }
      },
    };
  },
};
