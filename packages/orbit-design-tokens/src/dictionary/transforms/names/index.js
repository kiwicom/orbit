// @flow
const _ = require("lodash");

const { errorTransform } = require("../../utils/errorMessage");

const nameFoundationCamel = {
  name: "name/foundation/camel",
  type: "name",
  transformer: ({ attributes: { category, name, type, state } }) => {
    if ([category, name, type, state].every(value => value == null)) {
      throw new Error(errorTransform("value/foundation/alias", "attribute/foundation"));
    }
    return _.camelCase(Object.values({ category, name, type, state }).join(" "));
  },
};

module.exports = { nameFoundationCamel };
