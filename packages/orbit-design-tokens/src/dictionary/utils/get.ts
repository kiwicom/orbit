import _ from "lodash";
import { Property } from "style-dictionary";

import { groupByAttribute } from "./groupBy";

export type AlteredProperty = {
  name: string;
  value: string | number | undefined;
};

type PropertiesWithSubVariant = {
  [name: string]: {
    [key: string]: Array<AlteredProperty>;
  };
};

type PropertiesWithVariantOnly = {
  [key: string]: Array<AlteredProperty>;
};

type NameValueSelector = (arg0: Property) => AlteredProperty;

/*
  Returns object based on properties and variants based on object/property/variant schema, e.g.
  {
    palette: {
      blue: [
        name: "light", value: "#000000"
      ]
    }
  }

  By default it returns prop.name and prop.value from the property,
  but can be changed by custom use of nameValueSelector
 */
export const getFoundationSubVariantProperties = (
  allProperties: Property[],
  nameValueSelector: NameValueSelector = ({ name, value }) => ({ name, value }),
): PropertiesWithSubVariant => {
  return _.mapValues(groupByAttribute(allProperties, "object"), values => {
    return _.mapValues(groupByAttribute(values, "variant"), properties => {
      return _.map(properties, nameValueSelector);
    });
  });
};

/*
  Returns object based on properties based on object/property/variant schema, e.g.
  {
    blue: [
      name: "light", value: "#000000"
    ]
  }

  By default it returns prop.name and prop.value from the property,
  but can be changed by custom use of nameValueSelector
 */
export const getFoundationVariantOnlyProperties = (
  allProperties: Property[],
  nameValueSelector: NameValueSelector = ({ name, value }) => ({ name, value }),
): PropertiesWithVariantOnly => {
  return _.mapValues(groupByAttribute(allProperties, "object"), values => {
    return _.map(values, nameValueSelector);
  });
};

/*
  Based on platform we need to return different name and value.
  Because "attribute/foundation" is used, we can use foundationName and foundationValue
  for the flow and typescript platform. Otherwise basic name and value of the property.
 */
export const getFoundationNameValue = (platform: string): NameValueSelector => {
  if (platform === "flow" || platform === "typescript") {
    return ({ attributes: { foundationAlias, foundationType } }: Property) => ({
      name: String(foundationAlias),
      value: foundationType,
    });
  }
  return ({ attributes: { foundationAlias }, value }) => ({
    name: String(foundationAlias),
    value,
  });
};
