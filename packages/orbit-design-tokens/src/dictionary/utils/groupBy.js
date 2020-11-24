// @flow
const _ = require("lodash");

const groupByCategory = properties => _.groupBy(properties, token => token.attributes.category);

const groupByName = properties => _.groupBy(properties, token => token.attributes.name);

module.exports = {
  groupByCategory,
  groupByName,
};
