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

export const paddingClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "p-0",
  [SIZES.FIFTY]: "p-50",
  [SIZES.ONE_HUNDRED]: "p-100",
  [SIZES.ONE_HUNDRED_FIFTY]: "p-150",
  [SIZES.TWO_HUNDRED]: "p-200",
  [SIZES.THREE_HUNDRED]: "p-300",
  [SIZES.FOUR_HUNDRED]: "p-400",
  [SIZES.FIVE_HUNDRED]: "p-500",
  [SIZES.SIX_HUNDRED]: "p-600",
  [SIZES.EIGHT_HUNDRED]: "p-800",
  [SIZES.ONE_THOUSAND]: "p-1000",
  [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "p-1200",
  [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "p-1600",
  [SIZES.XXXSMALL]: "p-50", // deprecated
  [SIZES.XXSMALL]: "p-100", // deprecated
  [SIZES.XSMALL]: "p-200", // deprecated
  [SIZES.SMALL]: "p-300", // deprecated
  [SIZES.MEDIUM]: "p-400", // deprecated
  [SIZES.LARGE]: "p-600", // deprecated
  [SIZES.XLARGE]: "p-800", // deprecated
  [SIZES.XXLARGE]: "p-1000", // deprecated
  [SIZES.XXXLARGE]: "p-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:p-0",
    [SIZES.FIFTY]: "ld:p-50",
    [SIZES.ONE_HUNDRED]: "ld:p-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "ld:p-150",
    [SIZES.TWO_HUNDRED]: "ld:p-200",
    [SIZES.THREE_HUNDRED]: "ld:p-300",
    [SIZES.FOUR_HUNDRED]: "ld:p-400",
    [SIZES.FIVE_HUNDRED]: "ld:p-500",
    [SIZES.SIX_HUNDRED]: "ld:p-600",
    [SIZES.EIGHT_HUNDRED]: "ld:p-800",
    [SIZES.ONE_THOUSAND]: "ld:p-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ld:p-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ld:p-1600",
    [SIZES.XXXSMALL]: "ld:p-50", // deprecated
    [SIZES.XXSMALL]: "ld:p-100", // deprecated
    [SIZES.XSMALL]: "ld:p-200", // deprecated
    [SIZES.SMALL]: "ld:p-300", // deprecated
    [SIZES.MEDIUM]: "ld:p-400", // deprecated
    [SIZES.LARGE]: "ld:p-600", // deprecated
    [SIZES.XLARGE]: "ld:p-800", // deprecated
    [SIZES.XXLARGE]: "ld:p-1000", // deprecated
    [SIZES.XXXLARGE]: "ld:p-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:p-0",
    [SIZES.FIFTY]: "de:p-50",
    [SIZES.ONE_HUNDRED]: "de:p-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "de:p-150",
    [SIZES.TWO_HUNDRED]: "de:p-200",
    [SIZES.THREE_HUNDRED]: "de:p-300",
    [SIZES.FOUR_HUNDRED]: "de:p-400",
    [SIZES.FIVE_HUNDRED]: "de:p-500",
    [SIZES.SIX_HUNDRED]: "de:p-600",
    [SIZES.EIGHT_HUNDRED]: "de:p-800",
    [SIZES.ONE_THOUSAND]: "de:p-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "de:p-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "de:p-1600",
    [SIZES.XXXSMALL]: "de:p-50", // deprecated
    [SIZES.XXSMALL]: "de:p-100", // deprecated
    [SIZES.XSMALL]: "de:p-200", // deprecated
    [SIZES.SMALL]: "de:p-300", // deprecated
    [SIZES.MEDIUM]: "de:p-400", // deprecated
    [SIZES.LARGE]: "de:p-600", // deprecated
    [SIZES.XLARGE]: "de:p-800", // deprecated
    [SIZES.XXLARGE]: "de:p-1000", // deprecated
    [SIZES.XXXLARGE]: "de:p-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:p-0",
    [SIZES.FIFTY]: "tb:p-50",
    [SIZES.ONE_HUNDRED]: "tb:p-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "tb:p-150",
    [SIZES.TWO_HUNDRED]: "tb:p-200",
    [SIZES.THREE_HUNDRED]: "tb:p-300",
    [SIZES.FOUR_HUNDRED]: "tb:p-400",
    [SIZES.FIVE_HUNDRED]: "tb:p-500",
    [SIZES.SIX_HUNDRED]: "tb:p-600",
    [SIZES.EIGHT_HUNDRED]: "tb:p-800",
    [SIZES.ONE_THOUSAND]: "tb:p-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "tb:p-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "tb:p-1600",
    [SIZES.XXXSMALL]: "tb:p-50", // deprecated
    [SIZES.XXSMALL]: "tb:p-100", // deprecated
    [SIZES.XSMALL]: "tb:p-200", // deprecated
    [SIZES.SMALL]: "tb:p-300", // deprecated
    [SIZES.MEDIUM]: "tb:p-400", // deprecated
    [SIZES.LARGE]: "tb:p-600", // deprecated
    [SIZES.XLARGE]: "tb:p-800", // deprecated
    [SIZES.XXLARGE]: "tb:p-1000", // deprecated
    [SIZES.XXXLARGE]: "tb:p-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:p-0",
    [SIZES.FIFTY]: "lm:p-50",
    [SIZES.ONE_HUNDRED]: "lm:p-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "lm:p-150",
    [SIZES.TWO_HUNDRED]: "lm:p-200",
    [SIZES.THREE_HUNDRED]: "lm:p-300",
    [SIZES.FOUR_HUNDRED]: "lm:p-400",
    [SIZES.FIVE_HUNDRED]: "lm:p-500",
    [SIZES.SIX_HUNDRED]: "lm:p-600",
    [SIZES.EIGHT_HUNDRED]: "lm:p-800",
    [SIZES.ONE_THOUSAND]: "lm:p-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "lm:p-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "lm:p-1600",
    [SIZES.XXXSMALL]: "lm:p-50", // deprecated
    [SIZES.XXSMALL]: "lm:p-100", // deprecated
    [SIZES.XSMALL]: "lm:p-200", // deprecated
    [SIZES.SMALL]: "lm:p-300", // deprecated
    [SIZES.MEDIUM]: "lm:p-400", // deprecated
    [SIZES.LARGE]: "lm:p-600", // deprecated
    [SIZES.XLARGE]: "lm:p-800", // deprecated
    [SIZES.XXLARGE]: "lm:p-1000", // deprecated
    [SIZES.XXXLARGE]: "lm:p-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:p-0",
    [SIZES.FIFTY]: "mm:p-50",
    [SIZES.ONE_HUNDRED]: "mm:p-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "mm:p-150",
    [SIZES.TWO_HUNDRED]: "mm:p-200",
    [SIZES.THREE_HUNDRED]: "mm:p-300",
    [SIZES.FOUR_HUNDRED]: "mm:p-400",
    [SIZES.FIVE_HUNDRED]: "mm:p-500",
    [SIZES.SIX_HUNDRED]: "mm:p-600",
    [SIZES.EIGHT_HUNDRED]: "mm:p-800",
    [SIZES.ONE_THOUSAND]: "mm:p-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mm:p-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mm:p-1600",
    [SIZES.XXXSMALL]: "mm:p-50", // deprecated
    [SIZES.XXSMALL]: "mm:p-100", // deprecated
    [SIZES.XSMALL]: "mm:p-200", // deprecated
    [SIZES.SMALL]: "mm:p-300", // deprecated
    [SIZES.MEDIUM]: "mm:p-400", // deprecated
    [SIZES.LARGE]: "mm:p-600", // deprecated
    [SIZES.XLARGE]: "mm:p-800", // deprecated
    [SIZES.XXLARGE]: "mm:p-1000", // deprecated
    [SIZES.XXXLARGE]: "mm:p-[52px]", // deprecated
  },
};

