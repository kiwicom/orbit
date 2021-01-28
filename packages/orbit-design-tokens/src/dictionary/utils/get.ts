import _ from "lodash";
import { Property } from "style-dictionary";

import { groupByName, groupByCategory } from "./groupBy";

type FoundationProperties = {
  name: string;
  value: string | number | undefined;
};
type NameValueSelector = (arg0: Property) => FoundationProperties;

/*
  Returns array of unique names of colors, e.g. ["blue", "red"].
  The transform "attribute/foundation" needs to be used.
 */
export const getAllPaletteNames = (properties: Property[]): string[] =>
  _.uniq(
    _.map(
      _.filter(properties, ({ attributes: { category } }) => category === "palette"),
      ({ attributes: { name } }) => String(name),
    ),
  );

/*
  Returns array of unique names of categories, e.g. ["base", "palette"].
  The transform "attribute/foundation" needs to be used.
 */
export const getAllCategories = (properties: Property[]): string[] =>
  _.uniq(_.map(properties, ({ attributes: { category } }) => String(category)));

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
export const getFoundationProperties = (
  allProperties: Property[],
  nameValueSelector: NameValueSelector = ({ name, value }) => ({ name, value }),
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
export const getFoundationNameValue = (platform: string): NameValueSelector => {
  if (platform === "flow" || platform === "typescript") {
    return ({ attributes: { foundationName, foundationType } }: Property) => ({
      name: String(foundationName),
      value: foundationType,
    });
  }
  return ({ attributes: { foundationName }, value }) => ({
    name: String(foundationName),
    value,
  });
};
