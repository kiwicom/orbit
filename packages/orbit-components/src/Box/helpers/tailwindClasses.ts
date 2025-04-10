import { QUERIES } from "../../utils/mediaQuery";

export enum POSITION {
  ABSOLUTE = "absolute",
  RELATIVE = "relative",
  FIXED = "fixed",
}

export const positionClasses: {
  [K in QUERIES | POSITION]: K extends QUERIES ? Record<POSITION, string> : string;
} = {
  [POSITION.ABSOLUTE]: "absolute",
  [POSITION.RELATIVE]: "relative",
  [POSITION.FIXED]: "fixed",
  [QUERIES.LARGEDESKTOP]: {
    [POSITION.ABSOLUTE]: "ld:absolute",
    [POSITION.RELATIVE]: "ld:relative",
    [POSITION.FIXED]: "ld:fixed",
  },
  [QUERIES.DESKTOP]: {
    [POSITION.ABSOLUTE]: "de:absolute",
    [POSITION.RELATIVE]: "de:relative",
    [POSITION.FIXED]: "de:fixed",
  },
  [QUERIES.TABLET]: {
    [POSITION.ABSOLUTE]: "tb:absolute",
    [POSITION.RELATIVE]: "tb:relative",
    [POSITION.FIXED]: "tb:fixed",
  },
  [QUERIES.LARGEMOBILE]: {
    [POSITION.ABSOLUTE]: "lm:absolute",
    [POSITION.RELATIVE]: "lm:relative",
    [POSITION.FIXED]: "lm:fixed",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [POSITION.ABSOLUTE]: "mm:absolute",
    [POSITION.RELATIVE]: "mm:relative",
    [POSITION.FIXED]: "mm:fixed",
  },
};

export enum SHADOWS {
  FIXED = "fixed",
  FIXED_REVERSE = "fixedReverse",
  LEVEL1 = "level1",
  LEVEL2 = "level2",
  LEVEL3 = "level3",
  LEVEL3_REVERSE = "level3Reverse",
  LEVEL4 = "level4",
  NAVBAR = "navBar",
}

export const shadowClasses: {
  [K in QUERIES | SHADOWS]: K extends QUERIES ? Record<SHADOWS, string> : string;
} = {
  [SHADOWS.FIXED]: "shadow-fixed",
  [SHADOWS.FIXED_REVERSE]: "shadow-fixed-reverse",
  [SHADOWS.LEVEL1]: "shadow-level1",
  [SHADOWS.LEVEL2]: "shadow-level2",
  [SHADOWS.LEVEL3]: "shadow-level3",
  [SHADOWS.LEVEL3_REVERSE]: "shadow-level3-reverse",
  [SHADOWS.LEVEL4]: "shadow-level4",
  [SHADOWS.NAVBAR]: "shadow-navbar",
  [QUERIES.LARGEDESKTOP]: {
    [SHADOWS.FIXED]: "ld:shadow-fixed",
    [SHADOWS.FIXED_REVERSE]: "ld:shadow-fixed-reverse",
    [SHADOWS.LEVEL1]: "ld:shadow-level1",
    [SHADOWS.LEVEL2]: "ld:shadow-level2",
    [SHADOWS.LEVEL3]: "ld:shadow-level3",
    [SHADOWS.LEVEL3_REVERSE]: "ld:shadow-level3-reverse",
    [SHADOWS.LEVEL4]: "ld:shadow-level4",
    [SHADOWS.NAVBAR]: "ld:shadow-navbar",
  },
  [QUERIES.DESKTOP]: {
    [SHADOWS.FIXED]: "de:shadow-fixed",
    [SHADOWS.FIXED_REVERSE]: "de:shadow-fixed-reverse",
    [SHADOWS.LEVEL1]: "de:shadow-level1",
    [SHADOWS.LEVEL2]: "de:shadow-level2",
    [SHADOWS.LEVEL3]: "de:shadow-level3",
    [SHADOWS.LEVEL3_REVERSE]: "de:shadow-level3-reverse",
    [SHADOWS.LEVEL4]: "de:shadow-level4",
    [SHADOWS.NAVBAR]: "de:shadow-navbar",
  },
  [QUERIES.TABLET]: {
    [SHADOWS.FIXED]: "tb:shadow-fixed",
    [SHADOWS.FIXED_REVERSE]: "tb:shadow-fixed-reverse",
    [SHADOWS.LEVEL1]: "tb:shadow-level1",
    [SHADOWS.LEVEL2]: "tb:shadow-level2",
    [SHADOWS.LEVEL3]: "tb:shadow-level3",
    [SHADOWS.LEVEL3_REVERSE]: "tb:shadow-level3-reverse",
    [SHADOWS.LEVEL4]: "tb:shadow-level4",
    [SHADOWS.NAVBAR]: "tb:shadow-navbar",
  },
  [QUERIES.LARGEMOBILE]: {
    [SHADOWS.FIXED]: "lm:shadow-fixed",
    [SHADOWS.FIXED_REVERSE]: "lm:shadow-fixed-reverse",
    [SHADOWS.LEVEL1]: "lm:shadow-level1",
    [SHADOWS.LEVEL2]: "lm:shadow-level2",
    [SHADOWS.LEVEL3]: "lm:shadow-level3",
    [SHADOWS.LEVEL3_REVERSE]: "lm:shadow-level3-reverse",
    [SHADOWS.LEVEL4]: "lm:shadow-level4",
    [SHADOWS.NAVBAR]: "lm:shadow-navbar",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SHADOWS.FIXED]: "mm:shadow-fixed",
    [SHADOWS.FIXED_REVERSE]: "mm:shadow-fixed-reverse",
    [SHADOWS.LEVEL1]: "mm:shadow-level1",
    [SHADOWS.LEVEL2]: "mm:shadow-level2",
    [SHADOWS.LEVEL3]: "mm:shadow-level3",
    [SHADOWS.LEVEL3_REVERSE]: "mm:shadow-level3-reverse",
    [SHADOWS.LEVEL4]: "mm:shadow-level4",
    [SHADOWS.NAVBAR]: "mm:shadow-navbar",
  },
};

