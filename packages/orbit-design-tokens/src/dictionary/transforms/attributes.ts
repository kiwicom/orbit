import _ from "lodash";
import { DesignToken } from "style-dictionary";

import { errorTransform, spacingError, spacingErrorDefinition } from "../utils/errorMessage.js";
import {
  isZIndex,
  isBreakpoint,
  isBoxShadow,
  isModifier,
  isSpacing,
  isSpacingWithTwoValues,
  isSpacingWithThreeValues,
  isSpacingWithFourValues,
} from "../utils/is.js";
import { falsyString, pixelized, firstToUpper } from "../utils/string.js";

type Structure = "namespace" | "object" | "variant" | "subVariant";

const NOV_STRUCTURE: Structure[] = ["namespace", "object", "variant", "subVariant"];

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
  transformer: ({ attributes = {}, path }) => {
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
  transformer: ({ value, attributes }: DesignToken) => {
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
  transformer: ({ attributes }: DesignToken) => {
    const camelCased = {} as Record<Structure, string>;
    const tempAttrs: Record<string, string> = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const key of NOV_STRUCTURE) {
      if (attributes[key]) {
        camelCased[key] = _.camelCase(String(attributes[key]));
        tempAttrs[key] = String(attributes[key]);
      }
    }

    const { object, variant, subVariant } = tempAttrs;

    const name = _.camelCase(
      Object.values({ object, variant, subVariant }).filter(Boolean).join(" "),
    );

    // tokens like spaceXXXLarge should have first letter upperCased
    const parsedVariant = firstToUpper(
      camelCased.variant,
      camelCased.object === "space" && !["large", "small", "medium"].includes(camelCased.variant),
    );

    return { ...attributes, ...camelCased, variant: parsedVariant, name };
  },
};

/*
  Adds foundationName to attributes. Useful for type generation.
  Needs to be used together with "attribute/nov".
 */
export const attributeNOVAlias = {
  name: "attribute/nov/alias",
  type: "attribute",
  transformer: ({ attributes }: DesignToken) => {
    const { namespace, object, variant, subVariant } = attributes;
    if ([namespace, object, variant, subVariant].every(value => value == null)) {
      throw new Error(errorTransform("attribute/nov/alias", "attribute/nov"));
    }

    const parsedVariant =
      object === "space" && !["large", "small", "medium"].includes(variant)
        ? _.upperFirst(variant)
        : variant;

    const foundationAlias = subVariant || parsedVariant;

    return { namespace, object, variant: parsedVariant, subVariant, foundationAlias };
  },
};

/*
  Adds foundationType to attributes. Useful for type generation.
 */
export const attributeJavascriptType = {
  name: "attribute/javascript/type",
  type: "attribute",
  transformer: (prop: DesignToken) => {
    const { attributes } = prop;
    const getFoundationType = (p: DesignToken) => {
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
  transformer: (prop: DesignToken) => {
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
  transformer: (prop: DesignToken) => {
    const { attributes } = prop;
    const { spacing, name: tokenName } = attributes;
    // spacing object has to be defined
    if (spacing == null) throw new Error(spacingError(tokenName));

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
  transformer: (prop: DesignToken) => {
    const { attributes } = prop;
    if (isBoxShadow(prop)) return attributeBoxShadowJavascript.transformer(prop);
    if (isSpacing(prop)) return attributeSpacingJavascript.transformer(prop);
    return attributes;
  },
};
