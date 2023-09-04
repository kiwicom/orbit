import { TSESTree as t } from "@typescript-eslint/utils";

import ruleCreator from "../utils/ruleCreator";

export default ruleCreator({
  name: "no-custom-typography",
  meta: {
    type: "suggestion",
    deprecated: true,
    docs: {
      description:
        "The aim of this rule is to prevent usage of custom values for font-size, font-family and line-height CSS properties. Only some of design tokens from @kiwicom/orbit-design-tokens should be used as value.",
    },
    messages: {
      error:
        "The value {{value}} used for CSS property {{property}} should be replaced with an existing design token. Check orbit.kiwi/design-tokens to find which token you might use.",
    },
    schema: [],
  },
  defaultOptions: [],

  create: context => {
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
                node,
                messageId: "error",
                data: {
                  value: p[1].trim(),
                  property: p[0].trim(),
                },
              });
            }
          });
        }
      },
    };
  },
});