export enum BORDER_RADIUS {
  NONE = "none",
  FULL = "full",
  FIFTY = "50",
  ONE_HUNDRED = "100",
  ONE_HUNDRED_FIFTY = "150",
  TWO_HUNDRED = "200",
  THREE_HUNDRED = "300",
  FOUR_HUNDRED = "400",
}

export const borderRadiusClasses: {
  [K in QUERIES | BORDER_RADIUS]: K extends QUERIES ? Record<BORDER_RADIUS, string> : string;
} = {
  [BORDER_RADIUS.NONE]: "rounded-none",
  [BORDER_RADIUS.FULL]: "rounded-full",
  [BORDER_RADIUS.FIFTY]: "rounded-50",
  [BORDER_RADIUS.ONE_HUNDRED]: "rounded-100",
  [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "rounded-150",
  [BORDER_RADIUS.TWO_HUNDRED]: "rounded-200",
  [BORDER_RADIUS.THREE_HUNDRED]: "rounded-300",
  [BORDER_RADIUS.FOUR_HUNDRED]: "rounded-400",
  [QUERIES.LARGEDESKTOP]: {
    [BORDER_RADIUS.NONE]: "ld:rounded-none",
    [BORDER_RADIUS.FULL]: "rounded-full",
    [BORDER_RADIUS.FIFTY]: "ld:rounded-50",
    [BORDER_RADIUS.ONE_HUNDRED]: "ld:rounded-100",
    [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "ld:rounded-150",
    [BORDER_RADIUS.TWO_HUNDRED]: "ld:rounded-200",
    [BORDER_RADIUS.THREE_HUNDRED]: "ld:rounded-300",
    [BORDER_RADIUS.FOUR_HUNDRED]: "ld:rounded-400",
  },
  [QUERIES.DESKTOP]: {
    [BORDER_RADIUS.NONE]: "de:rounded-none",
    [BORDER_RADIUS.FULL]: "rounded-full",
    [BORDER_RADIUS.FIFTY]: "de:rounded-50",
    [BORDER_RADIUS.ONE_HUNDRED]: "de:rounded-100",
    [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "de:rounded-150",
    [BORDER_RADIUS.TWO_HUNDRED]: "de:rounded-200",
    [BORDER_RADIUS.THREE_HUNDRED]: "de:rounded-300",
    [BORDER_RADIUS.FOUR_HUNDRED]: "de:rounded-400",
  },
  [QUERIES.TABLET]: {
    [BORDER_RADIUS.NONE]: "tb:rounded-none",
    [BORDER_RADIUS.FULL]: "rounded-full",
    [BORDER_RADIUS.FIFTY]: "tb:rounded-50",
    [BORDER_RADIUS.ONE_HUNDRED]: "tb:rounded-100",
    [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "tb:rounded-150",
    [BORDER_RADIUS.TWO_HUNDRED]: "tb:rounded-200",
    [BORDER_RADIUS.THREE_HUNDRED]: "tb:rounded-300",
    [BORDER_RADIUS.FOUR_HUNDRED]: "tb:rounded-400",
  },
  [QUERIES.LARGEMOBILE]: {
    [BORDER_RADIUS.NONE]: "lm:rounded-none",
    [BORDER_RADIUS.FULL]: "rounded-full",
    [BORDER_RADIUS.FIFTY]: "lm:rounded-50",
    [BORDER_RADIUS.ONE_HUNDRED]: "lm:rounded-100",
    [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "lm:rounded-150",
    [BORDER_RADIUS.TWO_HUNDRED]: "lm:rounded-200",
    [BORDER_RADIUS.THREE_HUNDRED]: "lm:rounded-300",
    [BORDER_RADIUS.FOUR_HUNDRED]: "lm:rounded-400",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [BORDER_RADIUS.NONE]: "mm:rounded-none",
    [BORDER_RADIUS.FULL]: "rounded-full",
    [BORDER_RADIUS.FIFTY]: "mm:rounded-50",
    [BORDER_RADIUS.ONE_HUNDRED]: "mm:rounded-100",
    [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "mm:rounded-150",
    [BORDER_RADIUS.TWO_HUNDRED]: "mm:rounded-200",
    [BORDER_RADIUS.THREE_HUNDRED]: "mm:rounded-300",
    [BORDER_RADIUS.FOUR_HUNDRED]: "mm:rounded-400",
  },
};

export enum OVERFLOW {
  AUTO = "auto",
  HIDDEN = "hidden",
  SCROLL = "scroll",
  VISIBLE = "visible",
}

export const overflowClasses: {
  [K in QUERIES | OVERFLOW]: K extends QUERIES ? Record<OVERFLOW, string> : string;
} = {
  [OVERFLOW.AUTO]: "overflow-auto",
  [OVERFLOW.HIDDEN]: "overflow-hidden",
  [OVERFLOW.SCROLL]: "overflow-scroll",
  [OVERFLOW.VISIBLE]: "overflow-visible",
  [QUERIES.LARGEDESKTOP]: {
    [OVERFLOW.AUTO]: "ld:overflow-auto",
    [OVERFLOW.HIDDEN]: "ld:overflow-hidden",
    [OVERFLOW.SCROLL]: "ld:overflow-scroll",
    [OVERFLOW.VISIBLE]: "ld:overflow-visible",
  },
  [QUERIES.DESKTOP]: {
    [OVERFLOW.AUTO]: "de:overflow-auto",
    [OVERFLOW.HIDDEN]: "de:overflow-hidden",
    [OVERFLOW.SCROLL]: "de:overflow-scroll",
    [OVERFLOW.VISIBLE]: "de:overflow-visible",
  },
  [QUERIES.TABLET]: {
    [OVERFLOW.AUTO]: "tb:overflow-auto",
    [OVERFLOW.HIDDEN]: "tb:overflow-hidden",
    [OVERFLOW.SCROLL]: "tb:overflow-scroll",
    [OVERFLOW.VISIBLE]: "tb:overflow-visible",
  },
  [QUERIES.LARGEMOBILE]: {
    [OVERFLOW.AUTO]: "lm:overflow-auto",
    [OVERFLOW.HIDDEN]: "lm:overflow-hidden",
    [OVERFLOW.SCROLL]: "lm:overflow-scroll",
    [OVERFLOW.VISIBLE]: "lm:overflow-visible",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [OVERFLOW.AUTO]: "mm:overflow-auto",
    [OVERFLOW.HIDDEN]: "mm:overflow-hidden",
    [OVERFLOW.SCROLL]: "mm:overflow-scroll",
    [OVERFLOW.VISIBLE]: "mm:overflow-visible",
  },
};
