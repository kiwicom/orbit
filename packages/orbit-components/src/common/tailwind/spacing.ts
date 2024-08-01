import cx from "clsx";

import { QUERIES } from "../../utils/mediaQuery";
import type { Direction } from "../../Stack/types";

export enum SPACING {
  XXXSMALL = "XXXSmall", // deprecated
  XXSMALL = "XXSmall", // deprecated
  XSMALL = "XSmall", // deprecated
  SMALL = "small", // deprecated
  MEDIUM = "medium", // deprecated
  LARGE = "large", // deprecated
  XLARGE = "XLarge", // deprecated
  XXLARGE = "XXLarge", // deprecated
  XXXLARGE = "XXXLarge", // deprecated
  NONE = "none",
  REVERSE = "reverse",
  FIFTY = "50",
  ONE_HUNDRED = "100",
  ONE_HUNDRED_FIFTY = "150",
  TWO_HUNDRED = "200",
  THREE_HUNDRED = "300",
  FOUR_HUNDRED = "400",
  FIVE_HUNDRED = "500",
  SIX_HUNDRED = "600",
  EIGHT_HUNDRED = "800",
  ONE_THOUSAND = "1000",
  ONE_THOUSAND_TWO_HUNDRED = "1200",
  ONE_THOUSAND_SIX_HUNDRED = "1600",
}

