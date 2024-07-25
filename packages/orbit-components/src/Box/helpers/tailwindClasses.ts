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
  ACTION = "action",
  FIXED = "fixed",
  RAISED = "raised",
  OVERLAY = "overlay",
  FIXED_REVERSE = "fixedReverse",
  RAISED_REVERSE = "raisedReverse",
}

export const shadowClasses: {
  [K in QUERIES | SHADOWS]: K extends QUERIES ? Record<SHADOWS, string> : string;
} = {
  [SHADOWS.ACTION]: "shadow-action",
  [SHADOWS.FIXED]: "shadow-fixed",
  [SHADOWS.RAISED]: "shadow-raised",
  [SHADOWS.OVERLAY]: "shadow-overlay",
  [SHADOWS.FIXED_REVERSE]: "shadow-fixed-reverse",
  [SHADOWS.RAISED_REVERSE]: "shadow-raised-reverse",
  [QUERIES.LARGEDESKTOP]: {
    [SHADOWS.ACTION]: "ld:shadow-action",
    [SHADOWS.FIXED]: "ld:shadow-fixed",
    [SHADOWS.RAISED]: "ld:shadow-raised",
    [SHADOWS.OVERLAY]: "ld:shadow-overlay",
    [SHADOWS.FIXED_REVERSE]: "ld:shadow-fixed-reverse",
    [SHADOWS.RAISED_REVERSE]: "ld:shadow-raised-reverse",
  },
  [QUERIES.DESKTOP]: {
    [SHADOWS.ACTION]: "de:shadow-action",
    [SHADOWS.FIXED]: "de:shadow-fixed",
    [SHADOWS.RAISED]: "de:shadow-raised",
    [SHADOWS.OVERLAY]: "de:shadow-overlay",
    [SHADOWS.FIXED_REVERSE]: "de:shadow-fixed-reverse",
    [SHADOWS.RAISED_REVERSE]: "de:shadow-raised-reverse",
  },
  [QUERIES.TABLET]: {
    [SHADOWS.ACTION]: "tb:shadow-action",
    [SHADOWS.FIXED]: "tb:shadow-fixed",
    [SHADOWS.RAISED]: "tb:shadow-raised",
    [SHADOWS.OVERLAY]: "tb:shadow-overlay",
    [SHADOWS.FIXED_REVERSE]: "tb:shadow-fixed-reverse",
    [SHADOWS.RAISED_REVERSE]: "tb:shadow-raised-reverse",
  },
  [QUERIES.LARGEMOBILE]: {
    [SHADOWS.ACTION]: "lm:shadow-action",
    [SHADOWS.FIXED]: "lm:shadow-fixed",
    [SHADOWS.RAISED]: "lm:shadow-raised",
    [SHADOWS.OVERLAY]: "lm:shadow-overlay",
    [SHADOWS.FIXED_REVERSE]: "lm:shadow-fixed-reverse",
    [SHADOWS.RAISED_REVERSE]: "lm:shadow-raised-reverse",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SHADOWS.ACTION]: "mm:shadow-action",
    [SHADOWS.FIXED]: "mm:shadow-fixed",
    [SHADOWS.RAISED]: "mm:shadow-raised",
    [SHADOWS.OVERLAY]: "mm:shadow-overlay",
    [SHADOWS.FIXED_REVERSE]: "mm:shadow-fixed-reverse",
    [SHADOWS.RAISED_REVERSE]: "mm:shadow-raised-reverse",
  },
};

export enum BORDER_RADIUS {
  SMALL = "small", // deprecated
  NORMAL = "normal", // deprecated
  LARGE = "large", // deprecated
  CIRCLE = "circle", // deprecated
  NONE = "none",
  FULL = "full",
  FIFTY = "50",
  ONE_HUNDRED = "100",
  ONE_HUNDRED_FIFTY = "150",
  THREE_HUNDRED = "300",
  FOUR_HUNDRED = "400",
}

