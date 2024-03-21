import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery";
import { backgroundColorClasses } from "../../common/tailwind/backgroundColor";

const getBackgroundClass = (background: Props["background"], viewport?: QUERIES): string | null => {
  if (!background) return null;

  return viewport
    ? backgroundColorClasses[viewport][background]
    : backgroundColorClasses[background];
};

export default getBackgroundClass;
