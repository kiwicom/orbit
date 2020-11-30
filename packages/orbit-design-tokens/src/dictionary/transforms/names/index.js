// @flow
const _ = require("lodash");

const isColor = require("../../helpers/isColor");
const isBase = require("../../helpers/isBase");

const foundation = {
  name: "name/foundation",
  type: "name",
  matcher: _.overSome([isColor, isBase]),
  transformer: ({ attributes }) => {
    return _.camelCase(Object.values(attributes).join(" "));
  },
};

module.exports = { foundation };
