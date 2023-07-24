import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { backgroundColorClasses } from "../../common/tailwind/backgroundColor";

const getBackgroundClass = (background: Props["background"], viewport?: QUERIES) => {
  if (!background) return null;

  return viewport
    ? backgroundColorClasses[viewport][background]
    : backgroundColorClasses[background];
};

export default getBackgroundClass;
