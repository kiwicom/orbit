import { SPACINGS } from "../utils/layout/consts";
import type { MediaQuery } from "./types";
import { getJustifyClasses, getAlignItemsClasses } from "../common/tailwind";
import { QUERIES } from "../utils/mediaQuery";

// TODO refactor to gap once we no longer support iOS Safari < 14.5
const spacingClasses: {
  [K in QUERIES | SPACINGS]: K extends QUERIES ? Record<SPACINGS, string> : string;
} = {
  [SPACINGS.NONE]: "",
  [SPACINGS.XXXSMALL]: "-mt-50 -ms-50 *:mt-50 *:ms-50",
  [SPACINGS.XXSMALL]: "-mt-100 -ms-100 *:mt-100 *:ms-100",
  [SPACINGS.XSMALL]: "-mt-200 -ms-200 *:mt-200 *:ms-200",
  [SPACINGS.SMALL]: "-mt-300 -ms-300 *:mt-300 *:ms-300",
  [SPACINGS.MEDIUM]: "-mt-400 -ms-400 *:mt-400 *:ms-400",
  [SPACINGS.LARGE]: "-mt-600 -ms-600 *:mt-600 *:ms-600",
  [SPACINGS.XLARGE]: "-mt-800 -ms-800 *:mt-800 *:ms-800",
  [SPACINGS.XXLARGE]: "-mt-1000 -ms-1000 *:mt-1000 *:ms-1000",
  [SPACINGS.XXXLARGE]: "-mt-[52px] -ms-[52px] *:mt-[52px] *:ms-[52px]",
  [QUERIES.LARGEDESKTOP]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.XXXSMALL]: "ld:-mt-50 ld:-ms-50 ld:*:mt-50 ld:*:ms-50",
    [SPACINGS.XXSMALL]: "ld:-mt-100 ld:-ms-100 ld:*:mt-100 ld:*:ms-100",
    [SPACINGS.XSMALL]: "ld:-mt-200 ld:-ms-200 ld:*:mt-200 ld:*:ms-200",
    [SPACINGS.SMALL]: "ld:-mt-300 ld:-ms-300 ld:*:mt-300 ld:*:ms-300",
    [SPACINGS.MEDIUM]: "ld:-mt-400 ld:-ms-400 ld:*:mt-400 ld:*:ms-400",
    [SPACINGS.LARGE]: "ld:-mt-600 ld:-ms-600 ld:*:mt-600 ld:*:ms-600",
    [SPACINGS.XLARGE]: "ld:-mt-800 ld:-ms-800 ld:*:mt-800 ld:*:ms-800",
    [SPACINGS.XXLARGE]: "ld:-mt-1000 ld:-ms-1000 ld:*:mt-1000 ld:*:ms-1000",
    [SPACINGS.XXXLARGE]: "ld:-mt-[52px] ld:-ms-[52px] ld:*:mt-[52px] ld:*:ms-[52px]",
  },
  [QUERIES.DESKTOP]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.XXXSMALL]: "de:-mt-50 de:-ms-50 de:*:mt-50 de:*:ms-50",
    [SPACINGS.XXSMALL]: "de:-mt-100 de:-ms-100 de:*:mt-100 de:*:ms-100",
    [SPACINGS.XSMALL]: "de:-mt-200 de:-ms-200 de:*:mt-200 de:*:ms-200",
    [SPACINGS.SMALL]: "de:-mt-300 de:-ms-300 de:*:mt-300 de:*:ms-300",
    [SPACINGS.MEDIUM]: "de:-mt-400 de:-ms-400 de:*:mt-400 de:*:ms-400",
    [SPACINGS.LARGE]: "de:-mt-600 de:-ms-600 de:*:mt-600 de:*:ms-600",
    [SPACINGS.XLARGE]: "de:-mt-800 de:-ms-800 de:*:mt-800 de:*:ms-800",
    [SPACINGS.XXLARGE]: "de:-mt-1000 de:-ms-1000 de:*:mt-1000 de:*:ms-1000",
    [SPACINGS.XXXLARGE]: "de:-mt-[52px] de:-ms-[52px] de:*:mt-[52px] de:*:ms-[52px]",
  },
  [QUERIES.TABLET]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.XXXSMALL]: "tb:-mt-50 tb:-ms-50 tb:*:mt-50 tb:*:ms-50",
    [SPACINGS.XXSMALL]: "tb:-mt-100 tb:-ms-100 tb:*:mt-100 tb:*:ms-100",
    [SPACINGS.XSMALL]: "tb:-mt-200 tb:-ms-200 tb:*:mt-200 tb:*:ms-200",
    [SPACINGS.SMALL]: "tb:-mt-300 tb:-ms-300 tb:*:mt-300 tb:*:ms-300",
    [SPACINGS.MEDIUM]: "tb:-mt-400 tb:-ms-400 tb:*:mt-400 tb:*:ms-400",
    [SPACINGS.LARGE]: "tb:-mt-600 tb:-ms-600 tb:*:mt-600 tb:*:ms-600",
    [SPACINGS.XLARGE]: "tb:-mt-800 tb:-ms-800 tb:*:mt-800 tb:*:ms-800",
    [SPACINGS.XXLARGE]: "tb:-mt-1000 tb:-ms-1000 tb:*:mt-1000 tb:*:ms-1000",
    [SPACINGS.XXXLARGE]: "tb:-mt-[52px] tb:-ms-[52px] tb:*:mt-[52px] tb:*:ms-[52px]",
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.XXXSMALL]: "lm:-mt-50 lm:-ms-50 lm:*:mt-50 lm:*:ms-50",
    [SPACINGS.XXSMALL]: "lm:-mt-100 lm:-ms-100 lm:*:mt-100 lm:*:ms-100",
    [SPACINGS.XSMALL]: "lm:-mt-200 lm:-ms-200 lm:*:mt-200 lm:*:ms-200",
    [SPACINGS.SMALL]: "lm:-mt-300 lm:-ms-300 lm:*:mt-300 lm:*:ms-300",
    [SPACINGS.MEDIUM]: "lm:-mt-400 lm:-ms-400 lm:*:mt-400 lm:*:ms-400",
    [SPACINGS.LARGE]: "lm:-mt-600 lm:-ms-600 lm:*:mt-600 lm:*:ms-600",
    [SPACINGS.XLARGE]: "lm:-mt-800 lm:-ms-800 lm:*:mt-800 lm:*:ms-800",
    [SPACINGS.XXLARGE]: "lm:-mt-1000 lm:-ms-1000 lm:*:mt-1000 lm:*:ms-1000",
    [SPACINGS.XXXLARGE]: "lm:-mt-[52px] lm:-ms-[52px] lm:*:mt-[52px] lm:*:ms-[52px]",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.XXXSMALL]: "mm:-mt-50 mm:-ms-50 mm:*:mt-50 mm:*:ms-50",
    [SPACINGS.XXSMALL]: "mm:-mt-100 mm:-ms-100 mm:*:mt-100 mm:*:ms-100",
    [SPACINGS.XSMALL]: "mm:-mt-200 mm:-ms-200 mm:*:mt-200 mm:*:ms-200",
    [SPACINGS.SMALL]: "mm:-mt-300 mm:-ms-300 mm:*:mt-300 mm:*:ms-300",
    [SPACINGS.MEDIUM]: "mm:-mt-400 mm:-ms-400 mm:*:mt-400 mm:*:ms-400",
    [SPACINGS.LARGE]: "mm:-mt-600 mm:-ms-600 mm:*:mt-600 mm:*:ms-600",
    [SPACINGS.XLARGE]: "mm:-mt-800 mm:-ms-800 mm:*:mt-800 mm:*:ms-800",
    [SPACINGS.XXLARGE]: "mm:-mt-1000 mm:-ms-1000 mm:*:mt-1000 mm:*:ms-1000",
    [SPACINGS.XXXLARGE]: "mm:-mt-[52px] mm:-ms-[52px] mm:*:mt-[52px] mm:*:ms-[52px]",
  },
};

const getSpacingClasses = (spacing: `${SPACINGS}`, viewport?: QUERIES): string => {
  return viewport ? spacingClasses[viewport][spacing] : spacingClasses[spacing];
};

export const getTailwindClasses = (
  props: MediaQuery,
  viewport?: QUERIES,
): (string | null | undefined | (string | boolean)[])[] => {
  const { align, justify, spacing } = props;

  return [
    align && getAlignItemsClasses(align, viewport),
    justify && getJustifyClasses(justify, viewport),
    spacing && getSpacingClasses(spacing, viewport),
  ];
};
