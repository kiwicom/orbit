import _ from "lodash";
import { DesignToken } from "style-dictionary";

import { groupByAttribute } from "./groupBy.js";

export interface AlteredProperty {
  name: string;
  value: string | number | undefined;
}

type PropertiesWithSubVariant = Record<string, Record<string, AlteredProperty[]>>;
type PropertiesWithVariantOnly = Record<string, AlteredProperty[]>;

type NameValueSelector = (arg0: DesignToken) => AlteredProperty;

/**
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
  allProperties: DesignToken[],
  nameValueSelector: NameValueSelector = ({ name, value }) => ({ name, value }),
): PropertiesWithSubVariant => {
  return _.mapValues(groupByAttribute(allProperties, "object"), values => {
    return _.mapValues(groupByAttribute(values, "variant"), properties => {
      return _.map(properties, nameValueSelector);
    });
  });
};

/**
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
  allProperties: DesignToken[],
  nameValueSelector: NameValueSelector = ({ name, value }) => ({ name, value }),
): PropertiesWithVariantOnly => {
  return _.mapValues(groupByAttribute(allProperties, "object"), values => {
    return _.map(values, nameValueSelector);
  });
};

/**
  Based on platform we need to return different name and value.
  Because "attribute/foundation" is used, we can use foundationName and foundationValue
  for the typescript platform. Otherwise basic name and value of the property.
 */

export const getFoundationNameValue = (platform: string): NameValueSelector => {
  if (platform === "typescript") {
    return ({ attributes: { foundationAlias, foundationType } }: DesignToken) => ({
      name: String(foundationAlias),
      value: String(foundationType),
    });
  }
  return ({ attributes: { foundationAlias }, value }) => ({
    name: String(foundationAlias),
    value,
  });
};

/**
  Recursively gets value, because of alias referencing it can be nested { value: { value } }
 */

export const getValue = (value: DesignToken): string => {
  if (typeof value === "object") {
    return getValue(value.value);
  }
  return value;
};
