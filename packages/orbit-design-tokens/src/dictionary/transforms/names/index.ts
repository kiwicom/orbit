import _ from "lodash";
import { Property } from "style-dictionary";

import { errorTransform } from "../../utils/errorMessage";

const validateNOV = (prop: Property) => {
  const {
    attributes: { namespace, object, variant, subVariant },
  } = prop;
  if ([namespace, object, variant, subVariant].every(value => value == null)) {
    throw new Error(errorTransform("name/nov/camel", "attribute/nov"));
  }
};
export const nameNOVCamel = {
  name: "name/nov/camel",
  type: "name",
  transformer: (prop: Property): string => {
    const {
      attributes: { object, variant, subVariant, name },
    } = prop;
    validateNOV(prop);
    /*
      There's attribute name already available from attribute/nov/camelCase. If not,
      we need to camelCase the name based on the attributes, e.g. for builds of XML tokens etc.
     */
    if (typeof name === "undefined") {
      return _.camelCase(Object.values({ object, variant, subVariant }).filter(Boolean).join(" "));
    }
    return String(name);
  },
};

export const nameNOVKebab = {
  name: "name/nov/kebab",
  type: "name",
  transformer: (prop: Property): string => {
    const {
      attributes: { object, variant, subVariant, name },
    } = prop;
    validateNOV(prop);
    if (typeof name === "undefined") {
      return _.kebabCase(Object.values({ object, variant, subVariant }).filter(Boolean).join(" "));
    }
    return String(name);
  },
};