export const paddingTopClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "pt-0",
  [SIZES.FIFTY]: "pt-50",
  [SIZES.ONE_HUNDRED]: "pt-100",
  [SIZES.ONE_HUNDRED_FIFTY]: "pt-150",
  [SIZES.TWO_HUNDRED]: "pt-200",
  [SIZES.THREE_HUNDRED]: "pt-300",
  [SIZES.FOUR_HUNDRED]: "pt-400",
  [SIZES.FIVE_HUNDRED]: "pt-500",
  [SIZES.SIX_HUNDRED]: "pt-600",
  [SIZES.EIGHT_HUNDRED]: "pt-800",
  [SIZES.ONE_THOUSAND]: "pt-1000",
  [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "pt-1200",
  [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "pt-1600",
  [SIZES.XXXSMALL]: "pt-50", // deprecated
  [SIZES.XXSMALL]: "pt-100", // deprecated
  [SIZES.XSMALL]: "pt-200", // deprecated
  [SIZES.SMALL]: "pt-300", // deprecated
  [SIZES.MEDIUM]: "pt-400", // deprecated
  [SIZES.LARGE]: "pt-600", // deprecated
  [SIZES.XLARGE]: "pt-800", // deprecated
  [SIZES.XXLARGE]: "pt-1000", // deprecated
  [SIZES.XXXLARGE]: "pt-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:pt-0",
    [SIZES.FIFTY]: "ld:pt-50",
    [SIZES.ONE_HUNDRED]: "ld:pt-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "ld:pt-150",
    [SIZES.TWO_HUNDRED]: "ld:pt-200",
    [SIZES.THREE_HUNDRED]: "ld:pt-300",
    [SIZES.FOUR_HUNDRED]: "ld:pt-400",
    [SIZES.FIVE_HUNDRED]: "ld:pt-500",
    [SIZES.SIX_HUNDRED]: "ld:pt-600",
    [SIZES.EIGHT_HUNDRED]: "ld:pt-800",
    [SIZES.ONE_THOUSAND]: "ld:pt-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ld:pt-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ld:pt-1600",
    [SIZES.XXXSMALL]: "ld:pt-50", // deprecated
    [SIZES.XXSMALL]: "ld:pt-100", // deprecated
    [SIZES.XSMALL]: "ld:pt-200", // deprecated
    [SIZES.SMALL]: "ld:pt-300", // deprecated
    [SIZES.MEDIUM]: "ld:pt-400", // deprecated
    [SIZES.LARGE]: "ld:pt-600", // deprecated
    [SIZES.XLARGE]: "ld:pt-800", // deprecated
    [SIZES.XXLARGE]: "ld:pt-1000", // deprecated
    [SIZES.XXXLARGE]: "ld:pt-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:pt-0",
    [SIZES.FIFTY]: "de:pt-50",
    [SIZES.ONE_HUNDRED]: "de:pt-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "de:pt-150",
    [SIZES.TWO_HUNDRED]: "de:pt-200",
    [SIZES.THREE_HUNDRED]: "de:pt-300",
    [SIZES.FOUR_HUNDRED]: "de:pt-400",
    [SIZES.FIVE_HUNDRED]: "de:pt-500",
    [SIZES.SIX_HUNDRED]: "de:pt-600",
    [SIZES.EIGHT_HUNDRED]: "de:pt-800",
    [SIZES.ONE_THOUSAND]: "de:pt-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "de:pt-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "de:pt-1600",
    [SIZES.XXXSMALL]: "de:pt-50", // deprecated
    [SIZES.XXSMALL]: "de:pt-100", // deprecated
    [SIZES.XSMALL]: "de:pt-200", // deprecated
    [SIZES.SMALL]: "de:pt-300", // deprecated
    [SIZES.MEDIUM]: "de:pt-400", // deprecated
    [SIZES.LARGE]: "de:pt-600", // deprecated
    [SIZES.XLARGE]: "de:pt-800", // deprecated
    [SIZES.XXLARGE]: "de:pt-1000", // deprecated
    [SIZES.XXXLARGE]: "de:pt-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:pt-0",
    [SIZES.FIFTY]: "tb:pt-50",
    [SIZES.ONE_HUNDRED]: "tb:pt-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "tb:pt-150",
    [SIZES.TWO_HUNDRED]: "tb:pt-200",
    [SIZES.THREE_HUNDRED]: "tb:pt-300",
    [SIZES.FOUR_HUNDRED]: "tb:pt-400",
    [SIZES.FIVE_HUNDRED]: "tb:pt-500",
    [SIZES.SIX_HUNDRED]: "tb:pt-600",
    [SIZES.EIGHT_HUNDRED]: "tb:pt-800",
    [SIZES.ONE_THOUSAND]: "tb:pt-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "tb:pt-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "tb:pt-1600",
    [SIZES.XXXSMALL]: "tb:pt-50", // deprecated
    [SIZES.XXSMALL]: "tb:pt-100", // deprecated
    [SIZES.XSMALL]: "tb:pt-200", // deprecated
    [SIZES.SMALL]: "tb:pt-300", // deprecated
    [SIZES.MEDIUM]: "tb:pt-400", // deprecated
    [SIZES.LARGE]: "tb:pt-600", // deprecated
    [SIZES.XLARGE]: "tb:pt-800", // deprecated
    [SIZES.XXLARGE]: "tb:pt-1000", // deprecated
    [SIZES.XXXLARGE]: "tb:pt-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:pt-0",
    [SIZES.FIFTY]: "lm:pt-50",
    [SIZES.ONE_HUNDRED]: "lm:pt-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "lm:pt-150",
    [SIZES.TWO_HUNDRED]: "lm:pt-200",
    [SIZES.THREE_HUNDRED]: "lm:pt-300",
    [SIZES.FOUR_HUNDRED]: "lm:pt-400",
    [SIZES.FIVE_HUNDRED]: "lm:pt-500",
    [SIZES.SIX_HUNDRED]: "lm:pt-600",
    [SIZES.EIGHT_HUNDRED]: "lm:pt-800",
    [SIZES.ONE_THOUSAND]: "lm:pt-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "lm:pt-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "lm:pt-1600",
    [SIZES.XXXSMALL]: "lm:pt-50", // deprecated
    [SIZES.XXSMALL]: "lm:pt-100", // deprecated
    [SIZES.XSMALL]: "lm:pt-200", // deprecated
    [SIZES.SMALL]: "lm:pt-300", // deprecated
    [SIZES.MEDIUM]: "lm:pt-400", // deprecated
    [SIZES.LARGE]: "lm:pt-600", // deprecated
    [SIZES.XLARGE]: "lm:pt-800", // deprecated
    [SIZES.XXLARGE]: "lm:pt-1000", // deprecated
    [SIZES.XXXLARGE]: "lm:pt-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:pt-0",
    [SIZES.FIFTY]: "mm:pt-50",
    [SIZES.ONE_HUNDRED]: "mm:pt-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "mm:pt-150",
    [SIZES.TWO_HUNDRED]: "mm:pt-200",
    [SIZES.THREE_HUNDRED]: "mm:pt-300",
    [SIZES.FOUR_HUNDRED]: "mm:pt-400",
    [SIZES.FIVE_HUNDRED]: "mm:pt-500",
    [SIZES.SIX_HUNDRED]: "mm:pt-600",
    [SIZES.EIGHT_HUNDRED]: "mm:pt-800",
    [SIZES.ONE_THOUSAND]: "mm:pt-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mm:pt-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mm:pt-1600",
    [SIZES.XXXSMALL]: "mm:pt-50", // deprecated
    [SIZES.XXSMALL]: "mm:pt-100", // deprecated
    [SIZES.XSMALL]: "mm:pt-200", // deprecated
    [SIZES.SMALL]: "mm:pt-300", // deprecated
    [SIZES.MEDIUM]: "mm:pt-400", // deprecated
    [SIZES.LARGE]: "mm:pt-600", // deprecated
    [SIZES.XLARGE]: "mm:pt-800", // deprecated
    [SIZES.XXLARGE]: "mm:pt-1000", // deprecated
    [SIZES.XXXLARGE]: "mm:pt-[52px]", // deprecated
  },
};

