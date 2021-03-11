import { Property, Value } from "style-dictionary";

import { getValue } from "./get";
import { isSpacingWithFourValues, isSpacingWithThreeValues, isSpacingWithTwoValues } from "./is";

/*
  Returns string if condition is met.
 */
export const falsyString = (condition: boolean, string: string): string | undefined =>
  condition ? string : undefined;

export const stringify = (value: string | number): string => `"${value}"`;

/*
  Converts a string or number into string with pixels.
  The `${value}px` is applied only for value of type number, e.g. 24.
  Cases like "auto", "0" are being skipped because it's either redundant to specify the pixels, or unwanted.
  Second parameter is required boolean if it's needed to attach additional double quotes or not.
 */
const isStringified = (condition: boolean, value: string) => (condition ? stringify(value) : value);
export const pixelized = (value: string | number, stringified = true): string => {
  if (/^[0-9]*$/g.test(String(value)) && String(value) !== "0") {
    return isStringified(stringified, `${value}px`);
  }
  return isStringified(stringified, String(value));
};

/*
  Function to flatten a spacing object.
  If it doesn't match any of supporting formats it will die on an Error.
 */
export const flattenSpacing = (
  name: string,
  spacing: { [key: string]: Property },
): Array<Value> => {
  const spaceArr = Object.keys(spacing).sort();
  const spacingValues = spaceArr.map(k => getValue(spacing[k]));
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
