import { TSESTree as t } from "@typescript-eslint/utils";

import ruleCreator from "../utils/ruleCreator";

export default ruleCreator({
  name: "no-custom-colors",
  meta: {
    type: "suggestion",
    deprecated: true,
    docs: {
      description: "Prevents inconsistencies between Orbit and custom written colors",
    },
    messages: {
      replace: "{{name}} should be replaced with Orbit design token",
    },
    schema: [],
  },
  defaultOptions: [],

  create: context => {
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
                node,
                messageId: "replace",
                data: {
                  name: p[0].trim(),
                },
              });
            }
          });
        }
      },
    };
  },
});
