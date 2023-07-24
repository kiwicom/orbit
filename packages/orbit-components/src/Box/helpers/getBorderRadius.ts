import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { borderRadiusClasses } from "./tailwindClasses";

const getBorderRadiusClass = (borderRadius: Props["borderRadius"], viewport?: QUERIES) => {
  if (!borderRadius) return null;

  return viewport ? borderRadiusClasses[viewport][borderRadius] : borderRadiusClasses[borderRadius];
};

export default getBorderRadiusClass;
