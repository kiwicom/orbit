import { ALIGNS, JUSTIFY, DIRECTIONS } from "./consts";
import type { Justify, Property, Align, Direction } from "./types";

export const isDefined = (prop: Property): boolean => typeof prop !== "undefined";

const evaluateProp = (prop: string | boolean, positive: string, negative: string): string => {
  if (isDefined(prop)) return prop ? positive : negative;
  return "";
};

export const formatCSS = (key: string, value: string): string => `${key}: ${value};`;

export const getAlign = (align: Align): string => {
  const tokens = {
    [ALIGNS.START]: "flex-start",
    [ALIGNS.END]: "flex-end",
    [ALIGNS.CENTER]: "center",
    [ALIGNS.STRETCH]: "stretch",
    [ALIGNS.BASELINE]: "baseline",
  };

  return align && tokens[align];
};

export const getJustify = (justify: Justify): string => {
  const tokens = {
    [JUSTIFY.START]: "flex-start",
    [JUSTIFY.END]: "flex-end",
    [JUSTIFY.CENTER]: "center",
    [JUSTIFY.BETWEEN]: "space-between",
    [JUSTIFY.AROUND]: "space-around",
  };
  return justify && tokens[justify];
};

export const getDirection = (direction?: Direction): string => {
  if (!direction) return "";
  const directions = Object.values(DIRECTIONS) as Direction[];
  return directions.indexOf(direction) !== -1 ? direction : DIRECTIONS.ROW;
};

export const getGrow = (grow: string | boolean): string => evaluateProp(grow, "1", "0");

export const getShrink = (shrink: string | boolean): string => evaluateProp(shrink, "1", "0");

export const getWrap = (wrap: string | boolean): string => evaluateProp(wrap, "wrap", "nowrap");
