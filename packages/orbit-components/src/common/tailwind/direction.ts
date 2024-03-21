import { QUERIES } from "../../utils/mediaQuery";

export enum DIRECTION {
  ROW = "row",
  COLUMN = "column",
  ROW_REVERSE = "row-reverse",
  COLUMN_REVERSE = "column-reverse",
}

export const directionClasses: {
  [K in QUERIES | DIRECTION]: K extends QUERIES ? Record<DIRECTION, string> : string;
} = {
  [DIRECTION.ROW]: "flex-row",
  [DIRECTION.COLUMN]: "flex-col",
  [DIRECTION.ROW_REVERSE]: "flex-row-reverse",
  [DIRECTION.COLUMN_REVERSE]: "flex-col-reverse",
  [QUERIES.LARGEDESKTOP]: {
    [DIRECTION.ROW]: "ld:flex-row",
    [DIRECTION.COLUMN]: "ld:flex-col",
    [DIRECTION.ROW_REVERSE]: "ld:flex-row-reverse",
    [DIRECTION.COLUMN_REVERSE]: "ld:flex-col-reverse",
  },
  [QUERIES.DESKTOP]: {
    [DIRECTION.ROW]: "de:flex-row",
    [DIRECTION.COLUMN]: "de:flex-col",
    [DIRECTION.ROW_REVERSE]: "de:flex-row-reverse",
    [DIRECTION.COLUMN_REVERSE]: "de:flex-col-reverse",
  },
  [QUERIES.TABLET]: {
    [DIRECTION.ROW]: "tb:flex-row",
    [DIRECTION.COLUMN]: "tb:flex-col",
    [DIRECTION.ROW_REVERSE]: "tb:flex-row-reverse",
    [DIRECTION.COLUMN_REVERSE]: "tb:flex-col-reverse",
  },
  [QUERIES.LARGEMOBILE]: {
    [DIRECTION.ROW]: "lm:flex-row",
    [DIRECTION.COLUMN]: "lm:flex-col",
    [DIRECTION.ROW_REVERSE]: "lm:flex-row-reverse",
    [DIRECTION.COLUMN_REVERSE]: "lm:flex-col-reverse",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [DIRECTION.ROW]: "mm:flex-row",
    [DIRECTION.COLUMN]: "mm:flex-col",
    [DIRECTION.ROW_REVERSE]: "mm:flex-row-reverse",
    [DIRECTION.COLUMN_REVERSE]: "mm:flex-col-reverse",
  },
};

const getDirectionToken = (direction: `${DIRECTION}`, viewport?: QUERIES): string => {
  return viewport ? directionClasses[viewport][direction] : directionClasses[direction];
};

export default getDirectionToken;