export const horizontalTokens: {
  [K in QUERIES | SPACING]: K extends QUERIES ? Record<SPACING, string> : string;
} = {
  [SPACING.REVERSE]: "space-x-reverse",
  [SPACING.NONE]: "space-x-none",
  [SPACING.FIFTY]: "space-x-50",
  [SPACING.ONE_HUNDRED]: "space-x-100",
  [SPACING.ONE_HUNDRED_FIFTY]: "space-x-150",
  [SPACING.TWO_HUNDRED]: "space-x-200",
  [SPACING.THREE_HUNDRED]: "space-x-300",
  [SPACING.FOUR_HUNDRED]: "space-x-400",
  [SPACING.FIVE_HUNDRED]: "space-x-500",
  [SPACING.SIX_HUNDRED]: "space-x-600",
  [SPACING.EIGHT_HUNDRED]: "space-x-800",
  [SPACING.ONE_THOUSAND]: "space-x-1000",
  [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "space-x-1200",
  [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "space-x-1600",
  [SPACING.XXXSMALL]: "space-x-50", // deprecated
  [SPACING.XXSMALL]: "space-x-100", // deprecated
  [SPACING.XSMALL]: "space-x-200", // deprecated
  [SPACING.SMALL]: "space-x-300", // depcrecated
  [SPACING.MEDIUM]: "space-x-400", // deprecated
  [SPACING.LARGE]: "space-x-600", // deprecated
  [SPACING.XLARGE]: "space-x-800", // deprecated
  [SPACING.XXLARGE]: "space-x-1000", // deprecated
  [SPACING.XXXLARGE]: "space-x-[52px]", // deprecated
  [QUERIES.MEDIUMMOBILE]: {
    [SPACING.REVERSE]: "mm:space-x-reverse",
    [SPACING.NONE]: "mm:space-x-none",
    [SPACING.FIFTY]: "mm:space-x-50",
    [SPACING.ONE_HUNDRED]: "mm:space-x-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "mm:space-x-150",
    [SPACING.TWO_HUNDRED]: "mm:space-x-200",
    [SPACING.THREE_HUNDRED]: "mm:space-x-300",
    [SPACING.FOUR_HUNDRED]: "mm:space-x-400",
    [SPACING.FIVE_HUNDRED]: "mm:space-x-500",
    [SPACING.SIX_HUNDRED]: "mm:space-x-600",
    [SPACING.EIGHT_HUNDRED]: "mm:space-x-800",
    [SPACING.ONE_THOUSAND]: "mm:space-x-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "mm:space-x-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "mm:space-x-1600",
    [SPACING.XXXSMALL]: "mm:space-x-50", // deprecated
    [SPACING.XXSMALL]: "mm:space-x-100", // deprecated
    [SPACING.XSMALL]: "mm:space-x-200", // deprecated
    [SPACING.SMALL]: "mm:space-x-300", // depcrecated
    [SPACING.MEDIUM]: "mm:space-x-400", // deprecated
    [SPACING.LARGE]: "mm:space-x-600", // deprecated
    [SPACING.XLARGE]: "mm:space-x-800", // deprecated
    [SPACING.XXLARGE]: "mm:space-x-1000", // deprecated
    [SPACING.XXXLARGE]: "mm:space-x-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACING.REVERSE]: "lm:space-x-reverse",
    [SPACING.NONE]: "lm:space-x-none",
    [SPACING.FIFTY]: "lm:space-x-50",
    [SPACING.ONE_HUNDRED]: "lm:space-x-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "lm:space-x-150",
    [SPACING.TWO_HUNDRED]: "lm:space-x-200",
    [SPACING.THREE_HUNDRED]: "lm:space-x-300",
    [SPACING.FOUR_HUNDRED]: "lm:space-x-400",
    [SPACING.FIVE_HUNDRED]: "lm:space-x-500",
    [SPACING.SIX_HUNDRED]: "lm:space-x-600",
    [SPACING.EIGHT_HUNDRED]: "lm:space-x-800",
    [SPACING.ONE_THOUSAND]: "lm:space-x-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "lm:space-x-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "lm:space-x-1600",
    [SPACING.XXXSMALL]: "lm:space-x-50", // deprecated
    [SPACING.XXSMALL]: "lm:space-x-100", // deprecated
    [SPACING.XSMALL]: "lm:space-x-200", // deprecated
    [SPACING.SMALL]: "lm:space-x-300", // depcrecated
    [SPACING.MEDIUM]: "lm:space-x-400", // deprecated
    [SPACING.LARGE]: "lm:space-x-600", // deprecated
    [SPACING.XLARGE]: "lm:space-x-800", // deprecated
    [SPACING.XXLARGE]: "lm:space-x-1000", // deprecated
    [SPACING.XXXLARGE]: "lm:space-x-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SPACING.REVERSE]: "tb:space-x-reverse",
    [SPACING.NONE]: "tb:space-x-none",
    [SPACING.FIFTY]: "tb:space-x-50",
    [SPACING.ONE_HUNDRED]: "tb:space-x-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "tb:space-x-150",
    [SPACING.TWO_HUNDRED]: "tb:space-x-200",
    [SPACING.THREE_HUNDRED]: "tb:space-x-300",
    [SPACING.FOUR_HUNDRED]: "tb:space-x-400",
    [SPACING.FIVE_HUNDRED]: "tb:space-x-500",
    [SPACING.SIX_HUNDRED]: "tb:space-x-600",
    [SPACING.EIGHT_HUNDRED]: "tb:space-x-800",
    [SPACING.ONE_THOUSAND]: "tb:space-x-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "tb:space-x-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "tb:space-x-1600",
    [SPACING.XXXSMALL]: "tb:space-x-50", // deprecated
    [SPACING.XXSMALL]: "tb:space-x-100", // deprecated
    [SPACING.XSMALL]: "tb:space-x-200", // deprecated
    [SPACING.SMALL]: "tb:space-x-300", // depcrecated
    [SPACING.MEDIUM]: "tb:space-x-400", // deprecated
    [SPACING.LARGE]: "tb:space-x-600", // deprecated
    [SPACING.XLARGE]: "tb:space-x-800", // deprecated
    [SPACING.XXLARGE]: "tb:space-x-1000", // deprecated
    [SPACING.XXXLARGE]: "tb:space-x-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SPACING.REVERSE]: "de:space-x-reverse",
    [SPACING.NONE]: "de:space-x-none",
    [SPACING.FIFTY]: "de:space-x-50",
    [SPACING.ONE_HUNDRED]: "de:space-x-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "de:space-x-150",
    [SPACING.TWO_HUNDRED]: "de:space-x-200",
    [SPACING.THREE_HUNDRED]: "de:space-x-300",
    [SPACING.FOUR_HUNDRED]: "de:space-x-400",
    [SPACING.FIVE_HUNDRED]: "de:space-x-500",
    [SPACING.SIX_HUNDRED]: "de:space-x-600",
    [SPACING.EIGHT_HUNDRED]: "de:space-x-800",
    [SPACING.ONE_THOUSAND]: "de:space-x-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "de:space-x-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "de:space-x-1600",
    [SPACING.XXXSMALL]: "de:space-x-50", // deprecated
    [SPACING.XXSMALL]: "de:space-x-100", // deprecated
    [SPACING.XSMALL]: "de:space-x-200", // deprecated
    [SPACING.SMALL]: "de:space-x-300", // depcrecated
    [SPACING.MEDIUM]: "de:space-x-400", // deprecated
    [SPACING.LARGE]: "de:space-x-600", // deprecated
    [SPACING.XLARGE]: "de:space-x-800", // deprecated
    [SPACING.XXLARGE]: "de:space-x-1000", // deprecated
    [SPACING.XXXLARGE]: "de:space-x-[52px]", // deprecated
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACING.REVERSE]: "ld:space-x-reverse",
    [SPACING.NONE]: "ld:space-x-none",
    [SPACING.FIFTY]: "ld:space-x-50",
    [SPACING.ONE_HUNDRED]: "ld:space-x-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "ld:space-x-150",
    [SPACING.TWO_HUNDRED]: "ld:space-x-200",
    [SPACING.THREE_HUNDRED]: "ld:space-x-300",
    [SPACING.FOUR_HUNDRED]: "ld:space-x-400",
    [SPACING.FIVE_HUNDRED]: "ld:space-x-500",
    [SPACING.SIX_HUNDRED]: "ld:space-x-600",
    [SPACING.EIGHT_HUNDRED]: "ld:space-x-800",
    [SPACING.ONE_THOUSAND]: "ld:space-x-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "ld:space-x-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "ld:space-x-1600",
    [SPACING.XXXSMALL]: "ld:space-x-50", // deprecated
    [SPACING.XXSMALL]: "ld:space-x-100", // deprecated
    [SPACING.XSMALL]: "ld:space-x-200", // deprecated
    [SPACING.SMALL]: "ld:space-x-300", // depcrecated
    [SPACING.MEDIUM]: "ld:space-x-400", // deprecated
    [SPACING.LARGE]: "ld:space-x-600", // deprecated
    [SPACING.XLARGE]: "ld:space-x-800", // deprecated
    [SPACING.XXLARGE]: "ld:space-x-1000", // deprecated
    [SPACING.XXXLARGE]: "ld:space-x-[52px]", // deprecated
  },
};

export const verticalTokens = {
  [SPACING.REVERSE]: "space-y-reverse",
  [SPACING.NONE]: "space-y-none",
  [SPACING.FIFTY]: "space-y-50",
  [SPACING.ONE_HUNDRED]: "space-y-100",
  [SPACING.ONE_HUNDRED_FIFTY]: "space-y-150",
  [SPACING.TWO_HUNDRED]: "space-y-200",
  [SPACING.THREE_HUNDRED]: "space-y-300",
  [SPACING.FOUR_HUNDRED]: "space-y-400",
  [SPACING.FIVE_HUNDRED]: "space-y-500",
  [SPACING.SIX_HUNDRED]: "space-y-600",
  [SPACING.EIGHT_HUNDRED]: "space-y-800",
  [SPACING.ONE_THOUSAND]: "space-y-1000",
  [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "space-y-1200",
  [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "space-y-1600",
  [SPACING.XXXSMALL]: "space-y-50", // deprecated
  [SPACING.XXSMALL]: "space-y-100", // deprecated
  [SPACING.XSMALL]: "space-y-200", // deprecated
  [SPACING.SMALL]: "space-y-300", // depcrecated
  [SPACING.MEDIUM]: "space-y-400", // deprecated
  [SPACING.LARGE]: "space-y-600", // deprecated
  [SPACING.XLARGE]: "space-y-800", // deprecated
  [SPACING.XXLARGE]: "space-y-1000", // deprecated
  [SPACING.XXXLARGE]: "space-y-[52px]", // deprecated
  [QUERIES.MEDIUMMOBILE]: {
    [SPACING.REVERSE]: "mm:space-y-reverse",
    [SPACING.NONE]: "mm:space-y-none",
    [SPACING.XXXSMALL]: "mm:space-y-50", // deprecated
    [SPACING.XXSMALL]: "mm:space-y-100", // deprecated
    [SPACING.XSMALL]: "mm:space-y-200", // deprecated
    [SPACING.SMALL]: "mm:space-y-300", // depcrecated
    [SPACING.MEDIUM]: "mm:space-y-400", // deprecated
    [SPACING.LARGE]: "mm:space-y-600", // deprecated
    [SPACING.XLARGE]: "mm:space-y-800", // deprecated
    [SPACING.XXLARGE]: "mm:space-y-1000", // deprecated
    [SPACING.XXXLARGE]: "mm:space-y-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACING.REVERSE]: "lm:space-y-reverse",
    [SPACING.NONE]: "lm:space-y-none",
    [SPACING.FIFTY]: "lm:space-y-50",
    [SPACING.ONE_HUNDRED]: "lm:space-y-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "lm:space-y-150",
    [SPACING.TWO_HUNDRED]: "lm:space-y-200",
    [SPACING.THREE_HUNDRED]: "lm:space-y-300",
    [SPACING.FOUR_HUNDRED]: "lm:space-y-400",
    [SPACING.FIVE_HUNDRED]: "lm:space-y-500",
    [SPACING.SIX_HUNDRED]: "lm:space-y-600",
    [SPACING.EIGHT_HUNDRED]: "lm:space-y-800",
    [SPACING.ONE_THOUSAND]: "lm:space-y-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "lm:space-y-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "lm:space-y-1600",
    [SPACING.XXXSMALL]: "lm:space-y-50", // deprecated
    [SPACING.XXSMALL]: "lm:space-y-100", // deprecated
    [SPACING.XSMALL]: "lm:space-y-200", // deprecated
    [SPACING.SMALL]: "lm:space-y-300", // depcrecated
    [SPACING.MEDIUM]: "lm:space-y-400", // deprecated
    [SPACING.LARGE]: "lm:space-y-600", // deprecated
    [SPACING.XLARGE]: "lm:space-y-800", // deprecated
    [SPACING.XXLARGE]: "lm:space-y-1000", // deprecated
    [SPACING.XXXLARGE]: "lm:space-y-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SPACING.REVERSE]: "tb:space-y-reverse",
    [SPACING.NONE]: "tb:space-y-none",
    [SPACING.FIFTY]: "tb:space-y-50",
    [SPACING.ONE_HUNDRED]: "tb:space-y-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "tb:space-y-150",
    [SPACING.TWO_HUNDRED]: "tb:space-y-200",
    [SPACING.THREE_HUNDRED]: "tb:space-y-300",
    [SPACING.FOUR_HUNDRED]: "tb:space-y-400",
    [SPACING.FIVE_HUNDRED]: "tb:space-y-500",
    [SPACING.SIX_HUNDRED]: "tb:space-y-600",
    [SPACING.EIGHT_HUNDRED]: "tb:space-y-800",
    [SPACING.ONE_THOUSAND]: "tb:space-y-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "tb:space-y-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "tb:space-y-1600",
    [SPACING.XXXSMALL]: "tb:space-y-50", // deprecated
    [SPACING.XXSMALL]: "tb:space-y-100", // deprecated
    [SPACING.XSMALL]: "tb:space-y-200", // deprecated
    [SPACING.SMALL]: "tb:space-y-300", // depcrecated
    [SPACING.MEDIUM]: "tb:space-y-400", // deprecated
    [SPACING.LARGE]: "tb:space-y-600", // deprecated
    [SPACING.XLARGE]: "tb:space-y-800", // deprecated
    [SPACING.XXLARGE]: "tb:space-y-1000", // deprecated
    [SPACING.XXXLARGE]: "tb:space-y-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SPACING.REVERSE]: "de:space-y-reverse",
    [SPACING.NONE]: "de:space-y-none",
    [SPACING.FIFTY]: "de:space-y-50",
    [SPACING.ONE_HUNDRED]: "de:space-y-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "de:space-y-150",
    [SPACING.TWO_HUNDRED]: "de:space-y-200",
    [SPACING.THREE_HUNDRED]: "de:space-y-300",
    [SPACING.FOUR_HUNDRED]: "de:space-y-400",
    [SPACING.FIVE_HUNDRED]: "de:space-y-500",
    [SPACING.SIX_HUNDRED]: "de:space-y-600",
    [SPACING.EIGHT_HUNDRED]: "de:space-y-800",
    [SPACING.ONE_THOUSAND]: "de:space-y-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "de:space-y-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "de:space-y-1600",
    [SPACING.XXXSMALL]: "de:space-y-50", // deprecated
    [SPACING.XXSMALL]: "de:space-y-100", // deprecated
    [SPACING.XSMALL]: "de:space-y-200", // deprecated
    [SPACING.SMALL]: "de:space-y-300", // depcrecated
    [SPACING.MEDIUM]: "de:space-y-400", // deprecated
    [SPACING.LARGE]: "de:space-y-600", // deprecated
    [SPACING.XLARGE]: "de:space-y-800", // deprecated
    [SPACING.XXLARGE]: "de:space-y-1000", // deprecated
    [SPACING.XXXLARGE]: "de:space-y-[52px]", // deprecated
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACING.REVERSE]: "ld:space-y-reverse",
    [SPACING.NONE]: "ld:space-y-none",
    [SPACING.FIFTY]: "ld:space-y-50",
    [SPACING.ONE_HUNDRED]: "ld:space-y-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "ld:space-y-150",
    [SPACING.TWO_HUNDRED]: "ld:space-y-200",
    [SPACING.THREE_HUNDRED]: "ld:space-y-300",
    [SPACING.FOUR_HUNDRED]: "ld:space-y-400",
    [SPACING.FIVE_HUNDRED]: "ld:space-y-500",
    [SPACING.SIX_HUNDRED]: "ld:space-y-600",
    [SPACING.EIGHT_HUNDRED]: "ld:space-y-800",
    [SPACING.ONE_THOUSAND]: "ld:space-y-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "ld:space-y-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "ld:space-y-1600",
    [SPACING.XXXSMALL]: "ld:space-y-50", // deprecated
    [SPACING.XXSMALL]: "ld:space-y-100", // deprecated
    [SPACING.XSMALL]: "ld:space-y-200", // deprecated
    [SPACING.SMALL]: "ld:space-y-300", // depcrecated
    [SPACING.MEDIUM]: "ld:space-y-400", // deprecated
    [SPACING.LARGE]: "ld:space-y-600", // deprecated
    [SPACING.XLARGE]: "ld:space-y-800", // deprecated
    [SPACING.XXLARGE]: "ld:space-y-1000", // deprecated
    [SPACING.XXXLARGE]: "ld:space-y-[52px]", // deprecated
  },
};

export const gapTokens = {
  [SPACING.NONE]: "gap-none",
  [SPACING.FIFTY]: "gap-50",
  [SPACING.ONE_HUNDRED]: "gap-100",
  [SPACING.ONE_HUNDRED_FIFTY]: "gap-150",
  [SPACING.TWO_HUNDRED]: "gap-200",
  [SPACING.THREE_HUNDRED]: "gap-300",
  [SPACING.FOUR_HUNDRED]: "gap-400",
  [SPACING.FIVE_HUNDRED]: "gap-500",
  [SPACING.SIX_HUNDRED]: "gap-600",
  [SPACING.EIGHT_HUNDRED]: "gap-800",
  [SPACING.ONE_THOUSAND]: "gap-1000",
  [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "gap-1200",
  [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "gap-1600",
  [SPACING.XXXSMALL]: "gap-50", // deprecated
  [SPACING.XXSMALL]: "gap-100", // deprecated
  [SPACING.XSMALL]: "gap-200", // deprecated
  [SPACING.SMALL]: "gap-300", // depcrecated
  [SPACING.MEDIUM]: "gap-400", // deprecated
  [SPACING.LARGE]: "gap-600", // deprecated
  [SPACING.XLARGE]: "gap-800", // deprecated
  [SPACING.XXLARGE]: "gap-1000", // deprecated
  [SPACING.XXXLARGE]: "gap-[52px]", // deprecated
  [QUERIES.MEDIUMMOBILE]: {
    [SPACING.NONE]: "mm:gap-none",
    [SPACING.FIFTY]: "mm:gap-50",
    [SPACING.ONE_HUNDRED]: "mm:gap-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "mm:gap-150",
    [SPACING.TWO_HUNDRED]: "mm:gap-200",
    [SPACING.THREE_HUNDRED]: "mm:gap-300",
    [SPACING.FOUR_HUNDRED]: "mm:gap-400",
    [SPACING.FIVE_HUNDRED]: "mm:gap-500",
    [SPACING.SIX_HUNDRED]: "mm:gap-600",
    [SPACING.EIGHT_HUNDRED]: "mm:gap-800",
    [SPACING.ONE_THOUSAND]: "mm:gap-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "mm:gap-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "mm:gap-1600",
    [SPACING.XXXSMALL]: "mm:gap-50", // deprecated
    [SPACING.XXSMALL]: "mm:gap-100", // deprecated
    [SPACING.XSMALL]: "mm:gap-200", // deprecated
    [SPACING.SMALL]: "mm:gap-300", // depcrecated
    [SPACING.MEDIUM]: "mm:gap-400", // deprecated
    [SPACING.LARGE]: "mm:gap-600", // deprecated
    [SPACING.XLARGE]: "mm:gap-800", // deprecated
    [SPACING.XXLARGE]: "mm:gap-1000", // deprecated
    [SPACING.XXXLARGE]: "mm:gap-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACING.NONE]: "lm:gap-none",
    [SPACING.FIFTY]: "lm:gap-50",
    [SPACING.ONE_HUNDRED]: "lm:gap-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "lm:gap-150",
    [SPACING.TWO_HUNDRED]: "lm:gap-200",
    [SPACING.THREE_HUNDRED]: "lm:gap-300",
    [SPACING.FOUR_HUNDRED]: "lm:gap-400",
    [SPACING.FIVE_HUNDRED]: "lm:gap-500",
    [SPACING.SIX_HUNDRED]: "lm:gap-600",
    [SPACING.EIGHT_HUNDRED]: "lm:gap-800",
    [SPACING.ONE_THOUSAND]: "lm:gap-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "lm:gap-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "lm:gap-1600",
    [SPACING.XXXSMALL]: "lm:gap-50", // deprecated
    [SPACING.XXSMALL]: "lm:gap-100", // deprecated
    [SPACING.XSMALL]: "lm:gap-200", // deprecated
    [SPACING.SMALL]: "lm:gap-300", // depcrecated
    [SPACING.MEDIUM]: "lm:gap-400", // deprecated
    [SPACING.LARGE]: "lm:gap-600", // deprecated
    [SPACING.XLARGE]: "lm:gap-800", // deprecated
    [SPACING.XXLARGE]: "lm:gap-1000", // deprecated
    [SPACING.XXXLARGE]: "lm:gap-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SPACING.NONE]: "tb:gap-none",
    [SPACING.FIFTY]: "tb:gap-50",
    [SPACING.ONE_HUNDRED]: "tb:gap-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "tb:gap-150",
    [SPACING.TWO_HUNDRED]: "tb:gap-200",
    [SPACING.THREE_HUNDRED]: "tb:gap-300",
    [SPACING.FOUR_HUNDRED]: "tb:gap-400",
    [SPACING.FIVE_HUNDRED]: "tb:gap-500",
    [SPACING.SIX_HUNDRED]: "tb:gap-600",
    [SPACING.EIGHT_HUNDRED]: "tb:gap-800",
    [SPACING.ONE_THOUSAND]: "tb:gap-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "tb:gap-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "tb:gap-1600",
    [SPACING.XXXSMALL]: "tb:gap-50", // deprecated
    [SPACING.XXSMALL]: "tb:gap-100", // deprecated
    [SPACING.XSMALL]: "tb:gap-200", // deprecated
    [SPACING.SMALL]: "tb:gap-300", // depcrecated
    [SPACING.MEDIUM]: "tb:gap-400", // deprecated
    [SPACING.LARGE]: "tb:gap-600", // deprecated
    [SPACING.XLARGE]: "tb:gap-800", // deprecated
    [SPACING.XXLARGE]: "tb:gap-1000", // deprecated
    [SPACING.XXXLARGE]: "tb:gap-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SPACING.NONE]: "de:gap-none",
    [SPACING.FIFTY]: "de:gap-50",
    [SPACING.ONE_HUNDRED]: "de:gap-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "de:gap-150",
    [SPACING.TWO_HUNDRED]: "de:gap-200",
    [SPACING.THREE_HUNDRED]: "de:gap-300",
    [SPACING.FOUR_HUNDRED]: "de:gap-400",
    [SPACING.FIVE_HUNDRED]: "de:gap-500",
    [SPACING.SIX_HUNDRED]: "de:gap-600",
    [SPACING.EIGHT_HUNDRED]: "de:gap-800",
    [SPACING.ONE_THOUSAND]: "de:gap-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "de:gap-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "de:gap-1600",
    [SPACING.XXXSMALL]: "de:gap-50", // deprecated
    [SPACING.XXSMALL]: "de:gap-100", // deprecated
    [SPACING.XSMALL]: "de:gap-200", // deprecated
    [SPACING.SMALL]: "de:gap-300", // depcrecated
    [SPACING.MEDIUM]: "de:gap-400", // deprecated
    [SPACING.LARGE]: "de:gap-600", // deprecated
    [SPACING.XLARGE]: "de:gap-800", // deprecated
    [SPACING.XXLARGE]: "de:gap-1000", // deprecated
    [SPACING.XXXLARGE]: "de:gap-[52px]", // deprecated
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACING.NONE]: "ld:gap-none",
    [SPACING.FIFTY]: "ld:gap-50",
    [SPACING.ONE_HUNDRED]: "ld:gap-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "ld:gap-150",
    [SPACING.TWO_HUNDRED]: "ld:gap-200",
    [SPACING.THREE_HUNDRED]: "ld:gap-300",
    [SPACING.FOUR_HUNDRED]: "ld:gap-400",
    [SPACING.FIVE_HUNDRED]: "ld:gap-500",
    [SPACING.SIX_HUNDRED]: "ld:gap-600",
    [SPACING.EIGHT_HUNDRED]: "ld:gap-800",
    [SPACING.ONE_THOUSAND]: "ld:gap-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "ld:gap-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "ld:gap-1600",
    [SPACING.XXXSMALL]: "ld:gap-50", // deprecated
    [SPACING.XXSMALL]: "ld:gap-100", // deprecated
    [SPACING.XSMALL]: "ld:gap-200", // deprecated
    [SPACING.SMALL]: "ld:gap-300", // depcrecated
    [SPACING.MEDIUM]: "ld:gap-400", // deprecated
    [SPACING.LARGE]: "ld:gap-600", // deprecated
    [SPACING.XLARGE]: "ld:gap-800", // deprecated
    [SPACING.XXLARGE]: "ld:gap-1000", // deprecated
    [SPACING.XXXLARGE]: "ld:gap-[52px]", // deprecated
  },
};

const safariVerticalTokens = {
  [SPACING.REVERSE]: "safari:not-last:*:space-y-reverse",
  [SPACING.NONE]: "safari:not-last:*:space-y-none",
  [SPACING.FIFTY]: "safari:not-last:*:space-y-50",
  [SPACING.ONE_HUNDRED]: "safari:not-last:*:space-y-100",
  [SPACING.ONE_HUNDRED_FIFTY]: "safari:not-last:*:space-y-150",
  [SPACING.TWO_HUNDRED]: "safari:not-last:*:space-y-200",
  [SPACING.THREE_HUNDRED]: "safari:not-last:*:space-y-300",
  [SPACING.FOUR_HUNDRED]: "safari:not-last:*:space-y-400",
  [SPACING.FIVE_HUNDRED]: "safari:not-last:*:space-y-500",
  [SPACING.SIX_HUNDRED]: "safari:not-last:*:space-y-600",
  [SPACING.EIGHT_HUNDRED]: "safari:not-last:*:space-y-800",
  [SPACING.ONE_THOUSAND]: "safari:not-last:*:space-y-1000",
  [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "safari:not-last:*:space-y-1200",
  [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "safari:not-last:*:space-y-1600",
  [SPACING.XXXSMALL]: "safari:not-last:*:space-y-50", // deprecated
  [SPACING.XXSMALL]: "safari:not-last:*:space-y-100", // deprecated
  [SPACING.XSMALL]: "safari:not-last:*:space-y-200", // deprecated
  [SPACING.SMALL]: "safari:not-last:*:space-y-300", // depcrecated
  [SPACING.MEDIUM]: "safari:not-last:*:space-y-400", // deprecated
  [SPACING.LARGE]: "safari:not-last:*:space-y-600", // deprecated
  [SPACING.XLARGE]: "safari:not-last:*:space-y-800", // deprecated
  [SPACING.XXLARGE]: "safari:not-last:*:space-y-1000", // deprecated
  [SPACING.XXXLARGE]: "safari:not-last:*:space-y-[52px]", // deprecated
  [QUERIES.MEDIUMMOBILE]: {
    [SPACING.REVERSE]: "mm:safari:not-last:*:space-y-reverse",
    [SPACING.NONE]: "mm:safari:*:not-last:space-y-none",
    [SPACING.FIFTY]: "mm:safari:not-last:*:space-y-50",
    [SPACING.ONE_HUNDRED]: "mm:safari:not-last:*:space-y-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "mm:safari:not-last:*:space-y-150",
    [SPACING.TWO_HUNDRED]: "mm:safari:not-last:*:space-y-200",
    [SPACING.THREE_HUNDRED]: "mm:safari:not-last:*:space-y-300",
    [SPACING.FOUR_HUNDRED]: "mm:safari:not-last:*:space-y-400",
    [SPACING.FIVE_HUNDRED]: "mm:safari:not-last:*:space-y-500",
    [SPACING.SIX_HUNDRED]: "mm:safari:not-last:*:space-y-600",
    [SPACING.EIGHT_HUNDRED]: "mm:safari:not-last:*:space-y-800",
    [SPACING.ONE_THOUSAND]: "mm:safari:not-last:*:space-y-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "mm:safari:not-last:*:space-y-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "mm:safari:not-last:*:space-y-1600",
    [SPACING.XXXSMALL]: "mm:safari:*:not-last:space-y-50", // deprecated
    [SPACING.XXSMALL]: "mm:safari:not-last:*:space-y-100", // deprecated
    [SPACING.XSMALL]: "mm:safari:not-last:*:space-y-200", // deprecated
    [SPACING.SMALL]: "mm:safari:not-last:*:space-y-300", // depcrecated
    [SPACING.MEDIUM]: "mm:safari:not-last:*:space-y-400", // deprecated
    [SPACING.LARGE]: "mm:safari:not-last:*:space-y-600", // deprecated
    [SPACING.XLARGE]: "mm:safari:not-last:*:space-y-800", // deprecated
    [SPACING.XXLARGE]: "mm:safari:not-last:*:space-y-1000", // deprecated
    [SPACING.XXXLARGE]: "mm:safari:not-last:*:space-y-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACING.REVERSE]: "lm:safari:not-last:*:space-y-reverse",
    [SPACING.NONE]: "lm:safari:not-last:*:space-y-none",
    [SPACING.FIFTY]: "lm:safari:not-last:*:space-y-50",
    [SPACING.ONE_HUNDRED]: "lm:safari:not-last:*:space-y-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "lm:safari:not-last:*:space-y-150",
    [SPACING.TWO_HUNDRED]: "lm:safari:not-last:*:space-y-200",
    [SPACING.THREE_HUNDRED]: "lm:safari:not-last:*:space-y-300",
    [SPACING.FOUR_HUNDRED]: "lm:safari:not-last:*:space-y-400",
    [SPACING.FIVE_HUNDRED]: "lm:safari:not-last:*:space-y-500",
    [SPACING.SIX_HUNDRED]: "lm:safari:not-last:*:space-y-600",
    [SPACING.EIGHT_HUNDRED]: "lm:safari:not-last:*:space-y-800",
    [SPACING.ONE_THOUSAND]: "lm:safari:not-last:*:space-y-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "lm:safari:not-last:*:space-y-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "lm:safari:not-last:*:space-y-1600",
    [SPACING.XXXSMALL]: "lm:safari:not-last:*:space-y-50", // deprecated
    [SPACING.XXSMALL]: "lm:safari:not-last:*:space-y-100", // deprecated
    [SPACING.XSMALL]: "lm:safari:not-last:*:space-y-200", // deprecated
    [SPACING.SMALL]: "lm:safari:not-last:*:space-y-300", // depcrecated
    [SPACING.MEDIUM]: "lm:safari:not-last:*:space-y-400", // deprecated
    [SPACING.LARGE]: "lm:safari:not-last:*:space-y-600", // deprecated
    [SPACING.XLARGE]: "lm:safari:not-last:*:space-y-800", // deprecated
    [SPACING.XXLARGE]: "lm:safari:not-last:*:space-y-1000", // deprecated
    [SPACING.XXXLARGE]: "lm:safari:not-last:*:space-y-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SPACING.REVERSE]: "tb:safari:not-last:*:space-y-reverse",
    [SPACING.NONE]: "tb:safari:not-last:*:space-y-none",
    [SPACING.FIFTY]: "tb:safari:not-last:*:space-y-50",
    [SPACING.ONE_HUNDRED]: "tb:safari:not-last:*:space-y-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "tb:safari:not-last:*:space-y-150",
    [SPACING.TWO_HUNDRED]: "tb:safari:not-last:*:space-y-200",
    [SPACING.THREE_HUNDRED]: "tb:safari:not-last:*:space-y-300",
    [SPACING.FOUR_HUNDRED]: "tb:safari:not-last:*:space-y-400",
    [SPACING.FIVE_HUNDRED]: "tb:safari:not-last:*:space-y-500",
    [SPACING.SIX_HUNDRED]: "tb:safari:not-last:*:space-y-600",
    [SPACING.EIGHT_HUNDRED]: "tb:safari:not-last:*:space-y-800",
    [SPACING.ONE_THOUSAND]: "tb:safari:not-last:*:space-y-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "tb:safari:not-last:*:space-y-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "tb:safari:not-last:*:space-y-1600",
    [SPACING.XXXSMALL]: "tb:safari:not-last:*:space-y-50", // deprecated
    [SPACING.XXSMALL]: "tb:safari:not-last:*:space-y-100", // deprecated
    [SPACING.XSMALL]: "tb:safari:not-last:*:space-y-200", // deprecated
    [SPACING.SMALL]: "tb:safari:not-last:*:space-y-300", // depcrecated
    [SPACING.MEDIUM]: "tb:safari:not-last:*:space-y-400", // deprecated
    [SPACING.LARGE]: "tb:safari:not-last:*:space-y-600", // deprecated
    [SPACING.XLARGE]: "tb:safari:not-last:*:space-y-800", // deprecated
    [SPACING.XXLARGE]: "tb:safari:not-last:*:space-y-1000", // deprecated
    [SPACING.XXXLARGE]: "tb:safari:not-last:*:space-y-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SPACING.REVERSE]: "de:safari:not-last:*:space-y-reverse",
    [SPACING.NONE]: "de:safari:not-last:*:space-y-none",
    [SPACING.FIFTY]: "de:safari:not-last:*:space-y-50",
    [SPACING.ONE_HUNDRED]: "de:safari:not-last:*:space-y-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "de:safari:not-last:*:space-y-150",
    [SPACING.TWO_HUNDRED]: "de:safari:not-last:*:space-y-200",
    [SPACING.THREE_HUNDRED]: "de:safari:not-last:*:space-y-300",
    [SPACING.FOUR_HUNDRED]: "de:safari:not-last:*:space-y-400",
    [SPACING.FIVE_HUNDRED]: "de:safari:not-last:*:space-y-500",
    [SPACING.SIX_HUNDRED]: "de:safari:not-last:*:space-y-600",
    [SPACING.EIGHT_HUNDRED]: "de:safari:not-last:*:space-y-800",
    [SPACING.ONE_THOUSAND]: "de:safari:not-last:*:space-y-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "de:safari:not-last:*:space-y-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "de:safari:not-last:*:space-y-1600",
    [SPACING.XXXSMALL]: "de:safari:not-last:*:space-y-50", // deprecated
    [SPACING.XXSMALL]: "de:safari:not-last:*:space-y-100", // deprecated
    [SPACING.XSMALL]: "de:safari:not-last:*:space-y-200", // deprecated
    [SPACING.SMALL]: "de:safari:not-last:*:space-y-300", // depcrecated
    [SPACING.MEDIUM]: "de:safari:not-last:*:space-y-400", // deprecated
    [SPACING.LARGE]: "de:safari:not-last:*:space-y-600", // deprecated
    [SPACING.XLARGE]: "de:safari:not-last:*:space-y-800", // deprecated
    [SPACING.XXLARGE]: "de:safari:not-last:*:space-y-1000", // deprecated
    [SPACING.XXXLARGE]: "de:safari:not-last:*:space-y-[52px]", // deprecated
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACING.REVERSE]: "ld:safari:not-last:*:space-y-reverse",
    [SPACING.NONE]: "ld:safari:not-last:*:space-y-none",
    [SPACING.FIFTY]: "ld:safari:not-last:*:space-y-50",
    [SPACING.ONE_HUNDRED]: "ld:safari:not-last:*:space-y-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "ld:safari:not-last:*:space-y-150",
    [SPACING.TWO_HUNDRED]: "ld:safari:not-last:*:space-y-200",
    [SPACING.THREE_HUNDRED]: "ld:safari:not-last:*:space-y-300",
    [SPACING.FOUR_HUNDRED]: "ld:safari:not-last:*:space-y-400",
    [SPACING.FIVE_HUNDRED]: "ld:safari:not-last:*:space-y-500",
    [SPACING.SIX_HUNDRED]: "ld:safari:not-last:*:space-y-600",
    [SPACING.EIGHT_HUNDRED]: "ld:safari:not-last:*:space-y-800",
    [SPACING.ONE_THOUSAND]: "ld:safari:not-last:*:space-y-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "ld:safari:not-last:*:space-y-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "ld:safari:not-last:*:space-y-1600",
    [SPACING.XXXSMALL]: "ld:safari:not-last:*:space-y-50", // deprecated
    [SPACING.XXSMALL]: "ld:safari:not-last:*:space-y-100", // deprecated
    [SPACING.XSMALL]: "ld:safari:not-last:*:space-y-200", // deprecated
    [SPACING.SMALL]: "ld:safari:not-last:*:space-y-300", // depcrecated
    [SPACING.MEDIUM]: "ld:safari:not-last:*:space-y-400", // deprecated
    [SPACING.LARGE]: "ld:safari:not-last:*:space-y-600", // deprecated
    [SPACING.XLARGE]: "ld:safari:not-last:*:space-y-800", // deprecated
    [SPACING.XXLARGE]: "ld:safari:not-last:*:space-y-1000", // deprecated
    [SPACING.XXXLARGE]: "ld:safari:not-last:*:space-y-[52px]", // deprecated
  },
};

const safariHorizontalTokens = {
  [SPACING.REVERSE]: "safari:not-last:*:space-x-reverse",
  [SPACING.NONE]: "safari:not-last:*:space-x-none",
  [SPACING.FIFTY]: "safari:not-last:*:space-x-50",
  [SPACING.ONE_HUNDRED]: "safari:not-last:*:space-x-100",
  [SPACING.ONE_HUNDRED_FIFTY]: "safari:not-last:*:space-x-150",
  [SPACING.TWO_HUNDRED]: "safari:not-last:*:space-x-200",
  [SPACING.THREE_HUNDRED]: "safari:not-last:*:space-x-300",
  [SPACING.FOUR_HUNDRED]: "safari:not-last:*:space-x-400",
  [SPACING.FIVE_HUNDRED]: "safari:not-last:*:space-x-500",
  [SPACING.SIX_HUNDRED]: "safari:not-last:*:space-x-600",
  [SPACING.EIGHT_HUNDRED]: "safari:not-last:*:space-x-800",
  [SPACING.ONE_THOUSAND]: "safari:not-last:*:space-x-1000",
  [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "safari:not-last:*:space-x-1200",
  [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "safari:not-last:*:space-x-1600",
  [SPACING.XXXSMALL]: "safari:not-last:*:space-x-50", // deprecated
  [SPACING.XXSMALL]: "safari:not-last:*:space-x-100", // deprecated
  [SPACING.XSMALL]: "safari:not-last:*:space-x-200", // deprecated
  [SPACING.SMALL]: "safari:not-last:*:space-x-300", // depcrecated
  [SPACING.MEDIUM]: "safari:not-last:*:space-x-400", // deprecated
  [SPACING.LARGE]: "safari:not-last:*:space-x-600", // deprecated
  [SPACING.XLARGE]: "safari:not-last:*:space-x-800", // deprecated
  [SPACING.XXLARGE]: "safari:not-last:*:space-x-1000", // deprecated
  [SPACING.XXXLARGE]: "safari:not-last:*:space-x-[52px]", // deprecated
  [QUERIES.MEDIUMMOBILE]: {
    [SPACING.REVERSE]: "mm:safari:not-last:*:space-x-reverse",
    [SPACING.NONE]: "mm:safari:not-last:*:space-x-none",
    [SPACING.FIFTY]: "mm:safari:not-last:*:space-x-50",
    [SPACING.ONE_HUNDRED]: "mm:safari:not-last:*:space-x-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "mm:safari:not-last:*:space-x-150",
    [SPACING.TWO_HUNDRED]: "mm:safari:not-last:*:space-x-200",
    [SPACING.THREE_HUNDRED]: "mm:safari:not-last:*:space-x-300",
    [SPACING.FOUR_HUNDRED]: "mm:safari:not-last:*:space-x-400",
    [SPACING.FIVE_HUNDRED]: "mm:safari:not-last:*:space-x-500",
    [SPACING.SIX_HUNDRED]: "mm:safari:not-last:*:space-x-600",
    [SPACING.EIGHT_HUNDRED]: "mm:safari:not-last:*:space-x-800",
    [SPACING.ONE_THOUSAND]: "mm:safari:not-last:*:space-x-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "mm:safari:not-last:*:space-x-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "mm:safari:not-last:*:space-x-1600",
    [SPACING.XXXSMALL]: "mm:safari:not-last:*:space-x-50", // deprecated
    [SPACING.XXSMALL]: "mm:safari:not-last:*:space-x-100", // deprecated
    [SPACING.XSMALL]: "mm:safari:not-last:*:space-x-200", // deprecated
    [SPACING.SMALL]: "mm:safari:not-last:*:space-x-300", // depcrecated
    [SPACING.MEDIUM]: "mm:safari:not-last:*:space-x-400", // deprecated
    [SPACING.LARGE]: "mm:safari:not-last:*:space-x-600", // deprecated
    [SPACING.XLARGE]: "mm:safari:not-last:*:space-x-800", // deprecated
    [SPACING.XXLARGE]: "mm:safari:not-last:*:space-x-1000", // deprecated
    [SPACING.XXXLARGE]: "mm:safari:not-last:*:space-x-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACING.REVERSE]: "lm:safari:not-last:*:space-x-reverse",
    [SPACING.NONE]: "lm:safari:not-last:*:space-x-none",
    [SPACING.FIFTY]: "lm:safari:not-last:*:space-x-50",
    [SPACING.ONE_HUNDRED]: "lm:safari:not-last:*:space-x-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "lm:safari:not-last:*:space-x-150",
    [SPACING.TWO_HUNDRED]: "lm:safari:not-last:*:space-x-200",
    [SPACING.THREE_HUNDRED]: "lm:safari:not-last:*:space-x-300",
    [SPACING.FOUR_HUNDRED]: "lm:safari:not-last:*:space-x-400",
    [SPACING.FIVE_HUNDRED]: "lm:safari:not-last:*:space-x-500",
    [SPACING.SIX_HUNDRED]: "lm:safari:not-last:*:space-x-600",
    [SPACING.EIGHT_HUNDRED]: "lm:safari:not-last:*:space-x-800",
    [SPACING.ONE_THOUSAND]: "lm:safari:not-last:*:space-x-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "lm:safari:not-last:*:space-x-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "lm:safari:not-last:*:space-x-1600",
    [SPACING.XXXSMALL]: "lm:safari:not-last:*:space-x-50", // deprecated
    [SPACING.XXSMALL]: "lm:safari:not-last:*:space-x-100", // deprecated
    [SPACING.XSMALL]: "lm:safari:not-last:*:space-x-200", // deprecated
    [SPACING.SMALL]: "lm:safari:not-last:*:space-x-300", // depcrecated
    [SPACING.MEDIUM]: "lm:safari:not-last:*:space-x-400", // deprecated
    [SPACING.LARGE]: "lm:safari:not-last:*:space-x-600", // deprecated
    [SPACING.XLARGE]: "lm:safari:not-last:*:space-x-800", // deprecated
    [SPACING.XXLARGE]: "lm:safari:not-last:*:space-x-1000", // deprecated
    [SPACING.XXXLARGE]: "lm:safari:not-last:*:space-x-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SPACING.REVERSE]: "tb:safari:not-last:*:space-x-reverse",
    [SPACING.NONE]: "tb:safari:not-last:*:space-x-none",
    [SPACING.FIFTY]: "tb:safari:not-last:*:space-x-50",
    [SPACING.ONE_HUNDRED]: "tb:safari:not-last:*:space-x-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "tb:safari:not-last:*:space-x-150",
    [SPACING.TWO_HUNDRED]: "tb:safari:not-last:*:space-x-200",
    [SPACING.THREE_HUNDRED]: "tb:safari:not-last:*:space-x-300",
    [SPACING.FOUR_HUNDRED]: "tb:safari:not-last:*:space-x-400",
    [SPACING.FIVE_HUNDRED]: "tb:safari:not-last:*:space-x-500",
    [SPACING.SIX_HUNDRED]: "tb:safari:not-last:*:space-x-600",
    [SPACING.EIGHT_HUNDRED]: "tb:safari:not-last:*:space-x-800",
    [SPACING.ONE_THOUSAND]: "tb:safari:not-last:*:space-x-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "tb:safari:not-last:*:space-x-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "tb:safari:not-last:*:space-x-1600",
    [SPACING.XXXSMALL]: "tb:safari:not-last:*:space-x-50", // deprecated
    [SPACING.XXSMALL]: "tb:safari:not-last:*:space-x-100", // deprecated
    [SPACING.XSMALL]: "tb:safari:not-last:*:space-x-200", // deprecated
    [SPACING.SMALL]: "tb:safari:not-last:*:space-x-300", // depcrecated
    [SPACING.MEDIUM]: "tb:safari:not-last:*:space-x-400", // deprecated
    [SPACING.LARGE]: "tb:safari:not-last:*:space-x-600", // deprecated
    [SPACING.XLARGE]: "tb:safari:not-last:*:space-x-800", // deprecated
    [SPACING.XXLARGE]: "tb:safari:not-last:*:space-x-1000", // deprecated
    [SPACING.XXXLARGE]: "tb:safari:not-last:*:space-x-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SPACING.REVERSE]: "de:safari:not-last:*:space-x-reverse",
    [SPACING.NONE]: "de:safari:not-last:*:space-x-none",
    [SPACING.FIFTY]: "de:safari:not-last:*:space-x-50",
    [SPACING.ONE_HUNDRED]: "de:safari:not-last:*:space-x-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "de:safari:not-last:*:space-x-150",
    [SPACING.TWO_HUNDRED]: "de:safari:not-last:*:space-x-200",
    [SPACING.THREE_HUNDRED]: "de:safari:not-last:*:space-x-300",
    [SPACING.FOUR_HUNDRED]: "de:safari:not-last:*:space-x-400",
    [SPACING.FIVE_HUNDRED]: "de:safari:not-last:*:space-x-500",
    [SPACING.SIX_HUNDRED]: "de:safari:not-last:*:space-x-600",
    [SPACING.EIGHT_HUNDRED]: "de:safari:not-last:*:space-x-800",
    [SPACING.ONE_THOUSAND]: "de:safari:not-last:*:space-x-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "de:safari:not-last:*:space-x-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "de:safari:not-last:*:space-x-1600",
    [SPACING.XXXSMALL]: "de:safari:not-last:*:space-x-50", // deprecated
    [SPACING.XXSMALL]: "de:safari:not-last:*:space-x-100", // deprecated
    [SPACING.XSMALL]: "de:safari:not-last:*:space-x-200", // deprecated
    [SPACING.SMALL]: "de:safari:not-last:*:space-x-300", // depcrecated
    [SPACING.MEDIUM]: "de:safari:not-last:*:space-x-400", // deprecated
    [SPACING.LARGE]: "de:safari:not-last:*:space-x-600", // deprecated
    [SPACING.XLARGE]: "de:safari:not-last:*:space-x-800", // deprecated
    [SPACING.XXLARGE]: "de:safari:not-last:*:space-x-1000", // deprecated
    [SPACING.XXXLARGE]: "de:safari:not-last:*:space-x-[52px]", // deprecated
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACING.REVERSE]: "ld:safari:not-last:*:space-x-reverse",
    [SPACING.NONE]: "ld:safari:not-last:*:space-x-none",
    [SPACING.FIFTY]: "ld:safari:not-last:*:space-x-50",
    [SPACING.ONE_HUNDRED]: "ld:safari:not-last:*:space-x-100",
    [SPACING.ONE_HUNDRED_FIFTY]: "ld:safari:not-last:*:space-x-150",
    [SPACING.TWO_HUNDRED]: "ld:safari:not-last:*:space-x-200",
    [SPACING.THREE_HUNDRED]: "ld:safari:not-last:*:space-x-300",
    [SPACING.FOUR_HUNDRED]: "ld:safari:not-last:*:space-x-400",
    [SPACING.FIVE_HUNDRED]: "ld:safari:not-last:*:space-x-500",
    [SPACING.SIX_HUNDRED]: "ld:safari:not-last:*:space-x-600",
    [SPACING.EIGHT_HUNDRED]: "ld:safari:not-last:*:space-x-800",
    [SPACING.ONE_THOUSAND]: "ld:safari:not-last:*:space-x-1000",
    [SPACING.ONE_THOUSAND_TWO_HUNDRED]: "ld:safari:not-last:*:space-x-1200",
    [SPACING.ONE_THOUSAND_SIX_HUNDRED]: "ld:safari:not-last:*:space-x-1600",
    [SPACING.XXXSMALL]: "ld:safari:not-last:*:space-x-50", // deprecated
    [SPACING.XXSMALL]: "ld:safari:not-last:*:space-x-100", // deprecated
    [SPACING.XSMALL]: "ld:safari:not-last:*:space-x-200", // deprecated
    [SPACING.SMALL]: "ld:safari:not-last:*:space-x-300", // depcrecated
    [SPACING.MEDIUM]: "ld:safari:not-last:*:space-x-400", // deprecated
    [SPACING.LARGE]: "ld:safari:not-last:*:space-x-600", // deprecated
    [SPACING.XLARGE]: "ld:safari:not-last:*:space-x-800", // deprecated
    [SPACING.XXLARGE]: "ld:safari:not-last:*:space-x-1000", // deprecated
    [SPACING.XXXLARGE]: "ld:safari:not-last:*:space-x-[52px]", // deprecated
  },
};

const getSpacingClasses = (
  spacing: `${SPACING}`,
  viewport?: QUERIES,
  direction: Direction = "row",
  legacy = false,
): string => {
  if (legacy) {
    const horizontalRoot = viewport ? horizontalTokens[viewport] : horizontalTokens;
    const verticalRoot = viewport ? verticalTokens[viewport] : verticalTokens;

    const tokens = cx(
      (direction === "row" || direction === "row-reverse") && [
        horizontalRoot[spacing],
        verticalRoot.none,
        "rtl:space-x-reverse",
      ],
      direction === "row-reverse" && horizontalRoot.reverse,
      (direction === "column" || direction === "column-reverse") && [
        verticalRoot[spacing],
        horizontalRoot.none,
      ],
      direction === "column-reverse" && verticalRoot.reverse,
    );

    return tokens;
  }

  // TODO: refactor after iOS Safari 14.1 support drop
  return viewport
    ? cx(
        gapTokens[viewport][spacing],
        safariHorizontalTokens[viewport][spacing],
        direction === "column" && safariVerticalTokens[viewport][spacing],
      )
    : cx(
        gapTokens[spacing],
        safariHorizontalTokens[spacing],
        direction === "column" && safariVerticalTokens[spacing],
      );
};

export default getSpacingClasses;
