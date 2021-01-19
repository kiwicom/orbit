import _ from "lodash";

import { getFoundationProperties, getFoundationNameValue } from "../utils/get";
import {
  falsyString,
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
import { Property } from "style-dictionary";

const genericFactory = (allProperties, platform) => {
  const upperFirst = determinateUpperFirst(platform);
  const withExport = platform !== "javascript";
  const variableType = platform !== "javascript" ? "type" : "const";
  /*
  We need to be able to create both { base: Base } and { base }
 */
  const createObjectPropertyAlias = determinateObjectPropertyAlias(platform);

  const serializedProperties = getFoundationProperties(
    allProperties,
    getFoundationNameValue(platform),
  );

  /*
    Creates type/variable for each name, e.g. export type Color = {| shade: "value" |}
   */
  const generatedVariables = _.map(serializedProperties, names => {
    const types = _.map(names, (properties, typeName) => {
      const propertiesValues = _.map(properties, ({ name, value }) =>
        createObjectProperty(name, String(value)),
      );
      const value = createObjectExpression(createValue(propertiesValues, platform), platform);
      return createVariableDeclarator(upperFirst(typeName), variableType, value, withExport);
    });
    return types.join("\n");
  }).join("\n");

  /*
    Creates type/variable for each category, e.g. export type Base = {| space: Space |}
  */
  const categoriesVariables = _.map(serializedProperties, (names, category) => {
    const categoryNames = Object.keys(names).map(name => createObjectPropertyAlias(name));
    const value = createObjectExpression(createValue(categoryNames, platform), platform);
    return createVariableDeclarator(upperFirst(category), variableType, value, withExport);
  }).join("\n");

  /*
    Creates type/variable for each category, e.g. export type Foundation = {| base: Base |}
  */
  const foundationValue = createObjectExpression(
    createValue(
      Object.keys(serializedProperties).map(category => {
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
  Create type for CustomFoundation, needed for theming purposes (not all parts of the object are required)
  */

  const customCategoryTypes = _.map(serializedProperties, (names, category) => {
    const subCategoriesTypes = Object.keys(names).map(name =>
      createObjectProperty(createOptionalType(name), createSubsetType(name, platform)),
    );
    const categoryValue = createObjectExpression(
      createValue(subCategoriesTypes, platform),
      platform,
    );
    return createObjectProperty(
      createOptionalType(category),
      createSubsetType(categoryValue, platform),
    );
  });

  const customFoundation = createVariableDeclarator(
    "CustomFoundation",
    variableType,
    createObjectExpression(createValue(customCategoryTypes, platform), platform),
    true,
  );
  return [
    generatedVariables,
    categoriesVariables,
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

  return [
    generatedWarning,
    ...genericFactory(allProperties, "typescript"),
    ...genericFactory(allProperties, "javascript"),
    exportFoundation,
  ].join("\n");
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
