import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import {
  marginBottomClasses,
  marginClasses,
  marginLeftClasses,
  marginRightClasses,
  marginTopClasses,
} from "../../common/tailwind/margin";

const getMarginClass = (margin: Props["margin"], viewport?: QUERIES) => {
  if (!margin) return null;

  if (typeof margin === "object") {
    const { top, bottom, left, right } = margin;

    return [
      top != null && (viewport ? marginTopClasses[viewport][top] : marginTopClasses[top]),
      bottom != null &&
        (viewport ? marginBottomClasses[viewport][bottom] : marginBottomClasses[bottom]),
      left != null && (viewport ? marginLeftClasses[viewport][left] : marginLeftClasses[left]),
      right != null && (viewport ? marginRightClasses[viewport][right] : marginRightClasses[right]),
    ];
  }

  return viewport ? marginClasses[viewport][margin] : marginClasses[margin];
};

export default getMarginClass;
