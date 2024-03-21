import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery";
import { positionClasses } from "./tailwindClasses";

const getPositionClass = (position: Props["position"], viewport?: QUERIES): string | null => {
  if (!position) return null;

  return viewport ? positionClasses[viewport][position] : positionClasses[position];
};

export default getPositionClass;
