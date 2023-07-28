import { QUERIES } from "../../utils/mediaQuery/consts";

enum ALIGN {
  START = "start",
  CENTER = "center",
  END = "end",
  JUSTIFY = "justify",
  LEFT = "left",
  RIGHT = "right",
}

export const textAlignClasses: {
  [K in QUERIES | ALIGN]: K extends QUERIES ? Record<ALIGN, string> : string;
} = {
  [ALIGN.START]: "text-start",
  [ALIGN.CENTER]: "text-center",
  [ALIGN.END]: "text-end",
  [ALIGN.JUSTIFY]: "text-justify",
  [ALIGN.LEFT]: "text-left",
  [ALIGN.RIGHT]: "text-right",
  [QUERIES.MEDIUMMOBILE]: {
    [ALIGN.START]: "mm:text-start",
    [ALIGN.CENTER]: "mm:text-center",
    [ALIGN.END]: "mm:text-end",
    [ALIGN.JUSTIFY]: "mm:text-justify",
    [ALIGN.LEFT]: "mm:text-left",
    [ALIGN.RIGHT]: "mm:text-right",
  },
  [QUERIES.LARGEMOBILE]: {
    [ALIGN.START]: "lm:text-start",
    [ALIGN.CENTER]: "lm:text-center",
    [ALIGN.END]: "lm:text-end",
    [ALIGN.JUSTIFY]: "lm:text-justify",
    [ALIGN.LEFT]: "lm:text-left",
    [ALIGN.RIGHT]: "lm:text-right",
  },
  [QUERIES.TABLET]: {
    [ALIGN.START]: "tb:text-start",
    [ALIGN.CENTER]: "tb:text-center",
    [ALIGN.END]: "tb:text-end",
    [ALIGN.JUSTIFY]: "tb:text-justify",
    [ALIGN.LEFT]: "tb:text-left",
    [ALIGN.RIGHT]: "tb:text-right",
  },
  [QUERIES.DESKTOP]: {
    [ALIGN.START]: "de:text-start",
    [ALIGN.CENTER]: "de:text-center",
    [ALIGN.END]: "de:text-end",
    [ALIGN.JUSTIFY]: "de:text-justify",
    [ALIGN.LEFT]: "de:text-left",
    [ALIGN.RIGHT]: "de:text-right",
  },
  [QUERIES.LARGEDESKTOP]: {
    [ALIGN.START]: "ld:text-start",
    [ALIGN.CENTER]: "ld:text-center",
    [ALIGN.END]: "ld:text-end",
    [ALIGN.JUSTIFY]: "ld:text-justify",
    [ALIGN.LEFT]: "ld:text-left",
    [ALIGN.RIGHT]: "ld:text-right",
  },
};
