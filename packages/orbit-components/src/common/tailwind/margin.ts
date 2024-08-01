import type { CSSProperties } from "react";

import type { ObjectProperty } from "../types";
import { QUERIES } from "../../utils/mediaQuery";

export enum SIZES {
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

export const marginClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "m-0",
  [SIZES.FIFTY]: "m-50",
  [SIZES.ONE_HUNDRED]: "m-100",
  [SIZES.ONE_HUNDRED_FIFTY]: "m-150",
  [SIZES.TWO_HUNDRED]: "m-200",
  [SIZES.THREE_HUNDRED]: "m-300",
  [SIZES.FOUR_HUNDRED]: "m-400",
  [SIZES.FIVE_HUNDRED]: "m-500",
  [SIZES.SIX_HUNDRED]: "m-600",
  [SIZES.EIGHT_HUNDRED]: "m-800",
  [SIZES.ONE_THOUSAND]: "m-1000",
  [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "m-1200",
  [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "m-1600",
  [SIZES.XXXSMALL]: "m-50", // deprecated
  [SIZES.XXSMALL]: "m-100", // deprecated
  [SIZES.XSMALL]: "m-200", // deprecated
  [SIZES.SMALL]: "m-300", // deprecated
  [SIZES.MEDIUM]: "m-400", // deprecated
  [SIZES.LARGE]: "m-600", // deprecated
  [SIZES.XLARGE]: "m-800", // deprecated
  [SIZES.XXLARGE]: "m-1000", // deprecated
  [SIZES.XXXLARGE]: "m-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:m-0",
    [SIZES.FIFTY]: "ld:m-50",
    [SIZES.ONE_HUNDRED]: "ld:m-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "ld:m-150",
    [SIZES.TWO_HUNDRED]: "ld:m-200",
    [SIZES.THREE_HUNDRED]: "ld:m-300",
    [SIZES.FOUR_HUNDRED]: "ld:m-400",
    [SIZES.FIVE_HUNDRED]: "ld:m-500",
    [SIZES.SIX_HUNDRED]: "ld:m-600",
    [SIZES.EIGHT_HUNDRED]: "ld:m-800",
    [SIZES.ONE_THOUSAND]: "ld:m-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ld:m-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ld:m-1600",
    [SIZES.XXXSMALL]: "ld:m-50", // deprecated
    [SIZES.XXSMALL]: "ld:m-100", // deprecated
    [SIZES.XSMALL]: "ld:m-200", // deprecated
    [SIZES.SMALL]: "ld:m-300", // deprecated
    [SIZES.MEDIUM]: "ld:m-400", // deprecated
    [SIZES.LARGE]: "ld:m-600", // deprecated
    [SIZES.XLARGE]: "ld:m-800", // deprecated
    [SIZES.XXLARGE]: "ld:m-1000", // deprecated
    [SIZES.XXXLARGE]: "ld:m-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:m-0",
    [SIZES.FIFTY]: "de:m-50",
    [SIZES.ONE_HUNDRED]: "de:m-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "de:m-150",
    [SIZES.TWO_HUNDRED]: "de:m-200",
    [SIZES.THREE_HUNDRED]: "de:m-300",
    [SIZES.FOUR_HUNDRED]: "de:m-400",
    [SIZES.FIVE_HUNDRED]: "de:m-500",
    [SIZES.SIX_HUNDRED]: "de:m-600",
    [SIZES.EIGHT_HUNDRED]: "de:m-800",
    [SIZES.ONE_THOUSAND]: "de:m-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "de:m-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "de:m-1600",
    [SIZES.XXXSMALL]: "de:m-50", // deprecated
    [SIZES.XXSMALL]: "de:m-100", // deprecated
    [SIZES.XSMALL]: "de:m-200", // deprecated
    [SIZES.SMALL]: "de:m-300", // deprecated
    [SIZES.MEDIUM]: "de:m-400", // deprecated
    [SIZES.LARGE]: "de:m-600", // deprecated
    [SIZES.XLARGE]: "de:m-800", // deprecated
    [SIZES.XXLARGE]: "de:m-1000", // deprecated
    [SIZES.XXXLARGE]: "de:m-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:m-0",
    [SIZES.FIFTY]: "tb:m-50",
    [SIZES.ONE_HUNDRED]: "tb:m-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "tb:m-150",
    [SIZES.TWO_HUNDRED]: "tb:m-200",
    [SIZES.THREE_HUNDRED]: "tb:m-300",
    [SIZES.FOUR_HUNDRED]: "tb:m-400",
    [SIZES.FIVE_HUNDRED]: "tb:m-500",
    [SIZES.SIX_HUNDRED]: "tb:m-600",
    [SIZES.EIGHT_HUNDRED]: "tb:m-800",
    [SIZES.ONE_THOUSAND]: "tb:m-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "tb:m-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "tb:m-1600",
    [SIZES.XXXSMALL]: "tb:m-50", // deprecated
    [SIZES.XXSMALL]: "tb:m-100", // deprecated
    [SIZES.XSMALL]: "tb:m-200", // deprecated
    [SIZES.SMALL]: "tb:m-300", // deprecated
    [SIZES.MEDIUM]: "tb:m-400", // deprecated
    [SIZES.LARGE]: "tb:m-600", // deprecated
    [SIZES.XLARGE]: "tb:m-800", // deprecated
    [SIZES.XXLARGE]: "tb:m-1000", // deprecated
    [SIZES.XXXLARGE]: "tb:m-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:m-0",
    [SIZES.FIFTY]: "lm:m-50",
    [SIZES.ONE_HUNDRED]: "lm:m-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "lm:m-150",
    [SIZES.TWO_HUNDRED]: "lm:m-200",
    [SIZES.THREE_HUNDRED]: "lm:m-300",
    [SIZES.FOUR_HUNDRED]: "lm:m-400",
    [SIZES.FIVE_HUNDRED]: "lm:m-500",
    [SIZES.SIX_HUNDRED]: "lm:m-600",
    [SIZES.EIGHT_HUNDRED]: "lm:m-800",
    [SIZES.ONE_THOUSAND]: "lm:m-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "lm:m-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "lm:m-1600",
    [SIZES.XXXSMALL]: "lm:m-50", // deprecated
    [SIZES.XXSMALL]: "lm:m-100", // deprecated
    [SIZES.XSMALL]: "lm:m-200", // deprecated
    [SIZES.SMALL]: "lm:m-300", // deprecated
    [SIZES.MEDIUM]: "lm:m-400", // deprecated
    [SIZES.LARGE]: "lm:m-600", // deprecated
    [SIZES.XLARGE]: "lm:m-800", // deprecated
    [SIZES.XXLARGE]: "lm:m-1000", // deprecated
    [SIZES.XXXLARGE]: "lm:m-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:m-0",
    [SIZES.FIFTY]: "mm:m-50",
    [SIZES.ONE_HUNDRED]: "mm:m-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "mm:m-150",
    [SIZES.TWO_HUNDRED]: "mm:m-200",
    [SIZES.THREE_HUNDRED]: "mm:m-300",
    [SIZES.FOUR_HUNDRED]: "mm:m-400",
    [SIZES.FIVE_HUNDRED]: "mm:m-500",
    [SIZES.SIX_HUNDRED]: "mm:m-600",
    [SIZES.EIGHT_HUNDRED]: "mm:m-800",
    [SIZES.ONE_THOUSAND]: "mm:m-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mm:m-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mm:m-1600",
    [SIZES.XXXSMALL]: "mm:m-50", // deprecated
    [SIZES.XXSMALL]: "mm:m-100", // deprecated
    [SIZES.XSMALL]: "mm:m-200", // deprecated
    [SIZES.SMALL]: "mm:m-300", // deprecated
    [SIZES.MEDIUM]: "mm:m-400", // deprecated
    [SIZES.LARGE]: "mm:m-600", // deprecated
    [SIZES.XLARGE]: "mm:m-800", // deprecated
    [SIZES.XXLARGE]: "mm:m-1000", // deprecated
    [SIZES.XXXLARGE]: "mm:m-[52px]", // deprecated
  },
};

export const marginTopClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "mt-0",
  [SIZES.FIFTY]: "mt-50",
  [SIZES.ONE_HUNDRED]: "mt-100",
  [SIZES.ONE_HUNDRED_FIFTY]: "mt-150",
  [SIZES.TWO_HUNDRED]: "mt-200",
  [SIZES.THREE_HUNDRED]: "mt-300",
  [SIZES.FOUR_HUNDRED]: "mt-400",
  [SIZES.FIVE_HUNDRED]: "mt-500",
  [SIZES.SIX_HUNDRED]: "mt-600",
  [SIZES.EIGHT_HUNDRED]: "mt-800",
  [SIZES.ONE_THOUSAND]: "mt-1000",
  [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mt-1200",
  [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mt-1600",
  [SIZES.XXXSMALL]: "mt-50", // deprecated
  [SIZES.XXSMALL]: "mt-100", // deprecated
  [SIZES.XSMALL]: "mt-200", // deprecated
  [SIZES.SMALL]: "mt-300", // deprecated
  [SIZES.MEDIUM]: "mt-400", // deprecated
  [SIZES.LARGE]: "mt-600", // deprecated
  [SIZES.XLARGE]: "mt-800", // deprecated
  [SIZES.XXLARGE]: "mt-1000", // deprecated
  [SIZES.XXXLARGE]: "mt-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:mt-0",
    [SIZES.FIFTY]: "ld:mt-50",
    [SIZES.ONE_HUNDRED]: "ld:mt-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "ld:mt-150",
    [SIZES.TWO_HUNDRED]: "ld:mt-200",
    [SIZES.THREE_HUNDRED]: "ld:mt-300",
    [SIZES.FOUR_HUNDRED]: "ld:mt-400",
    [SIZES.FIVE_HUNDRED]: "ld:mt-500",
    [SIZES.SIX_HUNDRED]: "ld:mt-600",
    [SIZES.EIGHT_HUNDRED]: "ld:mt-800",
    [SIZES.ONE_THOUSAND]: "ld:mt-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ld:mt-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ld:mt-1600",
    [SIZES.XXXSMALL]: "ld:mt-50", // deprecated
    [SIZES.XXSMALL]: "ld:mt-100", // deprecated
    [SIZES.XSMALL]: "ld:mt-200", // deprecated
    [SIZES.SMALL]: "ld:mt-300", // deprecated
    [SIZES.MEDIUM]: "ld:mt-400", // deprecated
    [SIZES.LARGE]: "ld:mt-600", // deprecated
    [SIZES.XLARGE]: "ld:mt-800", // deprecated
    [SIZES.XXLARGE]: "ld:mt-1000", // deprecated
    [SIZES.XXXLARGE]: "ld:mt-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:mt-0",
    [SIZES.FIFTY]: "de:mt-50",
    [SIZES.ONE_HUNDRED]: "de:mt-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "de:mt-150",
    [SIZES.TWO_HUNDRED]: "de:mt-200",
    [SIZES.THREE_HUNDRED]: "de:mt-300",
    [SIZES.FOUR_HUNDRED]: "de:mt-400",
    [SIZES.FIVE_HUNDRED]: "de:mt-500",
    [SIZES.SIX_HUNDRED]: "de:mt-600",
    [SIZES.EIGHT_HUNDRED]: "de:mt-800",
    [SIZES.ONE_THOUSAND]: "de:mt-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "de:mt-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "de:mt-1600",
    [SIZES.XXXSMALL]: "de:mt-50", // deprecated
    [SIZES.XXSMALL]: "de:mt-100", // deprecated
    [SIZES.XSMALL]: "de:mt-200", // deprecated
    [SIZES.SMALL]: "de:mt-300", // deprecated
    [SIZES.MEDIUM]: "de:mt-400", // deprecated
    [SIZES.LARGE]: "de:mt-600", // deprecated
    [SIZES.XLARGE]: "de:mt-800", // deprecated
    [SIZES.XXLARGE]: "de:mt-1000", // deprecated
    [SIZES.XXXLARGE]: "de:mt-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:mt-0",
    [SIZES.FIFTY]: "tb:mt-50",
    [SIZES.ONE_HUNDRED]: "tb:mt-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "tb:mt-150",
    [SIZES.TWO_HUNDRED]: "tb:mt-200",
    [SIZES.THREE_HUNDRED]: "tb:mt-300",
    [SIZES.FOUR_HUNDRED]: "tb:mt-400",
    [SIZES.FIVE_HUNDRED]: "tb:mt-500",
    [SIZES.SIX_HUNDRED]: "tb:mt-600",
    [SIZES.EIGHT_HUNDRED]: "tb:mt-800",
    [SIZES.ONE_THOUSAND]: "tb:mt-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "tb:mt-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "tb:mt-1600",
    [SIZES.XXXSMALL]: "tb:mt-50", // deprecated
    [SIZES.XXSMALL]: "tb:mt-100", // deprecated
    [SIZES.XSMALL]: "tb:mt-200", // deprecated
    [SIZES.SMALL]: "tb:mt-300", // deprecated
    [SIZES.MEDIUM]: "tb:mt-400", // deprecated
    [SIZES.LARGE]: "tb:mt-600", // deprecated
    [SIZES.XLARGE]: "tb:mt-800", // deprecated
    [SIZES.XXLARGE]: "tb:mt-1000", // deprecated
    [SIZES.XXXLARGE]: "tb:mt-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:mt-0",
    [SIZES.FIFTY]: "lm:mt-50",
    [SIZES.ONE_HUNDRED]: "lm:mt-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "lm:mt-150",
    [SIZES.TWO_HUNDRED]: "lm:mt-200",
    [SIZES.THREE_HUNDRED]: "lm:mt-300",
    [SIZES.FOUR_HUNDRED]: "lm:mt-400",
    [SIZES.FIVE_HUNDRED]: "lm:mt-500",
    [SIZES.SIX_HUNDRED]: "lm:mt-600",
    [SIZES.EIGHT_HUNDRED]: "lm:mt-800",
    [SIZES.ONE_THOUSAND]: "lm:mt-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "lm:mt-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "lm:mt-1600",
    [SIZES.XXXSMALL]: "lm:mt-50", // deprecated
    [SIZES.XXSMALL]: "lm:mt-100", // deprecated
    [SIZES.XSMALL]: "lm:mt-200", // deprecated
    [SIZES.SMALL]: "lm:mt-300", // deprecated
    [SIZES.MEDIUM]: "lm:mt-400", // deprecated
    [SIZES.LARGE]: "lm:mt-600", // deprecated
    [SIZES.XLARGE]: "lm:mt-800", // deprecated
    [SIZES.XXLARGE]: "lm:mt-1000", // deprecated
    [SIZES.XXXLARGE]: "lm:mt-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:mt-0",
    [SIZES.FIFTY]: "mm:mt-50",
    [SIZES.ONE_HUNDRED]: "mm:mt-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "mm:mt-150",
    [SIZES.TWO_HUNDRED]: "mm:mt-200",
    [SIZES.THREE_HUNDRED]: "mm:mt-300",
    [SIZES.FOUR_HUNDRED]: "mm:mt-400",
    [SIZES.FIVE_HUNDRED]: "mm:mt-500",
    [SIZES.SIX_HUNDRED]: "mm:mt-600",
    [SIZES.EIGHT_HUNDRED]: "mm:mt-800",
    [SIZES.ONE_THOUSAND]: "mm:mt-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mm:mt-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mm:mt-1600",
    [SIZES.XXXSMALL]: "mm:mt-50", // deprecated
    [SIZES.XXSMALL]: "mm:mt-100", // deprecated
    [SIZES.XSMALL]: "mm:mt-200", // deprecated
    [SIZES.SMALL]: "mm:mt-300", // deprecated
    [SIZES.MEDIUM]: "mm:mt-400", // deprecated
    [SIZES.LARGE]: "mm:mt-600", // deprecated
    [SIZES.XLARGE]: "mm:mt-800", // deprecated
    [SIZES.XXLARGE]: "mm:mt-1000", // deprecated
    [SIZES.XXXLARGE]: "mm:mt-[52px]", // deprecated
  },
};

export const marginRightClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "mr-0",
  [SIZES.FIFTY]: "mr-50",
  [SIZES.ONE_HUNDRED]: "mr-100",
  [SIZES.ONE_HUNDRED_FIFTY]: "mr-150",
  [SIZES.TWO_HUNDRED]: "mr-200",
  [SIZES.THREE_HUNDRED]: "mr-300",
  [SIZES.FOUR_HUNDRED]: "mr-400",
  [SIZES.FIVE_HUNDRED]: "mr-500",
  [SIZES.SIX_HUNDRED]: "mr-600",
  [SIZES.EIGHT_HUNDRED]: "mr-800",
  [SIZES.ONE_THOUSAND]: "mr-1000",
  [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mr-1200",
  [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mr-1600",
  [SIZES.XXXSMALL]: "mr-50", // deprecated
  [SIZES.XXSMALL]: "mr-100", // deprecated
  [SIZES.XSMALL]: "mr-200", // deprecated
  [SIZES.SMALL]: "mr-300", // deprecated
  [SIZES.MEDIUM]: "mr-400", // deprecated
  [SIZES.LARGE]: "mr-600", // deprecated
  [SIZES.XLARGE]: "mr-800", // deprecated
  [SIZES.XXLARGE]: "mr-1000", // deprecated
  [SIZES.XXXLARGE]: "mr-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:mr-0",
    [SIZES.FIFTY]: "ld:mr-50",
    [SIZES.ONE_HUNDRED]: "ld:mr-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "ld:mr-150",
    [SIZES.TWO_HUNDRED]: "ld:mr-200",
    [SIZES.THREE_HUNDRED]: "ld:mr-300",
    [SIZES.FOUR_HUNDRED]: "ld:mr-400",
    [SIZES.FIVE_HUNDRED]: "ld:mr-500",
    [SIZES.SIX_HUNDRED]: "ld:mr-600",
    [SIZES.EIGHT_HUNDRED]: "ld:mr-800",
    [SIZES.ONE_THOUSAND]: "ld:mr-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ld:mr-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ld:mr-1600",
    [SIZES.XXXSMALL]: "ld:mr-50", // deprecated
    [SIZES.XXSMALL]: "ld:mr-100", // deprecated
    [SIZES.XSMALL]: "ld:mr-200", // deprecated
    [SIZES.SMALL]: "ld:mr-300", // deprecated
    [SIZES.MEDIUM]: "ld:mr-400", // deprecated
    [SIZES.LARGE]: "ld:mr-600", // deprecated
    [SIZES.XLARGE]: "ld:mr-800", // deprecated
    [SIZES.XXLARGE]: "ld:mr-1000", // deprecated
    [SIZES.XXXLARGE]: "ld:mr-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:mr-0",
    [SIZES.FIFTY]: "de:mr-50",
    [SIZES.ONE_HUNDRED]: "de:mr-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "de:mr-150",
    [SIZES.TWO_HUNDRED]: "de:mr-200",
    [SIZES.THREE_HUNDRED]: "de:mr-300",
    [SIZES.FOUR_HUNDRED]: "de:mr-400",
    [SIZES.FIVE_HUNDRED]: "de:mr-500",
    [SIZES.SIX_HUNDRED]: "de:mr-600",
    [SIZES.EIGHT_HUNDRED]: "de:mr-800",
    [SIZES.ONE_THOUSAND]: "de:mr-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "de:mr-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "de:mr-1600",
    [SIZES.XXXSMALL]: "de:mr-50", // deprecated
    [SIZES.XXSMALL]: "de:mr-100", // deprecated
    [SIZES.XSMALL]: "de:mr-200", // deprecated
    [SIZES.SMALL]: "de:mr-300", // deprecated
    [SIZES.MEDIUM]: "de:mr-400", // deprecated
    [SIZES.LARGE]: "de:mr-600", // deprecated
    [SIZES.XLARGE]: "de:mr-800", // deprecated
    [SIZES.XXLARGE]: "de:mr-1000", // deprecated
    [SIZES.XXXLARGE]: "de:mr-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:mr-0",
    [SIZES.FIFTY]: "tb:mr-50",
    [SIZES.ONE_HUNDRED]: "tb:mr-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "tb:mr-150",
    [SIZES.TWO_HUNDRED]: "tb:mr-200",
    [SIZES.THREE_HUNDRED]: "tb:mr-300",
    [SIZES.FOUR_HUNDRED]: "tb:mr-400",
    [SIZES.FIVE_HUNDRED]: "tb:mr-500",
    [SIZES.SIX_HUNDRED]: "tb:mr-600",
    [SIZES.EIGHT_HUNDRED]: "tb:mr-800",
    [SIZES.ONE_THOUSAND]: "tb:mr-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "tb:mr-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "tb:mr-1600",
    [SIZES.XXXSMALL]: "tb:mr-50", // deprecated
    [SIZES.XXSMALL]: "tb:mr-100", // deprecated
    [SIZES.XSMALL]: "tb:mr-200", // deprecated
    [SIZES.SMALL]: "tb:mr-300", // deprecated
    [SIZES.MEDIUM]: "tb:mr-400", // deprecated
    [SIZES.LARGE]: "tb:mr-600", // deprecated
    [SIZES.XLARGE]: "tb:mr-800", // deprecated
    [SIZES.XXLARGE]: "tb:mr-1000", // deprecated
    [SIZES.XXXLARGE]: "tb:mr-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:mr-0",
    [SIZES.FIFTY]: "lm:mr-50",
    [SIZES.ONE_HUNDRED]: "lm:mr-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "lm:mr-150",
    [SIZES.TWO_HUNDRED]: "lm:mr-200",
    [SIZES.THREE_HUNDRED]: "lm:mr-300",
    [SIZES.FOUR_HUNDRED]: "lm:mr-400",
    [SIZES.FIVE_HUNDRED]: "lm:mr-500",
    [SIZES.SIX_HUNDRED]: "lm:mr-600",
    [SIZES.EIGHT_HUNDRED]: "lm:mr-800",
    [SIZES.ONE_THOUSAND]: "lm:mr-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "lm:mr-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "lm:mr-1600",
    [SIZES.XXXSMALL]: "lm:mr-50", // deprecated
    [SIZES.XXSMALL]: "lm:mr-100", // deprecated
    [SIZES.XSMALL]: "lm:mr-200", // deprecated
    [SIZES.SMALL]: "lm:mr-300", // deprecated
    [SIZES.MEDIUM]: "lm:mr-400", // deprecated
    [SIZES.LARGE]: "lm:mr-600", // deprecated
    [SIZES.XLARGE]: "lm:mr-800", // deprecated
    [SIZES.XXLARGE]: "lm:mr-1000", // deprecated
    [SIZES.XXXLARGE]: "lm:mr-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:mr-0",
    [SIZES.FIFTY]: "mm:mr-50",
    [SIZES.ONE_HUNDRED]: "mm:mr-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "mm:mr-150",
    [SIZES.TWO_HUNDRED]: "mm:mr-200",
    [SIZES.THREE_HUNDRED]: "mm:mr-300",
    [SIZES.FOUR_HUNDRED]: "mm:mr-400",
    [SIZES.FIVE_HUNDRED]: "mm:mr-500",
    [SIZES.SIX_HUNDRED]: "mm:mr-600",
    [SIZES.EIGHT_HUNDRED]: "mm:mr-800",
    [SIZES.ONE_THOUSAND]: "mm:mr-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mm:mr-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mm:mr-1600",
    [SIZES.XXXSMALL]: "mm:mr-50", // deprecated
    [SIZES.XXSMALL]: "mm:mr-100", // deprecated
    [SIZES.XSMALL]: "mm:mr-200", // deprecated
    [SIZES.SMALL]: "mm:mr-300", // deprecated
    [SIZES.MEDIUM]: "mm:mr-400", // deprecated
    [SIZES.LARGE]: "mm:mr-600", // deprecated
    [SIZES.XLARGE]: "mm:mr-800", // deprecated
    [SIZES.XXLARGE]: "mm:mr-1000", // deprecated
    [SIZES.XXXLARGE]: "mm:mr-[52px]", // deprecated
  },
};

export const marginBottomClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "mb-0",
  [SIZES.FIFTY]: "mb-50",
  [SIZES.ONE_HUNDRED]: "mb-100",
  [SIZES.ONE_HUNDRED_FIFTY]: "mb-150",
  [SIZES.TWO_HUNDRED]: "mb-200",
  [SIZES.THREE_HUNDRED]: "mb-300",
  [SIZES.FOUR_HUNDRED]: "mb-400",
  [SIZES.FIVE_HUNDRED]: "mb-500",
  [SIZES.SIX_HUNDRED]: "mb-600",
  [SIZES.EIGHT_HUNDRED]: "mb-800",
  [SIZES.ONE_THOUSAND]: "mb-1000",
  [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mb-1200",
  [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mb-1600",
  [SIZES.XXXSMALL]: "mb-50", // deprecated
  [SIZES.XXSMALL]: "mb-100", // deprecated
  [SIZES.XSMALL]: "mb-200", // deprecated
  [SIZES.SMALL]: "mb-300", // deprecated
  [SIZES.MEDIUM]: "mb-400", // deprecated
  [SIZES.LARGE]: "mb-600", // deprecated
  [SIZES.XLARGE]: "mb-800", // deprecated
  [SIZES.XXLARGE]: "mb-1000", // deprecated
  [SIZES.XXXLARGE]: "mb-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:mb-0",
    [SIZES.FIFTY]: "ld:mb-50",
    [SIZES.ONE_HUNDRED]: "ld:mb-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "ld:mb-150",
    [SIZES.TWO_HUNDRED]: "ld:mb-200",
    [SIZES.THREE_HUNDRED]: "ld:mb-300",
    [SIZES.FOUR_HUNDRED]: "ld:mb-400",
    [SIZES.FIVE_HUNDRED]: "ld:mb-500",
    [SIZES.SIX_HUNDRED]: "ld:mb-600",
    [SIZES.EIGHT_HUNDRED]: "ld:mb-800",
    [SIZES.ONE_THOUSAND]: "ld:mb-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ld:mb-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ld:mb-1600",
    [SIZES.XXXSMALL]: "ld:mb-50", // deprecated
    [SIZES.XXSMALL]: "ld:mb-100", // deprecated
    [SIZES.XSMALL]: "ld:mb-200", // deprecated
    [SIZES.SMALL]: "ld:mb-300", // deprecated
    [SIZES.MEDIUM]: "ld:mb-400", // deprecated
    [SIZES.LARGE]: "ld:mb-600", // deprecated
    [SIZES.XLARGE]: "ld:mb-800", // deprecated
    [SIZES.XXLARGE]: "ld:mb-1000", // deprecated
    [SIZES.XXXLARGE]: "ld:mb-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:mb-0",
    [SIZES.FIFTY]: "de:mb-50",
    [SIZES.ONE_HUNDRED]: "de:mb-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "de:mb-150",
    [SIZES.TWO_HUNDRED]: "de:mb-200",
    [SIZES.THREE_HUNDRED]: "de:mb-300",
    [SIZES.FOUR_HUNDRED]: "de:mb-400",
    [SIZES.FIVE_HUNDRED]: "de:mb-500",
    [SIZES.SIX_HUNDRED]: "de:mb-600",
    [SIZES.EIGHT_HUNDRED]: "de:mb-800",
    [SIZES.ONE_THOUSAND]: "de:mb-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "de:mb-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "de:mb-1600",
    [SIZES.XXXSMALL]: "de:mb-50", // deprecated
    [SIZES.XXSMALL]: "de:mb-100", // deprecated
    [SIZES.XSMALL]: "de:mb-200", // deprecated
    [SIZES.SMALL]: "de:mb-300", // deprecated
    [SIZES.MEDIUM]: "de:mb-400", // deprecated
    [SIZES.LARGE]: "de:mb-600", // deprecated
    [SIZES.XLARGE]: "de:mb-800", // deprecated
    [SIZES.XXLARGE]: "de:mb-1000", // deprecated
    [SIZES.XXXLARGE]: "de:mb-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:mb-0",
    [SIZES.FIFTY]: "tb:mb-50",
    [SIZES.ONE_HUNDRED]: "tb:mb-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "tb:mb-150",
    [SIZES.TWO_HUNDRED]: "tb:mb-200",
    [SIZES.THREE_HUNDRED]: "tb:mb-300",
    [SIZES.FOUR_HUNDRED]: "tb:mb-400",
    [SIZES.FIVE_HUNDRED]: "tb:mb-500",
    [SIZES.SIX_HUNDRED]: "tb:mb-600",
    [SIZES.EIGHT_HUNDRED]: "tb:mb-800",
    [SIZES.ONE_THOUSAND]: "tb:mb-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "tb:mb-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "tb:mb-1600",
    [SIZES.XXXSMALL]: "tb:mb-50", // deprecated
    [SIZES.XXSMALL]: "tb:mb-100", // deprecated
    [SIZES.XSMALL]: "tb:mb-200", // deprecated
    [SIZES.SMALL]: "tb:mb-300", // deprecated
    [SIZES.MEDIUM]: "tb:mb-400", // deprecated
    [SIZES.LARGE]: "tb:mb-600", // deprecated
    [SIZES.XLARGE]: "tb:mb-800", // deprecated
    [SIZES.XXLARGE]: "tb:mb-1000", // deprecated
    [SIZES.XXXLARGE]: "tb:mb-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:mb-0",
    [SIZES.FIFTY]: "lm:mb-50",
    [SIZES.ONE_HUNDRED]: "lm:mb-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "lm:mb-150",
    [SIZES.TWO_HUNDRED]: "lm:mb-200",
    [SIZES.THREE_HUNDRED]: "lm:mb-300",
    [SIZES.FOUR_HUNDRED]: "lm:mb-400",
    [SIZES.FIVE_HUNDRED]: "lm:mb-500",
    [SIZES.SIX_HUNDRED]: "lm:mb-600",
    [SIZES.EIGHT_HUNDRED]: "lm:mb-800",
    [SIZES.ONE_THOUSAND]: "lm:mb-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "lm:mb-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "lm:mb-1600",
    [SIZES.XXXSMALL]: "lm:mb-50", // deprecated
    [SIZES.XXSMALL]: "lm:mb-100", // deprecated
    [SIZES.XSMALL]: "lm:mb-200", // deprecated
    [SIZES.SMALL]: "lm:mb-300", // deprecated
    [SIZES.MEDIUM]: "lm:mb-400", // deprecated
    [SIZES.LARGE]: "lm:mb-600", // deprecated
    [SIZES.XLARGE]: "lm:mb-800", // deprecated
    [SIZES.XXLARGE]: "lm:mb-1000", // deprecated
    [SIZES.XXXLARGE]: "lm:mb-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:mb-0",
    [SIZES.FIFTY]: "mm:mb-50",
    [SIZES.ONE_HUNDRED]: "mm:mb-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "mm:mb-150",
    [SIZES.TWO_HUNDRED]: "mm:mb-200",
    [SIZES.THREE_HUNDRED]: "mm:mb-300",
    [SIZES.FOUR_HUNDRED]: "mm:mb-400",
    [SIZES.FIVE_HUNDRED]: "mm:mb-500",
    [SIZES.SIX_HUNDRED]: "mm:mb-600",
    [SIZES.EIGHT_HUNDRED]: "mm:mb-800",
    [SIZES.ONE_THOUSAND]: "mm:mb-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mm:mb-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mm:mb-1600",
    [SIZES.XXXSMALL]: "mm:mb-50", // deprecated
    [SIZES.XXSMALL]: "mm:mb-100", // deprecated
    [SIZES.XSMALL]: "mm:mb-200", // deprecated
    [SIZES.SMALL]: "mm:mb-300", // deprecated
    [SIZES.MEDIUM]: "mm:mb-400", // deprecated
    [SIZES.LARGE]: "mm:mb-600", // deprecated
    [SIZES.XLARGE]: "mm:mb-800", // deprecated
    [SIZES.XXLARGE]: "mm:mb-1000", // deprecated
    [SIZES.XXXLARGE]: "mm:mb-[52px]", // deprecated
  },
};

export const marginLeftClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "ml-0",
  [SIZES.FIFTY]: "ml-50",
  [SIZES.ONE_HUNDRED]: "ml-100",
  [SIZES.ONE_HUNDRED_FIFTY]: "ml-150",
  [SIZES.TWO_HUNDRED]: "ml-200",
  [SIZES.THREE_HUNDRED]: "ml-300",
  [SIZES.FOUR_HUNDRED]: "ml-400",
  [SIZES.FIVE_HUNDRED]: "ml-500",
  [SIZES.SIX_HUNDRED]: "ml-600",
  [SIZES.EIGHT_HUNDRED]: "ml-800",
  [SIZES.ONE_THOUSAND]: "ml-1000",
  [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ml-1200",
  [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ml-1600",
  [SIZES.XXXSMALL]: "ml-50", // deprecated
  [SIZES.XXSMALL]: "ml-100", // deprecated
  [SIZES.XSMALL]: "ml-200", // deprecated
  [SIZES.SMALL]: "ml-300", // deprecated
  [SIZES.MEDIUM]: "ml-400", // deprecated
  [SIZES.LARGE]: "ml-600", // deprecated
  [SIZES.XLARGE]: "ml-800", // deprecated
  [SIZES.XXLARGE]: "ml-1000", // deprecated
  [SIZES.XXXLARGE]: "ml-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:ml-0",
    [SIZES.FIFTY]: "ld:ml-50",
    [SIZES.ONE_HUNDRED]: "ld:ml-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "ld:ml-150",
    [SIZES.TWO_HUNDRED]: "ld:ml-200",
    [SIZES.THREE_HUNDRED]: "ld:ml-300",
    [SIZES.FOUR_HUNDRED]: "ld:ml-400",
    [SIZES.FIVE_HUNDRED]: "ld:ml-500",
    [SIZES.SIX_HUNDRED]: "ld:ml-600",
    [SIZES.EIGHT_HUNDRED]: "ld:ml-800",
    [SIZES.ONE_THOUSAND]: "ld:ml-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ld:ml-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ld:ml-1600",
    [SIZES.XXXSMALL]: "ld:ml-50", // deprecated
    [SIZES.XXSMALL]: "ld:ml-100", // deprecated
    [SIZES.XSMALL]: "ld:ml-200", // deprecated
    [SIZES.SMALL]: "ld:ml-300", // deprecated
    [SIZES.MEDIUM]: "ld:ml-400", // deprecated
    [SIZES.LARGE]: "ld:ml-600", // deprecated
    [SIZES.XLARGE]: "ld:ml-800", // deprecated
    [SIZES.XXLARGE]: "ld:ml-1000", // deprecated
    [SIZES.XXXLARGE]: "ld:ml-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:ml-0",
    [SIZES.FIFTY]: "de:ml-50",
    [SIZES.ONE_HUNDRED]: "de:ml-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "de:ml-150",
    [SIZES.TWO_HUNDRED]: "de:ml-200",
    [SIZES.THREE_HUNDRED]: "de:ml-300",
    [SIZES.FOUR_HUNDRED]: "de:ml-400",
    [SIZES.FIVE_HUNDRED]: "de:ml-500",
    [SIZES.SIX_HUNDRED]: "de:ml-600",
    [SIZES.EIGHT_HUNDRED]: "de:ml-800",
    [SIZES.ONE_THOUSAND]: "de:ml-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "de:ml-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "de:ml-1600",
    [SIZES.XXXSMALL]: "de:ml-50", // deprecated
    [SIZES.XXSMALL]: "de:ml-100", // deprecated
    [SIZES.XSMALL]: "de:ml-200", // deprecated
    [SIZES.SMALL]: "de:ml-300", // deprecated
    [SIZES.MEDIUM]: "de:ml-400", // deprecated
    [SIZES.LARGE]: "de:ml-600", // deprecated
    [SIZES.XLARGE]: "de:ml-800", // deprecated
    [SIZES.XXLARGE]: "de:ml-1000", // deprecated
    [SIZES.XXXLARGE]: "de:ml-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:ml-0",
    [SIZES.FIFTY]: "tb:ml-50",
    [SIZES.ONE_HUNDRED]: "tb:ml-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "tb:ml-150",
    [SIZES.TWO_HUNDRED]: "tb:ml-200",
    [SIZES.THREE_HUNDRED]: "tb:ml-300",
    [SIZES.FOUR_HUNDRED]: "tb:ml-400",
    [SIZES.FIVE_HUNDRED]: "tb:ml-500",
    [SIZES.SIX_HUNDRED]: "tb:ml-600",
    [SIZES.EIGHT_HUNDRED]: "tb:ml-800",
    [SIZES.ONE_THOUSAND]: "tb:ml-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "tb:ml-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "tb:ml-1600",
    [SIZES.XXXSMALL]: "tb:ml-50", // deprecated
    [SIZES.XXSMALL]: "tb:ml-100", // deprecated
    [SIZES.XSMALL]: "tb:ml-200", // deprecated
    [SIZES.SMALL]: "tb:ml-300", // deprecated
    [SIZES.MEDIUM]: "tb:ml-400", // deprecated
    [SIZES.LARGE]: "tb:ml-600", // deprecated
    [SIZES.XLARGE]: "tb:ml-800", // deprecated
    [SIZES.XXLARGE]: "tb:ml-1000", // deprecated
    [SIZES.XXXLARGE]: "tb:ml-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:ml-0",
    [SIZES.FIFTY]: "lm:ml-50",
    [SIZES.ONE_HUNDRED]: "lm:ml-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "lm:ml-150",
    [SIZES.TWO_HUNDRED]: "lm:ml-200",
    [SIZES.THREE_HUNDRED]: "lm:ml-300",
    [SIZES.FOUR_HUNDRED]: "lm:ml-400",
    [SIZES.FIVE_HUNDRED]: "lm:ml-500",
    [SIZES.SIX_HUNDRED]: "lm:ml-600",
    [SIZES.EIGHT_HUNDRED]: "lm:ml-800",
    [SIZES.ONE_THOUSAND]: "lm:ml-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "lm:ml-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "lm:ml-1600",
    [SIZES.XXXSMALL]: "lm:ml-50", // deprecated
    [SIZES.XXSMALL]: "lm:ml-100", // deprecated
    [SIZES.XSMALL]: "lm:ml-200", // deprecated
    [SIZES.SMALL]: "lm:ml-300", // deprecated
    [SIZES.MEDIUM]: "lm:ml-400", // deprecated
    [SIZES.LARGE]: "lm:ml-600", // deprecated
    [SIZES.XLARGE]: "lm:ml-800", // deprecated
    [SIZES.XXLARGE]: "lm:ml-1000", // deprecated
    [SIZES.XXXLARGE]: "lm:ml-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:ml-0",
    [SIZES.FIFTY]: "mm:ml-50",
    [SIZES.ONE_HUNDRED]: "mm:ml-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "mm:ml-150",
    [SIZES.TWO_HUNDRED]: "mm:ml-200",
    [SIZES.THREE_HUNDRED]: "mm:ml-300",
    [SIZES.FOUR_HUNDRED]: "mm:ml-400",
    [SIZES.FIVE_HUNDRED]: "mm:ml-500",
    [SIZES.SIX_HUNDRED]: "mm:ml-600",
    [SIZES.EIGHT_HUNDRED]: "mm:ml-800",
    [SIZES.ONE_THOUSAND]: "mm:ml-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mm:ml-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mm:ml-1600",
    [SIZES.XXXSMALL]: "mm:ml-50", // deprecated
    [SIZES.XXSMALL]: "mm:ml-100", // deprecated
    [SIZES.XSMALL]: "mm:ml-200", // deprecated
    [SIZES.SMALL]: "mm:ml-300", // deprecated
    [SIZES.MEDIUM]: "mm:ml-400", // deprecated
    [SIZES.LARGE]: "mm:ml-600", // deprecated
    [SIZES.XLARGE]: "mm:ml-800", // deprecated
    [SIZES.XXLARGE]: "mm:ml-1000", // deprecated
    [SIZES.XXXLARGE]: "mm:ml-[52px]", // deprecated
  },
};

const getMarginValue = (margin: string | number): string =>
  typeof margin === "number" ? `${margin}px` : margin;

export const getMargin = (
  margin: CSSProperties["margin"] | ObjectProperty,
): { vars: object; classes: string[] } => {
  if (typeof margin === "number" || typeof margin === "string")
    return {
      vars: { "--text-margin": getMarginValue(margin) },
      classes: ["m-[var(--text-margin)]"],
    };

  const { top, bottom, left, right } = margin || {};
  const cssVar = {};
  const classes: string[] = ["m-0"];

  if (top) {
    classes.push("mt-[var(--text-margin-top)]");
    cssVar["--text-margin-top"] = getMarginValue(top);
  }
  if (bottom) {
    classes.push("mb-[var(--text-margin-bottom)]");
    cssVar["--text-margin-bottom"] = getMarginValue(bottom);
  }
  if (left) {
    classes.push("ml-[var(--text-margin-left)]");
    cssVar["--text-margin-left"] = getMarginValue(left);
  }
  if (right) {
    classes.push("mr-[var(--text-margin-right)]");
    cssVar["--text-margin-right"] = getMarginValue(right);
  }

  return { vars: cssVar, classes };
};

export default getMargin;