export const paddingRightClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "pr-0",
  [SIZES.FIFTY]: "pr-50",
  [SIZES.ONE_HUNDRED]: "pr-100",
  [SIZES.ONE_HUNDRED_FIFTY]: "pr-150",
  [SIZES.TWO_HUNDRED]: "pr-200",
  [SIZES.THREE_HUNDRED]: "pr-300",
  [SIZES.FOUR_HUNDRED]: "pr-400",
  [SIZES.FIVE_HUNDRED]: "pr-500",
  [SIZES.SIX_HUNDRED]: "pr-600",
  [SIZES.EIGHT_HUNDRED]: "pr-800",
  [SIZES.ONE_THOUSAND]: "pr-1000",
  [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "pr-1200",
  [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "pr-1600",
  [SIZES.XXXSMALL]: "pr-50", // deprecated
  [SIZES.XXSMALL]: "pr-100", // deprecated
  [SIZES.XSMALL]: "pr-200", // deprecated
  [SIZES.SMALL]: "pr-300", // deprecated
  [SIZES.MEDIUM]: "pr-400", // deprecated
  [SIZES.LARGE]: "pr-600", // deprecated
  [SIZES.XLARGE]: "pr-800", // deprecated
  [SIZES.XXLARGE]: "pr-1000", // deprecated
  [SIZES.XXXLARGE]: "pr-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:pr-0",
    [SIZES.FIFTY]: "ld:pr-50",
    [SIZES.ONE_HUNDRED]: "ld:pr-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "ld:pr-150",
    [SIZES.TWO_HUNDRED]: "ld:pr-200",
    [SIZES.THREE_HUNDRED]: "ld:pr-300",
    [SIZES.FOUR_HUNDRED]: "ld:pr-400",
    [SIZES.FIVE_HUNDRED]: "ld:pr-500",
    [SIZES.SIX_HUNDRED]: "ld:pr-600",
    [SIZES.EIGHT_HUNDRED]: "ld:pr-800",
    [SIZES.ONE_THOUSAND]: "ld:pr-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ld:pr-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ld:pr-1600",
    [SIZES.XXXSMALL]: "ld:pr-50", // deprecated
    [SIZES.XXSMALL]: "ld:pr-100", // deprecated
    [SIZES.XSMALL]: "ld:pr-200", // deprecated
    [SIZES.SMALL]: "ld:pr-300", // deprecated
    [SIZES.MEDIUM]: "ld:pr-400", // deprecated
    [SIZES.LARGE]: "ld:pr-600", // deprecated
    [SIZES.XLARGE]: "ld:pr-800", // deprecated
    [SIZES.XXLARGE]: "ld:pr-1000", // deprecated
    [SIZES.XXXLARGE]: "ld:pr-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:pr-0",
    [SIZES.FIFTY]: "de:pr-50",
    [SIZES.ONE_HUNDRED]: "de:pr-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "de:pr-150",
    [SIZES.TWO_HUNDRED]: "de:pr-200",
    [SIZES.THREE_HUNDRED]: "de:pr-300",
    [SIZES.FOUR_HUNDRED]: "de:pr-400",
    [SIZES.FIVE_HUNDRED]: "de:pr-500",
    [SIZES.SIX_HUNDRED]: "de:pr-600",
    [SIZES.EIGHT_HUNDRED]: "de:pr-800",
    [SIZES.ONE_THOUSAND]: "de:pr-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "de:pr-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "de:pr-1600",
    [SIZES.XXXSMALL]: "de:pr-50", // deprecated
    [SIZES.XXSMALL]: "de:pr-100", // deprecated
    [SIZES.XSMALL]: "de:pr-200", // deprecated
    [SIZES.SMALL]: "de:pr-300", // deprecated
    [SIZES.MEDIUM]: "de:pr-400", // deprecated
    [SIZES.LARGE]: "de:pr-600", // deprecated
    [SIZES.XLARGE]: "de:pr-800", // deprecated
    [SIZES.XXLARGE]: "de:pr-1000", // deprecated
    [SIZES.XXXLARGE]: "de:pr-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:pr-0",
    [SIZES.FIFTY]: "tb:pr-50",
    [SIZES.ONE_HUNDRED]: "tb:pr-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "tb:pr-150",
    [SIZES.TWO_HUNDRED]: "tb:pr-200",
    [SIZES.THREE_HUNDRED]: "tb:pr-300",
    [SIZES.FOUR_HUNDRED]: "tb:pr-400",
    [SIZES.FIVE_HUNDRED]: "tb:pr-500",
    [SIZES.SIX_HUNDRED]: "tb:pr-600",
    [SIZES.EIGHT_HUNDRED]: "tb:pr-800",
    [SIZES.ONE_THOUSAND]: "tb:pr-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "tb:pr-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "tb:pr-1600",
    [SIZES.XXXSMALL]: "tb:pr-50", // deprecated
    [SIZES.XXSMALL]: "tb:pr-100", // deprecated
    [SIZES.XSMALL]: "tb:pr-200", // deprecated
    [SIZES.SMALL]: "tb:pr-300", // deprecated
    [SIZES.MEDIUM]: "tb:pr-400", // deprecated
    [SIZES.LARGE]: "tb:pr-600", // deprecated
    [SIZES.XLARGE]: "tb:pr-800", // deprecated
    [SIZES.XXLARGE]: "tb:pr-1000", // deprecated
    [SIZES.XXXLARGE]: "tb:pr-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:pr-0",
    [SIZES.FIFTY]: "lm:pr-50",
    [SIZES.ONE_HUNDRED]: "lm:pr-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "lm:pr-150",
    [SIZES.TWO_HUNDRED]: "lm:pr-200",
    [SIZES.THREE_HUNDRED]: "lm:pr-300",
    [SIZES.FOUR_HUNDRED]: "lm:pr-400",
    [SIZES.FIVE_HUNDRED]: "lm:pr-500",
    [SIZES.SIX_HUNDRED]: "lm:pr-600",
    [SIZES.EIGHT_HUNDRED]: "lm:pr-800",
    [SIZES.ONE_THOUSAND]: "lm:pr-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "lm:pr-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "lm:pr-1600",
    [SIZES.XXXSMALL]: "lm:pr-50", // deprecated
    [SIZES.XXSMALL]: "lm:pr-100", // deprecated
    [SIZES.XSMALL]: "lm:pr-200", // deprecated
    [SIZES.SMALL]: "lm:pr-300", // deprecated
    [SIZES.MEDIUM]: "lm:pr-400", // deprecated
    [SIZES.LARGE]: "lm:pr-600", // deprecated
    [SIZES.XLARGE]: "lm:pr-800", // deprecated
    [SIZES.XXLARGE]: "lm:pr-1000", // deprecated
    [SIZES.XXXLARGE]: "lm:pr-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:pr-0",
    [SIZES.FIFTY]: "mm:pr-50",
    [SIZES.ONE_HUNDRED]: "mm:pr-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "mm:pr-150",
    [SIZES.TWO_HUNDRED]: "mm:pr-200",
    [SIZES.THREE_HUNDRED]: "mm:pr-300",
    [SIZES.FOUR_HUNDRED]: "mm:pr-400",
    [SIZES.FIVE_HUNDRED]: "mm:pr-500",
    [SIZES.SIX_HUNDRED]: "mm:pr-600",
    [SIZES.EIGHT_HUNDRED]: "mm:pr-800",
    [SIZES.ONE_THOUSAND]: "mm:pr-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mm:pr-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mm:pr-1600",
    [SIZES.XXXSMALL]: "mm:pr-50", // deprecated
    [SIZES.XXSMALL]: "mm:pr-100", // deprecated
    [SIZES.XSMALL]: "mm:pr-200", // deprecated
    [SIZES.SMALL]: "mm:pr-300", // deprecated
    [SIZES.MEDIUM]: "mm:pr-400", // deprecated
    [SIZES.LARGE]: "mm:pr-600", // deprecated
    [SIZES.XLARGE]: "mm:pr-800", // deprecated
    [SIZES.XXLARGE]: "mm:pr-1000", // deprecated
    [SIZES.XXXLARGE]: "mm:pr-[52px]", // deprecated
  },
};

