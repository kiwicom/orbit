import { Property } from "style-dictionary";

import { isSpacing, isBorderRadius } from "../../utils/is";
import { errorTransform } from "../../utils/errorMessage";

/*
  Transforms spacing to pixel value.
 */
export const spacingJavascript = {
  name: "value/spacing/javascript",
  type: "value",
  matcher: isSpacing,
  transformer: ({ value }: Property): string => {
    return `${value}px`;
  },
};

/*
  Transforms value to Javascript compatible format with double quotes.
 */
export const stringJavascript = {
  name: "value/string/javascript",
  type: "value",
  transformer: ({ value }: Property): string => {
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
  transformer: ({ value }: Property): string => {
    const normalizedValue = Number(value);
    if (normalizedValue) {
      return `${normalizedValue}px`;
    }
    return String(value);
  },
};

/*
  Transforms attributes from attribute/nov to interlaced identifiers.
  e.g. foundation.space.value
  TODO in future:
  - other types has leading dot at the end (only palette is being exposed via global tokens for now)
 */
export const foundationAlias = {
  name: "value/nov/alias",
  type: "value",
  transformer: (prop: Property): string => {
    const { attributes } = prop;
    const { namespace, object, variant, subVariant } = attributes;
    if ([namespace, object, variant, subVariant].every(value => value == null)) {
      throw new Error(errorTransform("value/nov/alias", "attribute/nov"));
    }
    return [namespace, object, variant, subVariant].filter(Boolean).join(".");
  },
};
