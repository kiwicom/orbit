import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery";
import {
  paddingBottomClasses,
  paddingClasses,
  paddingLeftClasses,
  paddingRightClasses,
  paddingTopClasses,
} from "../../common/tailwind/padding";

const getPaddingClass = (
  padding: Props["padding"],
  viewport?: QUERIES,
): (string | boolean)[] | string | null => {
  if (!padding) return null;

  if (typeof padding === "object") {
    const { top, bottom, left, right } = padding;

    return [
      top != null && (viewport ? paddingTopClasses[viewport][top] : paddingTopClasses[top]),
      bottom != null &&
        (viewport ? paddingBottomClasses[viewport][bottom] : paddingBottomClasses[bottom]),
      left != null && (viewport ? paddingLeftClasses[viewport][left] : paddingLeftClasses[left]),
      right != null &&
        (viewport ? paddingRightClasses[viewport][right] : paddingRightClasses[right]),
    ];
  }

  return viewport ? paddingClasses[viewport][padding] : paddingClasses[padding];
};

export default getPaddingClass;
