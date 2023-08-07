import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { overflowClasses } from "./tailwindClasses";

const getOverflowClass = (overflow: Props["overflow"], viewport?: QUERIES) => {
  if (!overflow) return null;

  return viewport ? overflowClasses[viewport][overflow] : overflowClasses[overflow];
};

export default getOverflowClass;
