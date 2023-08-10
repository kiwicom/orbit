import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { justifyClasses } from "../../common/tailwind/justify";

const getJustifyClass = (justify?: Props["justify"], viewport?: QUERIES): string | null => {
  if (!justify) return null;

  return viewport ? justifyClasses[viewport][justify] : justifyClasses[justify];
};

export default getJustifyClass;
