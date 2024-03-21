import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery";
import { wrapClasses } from "../../common/tailwind/wrap";

const getWrapClass = (wrap: Props["wrap"], viewport?: QUERIES): string | null => {
  if (!wrap) return null;

  return viewport ? wrapClasses[viewport][wrap] : wrapClasses[wrap];
};

export default getWrapClass;
