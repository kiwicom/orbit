import _ from "lodash";
import { Property } from "style-dictionary";

import {
  getFoundationNameValue,
  getFoundationSubVariantProperties,
  getFoundationVariantOnlyProperties,
  AlteredProperty,
} from "../utils/get";
import {
  createVariableDeclarator,
  createObjectProperty,
  createObjectExpression,
  createValue,
  createOptionalType,
  createSubsetType,
} from "../utils/create";
import {
  determinateUpperFirst,
  determinateObjectPropertyAlias,
  determinateExport,
} from "../utils/determinate";
import formatCode from "../utils/format";
import generatedWarning from "./comments/generatedWarning";
import flowComment from "./comments/flow";
import { falsyString } from "../utils/string";

const genericFactory = (allProperties, platform) => {
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

  const generateVariables = (properties: { [key: string]: Array<AlteredProperty> }) =>
    _.map(properties, (names, typeName) => {
      const propertiesValues = _.map(names, ({ name, value }) =>
        createObjectProperty(name, String(value)),
      );
      const value = createObjectExpression(createValue(propertiesValues, platform), platform);
      return createVariableDeclarator(upperFirst(typeName), variableType, value, withExport);
    }).join("\n");

  /*
    Creates type/variable for each color variant name, e.g. export type Blue = {| subVariant: "value" |}
   */
  const generatedPropertiesWithSubVariant = _.map(serializedSubVariantProperties, names => {
    return generateVariables(names);
  }).join("\n");

  const generatedPropertiesWithVariantOnly = generateVariables(serializedVariantOnlyProperties);

  /*
    Creates type/variable for each category, e.g. export type Base = {| space: Space |}
  */
  const propertiesWithSubVariantVariables = _.map(
    serializedSubVariantProperties,
    (names, category) => {
      const categoryNames = Object.keys(names).map(name => createObjectPropertyAlias(name));
      const value = createObjectExpression(createValue(categoryNames, platform), platform);
      return createVariableDeclarator(upperFirst(category), variableType, value, withExport);
    },
  ).join("\n");

  /*
    Creates type/variable for each category, e.g. export type Foundation = {| palette: Palette |}
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
    platform,
  );

  const foundationVariable = createVariableDeclarator(
    upperFirst("foundation"),
    variableType,
    foundationValue,
    withExport,
  );

  /*
    Create types for CustomFoundation, needed for theming purposes (not all parts of the object are required)
  */

  const propertyWithSubVariantTypes = _.map(serializedSubVariantProperties, (names, property) => {
    const variantTypes = Object.keys(names).map(name =>
      createObjectProperty(createOptionalType(name), createSubsetType(name, platform)),
    );
    const propertyValue = createObjectExpression(createValue(variantTypes, platform), platform);
    return createObjectProperty(
      createOptionalType(property),
      createSubsetType(propertyValue, platform),
    );
  });

  const propertyWithVariantOnlyTypes = Object.keys(serializedVariantOnlyProperties).map(name =>
    createObjectProperty(createOptionalType(name), createSubsetType(name, platform)),
  );

  const customFoundation = createVariableDeclarator(
    "CustomFoundation",
    variableType,
    createObjectExpression(
      createValue([...propertyWithSubVariantTypes, ...propertyWithVariantOnlyTypes], platform),
      platform,
    ),
    true,
  );

  return [
    generatedPropertiesWithSubVariant,
    generatedPropertiesWithVariantOnly,
    propertiesWithSubVariantVariables,
    foundationVariable,
    falsyString(platform !== "javascript", customFoundation),
  ];
};

const flowFactory = (allProperties: Property[]): string => {
  const platform = "flow";
  /*
    Creates export default (declare) for Foundation, e.g. declare export default Foundation
  */
  const createExport = determinateExport(platform);
  const exportFoundation = createExport("foundation");

  return formatCode(
    [flowComment, generatedWarning, ...genericFactory(allProperties, platform), exportFoundation],
    platform,
  );
};

const typescriptFactory = (allProperties: Property[]) => {
  /*
    Creates export default (declare) for Foundation, e.g. declare export default Foundation
  */
  const createExport = determinateExport("javascript");
  const exportFoundation = createExport("foundation");

  return formatCode(
    [
      generatedWarning,
      ...genericFactory(allProperties, "typescript"),
      ...genericFactory(allProperties, "javascript"),
      exportFoundation,
    ],
    "typescript",
  );
};

const flowFoundation = {
  name: "flow/foundation",
  formatter: ({ allProperties }: { allProperties: Property[] }): string =>
    flowFactory(allProperties),
};

const typescriptFoundation = {
  name: "typescript/foundation",
  formatter: ({ allProperties }: { allProperties: Property[] }): string =>
    typescriptFactory(allProperties),
};

export default { flowFoundation, typescriptFoundation };
