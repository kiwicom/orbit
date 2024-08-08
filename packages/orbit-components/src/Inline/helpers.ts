import { SPACINGS, DEPRECATED_SPACINGS } from "../utils/layout/consts";
import type { MediaQuery } from "./types";
import { getJustifyClasses, getAlignItemsClasses } from "../common/tailwind";
import { QUERIES } from "../utils/mediaQuery";

// TODO refactor to gap once we no longer support iOS Safari < 14.5
const spacingClasses: {
  [K in QUERIES | SPACINGS | DEPRECATED_SPACINGS]: K extends QUERIES
    ? Record<SPACINGS | DEPRECATED_SPACINGS, string>
    : string;
} = {
  [SPACINGS.NONE]: "",
  [SPACINGS.FIFTY]: "-mt-50 -ms-50 *:mt-50 *:ms-50",
  [SPACINGS.ONE_HUNDRED]: "-mt-100 -ms-100 *:mt-100 *:ms-100",
  [SPACINGS.ONE_HUNDRED_FIFTY]: "-mt-150 -ms-150 *:mt-150 *:ms-150",
  [SPACINGS.TWO_HUNDRED]: "-mt-200 -ms-200 *:mt-200 *:ms-200",
  [SPACINGS.THREE_HUNDRED]: "-mt-300 -ms-300 *:mt-300 *:ms-300",
  [SPACINGS.FOUR_HUNDRED]: "-mt-400 -ms-400 *:mt-400 *:ms-400",
  [SPACINGS.FIVE_HUNDRED]: "-mt-500 -ms-500 *:mt-500 *:ms-500",
  [SPACINGS.SIX_HUNDRED]: "-mt-600 -ms-600 *:mt-600 *:ms-600",
  [SPACINGS.EIGHT_HUNDRED]: "-mt-800 -ms-800 *:mt-800 *:ms-800",
  [SPACINGS.ONE_THOUSAND]: "-mt-1000 -ms-1000 *:mt-1000 *:ms-1000",
  [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "-mt-1200 -ms-1200 *:mt-1200 *:ms-1200",
  [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "-mt-1600 -ms-1600 *:mt-1600 *:ms-1600",
  [DEPRECATED_SPACINGS.XXXSMALL]: "-mt-50 -ms-50 *:mt-50 *:ms-50", // deprecated
  [DEPRECATED_SPACINGS.XXSMALL]: "-mt-100 -ms-100 *:mt-100 *:ms-100", // deprecated
  [DEPRECATED_SPACINGS.XSMALL]: "-mt-200 -ms-200 *:mt-200 *:ms-200", // deprecated
  [DEPRECATED_SPACINGS.SMALL]: "-mt-300 -ms-300 *:mt-300 *:ms-300", // deprecated
  [DEPRECATED_SPACINGS.MEDIUM]: "-mt-400 -ms-400 *:mt-400 *:ms-400", // deprecated
  [DEPRECATED_SPACINGS.LARGE]: "-mt-600 -ms-600 *:mt-600 *:ms-600", // deprecated
  [DEPRECATED_SPACINGS.XLARGE]: "-mt-800 -ms-800 *:mt-800 *:ms-800", // deprecated
  [DEPRECATED_SPACINGS.XXLARGE]: "-mt-1000 -ms-1000 *:mt-1000 *:ms-1000", // deprecated
  [DEPRECATED_SPACINGS.XXXLARGE]: "-mt-[52px] -ms-[52px] *:mt-[52px] *:ms-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.FIFTY]: "ld:-mt-50 ld:-ms-50 ld:*:mt-50 ld:*:ms-50",
    [SPACINGS.ONE_HUNDRED]: "ld:-mt-100 ld:-ms-100 ld:*:mt-100 ld:*:ms-100",
    [SPACINGS.ONE_HUNDRED_FIFTY]: "ld:-mt-150 ld:-ms-150 ld:*:mt-150 ld:*:ms-150",
    [SPACINGS.TWO_HUNDRED]: "ld:-mt-200 ld:-ms-200 ld:*:mt-200 ld:*:ms-200",
    [SPACINGS.THREE_HUNDRED]: "ld:-mt-300 ld:-ms-300 ld:*:mt-300 ld:*:ms-300",
    [SPACINGS.FOUR_HUNDRED]: "ld:-mt-400 ld:-ms-400 ld:*:mt-400 ld:*:ms-400",
    [SPACINGS.FIVE_HUNDRED]: "ld:-mt-500 ld:-ms-500 ld:*:mt-500 ld:*:ms-500",
    [SPACINGS.SIX_HUNDRED]: "ld:-mt-600 ld:-ms-600 ld:*:mt-600 ld:*:ms-600",
    [SPACINGS.EIGHT_HUNDRED]: "ld:-mt-800 ld:-ms-800 ld:*:mt-800 ld:*:ms-800",
    [SPACINGS.ONE_THOUSAND]: "ld:-mt-1000 ld:-ms-1000 ld:*:mt-1000 ld:*:ms-1000",
    [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "ld:-mt-1200 ld:-ms-1200 ld:*:mt-1200 ld:*:ms-1200",
    [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "ld:-mt-1600 ld:-ms-1600 ld:*:mt-1600 ld:*:ms-1600",
    [DEPRECATED_SPACINGS.XXXSMALL]: "ld:-mt-50 ld:-ms-50 ld:*:mt-50 ld:*:ms-50", // deprecated
    [DEPRECATED_SPACINGS.XXSMALL]: "ld:-mt-100 ld:-ms-100 ld:*:mt-100 ld:*:ms-100", // deprecated
    [DEPRECATED_SPACINGS.XSMALL]: "ld:-mt-200 ld:-ms-200 ld:*:mt-200 ld:*:ms-200", // deprecated
    [DEPRECATED_SPACINGS.SMALL]: "ld:-mt-300 ld:-ms-300 ld:*:mt-300 ld:*:ms-300", // deprecated
    [DEPRECATED_SPACINGS.MEDIUM]: "ld:-mt-400 ld:-ms-400 ld:*:mt-400 ld:*:ms-400", // deprecated
    [DEPRECATED_SPACINGS.LARGE]: "ld:-mt-600 ld:-ms-600 ld:*:mt-600 ld:*:ms-600", // deprecated
    [DEPRECATED_SPACINGS.XLARGE]: "ld:-mt-800 ld:-ms-800 ld:*:mt-800 ld:*:ms-800", // deprecated
    [DEPRECATED_SPACINGS.XXLARGE]: "ld:-mt-1000 ld:-ms-1000 ld:*:mt-1000 ld:*:ms-1000", // deprecated
    [DEPRECATED_SPACINGS.XXXLARGE]: "ld:-mt-[52px] ld:-ms-[52px] ld:*:mt-[52px] ld:*:ms-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.FIFTY]: "de:-mt-50 de:-ms-50 de:*:mt-50 de:*:ms-50",
    [SPACINGS.ONE_HUNDRED]: "de:-mt-100 de:-ms-100 de:*:mt-100 de:*:ms-100",
    [SPACINGS.ONE_HUNDRED_FIFTY]: "de:-mt-150 de:-ms-150 de:*:mt-150 de:*:ms-150",
    [SPACINGS.TWO_HUNDRED]: "de:-mt-200 de:-ms-200 de:*:mt-200 de:*:ms-200",
    [SPACINGS.THREE_HUNDRED]: "de:-mt-300 de:-ms-300 de:*:mt-300 de:*:ms-300",
    [SPACINGS.FOUR_HUNDRED]: "de:-mt-400 de:-ms-400 de:*:mt-400 de:*:ms-400",
    [SPACINGS.FIVE_HUNDRED]: "de:-mt-500 de:-ms-500 de:*:mt-500 de:*:ms-500",
    [SPACINGS.SIX_HUNDRED]: "de:-mt-600 de:-ms-600 de:*:mt-600 de:*:ms-600",
    [SPACINGS.EIGHT_HUNDRED]: "de:-mt-800 de:-ms-800 de:*:mt-800 de:*:ms-800",
    [SPACINGS.ONE_THOUSAND]: "de:-mt-1000 de:-ms-1000 de:*:mt-1000 de:*:ms-1000",
    [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "de:-mt-1200 de:-ms-1200 de:*:mt-1200 de:*:ms-1200",
    [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "de:-mt-1600 de:-ms-1600 de:*:mt-1600 de:*:ms-1600",
    [DEPRECATED_SPACINGS.XXXSMALL]: "de:-mt-50 de:-ms-50 de:*:mt-50 de:*:ms-50", // deprecated
    [DEPRECATED_SPACINGS.XXSMALL]: "de:-mt-100 de:-ms-100 de:*:mt-100 de:*:ms-100", // deprecated
    [DEPRECATED_SPACINGS.XSMALL]: "de:-mt-200 de:-ms-200 de:*:mt-200 de:*:ms-200", // deprecated
    [DEPRECATED_SPACINGS.SMALL]: "de:-mt-300 de:-ms-300 de:*:mt-300 de:*:ms-300", // deprecated
    [DEPRECATED_SPACINGS.MEDIUM]: "de:-mt-400 de:-ms-400 de:*:mt-400 de:*:ms-400", // deprecated
    [DEPRECATED_SPACINGS.LARGE]: "de:-mt-600 de:-ms-600 de:*:mt-600 de:*:ms-600", // deprecated
    [DEPRECATED_SPACINGS.XLARGE]: "de:-mt-800 de:-ms-800 de:*:mt-800 de:*:ms-800", // deprecated
    [DEPRECATED_SPACINGS.XXLARGE]: "de:-mt-1000 de:-ms-1000 de:*:mt-1000 de:*:ms-1000", // deprecated
    [DEPRECATED_SPACINGS.XXXLARGE]: "de:-mt-[52px] de:-ms-[52px] de:*:mt-[52px] de:*:ms-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.FIFTY]: "tb:-mt-50 tb:-ms-50 tb:*:mt-50 tb:*:ms-50",
    [SPACINGS.ONE_HUNDRED]: "tb:-mt-100 tb:-ms-100 tb:*:mt-100 tb:*:ms-100",
    [SPACINGS.ONE_HUNDRED_FIFTY]: "tb:-mt-150 tb:-ms-150 tb:*:mt-150 tb:*:ms-150",
    [SPACINGS.TWO_HUNDRED]: "tb:-mt-200 tb:-ms-200 tb:*:mt-200 tb:*:ms-200",
    [SPACINGS.THREE_HUNDRED]: "tb:-mt-300 tb:-ms-300 tb:*:mt-300 tb:*:ms-300",
    [SPACINGS.FOUR_HUNDRED]: "tb:-mt-400 tb:-ms-400 tb:*:mt-400 tb:*:ms-400",
    [SPACINGS.FIVE_HUNDRED]: "tb:-mt-500 tb:-ms-500 tb:*:mt-500 tb:*:ms-500",
    [SPACINGS.SIX_HUNDRED]: "tb:-mt-600 tb:-ms-600 tb:*:mt-600 tb:*:ms-600",
    [SPACINGS.EIGHT_HUNDRED]: "tb:-mt-800 tb:-ms-800 tb:*:mt-800 tb:*:ms-800",
    [SPACINGS.ONE_THOUSAND]: "tb:-mt-1000 tb:-ms-1000 tb:*:mt-1000 tb:*:ms-1000",
    [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "tb:-mt-1200 tb:-ms-1200 tb:*:mt-1200 tb:*:ms-1200",
    [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "tb:-mt-1600 tb:-ms-1600 tb:*:mt-1600 tb:*:ms-1600",
    [DEPRECATED_SPACINGS.XXXSMALL]: "tb:-mt-50 tb:-ms-50 tb:*:mt-50 tb:*:ms-50", // deprecated
    [DEPRECATED_SPACINGS.XXSMALL]: "tb:-mt-100 tb:-ms-100 tb:*:mt-100 tb:*:ms-100", // deprecated
    [DEPRECATED_SPACINGS.XSMALL]: "tb:-mt-200 tb:-ms-200 tb:*:mt-200 tb:*:ms-200", // deprecated
    [DEPRECATED_SPACINGS.SMALL]: "tb:-mt-300 tb:-ms-300 tb:*:mt-300 tb:*:ms-300", // deprecated
    [DEPRECATED_SPACINGS.MEDIUM]: "tb:-mt-400 tb:-ms-400 tb:*:mt-400 tb:*:ms-400", // deprecated
    [DEPRECATED_SPACINGS.LARGE]: "tb:-mt-600 tb:-ms-600 tb:*:mt-600 tb:*:ms-600", // deprecated
    [DEPRECATED_SPACINGS.XLARGE]: "tb:-mt-800 tb:-ms-800 tb:*:mt-800 tb:*:ms-800", // deprecated
    [DEPRECATED_SPACINGS.XXLARGE]: "tb:-mt-1000 tb:-ms-1000 tb:*:mt-1000 tb:*:ms-1000", // deprecated
    [DEPRECATED_SPACINGS.XXXLARGE]: "tb:-mt-[52px] tb:-ms-[52px] tb:*:mt-[52px] tb:*:ms-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.FIFTY]: "lm:-mt-50 lm:-ms-50 lm:*:mt-50 lm:*:ms-50",
    [SPACINGS.ONE_HUNDRED]: "lm:-mt-100 lm:-ms-100 lm:*:mt-100 lm:*:ms-100",
    [SPACINGS.ONE_HUNDRED_FIFTY]: "lm:-mt-150 lm:-ms-150 lm:*:mt-150 lm:*:ms-150",
    [SPACINGS.TWO_HUNDRED]: "lm:-mt-200 lm:-ms-200 lm:*:mt-200 lm:*:ms-200",
    [SPACINGS.THREE_HUNDRED]: "lm:-mt-300 lm:-ms-300 lm:*:mt-300 lm:*:ms-300",
    [SPACINGS.FOUR_HUNDRED]: "lm:-mt-400 lm:-ms-400 lm:*:mt-400 lm:*:ms-400",
    [SPACINGS.FIVE_HUNDRED]: "lm:-mt-500 lm:-ms-500 lm:*:mt-500 lm:*:ms-500",
    [SPACINGS.SIX_HUNDRED]: "lm:-mt-600 lm:-ms-600 lm:*:mt-600 lm:*:ms-600",
    [SPACINGS.EIGHT_HUNDRED]: "lm:-mt-800 lm:-ms-800 lm:*:mt-800 lm:*:ms-800",
    [SPACINGS.ONE_THOUSAND]: "lm:-mt-1000 lm:-ms-1000 lm:*:mt-1000 lm:*:ms-1000",
    [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "lm:-mt-1200 lm:-ms-1200 lm:*:mt-1200 lm:*:ms-1200",
    [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "lm:-mt-1600 lm:-ms-1600 lm:*:mt-1600 lm:*:ms-1600",
    [DEPRECATED_SPACINGS.XXXSMALL]: "lm:-mt-50 lm:-ms-50 lm:*:mt-50 lm:*:ms-50", // deprecated
    [DEPRECATED_SPACINGS.XXSMALL]: "lm:-mt-100 lm:-ms-100 lm:*:mt-100 lm:*:ms-100", // deprecated
    [DEPRECATED_SPACINGS.XSMALL]: "lm:-mt-200 lm:-ms-200 lm:*:mt-200 lm:*:ms-200", // deprecated
    [DEPRECATED_SPACINGS.SMALL]: "lm:-mt-300 lm:-ms-300 lm:*:mt-300 lm:*:ms-300", // deprecated
    [DEPRECATED_SPACINGS.MEDIUM]: "lm:-mt-400 lm:-ms-400 lm:*:mt-400 lm:*:ms-400", // deprecated
    [DEPRECATED_SPACINGS.LARGE]: "lm:-mt-600 lm:-ms-600 lm:*:mt-600 lm:*:ms-600", // deprecated
    [DEPRECATED_SPACINGS.XLARGE]: "lm:-mt-800 lm:-ms-800 lm:*:mt-800 lm:*:ms-800", // deprecated
    [DEPRECATED_SPACINGS.XXLARGE]: "lm:-mt-1000 lm:-ms-1000 lm:*:mt-1000 lm:*:ms-1000", // deprecated
    [DEPRECATED_SPACINGS.XXXLARGE]: "lm:-mt-[52px] lm:-ms-[52px] lm:*:mt-[52px] lm:*:ms-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.FIFTY]: "mm:-mt-50 mm:-ms-50 mm:*:mt-50 mm:*:ms-50",
    [SPACINGS.ONE_HUNDRED]: "mm:-mt-100 mm:-ms-100 mm:*:mt-100 mm:*:ms-100",
    [SPACINGS.ONE_HUNDRED_FIFTY]: "mm:-mt-150 mm:-ms-150 mm:*:mt-150 mm:*:ms-150",
    [SPACINGS.TWO_HUNDRED]: "mm:-mt-200 mm:-ms-200 mm:*:mt-200 mm:*:ms-200",
    [SPACINGS.THREE_HUNDRED]: "mm:-mt-300 mm:-ms-300 mm:*:mt-300 mm:*:ms-300",
    [SPACINGS.FOUR_HUNDRED]: "mm:-mt-400 mm:-ms-400 mm:*:mt-400 mm:*:ms-400",
    [SPACINGS.FIVE_HUNDRED]: "mm:-mt-500 mm:-ms-500 mm:*:mt-500 mm:*:ms-500",
    [SPACINGS.SIX_HUNDRED]: "mm:-mt-600 mm:-ms-600 mm:*:mt-600 mm:*:ms-600",
    [SPACINGS.EIGHT_HUNDRED]: "mm:-mt-800 mm:-ms-800 mm:*:mt-800 mm:*:ms-800",
    [SPACINGS.ONE_THOUSAND]: "mm:-mt-1000 mm:-ms-1000 mm:*:mt-1000 mm:*:ms-1000",
    [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "mm:-mt-1200 mm:-ms-1200 mm:*:mt-1200 mm:*:ms-1200",
    [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "mm:-mt-1600 mm:-ms-1600 mm:*:mt-1600 mm:*:ms-1600",
    [DEPRECATED_SPACINGS.XXXSMALL]: "mm:-mt-50 mm:-ms-50 mm:*:mt-50 mm:*:ms-50", // deprecated
    [DEPRECATED_SPACINGS.XXSMALL]: "mm:-mt-100 mm:-ms-100 mm:*:mt-100 mm:*:ms-100", // deprecated
    [DEPRECATED_SPACINGS.XSMALL]: "mm:-mt-200 mm:-ms-200 mm:*:mt-200 mm:*:ms-200", // deprecated
    [DEPRECATED_SPACINGS.SMALL]: "mm:-mt-300 mm:-ms-300 mm:*:mt-300 mm:*:ms-300", // deprecated
    [DEPRECATED_SPACINGS.MEDIUM]: "mm:-mt-400 mm:-ms-400 mm:*:mt-400 mm:*:ms-400", // deprecated
    [DEPRECATED_SPACINGS.LARGE]: "mm:-mt-600 mm:-ms-600 mm:*:mt-600 mm:*:ms-600", // deprecated
    [DEPRECATED_SPACINGS.XLARGE]: "mm:-mt-800 mm:-ms-800 mm:*:mt-800 mm:*:ms-800", // deprecated
    [DEPRECATED_SPACINGS.XXLARGE]: "mm:-mt-1000 mm:-ms-1000 mm:*:mt-1000 mm:*:ms-1000", // deprecated
    [DEPRECATED_SPACINGS.XXXLARGE]: "mm:-mt-[52px] mm:-ms-[52px] mm:*:mt-[52px] mm:*:ms-[52px]", // deprecated
  },
};

const getSpacingClasses = (
  spacing: `${SPACINGS | DEPRECATED_SPACINGS}`,
  viewport?: QUERIES,
): string => {
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
