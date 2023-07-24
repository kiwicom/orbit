import { QUERIES } from "../../utils/mediaQuery/consts";

export enum TEXT_ALIGN {
  START = "start",
  CENTER = "center",
  END = "end",
  JUSTIFY = "justify",
  LEFT = "left",
  RIGHT = "right",
}

export const textAlignClasses: {
  [K in QUERIES | TEXT_ALIGN]: K extends QUERIES ? Record<TEXT_ALIGN, string> : string;
} = {
  [TEXT_ALIGN.START]: "text-start",
  [TEXT_ALIGN.CENTER]: "text-center",
  [TEXT_ALIGN.END]: "text-end",
  [TEXT_ALIGN.JUSTIFY]: "text-justify",
  [TEXT_ALIGN.LEFT]: "text-left",
  [TEXT_ALIGN.RIGHT]: "text-right",
  [QUERIES.MEDIUMMOBILE]: {
    [TEXT_ALIGN.START]: "mm:text-start",
    [TEXT_ALIGN.CENTER]: "mm:text-center",
    [TEXT_ALIGN.END]: "mm:text-end",
    [TEXT_ALIGN.JUSTIFY]: "mm:text-justify",
    [TEXT_ALIGN.LEFT]: "mm:text-left",
    [TEXT_ALIGN.RIGHT]: "mm:text-right",
  },
  [QUERIES.LARGEMOBILE]: {
    [TEXT_ALIGN.START]: "lm:text-start",
    [TEXT_ALIGN.CENTER]: "lm:text-center",
    [TEXT_ALIGN.END]: "lm:text-end",
    [TEXT_ALIGN.JUSTIFY]: "lm:text-justify",
    [TEXT_ALIGN.LEFT]: "lm:text-left",
    [TEXT_ALIGN.RIGHT]: "lm:text-right",
  },
  [QUERIES.TABLET]: {
    [TEXT_ALIGN.START]: "tb:text-start",
    [TEXT_ALIGN.CENTER]: "tb:text-center",
    [TEXT_ALIGN.END]: "tb:text-end",
    [TEXT_ALIGN.JUSTIFY]: "tb:text-justify",
    [TEXT_ALIGN.LEFT]: "tb:text-left",
    [TEXT_ALIGN.RIGHT]: "tb:text-right",
  },
  [QUERIES.DESKTOP]: {
    [TEXT_ALIGN.START]: "de:text-start",
    [TEXT_ALIGN.CENTER]: "de:text-center",
    [TEXT_ALIGN.END]: "de:text-end",
    [TEXT_ALIGN.JUSTIFY]: "de:text-justify",
    [TEXT_ALIGN.LEFT]: "de:text-left",
    [TEXT_ALIGN.RIGHT]: "de:text-right",
  },
  [QUERIES.LARGEDESKTOP]: {
    [TEXT_ALIGN.START]: "ld:text-start",
    [TEXT_ALIGN.CENTER]: "ld:text-center",
    [TEXT_ALIGN.END]: "ld:text-end",
    [TEXT_ALIGN.JUSTIFY]: "ld:text-justify",
    [TEXT_ALIGN.LEFT]: "ld:text-left",
    [TEXT_ALIGN.RIGHT]: "ld:text-right",
  },
};
