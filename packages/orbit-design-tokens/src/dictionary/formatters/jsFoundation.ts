import _ from "lodash";
import { Format, DesignToken } from "style-dictionary";

import {
  getFoundationNameValue,
  getFoundationSubVariantProperties,
  getFoundationVariantOnlyProperties,
  AlteredProperty,
} from "../utils/get.js";
import {
  createVariableDeclarator,
  createObjectProperty,
  createObjectExpression,
  createValue,
  createOptionalType,
  createSubsetType,
} from "../utils/create.js";
import {
  determinateUpperFirst,
  determinateObjectPropertyAlias,
  determinateExport,
} from "../utils/determinate.js";
import formatCode from "../utils/format.js";
import { warning } from "./comments.js";
import { falsyString } from "../utils/string.js";

const genericFactory = (allProperties: DesignToken[], platform: "javascript" | "typescript") => {
  const upperFirst = determinateUpperFirst(platform);
  const withExport = platform !== "javascript";
  const variableType = platform !== "javascript" ? "type" : "const";
  /*
  We need to be able to create both { base: Base } and { base }
 */
  const createObjectPropertyAlias = determinateObjectPropertyAlias(platform);

  /*
    Because of concept object.property.variant we need to split allProperties if they contain
    only variant or also subVariant.
   */
  const propertiesWithSubVariant = allProperties.filter(prop => prop.attributes.subVariant != null);
  const propertiesWithVariantOnly = allProperties.filter(
    prop => prop.attributes.subVariant == null,
  );

  /*
    Properties with subVariant will be e.g. colors (foundation.palette.blue.light)
   */
  const serializedSubVariantProperties = getFoundationSubVariantProperties(
    propertiesWithSubVariant,
    getFoundationNameValue(platform),
  );

  /*
    Properties with variant only will be e.g. border-radius properties (foundation.border-radius.small)
   */
  const serializedVariantOnlyProperties = getFoundationVariantOnlyProperties(
    propertiesWithVariantOnly,
    getFoundationNameValue(platform),
  );

  const generateVariables = (properties: Record<string, AlteredProperty[]>) =>
    _.map(properties, (names, typeName) => {
      const propertiesValues = _.map(names, ({ name, value }) => {
        return createObjectProperty(name, String(value));
      });

      const value = createObjectExpression(createValue(propertiesValues, platform));
      return createVariableDeclarator(upperFirst(typeName), value, withExport, variableType);
    }).join("\n");

  /*
    Creates type/variable for each color variant name, e.g. export type Blue = { subVariant: "value" }
   */
  const generatedPropertiesWithSubVariant = _.map(serializedSubVariantProperties, names => {
    return generateVariables(names);
  }).join("\n");

  const generatedPropertiesWithVariantOnly = generateVariables(serializedVariantOnlyProperties);

  /*
    Creates type/variable for each category, e.g. export type Base = { space: space }
  */
  const propertiesWithSubVariantVariables = _.map(
    serializedSubVariantProperties,
    (names, category) => {
      const categoryNames = Object.keys(names).map(name => createObjectPropertyAlias(name));
      const value = createObjectExpression(createValue(categoryNames, platform));
      return createVariableDeclarator(upperFirst(category), value, withExport, variableType);
    },
  ).join("\n");

  /*
    Creates type/variable for each category, e.g. export type Foundation = { palette: Palette }
  */
  const foundationValue = createObjectExpression(
    createValue(
      [
        ...Object.keys(serializedSubVariantProperties),
        ...Object.keys(serializedVariantOnlyProperties),
      ].map(category => {
        return createObjectPropertyAlias(category);
      }),
      platform,
    ),
  );

  const foundationVariable = createVariableDeclarator(
    upperFirst("foundation"),
    foundationValue,
    withExport,
    variableType,
  );

  /*
    Create types for CustomFoundation, needed for theming purposes (not all parts of the object are required)
  */

  const propertyWithSubVariantTypes = _.map(serializedSubVariantProperties, (names, property) => {
    const variantTypes = Object.keys(names).map(name =>
      createObjectProperty(createOptionalType(name), createSubsetType(name)),
    );
    const propertyValue = createObjectExpression(createValue(variantTypes, platform));
    return createObjectProperty(createOptionalType(property), createSubsetType(propertyValue));
  });

  const propertyWithVariantOnlyTypes = Object.keys(serializedVariantOnlyProperties).map(name => {
    return createObjectProperty(createOptionalType(name), createSubsetType(name));
  });

  const customFoundation = createVariableDeclarator(
    "CustomFoundation",
    createObjectExpression(
      createValue([...propertyWithSubVariantTypes, ...propertyWithVariantOnlyTypes], platform),
    ),
    true,
    variableType,
  );

  return [
    generatedPropertiesWithSubVariant,
    generatedPropertiesWithVariantOnly,
    propertiesWithSubVariantVariables,
    foundationVariable,
    falsyString(platform !== "javascript", customFoundation),
  ];
};

const typescriptFactory = (allProperties: DesignToken[]) => {
  /*
    Creates export default (declare) for Foundation, e.g. declare export default Foundation
  */
  const createExport = determinateExport("javascript");
  const exportFoundation = createExport("foundation");

  return formatCode(
    [
      warning,
      ...genericFactory(allProperties, "typescript"),
      ...genericFactory(allProperties, "javascript"),
      exportFoundation,
    ],
    "typescript",
  );
};

const typescriptFoundation: Format = {
  name: "typescript/foundation",
  formatter: ({ dictionary }) => {
    const { allProperties } = dictionary;
    return typescriptFactory(allProperties);
  },
};

export default { typescriptFoundation };
