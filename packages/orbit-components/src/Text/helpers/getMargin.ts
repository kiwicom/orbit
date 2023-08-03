import type { Props } from "../types";

const getMarginValue = (margin: string | number): string =>
  typeof margin === "number" ? `${margin}px` : margin;

const getMargin = (margin: Props["margin"]): { vars: object; classes: string[] } => {
  if (typeof margin === "number" || typeof margin === "string")
    return {
      vars: { "--text-margin": getMarginValue(margin) },
      classes: ["m-[var(--text-margin)]"],
    };

  const { top, bottom, left, right } = margin || {};
  const cssVar = {};
  const marginClasses: string[] = ["m-0"];

  if (top) {
    marginClasses.push("mt-[var(--text-margin-top)]");
    cssVar["--text-margin-top"] = getMarginValue(top);
  }
  if (bottom) {
    marginClasses.push("mb-[var(--text-margin-bottom)]");
    cssVar["--text-margin-bottom"] = getMarginValue(bottom);
  }
  if (left) {
    marginClasses.push("ml-[var(--text-margin-left)]");
    cssVar["--text-margin-left"] = getMarginValue(left);
  }
  if (right) {
    marginClasses.push("mr-[var(--text-margin-right)]");
    cssVar["--text-margin-right"] = getMarginValue(right);
  }

  return { vars: cssVar, classes: marginClasses };
};

export default getMargin;