export const paddingBottomClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "pb-0",
  [SIZES.FIFTY]: "pb-50",
  [SIZES.ONE_HUNDRED]: "pb-100",
  [SIZES.ONE_HUNDRED_FIFTY]: "pb-150",
  [SIZES.TWO_HUNDRED]: "pb-200",
  [SIZES.THREE_HUNDRED]: "pb-300",
  [SIZES.FOUR_HUNDRED]: "pb-400",
  [SIZES.FIVE_HUNDRED]: "pb-500",
  [SIZES.SIX_HUNDRED]: "pb-600",
  [SIZES.EIGHT_HUNDRED]: "pb-800",
  [SIZES.ONE_THOUSAND]: "pb-1000",
  [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "pb-1200",
  [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "pb-1600",
  [SIZES.XXXSMALL]: "pb-50", // deprecated
  [SIZES.XXSMALL]: "pb-100", // deprecated
  [SIZES.XSMALL]: "pb-200", // deprecated
  [SIZES.SMALL]: "pb-300", // deprecated
  [SIZES.MEDIUM]: "pb-400", // deprecated
  [SIZES.LARGE]: "pb-600", // deprecated
  [SIZES.XLARGE]: "pb-800", // deprecated
  [SIZES.XXLARGE]: "pb-1000", // deprecated
  [SIZES.XXXLARGE]: "pb-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:pb-0",
    [SIZES.FIFTY]: "ld:pb-50",
    [SIZES.ONE_HUNDRED]: "ld:pb-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "ld:pb-150",
    [SIZES.TWO_HUNDRED]: "ld:pb-200",
    [SIZES.THREE_HUNDRED]: "ld:pb-300",
    [SIZES.FOUR_HUNDRED]: "ld:pb-400",
    [SIZES.FIVE_HUNDRED]: "ld:pb-500",
    [SIZES.SIX_HUNDRED]: "ld:pb-600",
    [SIZES.EIGHT_HUNDRED]: "ld:pb-800",
    [SIZES.ONE_THOUSAND]: "ld:pb-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ld:pb-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ld:pb-1600",
    [SIZES.XXXSMALL]: "ld:pb-50", // deprecated
    [SIZES.XXSMALL]: "ld:pb-100", // deprecated
    [SIZES.XSMALL]: "ld:pb-200", // deprecated
    [SIZES.SMALL]: "ld:pb-300", // deprecated
    [SIZES.MEDIUM]: "ld:pb-400", // deprecated
    [SIZES.LARGE]: "ld:pb-600", // deprecated
    [SIZES.XLARGE]: "ld:pb-800", // deprecated
    [SIZES.XXLARGE]: "ld:pb-1000", // deprecated
    [SIZES.XXXLARGE]: "ld:pb-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:pb-0",
    [SIZES.FIFTY]: "de:pb-50",
    [SIZES.ONE_HUNDRED]: "de:pb-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "de:pb-150",
    [SIZES.TWO_HUNDRED]: "de:pb-200",
    [SIZES.THREE_HUNDRED]: "de:pb-300",
    [SIZES.FOUR_HUNDRED]: "de:pb-400",
    [SIZES.FIVE_HUNDRED]: "de:pb-500",
    [SIZES.SIX_HUNDRED]: "de:pb-600",
    [SIZES.EIGHT_HUNDRED]: "de:pb-800",
    [SIZES.ONE_THOUSAND]: "de:pb-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "de:pb-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "de:pb-1600",
    [SIZES.XXXSMALL]: "de:pb-50", // deprecated
    [SIZES.XXSMALL]: "de:pb-100", // deprecated
    [SIZES.XSMALL]: "de:pb-200", // deprecated
    [SIZES.SMALL]: "de:pb-300", // deprecated
    [SIZES.MEDIUM]: "de:pb-400", // deprecated
    [SIZES.LARGE]: "de:pb-600", // deprecated
    [SIZES.XLARGE]: "de:pb-800", // deprecated
    [SIZES.XXLARGE]: "de:pb-1000", // deprecated
    [SIZES.XXXLARGE]: "de:pb-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:pb-0",
    [SIZES.FIFTY]: "tb:pb-50",
    [SIZES.ONE_HUNDRED]: "tb:pb-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "tb:pb-150",
    [SIZES.TWO_HUNDRED]: "tb:pb-200",
    [SIZES.THREE_HUNDRED]: "tb:pb-300",
    [SIZES.FOUR_HUNDRED]: "tb:pb-400",
    [SIZES.FIVE_HUNDRED]: "tb:pb-500",
    [SIZES.SIX_HUNDRED]: "tb:pb-600",
    [SIZES.EIGHT_HUNDRED]: "tb:pb-800",
    [SIZES.ONE_THOUSAND]: "tb:pb-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "tb:pb-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "tb:pb-1600",
    [SIZES.XXXSMALL]: "tb:pb-50", // deprecated
    [SIZES.XXSMALL]: "tb:pb-100", // deprecated
    [SIZES.XSMALL]: "tb:pb-200", // deprecated
    [SIZES.SMALL]: "tb:pb-300", // deprecated
    [SIZES.MEDIUM]: "tb:pb-400", // deprecated
    [SIZES.LARGE]: "tb:pb-600", // deprecated
    [SIZES.XLARGE]: "tb:pb-800", // deprecated
    [SIZES.XXLARGE]: "tb:pb-1000", // deprecated
    [SIZES.XXXLARGE]: "tb:pb-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:pb-0",
    [SIZES.FIFTY]: "lm:pb-50",
    [SIZES.ONE_HUNDRED]: "lm:pb-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "lm:pb-150",
    [SIZES.TWO_HUNDRED]: "lm:pb-200",
    [SIZES.THREE_HUNDRED]: "lm:pb-300",
    [SIZES.FOUR_HUNDRED]: "lm:pb-400",
    [SIZES.FIVE_HUNDRED]: "lm:pb-500",
    [SIZES.SIX_HUNDRED]: "lm:pb-600",
    [SIZES.EIGHT_HUNDRED]: "lm:pb-800",
    [SIZES.ONE_THOUSAND]: "lm:pb-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "lm:pb-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "lm:pb-1600",
    [SIZES.XXXSMALL]: "lm:pb-50", // deprecated
    [SIZES.XXSMALL]: "lm:pb-100", // deprecated
    [SIZES.XSMALL]: "lm:pb-200", // deprecated
    [SIZES.SMALL]: "lm:pb-300", // deprecated
    [SIZES.MEDIUM]: "lm:pb-400", // deprecated
    [SIZES.LARGE]: "lm:pb-600", // deprecated
    [SIZES.XLARGE]: "lm:pb-800", // deprecated
    [SIZES.XXLARGE]: "lm:pb-1000", // deprecated
    [SIZES.XXXLARGE]: "lm:pb-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:pb-0",
    [SIZES.FIFTY]: "mm:pb-50",
    [SIZES.ONE_HUNDRED]: "mm:pb-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "mm:pb-150",
    [SIZES.TWO_HUNDRED]: "mm:pb-200",
    [SIZES.THREE_HUNDRED]: "mm:pb-300",
    [SIZES.FOUR_HUNDRED]: "mm:pb-400",
    [SIZES.FIVE_HUNDRED]: "mm:pb-500",
    [SIZES.SIX_HUNDRED]: "mm:pb-600",
    [SIZES.EIGHT_HUNDRED]: "mm:pb-800",
    [SIZES.ONE_THOUSAND]: "mm:pb-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mm:pb-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mm:pb-1600",
    [SIZES.XXXSMALL]: "mm:pb-50", // deprecated
    [SIZES.XXSMALL]: "mm:pb-100", // deprecated
    [SIZES.XSMALL]: "mm:pb-200", // deprecated
    [SIZES.SMALL]: "mm:pb-300", // deprecated
    [SIZES.MEDIUM]: "mm:pb-400", // deprecated
    [SIZES.LARGE]: "mm:pb-600", // deprecated
    [SIZES.XLARGE]: "mm:pb-800", // deprecated
    [SIZES.XXLARGE]: "mm:pb-1000", // deprecated
    [SIZES.XXXLARGE]: "mm:pb-[52px]", // deprecated
  },
};

