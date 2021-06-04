import _ from "lodash";
import { Attributes, Property } from "style-dictionary";

import { errorTransform, spacingError, spacingErrorDefinition } from "../../utils/errorMessage";
import { nameNOVCamel } from "../names";
import { valueJavascript } from "../values";
import {
  isZIndex,
  isBreakpoint,
  isBoxShadow,
  isModifier,
  isSpacing,
  isSpacingWithTwoValues,
  isSpacingWithThreeValues,
  isSpacingWithFourValues,
} from "../../utils/is";
import { falsyString, pixelized } from "../../utils/string";

const NOV_STRUCTURE = ["namespace", "object", "variant", "subVariant"];

/*
  The basic attribute transformer, adds serialized path info to the property.
  attributes: {
    namespace: "foundation" (or "global", "variant"),
    object: "palette" (or e.g. "border-radius"),
    variant: "blue" (or e.g. "small"),
    subVariant: "light" (nullish for most variants),
  }
 */
export const attributeNOV = {
  name: "attribute/nov",
  type: "attribute",
  transformer: ({ attributes = {}, path }: Property): Attributes => {
    const generatedAttrs = {};

    for (let i = 0; i < path.length && i < NOV_STRUCTURE.length; i += 1) {
      generatedAttrs[NOV_STRUCTURE[i]] = path[i];
    }
    return { ...generatedAttrs, ...attributes };
  },
};

export const attributeIsReferenced = {
  name: "attribute/nov/isReferenced",
  type: "attribute",
  transformer: ({ value, attributes }: Property): Attributes => {
    const { namespace, object, variant, subVariant } = attributes;
    if ([namespace, object, variant, subVariant].every(v => v == null)) {
      throw new Error(errorTransform("attribute/nov/isReferenced", "attribute/nov"));
    }
    const aliased = attributes.namespace === "foundation" || /{[\w.-]+}/g.test(String(value));
    return { ...attributes, aliased };
  },
};

/*
  Transforms all attributes of names/object/variant structure to camelCased string.
 */
export const attributeNOVCamelCase = {
  name: "attribute/nov/camelCase",
  type: "attribute",
  transformer: ({ attributes }: Property): Attributes => {
    const camelCased = {};
    for (let i = 0; i < NOV_STRUCTURE.length; i += 1) {
      const key = NOV_STRUCTURE[i];
      if (attributes[key]) {
        camelCased[key] = _.camelCase(String(attributes[key]));
      }
    }

    return { ...attributes, ...camelCased };
  },
};

/*
  Adds foundationName to attributes. Useful for type generation.
  Needs to be used together with "attribute/nov".
 */
export const attributeNOVAlias = {
  name: "attribute/nov/alias",
  type: "attribute",
  transformer: ({ attributes }: Property): Attributes => {
    const { namespace, object, variant, subVariant } = attributes;
    if ([namespace, object, variant, subVariant].every(value => value == null)) {
      throw new Error(errorTransform("attribute/nov/alias", "attribute/nov"));
    }
    const foundationAlias = subVariant || variant;
    return { ...attributes, foundationAlias };
  },
};

/*
  Adds foundationType to attributes. Useful for type generation.
 */
export const attributeJavascriptType = {
  name: "attribute/javascript/type",
  type: "attribute",
  transformer: (prop: Property): Attributes => {
    const { attributes } = prop;
    const getFoundationType = p => {
      if (isZIndex(p) || isBreakpoint(p) || isModifier(p)) return "number";
      return "string";
    };
    const foundationType = getFoundationType(prop);
    return { ...attributes, foundationType };
  },
};

export const attributeBoxShadowJavascript = {
  name: "attribute/box-shadow/javascript",
  type: "attribute",
  matcher: isBoxShadow,
  transformer: (prop: Property): Attributes => {
    const { attributes } = prop;
    const { "box-shadow": boxShadowDefinition } = attributes;
    const boxShadowArray = Array.isArray(boxShadowDefinition)
      ? boxShadowDefinition
      : [boxShadowDefinition];

    const boxShadowValues = (boxShadowArray as []).map(
      ({ x, y, blur, spread, color, opacity, inset }) => {
        return {
          x: pixelized(x),
          y: pixelized(y),
          blur: falsyString(blur != null, pixelized(blur)),
          spread: falsyString(spread != null, pixelized(spread)),
          color,
          opacity,
          inset,
        };
      },
    );

    return { ...attributes, "box-shadow": boxShadowValues };
  },
};

/*
  This transform ensures that the spacing object inside attributes has the right properties,
  and also transforms values to pixelized value.
  Allowed combinations are:
  { top, right, bottom, left }
  { top, left-right, bottom }
  { top-bottom, left-right }
  The order doesn't matter, it's being sorted for the check and also in the formatters.
 */
export const attributeSpacingJavascript = {
  name: "attribute/spacing",
  type: "attribute",
  matcher: isSpacing,
  transformer: (prop: Property): Attributes => {
    const { attributes } = prop;
    const { spacing } = attributes;
    const tokenName = nameNOVCamel.transformer(prop);
    // spacing object has to be defined
    if (spacing == null) {
      throw new Error(spacingError(tokenName));
    }
    const spaceArray = Object.keys(spacing).sort();
    // and the object has to contain one of the supported combinations
    if (
      !isSpacingWithTwoValues(spaceArray) &&
      !isSpacingWithThreeValues(spaceArray) &&
      !isSpacingWithFourValues(spaceArray)
    ) {
      throw new Error(spacingErrorDefinition(tokenName));
    }
    const pixelizedSpacing = Object.keys(spacing).map(key => {
      const val = spacing[key];
      const shouldTransformValue = typeof val === "number" || !/{[\w.-]+}/g.test(String(val));
      const returnValue = shouldTransformValue ? pixelized(val, false) : val;
      return {
        [key]: returnValue,
      };
    });
    return { ...attributes, spacing: Object.assign({}, ...pixelizedSpacing) };
  },
};

export const attributeJavascript = {
  name: "attribute/javascript",
  type: "attribute",
  transformer: (prop: Property): Attributes => {
    const { attributes } = prop;
    if (isBoxShadow(prop)) return attributeBoxShadowJavascript.transformer(prop);
    if (isSpacing(prop)) return attributeSpacingJavascript.transformer(prop);
    return attributes;
  },
};

export const attributeDocs = {
  name: "attribute/docs-platforms",
  type: "attribute",
  transformer: (prop: Property): Attributes => {
    const { attributes } = prop;
    const javascript = {
      name: nameNOVCamel.transformer(prop),
      value: valueJavascript.transformer(prop),
    };
    const docsPlatforms = { javascript };
    return { docsPlatforms, ...attributes };
  },
};
