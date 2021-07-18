import { Property, Value } from "style-dictionary";
import { parseToRgba } from "color2k";

import {
  isBorderRadius,
  isSize,
  isZIndex,
  isBreakpoint,
  isModifier,
  isDuration,
  isOpacity,
  isColor,
  isHex,
} from "../../utils/is";
import { errorTransform } from "../../utils/errorMessage";
import { stringify, pixelized } from "../../utils/string";

/*
  Transforms sizes to pixel value.
 */
export const sizeJavascript = {
  name: "value/size/javascript",
  type: "value",
  matcher: isSize,
  transformer: ({ value }: Property): Value => {
    return pixelized(value);
  },
};

export const durationJavascript = {
  name: "value/duration/javascript",
  type: "value",
  matcher: isDuration,
  transformer: ({ value }: Property): Value => {
    const normalizedValue = Number(value);
    return stringify(`${normalizedValue / 1000}s`);
  },
};

/*
  Transforms sizes to pixel value for XML platform.
  The result is without explicit quote marks.
 */
export const sizeXML = {
  name: "value/size/xml",
  type: "value",
  matcher: isSize,
  transformer: ({ value }: Property): Value => {
    return pixelized(value, false);
  },
};

/*
  Transforms border radius value to Javascript compatible format with pixels.
 */
export const borderRadiusJavascript = {
  name: "value/border-radius/javascript",
  type: "value",
  matcher: isBorderRadius,
  transformer: ({ value }: Property): Value => {
    const normalizedValue = Number(value);
    return stringify(normalizedValue ? `${normalizedValue}px` : value);
  },
};

/*
  Additional mapping for the Javascript format.
  Transforms all needed attributes, easier to use in the config file.
 */
export const valueJavascript = {
  name: "value/javascript",
  type: "value",
  matcher: ({ attributes: { aliased } }: Property): boolean => !aliased,
  transformer: (prop: Property): Value => {
    if (isSize(prop)) return sizeJavascript.transformer(prop);
    if (isBorderRadius(prop)) return borderRadiusJavascript.transformer(prop);
    if (isDuration(prop)) return durationJavascript.transformer(prop);
    if (isZIndex(prop) || isBreakpoint(prop) || isModifier(prop)) return Number(prop.value);
    if (isOpacity(prop)) return stringify(Number(prop.value) / 100);
    return stringify(prop.value);
  },
};

export const valueXML = {
  name: "value/xml",
  type: "value",
  matcher: ({ attributes: { aliased } }: Property): boolean => !aliased,
  transformer: (prop: Property): Value => {
    if (isSize(prop)) return sizeJavascript.transformer(prop);
    return prop.value;
  },
};

export const valueColorRgb = {
  name: "value/color/rgb",
  type: "value",
  transformer: (prop: Property): Value => {
    if (isColor(prop) && isHex(prop.value)) {
      const [R, G, B] = parseToRgba(String(prop.value));
      return `rgb(${R}, ${G}, ${B})`;
    }
    return prop.value;
  },
};

/*
  Transforms attributes from attribute/nov to interlaced identifiers,
  only for referenced aliases.
  e.g. foundation.space.value
 */
export const foundationAlias = {
  name: "value/nov/alias",
  type: "value",
  transformer: ({
    attributes: { namespace, object, variant, subVariant, aliased },
    value,
  }: Property): Value => {
    if ([namespace, object, variant, subVariant].every(v => v == null)) {
      throw new Error(errorTransform("value/nov/alias", "attribute/nov"));
    }
    if (!aliased) return value;
    return [namespace, object, variant, subVariant].filter(Boolean).join(".");
  },
};
