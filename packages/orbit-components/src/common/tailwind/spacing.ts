import cx from "clsx";

import { QUERIES } from "../../utils/mediaQuery/consts";
import type { Devices } from "../../utils/mediaQuery/types";
import type { Direction, Spacing } from "../../Stack/types";

enum SPACINGS {
  none = "none",
  XXXSmall = "XXXSmall",
  XXSmall = "XXSmall",
  XSmall = "XSmall",
  reverse = "reverse",
  small = "small",
  medium = "medium",
  large = "large",
  XLarge = "XLarge",
  XXLarge = "XXLarge",
  XXXLarge = "XXXLarge",
}

export const horizontalTokens: {
  [K in QUERIES | SPACINGS]: K extends QUERIES ? Record<SPACINGS, string> : string;
} = {
  [SPACINGS.none]: "space-x-none",
  [SPACINGS.reverse]: "space-x-reverse",
  [SPACINGS.XXXSmall]: "space-x-xxxs",
  [SPACINGS.XXSmall]: "space-x-xxs",
  [SPACINGS.XSmall]: "space-x-xs",
  [SPACINGS.small]: "space-x-sm",
  [SPACINGS.medium]: "space-x-md",
  [SPACINGS.large]: "space-x-lg",
  [SPACINGS.XLarge]: "space-x-xl",
  [SPACINGS.XXLarge]: "space-x-xxl",
  [SPACINGS.XXXLarge]: "space-x-xxxl",
  [QUERIES.MEDIUMMOBILE]: {
    [SPACINGS.none]: "mm:space-x-none",
    [SPACINGS.reverse]: "mm:space-x-reverse",
    [SPACINGS.XXXSmall]: "mm:space-x-xxxs",
    [SPACINGS.XXSmall]: "mm:space-x-xxs",
    [SPACINGS.XSmall]: "mm:space-x-xs",
    [SPACINGS.small]: "mm:space-x-sm",
    [SPACINGS.medium]: "mm:space-x-md",
    [SPACINGS.large]: "mm:space-x-lg",
    [SPACINGS.XLarge]: "mm:space-x-xl",
    [SPACINGS.XXLarge]: "mm:space-x-xxl",
    [SPACINGS.XXXLarge]: "mm:space-x-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACINGS.none]: "lm:space-x-none",
    [SPACINGS.reverse]: "lm:space-x-reverse",
    [SPACINGS.XXXSmall]: "lm:space-x-xxxs",
    [SPACINGS.XXSmall]: "lm:space-x-xxs",
    [SPACINGS.XSmall]: "lm:space-x-xs",
    [SPACINGS.small]: "lm:space-x-sm",
    [SPACINGS.medium]: "lm:space-x-md",
    [SPACINGS.large]: "lm:space-x-lg",
    [SPACINGS.XLarge]: "lm:space-x-xl",
    [SPACINGS.XXLarge]: "lm:space-x-xxl",
    [SPACINGS.XXXLarge]: "lm:space-x-xxxl",
  },
  [QUERIES.TABLET]: {
    [SPACINGS.none]: "tb:space-x-none",
    [SPACINGS.reverse]: "tb:space-x-reverse",
    [SPACINGS.XXXSmall]: "tb:space-x-xxxs",
    [SPACINGS.XXSmall]: "tb:space-x-xxs",
    [SPACINGS.XSmall]: "tb:space-x-xs",
    [SPACINGS.small]: "tb:space-x-sm",
    [SPACINGS.medium]: "tb:space-x-md",
    [SPACINGS.large]: "tb:space-x-lg",
    [SPACINGS.XLarge]: "tb:space-x-xl",
    [SPACINGS.XXLarge]: "tb:space-x-xxl",
    [SPACINGS.XXXLarge]: "tb:space-x-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SPACINGS.none]: "de:space-x-none",
    [SPACINGS.reverse]: "de:space-x-reverse",
    [SPACINGS.XXXSmall]: "de:space-x-xxxs",
    [SPACINGS.XXSmall]: "de:space-x-xxs",
    [SPACINGS.XSmall]: "de:space-x-xs",
    [SPACINGS.small]: "de:space-x-sm",
    [SPACINGS.medium]: "de:space-x-md",
    [SPACINGS.large]: "de:space-x-lg",
    [SPACINGS.XLarge]: "de:space-x-xl",
    [SPACINGS.XXLarge]: "de:space-x-xxl",
    [SPACINGS.XXXLarge]: "de:space-x-xxxl",
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACINGS.none]: "ld:space-x-none",
    [SPACINGS.reverse]: "ld:space-x-reverse",
    [SPACINGS.XXXSmall]: "ld:space-x-xxxs",
    [SPACINGS.XXSmall]: "ld:space-x-xxs",
    [SPACINGS.XSmall]: "ld:space-x-xs",
    [SPACINGS.small]: "ld:space-x-sm",
    [SPACINGS.medium]: "ld:space-x-md",
    [SPACINGS.large]: "ld:space-x-lg",
    [SPACINGS.XLarge]: "ld:space-x-xl",
    [SPACINGS.XXLarge]: "ld:space-x-xxl",
    [SPACINGS.XXXLarge]: "ld:space-x-xxxl",
  },
};

