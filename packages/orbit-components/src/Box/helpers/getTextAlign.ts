import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { textAlignClasses } from "../../common/tailwind/textAlign";

const getTextAlignClass = (textAlign: Props["textAlign"], viewport?: QUERIES): string | null => {
  if (!textAlign) return null;

  return viewport ? textAlignClasses[viewport][textAlign] : textAlignClasses[textAlign];
};

export default getTextAlignClass;
