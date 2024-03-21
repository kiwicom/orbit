import { QUERIES } from "../../utils/mediaQuery";

export enum ALIGN {
  START = "start",
  CENTER = "center",
  END = "end",
  STRETCH = "stretch",
  BASELINE = "baseline",
}

export const alignItemsClasses: {
  [K in QUERIES | ALIGN]: K extends QUERIES ? Record<ALIGN, string> : string;
} = {
  [ALIGN.START]: "items-start",
  [ALIGN.CENTER]: "items-center",
  [ALIGN.END]: "items-end",
  [ALIGN.STRETCH]: "items-stretch",
  [ALIGN.BASELINE]: "items-baseline",
  [QUERIES.LARGEDESKTOP]: {
    [ALIGN.START]: "ld:items-start",
    [ALIGN.CENTER]: "ld:items-center",
    [ALIGN.END]: "ld:items-end",
    [ALIGN.STRETCH]: "ld:items-stretch",
    [ALIGN.BASELINE]: "ld:items-baseline",
  },
  [QUERIES.DESKTOP]: {
    [ALIGN.START]: "de:items-start",
    [ALIGN.CENTER]: "de:items-center",
    [ALIGN.END]: "de:items-end",
    [ALIGN.STRETCH]: "de:items-stretch",
    [ALIGN.BASELINE]: "de:items-baseline",
  },
  [QUERIES.TABLET]: {
    [ALIGN.START]: "tb:items-start",
    [ALIGN.CENTER]: "tb:items-center",
    [ALIGN.END]: "tb:items-end",
    [ALIGN.STRETCH]: "tb:items-stretch",
    [ALIGN.BASELINE]: "tb:items-baseline",
  },
  [QUERIES.LARGEMOBILE]: {
    [ALIGN.START]: "lm:items-start",
    [ALIGN.CENTER]: "lm:items-center",
    [ALIGN.END]: "lm:items-end",
    [ALIGN.STRETCH]: "lm:items-stretch",
    [ALIGN.BASELINE]: "lm:items-baseline",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [ALIGN.START]: "mm:items-start",
    [ALIGN.CENTER]: "mm:items-center",
    [ALIGN.END]: "mm:items-end",
    [ALIGN.STRETCH]: "mm:items-stretch",
    [ALIGN.BASELINE]: "mm:items-baseline",
  },
};

const getAlignItemsClasses = (align: `${ALIGN}`, viewport?: QUERIES): string => {
  return viewport ? alignItemsClasses[viewport][align] : alignItemsClasses[align];
};

export default getAlignItemsClasses;
