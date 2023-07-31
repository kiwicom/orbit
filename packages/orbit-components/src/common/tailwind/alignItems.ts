import { QUERIES } from "../../utils/mediaQuery/consts";
import type { Align } from "../../Stack/types";
import type { Devices } from "../../utils/mediaQuery/types";

export enum ALIGN {
  START = "start",
  CENTER = "center",
  END = "end",
  STRETCH = "stretch",
}

export const alignItemsClasses: {
  [K in QUERIES | ALIGN]: K extends QUERIES ? Record<ALIGN, string> : string;
} = {
  [ALIGN.START]: "items-start",
  [ALIGN.CENTER]: "items-center",
  [ALIGN.END]: "items-end",
  [ALIGN.STRETCH]: "items-stretch",
  [QUERIES.LARGEDESKTOP]: {
    [ALIGN.START]: "ld:items-start",
    [ALIGN.CENTER]: "ld:items-center",
    [ALIGN.END]: "ld:items-end",
    [ALIGN.STRETCH]: "ld:items-stretch",
  },
  [QUERIES.DESKTOP]: {
    [ALIGN.START]: "de:items-start",
    [ALIGN.CENTER]: "de:items-center",
    [ALIGN.END]: "de:items-end",
    [ALIGN.STRETCH]: "de:items-stretch",
  },
  [QUERIES.TABLET]: {
    [ALIGN.START]: "tb:items-start",
    [ALIGN.CENTER]: "tb:items-center",
    [ALIGN.END]: "tb:items-end",
    [ALIGN.STRETCH]: "tb:items-stretch",
  },
  [QUERIES.LARGEMOBILE]: {
    [ALIGN.START]: "lm:items-start",
    [ALIGN.CENTER]: "lm:items-center",
    [ALIGN.END]: "lm:items-end",
    [ALIGN.STRETCH]: "lm:items-stretch",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [ALIGN.START]: "mm:items-start",
    [ALIGN.CENTER]: "mm:items-center",
    [ALIGN.END]: "mm:items-end",
    [ALIGN.STRETCH]: "mm:items-stretch",
  },
};

const getAlignItemsClasses = (align: Align, viewport?: Devices) => {
  const root = viewport ? alignItemsClasses[viewport] : alignItemsClasses;

  return root[align];
};

export default getAlignItemsClasses;
