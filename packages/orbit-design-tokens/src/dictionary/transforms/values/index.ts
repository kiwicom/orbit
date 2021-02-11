import { Property, Value } from "style-dictionary";

import { isSpacing, isBorderRadius } from "../../utils/is";
import { errorTransform } from "../../utils/errorMessage";

/*
  Transforms spacing to pixel value.
 */
export const spacingJavascript = {
  name: "value/spacing/javascript",
  type: "value",
  matcher: isSpacing,
  transformer: ({ value }: Property): Value => {
    return `${value}px`;
  },
};

/*
  Transforms value to Javascript compatible format with double quotes.
 */
export const stringJavascript = {
  name: "value/string/javascript",
  type: "value",
  transformer: ({ value }: Property): Value => {
    return `"${value}"`;
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
    if (normalizedValue) {
      return `${normalizedValue}px`;
    }
    return value;
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
