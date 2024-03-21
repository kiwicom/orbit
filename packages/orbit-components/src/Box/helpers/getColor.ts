import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery";
import { colorClasses } from "../../common/tailwind/color";

const getColorClass = (color: Props["color"], viewport?: QUERIES): string | null => {
  if (!color) return null;

  return viewport ? colorClasses[viewport][color] : colorClasses[color];
};

export default getColorClass;
