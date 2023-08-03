import { DesignToken } from "style-dictionary";

import {
  isBorderRadius,
  isBoxShadow,
  isDuration,
  isOpacity,
  isSize,
  isSpacing,
  isColor,
} from "../utils/is.js";
import { flattenSpacing, pixelized } from "../utils/string.js";
import transparentColor from "../../js/transparentColor.js";
import { getValue } from "../utils/get.js";
import { valueColorRgb } from "../transforms/values.js";
import { determinateAlphaHex } from "../utils/determinate.js";

export const resolveValue = (prop: DesignToken, platform: string) => {
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
  if (isColor(prop))
    return prop.opacity !== undefined
      ? `${prop.value}${determinateAlphaHex(prop.opacity)}`
      : prop.value;
  return getValue(value);
};
