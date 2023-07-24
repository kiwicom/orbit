import { QUERIES } from "../../utils/mediaQuery/consts";

enum WRAP {
  WRAP = "wrap",
  NO_WRAP = "nowrap",
}

export const wrapClasses: {
  [K in QUERIES | WRAP]: K extends QUERIES ? Record<WRAP, string> : string;
} = {
  [WRAP.WRAP]: "flex-wrap",
  [WRAP.NO_WRAP]: "flex-nowrap",
  [QUERIES.LARGEDESKTOP]: {
    [WRAP.WRAP]: "ld:flex-wrap",
    [WRAP.NO_WRAP]: "ld:flex-nowrap",
  },
  [QUERIES.DESKTOP]: {
    [WRAP.WRAP]: "de:flex-wrap",
    [WRAP.NO_WRAP]: "de:flex-nowrap",
  },
  [QUERIES.TABLET]: {
    [WRAP.WRAP]: "tb:flex-wrap",
    [WRAP.NO_WRAP]: "tb:flex-nowrap",
  },
  [QUERIES.LARGEMOBILE]: {
    [WRAP.WRAP]: "lm:flex-wrap",
    [WRAP.NO_WRAP]: "lm:flex-nowrap",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [WRAP.WRAP]: "mm:flex-wrap",
    [WRAP.NO_WRAP]: "mm:flex-nowrap",
  },
};
