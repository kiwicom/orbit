import _ from "lodash";
import { Property } from "style-dictionary";

import { errorTransform } from "../../utils/errorMessage";

export const nameNOVCamel = {
  name: "name/nov/camel",
  type: "name",
  transformer: ({
    attributes: { namespace, object, variant, subVariant, name },
  }: Property): string => {
    if ([namespace, object, variant, subVariant].every(value => value == null)) {
      throw new Error(errorTransform("name/nov/camel", "attribute/nov"));
    }
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
