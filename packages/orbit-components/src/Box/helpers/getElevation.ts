import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { shadowClasses } from "./tailwindClasses";

const getElevationClass = (elevation: Props["elevation"], viewport?: QUERIES): string | null => {
  if (!elevation) return null;

  return viewport ? shadowClasses[viewport][elevation] : shadowClasses[elevation];
};

export default getElevationClass;
