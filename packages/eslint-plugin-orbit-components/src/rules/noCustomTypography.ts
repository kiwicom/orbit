import * as t from "@babel/types";
import type { Rule } from "eslint";

export default {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "The aim of this rule is to prevent usage of custom values for font-size, font-family and line-height CSS properties. Only some of design tokens from @kiwicom/orbit-design-tokens should be used as value.",
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
                message: `The value ${p[1].trim()} used for CSS property ${
                  p[0]
                } should be replaced with an existing design token. Check orbit.kiwi/design-tokens to find which token you might use.`,
              });
            }
          });
        }
      },
    };
  },
};
