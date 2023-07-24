import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { wrapClasses } from "../../common/tailwind/wrap";

const getWrapClass = (wrap: Props["wrap"], viewport?: QUERIES) => {
  if (!wrap) return null;

  return viewport ? wrapClasses[viewport][wrap] : wrapClasses[wrap];
};

export default getWrapClass;
