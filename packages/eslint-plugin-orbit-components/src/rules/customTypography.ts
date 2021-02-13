import * as t from "@babel/types";
import type { Rule } from "eslint";

export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prevents inconsistencies between Orbit and custom typography",
      category: "Possible Errors",
      recommended: true,
    },
  },

  create: (context: Rule.RuleContext) => {
    const ALLOWED_PROPS = ["font-size", "font-family", "line-height"];
    const ALLOWED_VALUES = ["inherit", "initial", "unset"];

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
            .filter(([n]) => ALLOWED_PROPS.includes(n));

          properties.forEach(p => {
            if (p[1] && !ALLOWED_VALUES.includes(p[1].trim())) {
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
