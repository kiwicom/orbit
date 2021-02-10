import _ from "lodash";
import { Property } from "style-dictionary";

import { errorTransform } from "../../utils/errorMessage";

export const nameFoundationCamel = {
  name: "name/nov/camel",
  type: "name",
  transformer: ({ attributes: { namespace, object, variant, subVariant } }: Property): string => {
    if ([namespace, object, variant, subVariant].every(value => value == null)) {
      throw new Error(errorTransform("name/nov/camel", "attribute/nov"));
    }
    return _.camelCase(Object.values({ object, variant, subVariant }).filter(Boolean).join(" "));
  },
};
