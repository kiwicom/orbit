import _ from "lodash";
import { Attributes, Property } from "style-dictionary";

import { errorTransform } from "../../utils/errorMessage";
import { nameNOVCamel } from "../names";
import { valueJavascript } from "../values";
import { isBoxShadow } from "../../utils/is";
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
    return Object.assign(generatedAttrs, attributes);
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
    return { aliased, ...attributes };
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

    return Object.assign(attributes, camelCased);
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
    return { foundationAlias, ...attributes };
  },
};

/*
  Adds foundationType to attributes. Useful for type generation.
  Needs to be used together with "attribute/nov".
 */
export const attributeNOVType = {
  name: "attribute/nov/type",
  type: "attribute",
  transformer: ({ attributes }: Property): Attributes => {
    const foundation = {
      // This will need eventually polish - there will be more types, just placeholder for now
      foundationType: "string",
    };
    return { ...foundation, ...attributes };
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

    const boxShadowValues = (boxShadowArray as []).map(({ x, y, blur, spread, color, opacity }) => {
      return {
        x: pixelized(x),
        y: pixelized(y),
        blur: falsyString(blur != null, pixelized(blur)),
        spread: falsyString(spread != null, pixelized(spread)),
        color,
        opacity,
      };
    });

    return { ...attributes, "box-shadow": boxShadowValues };
  },
};

export const attributeJavascript = {
  name: "attribute/javascript",
  type: "attribute",
  transformer: (prop: Property): Attributes => {
    const { attributes } = prop;
    if (isBoxShadow(prop)) return attributeBoxShadowJavascript.transformer(prop);
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