export const borderRadiusClasses: {
  [K in QUERIES | BORDER_RADIUS]: K extends QUERIES ? Record<BORDER_RADIUS, string> : string;
} = {
  [BORDER_RADIUS.SMALL]: "rounded-small", // deprecated
  [BORDER_RADIUS.NORMAL]: "rounded-normal", // deprecated
  [BORDER_RADIUS.LARGE]: "rounded-large", // deprecated
  [BORDER_RADIUS.CIRCLE]: "rounded-full", // deprecated
  [BORDER_RADIUS.NONE]: "rounded-none",
  [BORDER_RADIUS.FULL]: "rounded-full",
  [BORDER_RADIUS.FIFTY]: "rounded-50",
  [BORDER_RADIUS.ONE_HUNDRED]: "rounded-100",
  [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "rounded-150",
  [BORDER_RADIUS.THREE_HUNDRED]: "rounded-300",
  [BORDER_RADIUS.FOUR_HUNDRED]: "rounded-400",
  [QUERIES.LARGEDESKTOP]: {
    [BORDER_RADIUS.SMALL]: "ld:rounded-small", // deprecated
    [BORDER_RADIUS.NORMAL]: "ld:rounded-normal", // deprecated
    [BORDER_RADIUS.LARGE]: "ld:rounded-large", // deprecated
    [BORDER_RADIUS.CIRCLE]: "ld:rounded-full", // deprecated
    [BORDER_RADIUS.NONE]: "ld:rounded-none",
    [BORDER_RADIUS.FULL]: "rounded-full",
    [BORDER_RADIUS.FIFTY]: "ld:rounded-50",
    [BORDER_RADIUS.ONE_HUNDRED]: "ld:rounded-100",
    [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "ld:rounded-150",
    [BORDER_RADIUS.THREE_HUNDRED]: "ld:rounded-300",
    [BORDER_RADIUS.FOUR_HUNDRED]: "ld:rounded-400",
  },
  [QUERIES.DESKTOP]: {
    [BORDER_RADIUS.SMALL]: "de:rounded-small", // deprecated
    [BORDER_RADIUS.NORMAL]: "de:rounded-normal", // deprecated
    [BORDER_RADIUS.LARGE]: "de:rounded-large", // deprecated
    [BORDER_RADIUS.CIRCLE]: "de:rounded-full", // deprecated
    [BORDER_RADIUS.NONE]: "de:rounded-none",
    [BORDER_RADIUS.FULL]: "rounded-full",
    [BORDER_RADIUS.FIFTY]: "de:rounded-50",
    [BORDER_RADIUS.ONE_HUNDRED]: "de:rounded-100",
    [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "de:rounded-150",
    [BORDER_RADIUS.THREE_HUNDRED]: "de:rounded-300",
    [BORDER_RADIUS.FOUR_HUNDRED]: "de:rounded-400",
  },
  [QUERIES.TABLET]: {
    [BORDER_RADIUS.SMALL]: "tb:rounded-small", // deprecated
    [BORDER_RADIUS.NORMAL]: "tb:rounded-normal", // deprecated
    [BORDER_RADIUS.LARGE]: "tb:rounded-large", // deprecated
    [BORDER_RADIUS.CIRCLE]: "tb:rounded-full", // deprecated
    [BORDER_RADIUS.NONE]: "tb:rounded-none",
    [BORDER_RADIUS.FULL]: "rounded-full",
    [BORDER_RADIUS.FIFTY]: "tb:rounded-50",
    [BORDER_RADIUS.ONE_HUNDRED]: "tb:rounded-100",
    [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "tb:rounded-150",
    [BORDER_RADIUS.THREE_HUNDRED]: "tb:rounded-300",
    [BORDER_RADIUS.FOUR_HUNDRED]: "tb:rounded-400",
  },
  [QUERIES.LARGEMOBILE]: {
    [BORDER_RADIUS.SMALL]: "lm:rounded-small", // deprecated
    [BORDER_RADIUS.NORMAL]: "lm:rounded-normal", // deprecated
    [BORDER_RADIUS.LARGE]: "lm:rounded-large", // deprecated
    [BORDER_RADIUS.CIRCLE]: "lm:rounded-full", // deprecated
    [BORDER_RADIUS.NONE]: "lm:rounded-none",
    [BORDER_RADIUS.FULL]: "rounded-full",
    [BORDER_RADIUS.FIFTY]: "lm:rounded-50",
    [BORDER_RADIUS.ONE_HUNDRED]: "lm:rounded-100",
    [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "lm:rounded-150",
    [BORDER_RADIUS.THREE_HUNDRED]: "lm:rounded-300",
    [BORDER_RADIUS.FOUR_HUNDRED]: "lm:rounded-400",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [BORDER_RADIUS.SMALL]: "mm:rounded-small", // deprecated
    [BORDER_RADIUS.NORMAL]: "mm:rounded-normal", // deprecated
    [BORDER_RADIUS.LARGE]: "mm:rounded-large", // deprecated
    [BORDER_RADIUS.CIRCLE]: "mm:rounded-full", // deprecated
    [BORDER_RADIUS.NONE]: "mm:rounded-none",
    [BORDER_RADIUS.FULL]: "rounded-full",
    [BORDER_RADIUS.FIFTY]: "mm:rounded-50",
    [BORDER_RADIUS.ONE_HUNDRED]: "mm:rounded-100",
    [BORDER_RADIUS.ONE_HUNDRED_FIFTY]: "mm:rounded-150",
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
