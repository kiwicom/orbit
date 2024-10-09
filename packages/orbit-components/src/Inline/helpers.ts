import { SPACINGS, DEPRECATED_SPACINGS } from "../utils/layout/consts";
import type { MediaQuery } from "./types";
import { getJustifyClasses, getAlignItemsClasses } from "../common/tailwind";
import { QUERIES } from "../utils/mediaQuery";

const spacingClasses: {
  [K in QUERIES | SPACINGS | DEPRECATED_SPACINGS]: K extends QUERIES
    ? Record<SPACINGS | DEPRECATED_SPACINGS, string>
    : string;
} = {
  [SPACINGS.NONE]: "",
  [SPACINGS.FIFTY]: "gap-50",
  [SPACINGS.ONE_HUNDRED]: "gap-100",
  [SPACINGS.ONE_HUNDRED_FIFTY]: "gap-150",
  [SPACINGS.TWO_HUNDRED]: "gap-200",
  [SPACINGS.THREE_HUNDRED]: "gap-300",
  [SPACINGS.FOUR_HUNDRED]: "gap-400",
  [SPACINGS.FIVE_HUNDRED]: "gap-500",
  [SPACINGS.SIX_HUNDRED]: "gap-600",
  [SPACINGS.EIGHT_HUNDRED]: "gap-800",
  [SPACINGS.ONE_THOUSAND]: "gap-1000",
  [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "gap-1200",
  [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "gap-1600",
  [DEPRECATED_SPACINGS.XXXSMALL]: "gap-50", // deprecated
  [DEPRECATED_SPACINGS.XXSMALL]: "gap-100", // deprecated
  [DEPRECATED_SPACINGS.XSMALL]: "gap-200", // deprecated
  [DEPRECATED_SPACINGS.SMALL]: "gap-300", // deprecated
  [DEPRECATED_SPACINGS.MEDIUM]: "gap-400", // deprecated
  [DEPRECATED_SPACINGS.LARGE]: "gap-600", // deprecated
  [DEPRECATED_SPACINGS.XLARGE]: "gap-800", // deprecated
  [DEPRECATED_SPACINGS.XXLARGE]: "gap-1000", // deprecated
  [DEPRECATED_SPACINGS.XXXLARGE]: "gap-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.FIFTY]: "ld:gap-50",
    [SPACINGS.ONE_HUNDRED]: "ld:gap-100",
    [SPACINGS.ONE_HUNDRED_FIFTY]: "ld:gap-150",
    [SPACINGS.TWO_HUNDRED]: "ld:gap-200",
    [SPACINGS.THREE_HUNDRED]: "ld:gap-300",
    [SPACINGS.FOUR_HUNDRED]: "ld:gap-400",
    [SPACINGS.FIVE_HUNDRED]: "ld:gap-500",
    [SPACINGS.SIX_HUNDRED]: "ld:gap-600",
    [SPACINGS.EIGHT_HUNDRED]: "ld:gap-800",
    [SPACINGS.ONE_THOUSAND]: "ld:gap-1000",
    [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "ld:gap-1200",
    [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "ld:gap-1600",
    [DEPRECATED_SPACINGS.XXXSMALL]: "ld:gap-50", // deprecated
    [DEPRECATED_SPACINGS.XXSMALL]: "ld:gap-100", // deprecated
    [DEPRECATED_SPACINGS.XSMALL]: "ld:gap-200", // deprecated
    [DEPRECATED_SPACINGS.SMALL]: "ld:gap-300", // deprecated
    [DEPRECATED_SPACINGS.MEDIUM]: "ld:gap-400", // deprecated
    [DEPRECATED_SPACINGS.LARGE]: "ld:gap-600", // deprecated
    [DEPRECATED_SPACINGS.XLARGE]: "ld:gap-800", // deprecated
    [DEPRECATED_SPACINGS.XXLARGE]: "ld:gap-1000", // deprecated
    [DEPRECATED_SPACINGS.XXXLARGE]: "ld:gap-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.FIFTY]: "de:gap-50",
    [SPACINGS.ONE_HUNDRED]: "de:gap-100",
    [SPACINGS.ONE_HUNDRED_FIFTY]: "de:gap-150",
    [SPACINGS.TWO_HUNDRED]: "de:gap-200",
    [SPACINGS.THREE_HUNDRED]: "de:gap-300",
    [SPACINGS.FOUR_HUNDRED]: "de:gap-400",
    [SPACINGS.FIVE_HUNDRED]: "de:gap-500",
    [SPACINGS.SIX_HUNDRED]: "de:gap-600",
    [SPACINGS.EIGHT_HUNDRED]: "de:gap-800",
    [SPACINGS.ONE_THOUSAND]: "de:gap-1000",
    [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "de:gap-1200",
    [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "de:gap-1600",
    [DEPRECATED_SPACINGS.XXXSMALL]: "de:gap-50", // deprecated
    [DEPRECATED_SPACINGS.XXSMALL]: "de:gap-100", // deprecated
    [DEPRECATED_SPACINGS.XSMALL]: "de:gap-200", // deprecated
    [DEPRECATED_SPACINGS.SMALL]: "de:gap-300", // deprecated
    [DEPRECATED_SPACINGS.MEDIUM]: "de:gap-400", // deprecated
    [DEPRECATED_SPACINGS.LARGE]: "de:gap-600", // deprecated
    [DEPRECATED_SPACINGS.XLARGE]: "de:gap-800", // deprecated
    [DEPRECATED_SPACINGS.XXLARGE]: "de:gap-1000", // deprecated
    [DEPRECATED_SPACINGS.XXXLARGE]: "de:gap-[52px]", // deprecated
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
    [SPACINGS.FIFTY]: "lm:gap-50",
    [SPACINGS.ONE_HUNDRED]: "lm:gap-100",
    [SPACINGS.ONE_HUNDRED_FIFTY]: "lm:gap-150",
    [SPACINGS.TWO_HUNDRED]: "lm:gap-200",
    [SPACINGS.THREE_HUNDRED]: "lm:gap-300",
    [SPACINGS.FOUR_HUNDRED]: "lm:gap-400",
    [SPACINGS.FIVE_HUNDRED]: "lm:gap-500",
    [SPACINGS.SIX_HUNDRED]: "lm:gap-600",
    [SPACINGS.EIGHT_HUNDRED]: "lm:gap-800",
    [SPACINGS.ONE_THOUSAND]: "lm:gap-1000",
    [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "lm:gap-1200",
    [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "lm:gap-1600",
    [DEPRECATED_SPACINGS.XXXSMALL]: "lm:gap-50", // deprecated
    [DEPRECATED_SPACINGS.XXSMALL]: "lm:gap-100", // deprecated
    [DEPRECATED_SPACINGS.XSMALL]: "lm:gap-200", // deprecated
    [DEPRECATED_SPACINGS.SMALL]: "lm:gap-300", // deprecated
    [DEPRECATED_SPACINGS.MEDIUM]: "lm:gap-400", // deprecated
    [DEPRECATED_SPACINGS.LARGE]: "lm:gap-600", // deprecated
    [DEPRECATED_SPACINGS.XLARGE]: "lm:gap-800", // deprecated
    [DEPRECATED_SPACINGS.XXLARGE]: "lm:gap-1000", // deprecated
    [DEPRECATED_SPACINGS.XXXLARGE]: "lm:gap-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.FIFTY]: "mm:gap-50",
    [SPACINGS.ONE_HUNDRED]: "mm:gap-100",
    [SPACINGS.ONE_HUNDRED_FIFTY]: "mm:gap-150",
    [SPACINGS.TWO_HUNDRED]: "mm:gap-200",
    [SPACINGS.THREE_HUNDRED]: "mm:gap-300",
    [SPACINGS.FOUR_HUNDRED]: "mm:gap-400",
    [SPACINGS.FIVE_HUNDRED]: "mm:gap-500",
    [SPACINGS.SIX_HUNDRED]: "mm:gap-600",
    [SPACINGS.EIGHT_HUNDRED]: "mm:gap-800",
    [SPACINGS.ONE_THOUSAND]: "mm:gap-1000",
    [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: "mm:gap-1200",
    [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: "mm:gap-1600",
    [DEPRECATED_SPACINGS.XXXSMALL]: "mm:gap-50", // deprecated
    [DEPRECATED_SPACINGS.XXSMALL]: "mm:gap-100", // deprecated
    [DEPRECATED_SPACINGS.XSMALL]: "mm:gap-200", // deprecated
    [DEPRECATED_SPACINGS.SMALL]: "mm:gap-300", // deprecated
    [DEPRECATED_SPACINGS.MEDIUM]: "mm:gap-400", // deprecated
    [DEPRECATED_SPACINGS.LARGE]: "mm:gap-600", // deprecated
    [DEPRECATED_SPACINGS.XLARGE]: "mm:gap-800", // deprecated
    [DEPRECATED_SPACINGS.XXLARGE]: "mm:gap-1000", // deprecated
    [DEPRECATED_SPACINGS.XXXLARGE]: "mm:gap-[52px]", // deprecated
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
