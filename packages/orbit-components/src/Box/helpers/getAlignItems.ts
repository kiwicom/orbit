import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { alignItemsClasses } from "../../common/tailwind/alignItems";

const getAlignItemsClass = (align?: Props["align"], viewport?: QUERIES): string | null => {
  if (!align) return null;

  return viewport ? alignItemsClasses[viewport][align] : alignItemsClasses[align];
};

export default getAlignItemsClass;
