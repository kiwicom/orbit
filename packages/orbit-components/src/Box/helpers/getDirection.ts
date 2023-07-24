import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { directionClasses } from "../../common/tailwind/direction";

const getDirectionClass = (direction: Props["direction"], viewport?: QUERIES) => {
  if (!direction) return null;

  return viewport ? directionClasses[viewport][direction] : directionClasses[direction];
};

export default getDirectionClass;