export const paddingLeftClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "pl-0",
  [SIZES.FIFTY]: "pl-50",
  [SIZES.ONE_HUNDRED]: "pl-100",
  [SIZES.ONE_HUNDRED_FIFTY]: "pl-150",
  [SIZES.TWO_HUNDRED]: "pl-200",
  [SIZES.THREE_HUNDRED]: "pl-300",
  [SIZES.FOUR_HUNDRED]: "pl-400",
  [SIZES.FIVE_HUNDRED]: "pl-500",
  [SIZES.SIX_HUNDRED]: "pl-600",
  [SIZES.EIGHT_HUNDRED]: "pl-800",
  [SIZES.ONE_THOUSAND]: "pl-1000",
  [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "pl-1200",
  [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "pl-1600",
  [SIZES.XXXSMALL]: "pl-50", // deprecated
  [SIZES.XXSMALL]: "pl-100", // deprecated
  [SIZES.XSMALL]: "pl-200", // deprecated
  [SIZES.SMALL]: "pl-300", // deprecated
  [SIZES.MEDIUM]: "pl-400", // deprecated
  [SIZES.LARGE]: "pl-600", // deprecated
  [SIZES.XLARGE]: "pl-800", // deprecated
  [SIZES.XXLARGE]: "pl-1000", // deprecated
  [SIZES.XXXLARGE]: "pl-[52px]", // deprecated
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:pl-0",
    [SIZES.FIFTY]: "ld:pl-50",
    [SIZES.ONE_HUNDRED]: "ld:pl-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "ld:pl-150",
    [SIZES.TWO_HUNDRED]: "ld:pl-200",
    [SIZES.THREE_HUNDRED]: "ld:pl-300",
    [SIZES.FOUR_HUNDRED]: "ld:pl-400",
    [SIZES.FIVE_HUNDRED]: "ld:pl-500",
    [SIZES.SIX_HUNDRED]: "ld:pl-600",
    [SIZES.EIGHT_HUNDRED]: "ld:pl-800",
    [SIZES.ONE_THOUSAND]: "ld:pl-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "ld:pl-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "ld:pl-1600",
    [SIZES.XXXSMALL]: "ld:pl-50", // deprecated
    [SIZES.XXSMALL]: "ld:pl-100", // deprecated
    [SIZES.XSMALL]: "ld:pl-200", // deprecated
    [SIZES.SMALL]: "ld:pl-300", // deprecated
    [SIZES.MEDIUM]: "ld:pl-400", // deprecated
    [SIZES.LARGE]: "ld:pl-600", // deprecated
    [SIZES.XLARGE]: "ld:pl-800", // deprecated
    [SIZES.XXLARGE]: "ld:pl-1000", // deprecated
    [SIZES.XXXLARGE]: "ld:pl-[52px]", // deprecated
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:pl-0",
    [SIZES.FIFTY]: "de:pl-50",
    [SIZES.ONE_HUNDRED]: "de:pl-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "de:pl-150",
    [SIZES.TWO_HUNDRED]: "de:pl-200",
    [SIZES.THREE_HUNDRED]: "de:pl-300",
    [SIZES.FOUR_HUNDRED]: "de:pl-400",
    [SIZES.FIVE_HUNDRED]: "de:pl-500",
    [SIZES.SIX_HUNDRED]: "de:pl-600",
    [SIZES.EIGHT_HUNDRED]: "de:pl-800",
    [SIZES.ONE_THOUSAND]: "de:pl-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "de:pl-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "de:pl-1600",
    [SIZES.XXXSMALL]: "de:pl-50", // deprecated
    [SIZES.XXSMALL]: "de:pl-100", // deprecated
    [SIZES.XSMALL]: "de:pl-200", // deprecated
    [SIZES.SMALL]: "de:pl-300", // deprecated
    [SIZES.MEDIUM]: "de:pl-400", // deprecated
    [SIZES.LARGE]: "de:pl-600", // deprecated
    [SIZES.XLARGE]: "de:pl-800", // deprecated
    [SIZES.XXLARGE]: "de:pl-1000", // deprecated
    [SIZES.XXXLARGE]: "de:pl-[52px]", // deprecated
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:pl-0",
    [SIZES.FIFTY]: "tb:pl-50",
    [SIZES.ONE_HUNDRED]: "tb:pl-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "tb:pl-150",
    [SIZES.TWO_HUNDRED]: "tb:pl-200",
    [SIZES.THREE_HUNDRED]: "tb:pl-300",
    [SIZES.FOUR_HUNDRED]: "tb:pl-400",
    [SIZES.FIVE_HUNDRED]: "tb:pl-500",
    [SIZES.SIX_HUNDRED]: "tb:pl-600",
    [SIZES.EIGHT_HUNDRED]: "tb:pl-800",
    [SIZES.ONE_THOUSAND]: "tb:pl-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "tb:pl-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "tb:pl-1600",
    [SIZES.XXXSMALL]: "tb:pl-50", // deprecated
    [SIZES.XXSMALL]: "tb:pl-100", // deprecated
    [SIZES.XSMALL]: "tb:pl-200", // deprecated
    [SIZES.SMALL]: "tb:pl-300", // deprecated
    [SIZES.MEDIUM]: "tb:pl-400", // deprecated
    [SIZES.LARGE]: "tb:pl-600", // deprecated
    [SIZES.XLARGE]: "tb:pl-800", // deprecated
    [SIZES.XXLARGE]: "tb:pl-1000", // deprecated
    [SIZES.XXXLARGE]: "tb:pl-[52px]", // deprecated
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:pl-0",
    [SIZES.FIFTY]: "lm:pl-50",
    [SIZES.ONE_HUNDRED]: "lm:pl-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "lm:pl-150",
    [SIZES.TWO_HUNDRED]: "lm:pl-200",
    [SIZES.THREE_HUNDRED]: "lm:pl-300",
    [SIZES.FOUR_HUNDRED]: "lm:pl-400",
    [SIZES.FIVE_HUNDRED]: "lm:pl-500",
    [SIZES.SIX_HUNDRED]: "lm:pl-600",
    [SIZES.EIGHT_HUNDRED]: "lm:pl-800",
    [SIZES.ONE_THOUSAND]: "lm:pl-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "lm:pl-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "lm:pl-1600",
    [SIZES.XXXSMALL]: "lm:pl-50", // deprecated
    [SIZES.XXSMALL]: "lm:pl-100", // deprecated
    [SIZES.XSMALL]: "lm:pl-200", // deprecated
    [SIZES.SMALL]: "lm:pl-300", // deprecated
    [SIZES.MEDIUM]: "lm:pl-400", // deprecated
    [SIZES.LARGE]: "lm:pl-600", // deprecated
    [SIZES.XLARGE]: "lm:pl-800", // deprecated
    [SIZES.XXLARGE]: "lm:pl-1000", // deprecated
    [SIZES.XXXLARGE]: "lm:pl-[52px]", // deprecated
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:pl-0",
    [SIZES.FIFTY]: "mm:pl-50",
    [SIZES.ONE_HUNDRED]: "mm:pl-100",
    [SIZES.ONE_HUNDRED_FIFTY]: "mm:pl-150",
    [SIZES.TWO_HUNDRED]: "mm:pl-200",
    [SIZES.THREE_HUNDRED]: "mm:pl-300",
    [SIZES.FOUR_HUNDRED]: "mm:pl-400",
    [SIZES.FIVE_HUNDRED]: "mm:pl-500",
    [SIZES.SIX_HUNDRED]: "mm:pl-600",
    [SIZES.EIGHT_HUNDRED]: "mm:pl-800",
    [SIZES.ONE_THOUSAND]: "mm:pl-1000",
    [SIZES.ONE_THOUSAND_TWO_HUNDRED]: "mm:pl-1200",
    [SIZES.ONE_THOUSAND_SIX_HUNDRED]: "mm:pl-1600",
    [SIZES.XXXSMALL]: "mm:pl-50", // deprecated
    [SIZES.XXSMALL]: "mm:pl-100", // deprecated
    [SIZES.XSMALL]: "mm:pl-200", // deprecated
    [SIZES.SMALL]: "mm:pl-300", // deprecated
    [SIZES.MEDIUM]: "mm:pl-400", // deprecated
    [SIZES.LARGE]: "mm:pl-600", // deprecated
    [SIZES.XLARGE]: "mm:pl-800", // deprecated
    [SIZES.XXLARGE]: "mm:pl-1000", // deprecated
    [SIZES.XXXLARGE]: "mm:pl-[52px]", // deprecated
  },
};