export const verticalTokens = {
  [SPACINGS.none]: "space-y-none",
  [SPACINGS.reverse]: "space-y-reverse",
  [SPACINGS.XXXSmall]: "space-y-xxxs",
  [SPACINGS.XXSmall]: "space-y-xxs",
  [SPACINGS.XSmall]: "space-y-xs",
  [SPACINGS.small]: "space-y-sm",
  [SPACINGS.medium]: "space-y-md",
  [SPACINGS.large]: "space-y-lg",
  [SPACINGS.XLarge]: "space-y-xl",
  [SPACINGS.XXLarge]: "space-y-xxl",
  [SPACINGS.XXXLarge]: "space-y-xxxl",
  [QUERIES.MEDIUMMOBILE]: {
    [SPACINGS.none]: "mm:space-y-none",
    [SPACINGS.reverse]: "mm:space-y-reverse",
    [SPACINGS.XXXSmall]: "mm:space-y-xxxs",
    [SPACINGS.XXSmall]: "mm:space-y-xxs",
    [SPACINGS.XSmall]: "mm:space-y-xs",
    [SPACINGS.small]: "mm:space-y-sm",
    [SPACINGS.medium]: "mm:space-y-md",
    [SPACINGS.large]: "mm:space-y-lg",
    [SPACINGS.XLarge]: "mm:space-y-xl",
    [SPACINGS.XXLarge]: "mm:space-y-xxl",
    [SPACINGS.XXXLarge]: "mm:space-y-xxxl",
  },
  largeMobile: {
    [SPACINGS.none]: "lm:space-y-none",
    [SPACINGS.reverse]: "lm:space-y-reverse",
    [SPACINGS.XXXSmall]: "lm:space-y-xxxs",
    [SPACINGS.XXSmall]: "lm:space-y-xxs",
    [SPACINGS.XSmall]: "lm:space-y-xs",
    [SPACINGS.small]: "lm:space-y-sm",
    [SPACINGS.medium]: "lm:space-y-md",
    [SPACINGS.large]: "lm:space-y-lg",
    [SPACINGS.XLarge]: "lm:space-y-xl",
    [SPACINGS.XXLarge]: "lm:space-y-xxl",
    [SPACINGS.XXXLarge]: "lm:space-y-xxxl",
  },
  tablet: {
    [SPACINGS.none]: "tb:space-y-none",
    [SPACINGS.reverse]: "tb:space-y-reverse",
    [SPACINGS.XXXSmall]: "tb:space-y-xxxs",
    [SPACINGS.XXSmall]: "tb:space-y-xxs",
    [SPACINGS.XSmall]: "tb:space-y-xs",
    [SPACINGS.small]: "tb:space-y-sm",
    [SPACINGS.medium]: "tb:space-y-md",
    [SPACINGS.large]: "tb:space-y-lg",
    [SPACINGS.XLarge]: "tb:space-y-xl",
    [SPACINGS.XXLarge]: "tb:space-y-xxl",
    [SPACINGS.XXXLarge]: "tb:space-y-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SPACINGS.none]: "de:space-y-none",
    [SPACINGS.reverse]: "de:space-y-reverse",
    [SPACINGS.XXXSmall]: "de:space-y-xxxs",
    [SPACINGS.XXSmall]: "de:space-y-xxs",
    [SPACINGS.XSmall]: "de:space-y-xs",
    [SPACINGS.small]: "de:space-y-sm",
    [SPACINGS.medium]: "de:space-y-md",
    [SPACINGS.large]: "de:space-y-lg",
    [SPACINGS.XLarge]: "de:space-y-xl",
    [SPACINGS.XXLarge]: "de:space-y-xxl",
    [SPACINGS.XXXLarge]: "de:space-y-xxxl",
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACINGS.none]: "ld:space-y-none",
    [SPACINGS.reverse]: "ld:space-y-reverse",
    [SPACINGS.XXXSmall]: "ld:space-y-xxxs",
    [SPACINGS.XXSmall]: "ld:space-y-xxs",
    [SPACINGS.XSmall]: "ld:space-y-xs",
    [SPACINGS.small]: "ld:space-y-sm",
    [SPACINGS.medium]: "ld:space-y-md",
    [SPACINGS.large]: "ld:space-y-lg",
    [SPACINGS.XLarge]: "ld:space-y-xl",
    [SPACINGS.XXLarge]: "ld:space-y-xxl",
    [SPACINGS.XXXLarge]: "ld:space-y-xxxl",
  },
};

const getSpacingClasses = (spacing: Spacing, direction: Direction, viewport?: Devices): string => {
  if (spacing === "none") return "";
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
};

export default getSpacingClasses;
