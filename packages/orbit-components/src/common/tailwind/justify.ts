import { QUERIES } from "../../utils/mediaQuery/consts";

export enum JUSTIFY {
  START = "start",
  CENTER = "center",
  END = "end",
  BETWEEN = "between",
  AROUND = "around",
}

export const justifyClasses: {
  [K in QUERIES | JUSTIFY]: K extends QUERIES ? Record<JUSTIFY, string> : string;
} = {
  [JUSTIFY.START]: "justify-start",
  [JUSTIFY.CENTER]: "justify-center",
  [JUSTIFY.END]: "justify-end",
  [JUSTIFY.BETWEEN]: "justify-between",
  [JUSTIFY.AROUND]: "justify-around",
  [QUERIES.LARGEDESKTOP]: {
    [JUSTIFY.START]: "ld:justify-start",
    [JUSTIFY.CENTER]: "ld:justify-center",
    [JUSTIFY.END]: "ld:justify-end",
    [JUSTIFY.BETWEEN]: "ld:justify-between",
    [JUSTIFY.AROUND]: "ld:justify-around",
  },
  [QUERIES.DESKTOP]: {
    [JUSTIFY.START]: "de:justify-start",
    [JUSTIFY.CENTER]: "de:justify-center",
    [JUSTIFY.END]: "de:justify-end",
    [JUSTIFY.BETWEEN]: "de:justify-between",
    [JUSTIFY.AROUND]: "de:justify-around",
  },
  [QUERIES.TABLET]: {
    [JUSTIFY.START]: "tb:justify-start",
    [JUSTIFY.CENTER]: "tb:justify-center",
    [JUSTIFY.END]: "tb:justify-end",
    [JUSTIFY.BETWEEN]: "tb:justify-between",
    [JUSTIFY.AROUND]: "tb:justify-around",
  },
  [QUERIES.LARGEMOBILE]: {
    [JUSTIFY.START]: "lm:justify-start",
    [JUSTIFY.CENTER]: "lm:justify-center",
    [JUSTIFY.END]: "lm:justify-end",
    [JUSTIFY.BETWEEN]: "lm:justify-between",
    [JUSTIFY.AROUND]: "lm:justify-around",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [JUSTIFY.START]: "mm:justify-start",
    [JUSTIFY.CENTER]: "mm:justify-center",
    [JUSTIFY.END]: "mm:justify-end",
    [JUSTIFY.BETWEEN]: "mm:justify-between",
    [JUSTIFY.AROUND]: "mm:justify-around",
  },
};
