import { QUERIES } from "../../utils/mediaQuery";
import { SPACINGS_AFTER } from "../consts";
import type { SpaceAfterSizes as SpaceAfter } from "../types";

export const spaceAfterClasses: {
  [K in QUERIES | SPACINGS_AFTER]: K extends QUERIES ? Record<SPACINGS_AFTER, string> : string;
} = {
  [SPACINGS_AFTER.NONE]: "mb-0",
  [SPACINGS_AFTER.SMALLEST]: "mb-100",
  [SPACINGS_AFTER.SMALL]: "mb-200",
  [SPACINGS_AFTER.NORMAL]: "mb-300",
  [SPACINGS_AFTER.MEDIUM]: "mb-400",
  [SPACINGS_AFTER.LARGE]: "mb-600",
  [SPACINGS_AFTER.LARGEST]: "mb-800",
  [QUERIES.MEDIUMMOBILE]: {
    [SPACINGS_AFTER.NONE]: "mm:mb-0",
    [SPACINGS_AFTER.SMALLEST]: "mm:mb-100",
    [SPACINGS_AFTER.SMALL]: "mm:mb-200",
    [SPACINGS_AFTER.NORMAL]: "mm:mb-300",
    [SPACINGS_AFTER.MEDIUM]: "mm:mb-400",
    [SPACINGS_AFTER.LARGE]: "mm:mb-600",
    [SPACINGS_AFTER.LARGEST]: "mm:mb-800",
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACINGS_AFTER.NONE]: "lm:mb-0",
    [SPACINGS_AFTER.SMALLEST]: "lm:mb-100",
    [SPACINGS_AFTER.SMALL]: "lm:mb-200",
    [SPACINGS_AFTER.NORMAL]: "lm:mb-300",
    [SPACINGS_AFTER.MEDIUM]: "lm:mb-400",
    [SPACINGS_AFTER.LARGE]: "lm:mb-600",
    [SPACINGS_AFTER.LARGEST]: "lm:mb-800",
  },
  [QUERIES.TABLET]: {
    [SPACINGS_AFTER.NONE]: "tb:mb-0",
    [SPACINGS_AFTER.SMALLEST]: "tb:mb-100",
    [SPACINGS_AFTER.SMALL]: "tb:mb-200",
    [SPACINGS_AFTER.NORMAL]: "tb:mb-300",
    [SPACINGS_AFTER.MEDIUM]: "tb:mb-400",
    [SPACINGS_AFTER.LARGE]: "tb:mb-600",
    [SPACINGS_AFTER.LARGEST]: "tb:mb-800",
  },
  [QUERIES.DESKTOP]: {
    [SPACINGS_AFTER.NONE]: "de:mb-0",
    [SPACINGS_AFTER.SMALLEST]: "de:mb-100",
    [SPACINGS_AFTER.SMALL]: "de:mb-200",
    [SPACINGS_AFTER.NORMAL]: "de:mb-300",
    [SPACINGS_AFTER.MEDIUM]: "de:mb-400",
    [SPACINGS_AFTER.LARGE]: "de:mb-600",
    [SPACINGS_AFTER.LARGEST]: "de:mb-800",
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACINGS_AFTER.NONE]: "ld:mb-0",
    [SPACINGS_AFTER.SMALLEST]: "ld:mb-100",
    [SPACINGS_AFTER.SMALL]: "ld:mb-200",
    [SPACINGS_AFTER.NORMAL]: "ld:mb-300",
    [SPACINGS_AFTER.MEDIUM]: "ld:mb-400",
    [SPACINGS_AFTER.LARGE]: "ld:mb-600",
    [SPACINGS_AFTER.LARGEST]: "ld:mb-800",
  },
};

const getSpaceAfterClasses = (spaceAfter: SpaceAfter, viewport?: QUERIES): string => {
  return viewport ? spaceAfterClasses[viewport][spaceAfter] : spaceAfterClasses[spaceAfter];
};

export default getSpaceAfterClasses;
