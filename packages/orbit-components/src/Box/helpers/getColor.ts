import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { colorClasses } from "../../common/tailwind/color";

const getColorClass = (color: Props["color"], viewport?: QUERIES) => {
  if (!color) return null;

  return viewport ? colorClasses[viewport][color] : colorClasses[color];
};

export default getColorClass;
