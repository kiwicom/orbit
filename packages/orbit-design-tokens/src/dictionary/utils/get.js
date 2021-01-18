// @flow
const _ = require("lodash");

const { groupByName, groupByCategory } = require("./groupBy");
/*
  Returns array of unique names of colors, e.g. ["blue", "red"].
  The transform "attribute/foundation" needs to be used.
 */
const getAllPaletteNames = properties =>
  _.uniq(
    _.map(
      _.filter(properties, ({ attributes: { category } }) => category === "palette"),
      ({ attributes: { name } }) => name,
    ),
  );

/*
  Returns array of unique names of categories, e.g. ["base", "palette"].
  The transform "attribute/foundation" needs to be used.
 */
const getAllCategories = properties =>
  _.uniq(_.map(properties, ({ attributes: { category } }) => category));

/*
  Returns object based on categories, e.g.
  {
    palette: {
      blue: [
        name: "light", value: "#000000"
      ]
    },
    base: {
      space: [
        name: "small", value: "2px"
      ]
    }
  ]

  By default it returns prop.name and prop.value from the property,
  but can be changed by custom use of nameValueSelector
 */
const getFoundationProperties = (
  allProperties,
  nameValueSelector = ({ name, value }) => ({ name, value }),
) => {
  return _.mapValues(groupByCategory(allProperties), values => {
    return _.mapValues(groupByName(values), properties => {
      return _.map(properties, nameValueSelector);
    });
  });
};

/*
  Based on platform we need to return different name and value.
  Because "attribute/foundation" is used, we can use foundationName and foundationValue
  for the flow and typescript platform. Otherwise basic name and value of the property.
 */
const getFoundationNameValue = platform => {
  if (platform === "flow" || platform === "typescript") {
    return ({ attributes: { foundationName, foundationType } }) => ({
      name: foundationName,
      value: foundationType,
    });
  }
  return ({ attributes: { foundationName }, value }) => ({ name: foundationName, value });
};

module.exports = {
  getAllPaletteNames,
  getAllCategories,
  getFoundationProperties,
  getFoundationNameValue,
};
