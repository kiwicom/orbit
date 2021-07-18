import * as _ from "lodash";

import {
  isBorderRadius,
  isBoxShadow,
  isDuration,
  isOpacity,
  isSize,
  isSpacing,
  isColor,
} from "../utils/is";
import { flattenSpacing, pixelized } from "../utils/string";
import transparentColor from "../../js/transparentColor";
import { getValue } from "../utils/get";
import { valueColorRgb } from "../transforms/values";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const resolveValue = (prop, platform) => {
  const { name, attributes, value } = prop;
  if (platform === "scss" && isColor(prop)) {
    return getValue(valueColorRgb.transformer(prop));
  }
  if (isSpacing(prop)) {
    const { spacing } = attributes;
    return flattenSpacing(name, spacing)
      .map(v => pixelized(v, false))
      .join(" ");
  }
  if (isBoxShadow(prop)) {
    /*
      TODO: this could be united, doubled implementation on more places (how to get the values, and how to flatten them)
     */
    const { "box-shadow": boxShadow } = attributes;
    const boxShadowArray = Array.isArray(boxShadow) ? boxShadow : [boxShadow];
    return boxShadowArray
      .map(def => {
        const { x, y, blur, spread, color, opacity, inset } = def;
        const dimensions = [x, y, blur, spread].map(val => pixelized(val, false));
        const colorValue = opacity ? transparentColor(String(getValue(color)), opacity) : color;
        return [inset && "inset", ...dimensions, colorValue].filter(Boolean).join(" ");
      })
      .join(", ");
  }
  const finalValue = getValue(prop);
  /*
    TODO: we could maybe use transformers here, so it's not doubled
   */
  if (isSize(prop)) return pixelized(finalValue, false);
  if (isOpacity(prop)) return String(Number(finalValue) / 100);
  if (isDuration(prop)) return String(`${Number(finalValue) / 1000}s`);
  if (isBorderRadius(prop)) return pixelized(finalValue, false);
  return getValue(value);
};
