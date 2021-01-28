import _ from "lodash";
import { Attributes, Property } from "style-dictionary";

import { errorTransform } from "../../utils/errorMessage";

/*
  The basic attribute transformer, adds serialized path info to the property.
  For colors:
  attributes: {
    category: "palette",
    name: "blue",
    type: "light",
    // default is not present
  }

  For other types:
  attributes: {
    category: "base",
    name: "space",
    type: "XXS",
    // default is not present
  }
 */
const attributeFoundation = {
  name: "attribute/foundation",
  type: "attribute",
  transformer: ({ attributes = {}, path }: Property): Attributes => {
    const structure = ["category", "name", "type", "state"];
    const generatedAttrs = {};

    for (let i = 0; i < path.length && i < structure.length; i += 1) {
      /*
        Skipping first – it's foundation
      */
      const item = path[i + 1];
      /*
        If the horizontalShade is named as "base" so we want to skip it,
        because it would be explicit in the final token name
       */
      if (item !== "default") {
        generatedAttrs[structure[i]] = _.camelCase(item);
      }
    }
    return Object.assign(generatedAttrs, attributes);
  },
};

/*
  Adds foundationName to attributes. Useful for type generation.
  Needs to be used together with "attribute/foundation".
 */
const attributeFoundationName = {
  name: "attribute/foundation/name",
  type: "attribute",
  transformer: ({ attributes }: Property): Attributes => {
    const { type, state, category, name } = attributes;
    if ([category, name, type, state].every(value => value == null)) {
      throw new Error(errorTransform("value/foundation/alias", "attribute/foundation"));
    }
    const foundation = {
      foundationName: _.camelCase([type, state].join(" ")),
    };
    return { ...foundation, ...attributes };
  },
};

/*
  Adds foundationType to attributes. Useful for type generation.
  Needs to be used together with "attribute/foundation".
 */
const attributeFoundationType = {
  name: "attribute/foundation/type",
  type: "attribute",
  transformer: ({ attributes }: Property): Attributes => {
    const foundation = {
      // This will need eventually polish - there will be more types, just placeholder for now
      foundationType: "string",
    };
    return { ...foundation, ...attributes };
  },
};

export default { attributeFoundation, attributeFoundationName, attributeFoundationType };
