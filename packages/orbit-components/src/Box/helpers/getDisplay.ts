import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { displayClasses } from "../../common/tailwind/display";

const getDisplayClass = (display?: Props["display"], viewport?: QUERIES): string | null => {
  if (!display) return null;

  return viewport ? displayClasses[viewport][display] : displayClasses[display];
};

export default getDisplayClass;
