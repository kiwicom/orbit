import { QUERIES } from "../../utils/mediaQuery";

export enum DISPLAY {
  NONE = "none",
  FLEX = "flex",
  INLINE_FLEX = "inline-flex",
  BLOCK = "block",
  INLINE = "inline",
  INLINE_BLOCK = "inline-block",
  LIST_ITEM = "list-item",
}

type Display = `${DISPLAY}`;

export const displayClasses: {
  [K in QUERIES | DISPLAY]: K extends QUERIES ? Record<DISPLAY, string> : string;
} = {
  [DISPLAY.NONE]: "hidden",
  [DISPLAY.FLEX]: "flex",
  [DISPLAY.INLINE_FLEX]: "inline-flex",
  [DISPLAY.BLOCK]: "block",
  [DISPLAY.INLINE]: "inline",
  [DISPLAY.INLINE_BLOCK]: "inline-block",
  [DISPLAY.LIST_ITEM]: "list-item",
  [QUERIES.LARGEDESKTOP]: {
    [DISPLAY.NONE]: "ld:hidden",
    [DISPLAY.FLEX]: "ld:flex",
    [DISPLAY.INLINE_FLEX]: "ld:inline-flex",
    [DISPLAY.BLOCK]: "ld:block",
    [DISPLAY.INLINE]: "ld:inline",
    [DISPLAY.INLINE_BLOCK]: "ld:inline-block",
    [DISPLAY.LIST_ITEM]: "ld:list-item",
  },
  [QUERIES.DESKTOP]: {
    [DISPLAY.NONE]: "de:hidden",
    [DISPLAY.FLEX]: "de:flex",
    [DISPLAY.INLINE_FLEX]: "de:inline-flex",
    [DISPLAY.BLOCK]: "de:block",
    [DISPLAY.INLINE]: "de:inline",
    [DISPLAY.INLINE_BLOCK]: "de:inline-block",
    [DISPLAY.LIST_ITEM]: "de:list-item",
  },
  [QUERIES.TABLET]: {
    [DISPLAY.NONE]: "tb:hidden",
    [DISPLAY.FLEX]: "tb:flex",
    [DISPLAY.INLINE_FLEX]: "tb:inline-flex",
    [DISPLAY.BLOCK]: "tb:block",
    [DISPLAY.INLINE]: "tb:inline",
    [DISPLAY.INLINE_BLOCK]: "tb:inline-block",
    [DISPLAY.LIST_ITEM]: "tb:list-item",
  },
  [QUERIES.LARGEMOBILE]: {
    [DISPLAY.NONE]: "lm:hidden",
    [DISPLAY.FLEX]: "lm:flex",
    [DISPLAY.INLINE_FLEX]: "lm:inline-flex",
    [DISPLAY.BLOCK]: "lm:block",
    [DISPLAY.INLINE]: "lm:inline",
    [DISPLAY.INLINE_BLOCK]: "lm:inline-block",
    [DISPLAY.LIST_ITEM]: "lm:list-item",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [DISPLAY.NONE]: "mm:hidden",
    [DISPLAY.FLEX]: "mm:flex",
    [DISPLAY.INLINE_FLEX]: "mm:inline-flex",
    [DISPLAY.BLOCK]: "mm:block",
    [DISPLAY.INLINE]: "mm:inline",
    [DISPLAY.INLINE_BLOCK]: "mm:inline-block",
    [DISPLAY.LIST_ITEM]: "mm:list-item",
  },
};

const getDisplayClasses = (display: Display, viewport?: QUERIES): string => {
  return viewport ? displayClasses[viewport][display] : displayClasses[display];
};

export const getDisplayInlineClass = (inline: boolean, viewport?: QUERIES): string => {
  return inline
    ? getDisplayClasses(DISPLAY.INLINE_FLEX, viewport)
    : getDisplayClasses(DISPLAY.BLOCK, viewport);
};

export default getDisplayClasses;
