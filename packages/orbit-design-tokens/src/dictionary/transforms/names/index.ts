import _ from "lodash";
import { Property } from "style-dictionary";

import { errorTransform } from "../../utils/errorMessage";

const nameFoundationCamel = {
  name: "name/foundation/camel",
  type: "name",
  transformer: ({ attributes: { category, name, type, state } }: Property): string => {
    if ([category, name, type, state].every(value => value == null)) {
      throw new Error(errorTransform("name/foundation/camel", "attribute/foundation"));
    }
    return _.camelCase(Object.values({ category, name, type, state }).join(" "));
  },
};

export default { nameFoundationCamel };
