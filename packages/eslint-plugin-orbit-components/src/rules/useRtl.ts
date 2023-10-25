import { TSESTree as t } from "@typescript-eslint/utils";

import ruleCreator from "../utils/ruleCreator";

export const ERROR_RTL_SPACING =
  "Use Orbit's rtlSpacing utility because values for right and left edges are different. https://orbit.kiwi/utilities/right-to-left-languages/#rtlspacing";

export const ERROR_BORDER_RADIUS =
  "border-radius edge values are different. Use borderRadius utility.";

export const errorBasic =
  "Values for right and left edges are different. Use Orbit's rtl utility. https://orbit.kiwi/utilities/right-to-left-languages";

const parseVals = (str: string) =>
  str
    .trim()
    .split(" ")
    .map(v => parseInt(v, 10));

const rtlSpacingCheck = (str: string): boolean | void => {
  const arr = parseVals(str);
  // for instance: margin: 0 10px 20px 15px;
  if (arr.length === 4) {
    const vals = arr.filter((_, i) => i === 1 || i === 3);
    return vals[0] !== vals[1];
  }

  return undefined;
};

const borderRadiusCheck = (str: string) => {
  const arr = parseVals(str);

  if (arr.length === 4) {
    const isTopEqual = arr[0] === arr[1];
    const isBottomEqual = arr[2] === arr[3];

    // border-radius: 3px 3px 5px 5px;
    if (isTopEqual && isBottomEqual) return undefined;
    // border-radius: 3px 5px 5px 5px or 3px 3px 5px 6px;
    if (!isTopEqual || !isBottomEqual) return true;

    return true;
  }

  return undefined;
};

const useRtl = ruleCreator({
  name: "use-rtl",
  meta: {
    type: "problem",
    deprecated: true,
    docs: {
      description: "Checks if the static literal values require RTL function",
    },
    messages: {
      ERROR_RTL_SPACING,
      ERROR_BORDER_RADIUS,
      errorBasic,
    },
    schema: [],
  },
  defaultOptions: [],

  create: context => {
    const basic = [
      "right",
      "left",
      "text-align",
      "padding-left",
      "padding-right",
      "margin-left",
      "margin-right",
    ];
    const allowed = basic.concat(["padding", "margin", "border-radius", "transform"]);

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

          properties.forEach(([prop, value]) => {
            if (prop === "margin" || prop === "padding") {
              if (rtlSpacingCheck(value)) {
                context.report({
                  node,
                  messageId: "ERROR_RTL_SPACING",
                });
              }
            }

            if (prop === "border-radius") {
              if (borderRadiusCheck(value)) {
                context.report({
                  node,
                  messageId: "ERROR_BORDER_RADIUS",
                });
              }
            }

            if (prop === "transform" && value.match(/translate3d/)) {
              context.report({
                node,
                messageId: "errorBasic",
              });
            }

            if (basic.includes(prop) && value) {
              context.report({
                node,
                messageId: "errorBasic",
              });
            }
          });
        }
      },
    };
  },
});

export default useRtl;
