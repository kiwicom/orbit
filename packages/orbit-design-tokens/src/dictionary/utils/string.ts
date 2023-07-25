import { DesignToken } from "style-dictionary";
import _ from "lodash";

import { getValue } from "./get.js";
import { isSpacingWithFourValues, isSpacingWithThreeValues, isSpacingWithTwoValues } from "./is.js";

/**
  Returns string if condition is met.
 */

export const falsyString = (condition: boolean, string: string): string | undefined =>
  condition ? string : undefined;

export const stringify = (value: string | number): string => `"${value}"`;

const addStringified = (stringified: boolean, value: string) =>
  stringified ? stringify(value) : value;

/**
  Converts a string or number into string with pixels.
  The value}px` is applied only for value of type number, e.g. 24.
  Cases like "auto", "0" are being skipped because it's either redundant to specify the pixels, or unwanted.
  Second parameter is required boolean if it's needed to attach additional double quotes or not.
 */

export const pixelized = (value: string | number, stringified = true): string => {
  if (/^[-0-9]*$/g.test(String(value)) && String(value) !== "0") {
    return addStringified(stringified, `${value}px`);
  }
  return addStringified(stringified, String(value));
};

/**
  Function to flatten a spacing object.
  If it doesn't match any of supporting formats it will die on an Error.
 */

export const flattenSpacing = (
  name: string,
  spacing: Record<string, DesignToken>,
  valueGetter: typeof getValue = getValue,
) => {
  const spaceArr = Object.keys(spacing).sort();
  const spacingValues = spaceArr.map(k => valueGetter(spacing[k]));

  if (isSpacingWithTwoValues(spaceArr)) {
    const [leftRight, topBottom] = spacingValues;
    return [topBottom, leftRight];
  }

  if (isSpacingWithThreeValues(spaceArr)) {
    const [bottom, leftRight, top] = spacingValues;
    return [top, leftRight, bottom];
  }

  if (isSpacingWithFourValues(spaceArr)) {
    const [bottom, left, right, top] = spacingValues;
    return [top, right, bottom, left];
  }

  throw new Error(`Unexpected value of spacing token ${name}. Please double check its definition.`);
};

export const firstToUpper = (key: string, condition: boolean) =>
  condition ? _.upperFirst(key) : key;
