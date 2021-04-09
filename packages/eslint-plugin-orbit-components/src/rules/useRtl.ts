import * as t from "@babel/types";
import { Rule } from "eslint";

export const ERROR_RTL_SPACING =
  "Use Orbit's rtlSpacing utility because values for right and left edges are different. https://orbit.kiwi/utilities/right-to-left-languages/#rtlspacing";

export const ERROR_BORDER_RADIUS =
  "border-radius edge values are different. Use borderRadius utility.";

export const errorBasic =
  "Values for right and left edges are different. Use Orbit's rtl utility. https://orbit.kiwi/utilities/right-to-left-languages/#right";

const parseVals = str =>
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

const useRtl: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Checks if the static literal values require RTL function",
      category: "Possible Errors",
      recommended: true,
    },
  },

  // @ts-expect-error TODO
  create: (context: Rule.RuleContext) => {
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
                  // @ts-expect-error todo
                  node,
                  message: ERROR_RTL_SPACING,
                });
              }
            }

            if (prop === "border-radius") {
              if (borderRadiusCheck(value)) {
                context.report({
                  // @ts-expect-error todo
                  node,
                  message: ERROR_BORDER_RADIUS,
                });
              }
            }

            if (prop === "transform" && value.match(/translate3d/)) {
              context.report({
                // @ts-expect-error todo
                node,
                message: errorBasic,
              });
            }

            if (basic.includes(prop) && value) {
              context.report({
                // @ts-expect-error todo
                node,
                message: errorBasic,
              });
            }
          });
        }
      },
    };
  },
};

export default useRtl;
