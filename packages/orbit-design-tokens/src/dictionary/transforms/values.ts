import { DesignToken } from "style-dictionary";
import { rgba, parseToRgba } from "color2k";

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
  isRgb,
} from "../utils/is.js";
import { errorTransform } from "../utils/errorMessage.js";
import { stringify, pixelized } from "../utils/string.js";
import { determinateAlphaHex } from "../utils/determinate.js";

/*
  Transforms sizes to pixel value.
 */
export const sizeJavascript = {
  name: "value/size/javascript",
  type: "value",
  matcher: isSize,
  transformer: ({ value }: DesignToken) => {
    return pixelized(value);
  },
};

export const durationJavascript = {
  name: "value/duration/javascript",
  type: "value",
  matcher: isDuration,
  transformer: ({ value }: DesignToken) => {
    const normalizedValue = Number(value);
    return stringify(`${normalizedValue / 1000}s`);
  },
};

/*
  Transforms border radius value to Javascript compatible format with pixels.
 */
export const borderRadiusJavascript = {
  name: "value/border-radius/javascript",
  type: "value",
  matcher: isBorderRadius,
  transformer: ({ value }: DesignToken) => {
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
  matcher: ({ attributes: { aliased } }: DesignToken): boolean => !aliased,
  transformer: (prop: DesignToken) => {
    if (isSize(prop)) return sizeJavascript.transformer(prop);
    if (isBorderRadius(prop)) return borderRadiusJavascript.transformer(prop);
    if (isDuration(prop)) return durationJavascript.transformer(prop);
    if (isZIndex(prop) || isBreakpoint(prop) || isModifier(prop)) return Number(prop.value);
    if (isOpacity(prop)) return stringify(Number(prop.value) / 100);
    if (isColor(prop))
      return prop.opacity !== undefined
        ? `${stringify(prop.value)}${determinateAlphaHex(prop.opacity)}`
        : stringify(prop.value);
    return stringify(prop.value);
  },
};

export const valueXML = {
  name: "value/xml",
  type: "value",
  matcher: ({ attributes: { aliased } }: DesignToken): boolean => !aliased,
  transformer: (prop: DesignToken) => {
    if (isSize(prop)) return sizeJavascript.transformer(prop);
    return prop.value;
  },
};

export const valueColorRgb = {
  name: "value/color/rgb",
  transitive: true,
  type: "value",
  transformer: (prop: DesignToken) => {
    if (isColor(prop) && (isHex(prop.value) || isRgb(prop.value))) {
      const [R, G, B] = parseToRgba(String(prop.value));

      return prop.opacity !== undefined
        ? rgba(R, G, B, prop.opacity / 100)
        : `rgb(${R}, ${G}, ${B})`;
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
  }: DesignToken) => {
    if ([namespace, object, variant, subVariant].every(v => v == null)) {
      throw new Error(errorTransform("value/nov/alias", "attribute/nov"));
    }
    if (!aliased) return value;
    return [namespace, object, variant, subVariant].filter(Boolean).join(".");
  },
};
