// @flow
const _ = require("lodash");

const { getFoundationProperties, getFoundationNameValue } = require("../utils/get");
const {
  falsyString,
  createVariableDeclarator,
  createObjectProperty,
  createObjectExpression,
  createValue,
  createOptionalType,
  createSubsetType,
} = require("../utils/create");
const {
  determinateUpperFirst,
  determinateObjectPropertyAlias,
  determinateExport,
} = require("../utils/determinate");
const formatCode = require("../utils/format");
const generatedWarning = require("./comments/generatedWarning");
const flowComment = require("./comments/flow");

const foundationFactory = (allProperties, platform) => {
  /*
    Type checking with Flow needs to be allowed on .js and .js.flow files
   */
  const withFlowComment = falsyString(platform !== "typescript", flowComment);

  const variableType = platform !== "javascript" ? "type" : "const";

  /*
    By default we want to have "export type ..." only on typescript and flow platform
   */
  const withExport = platform !== "javascript";

  const upperFirst = determinateUpperFirst(platform);

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
        createObjectProperty(name, value),
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

  /*
    Creates export default (declare) for Foundation, e.g. declare export default Foundation
  */
  const createExport = determinateExport(platform);
  const exportFoundation = createExport("foundation");

  return formatCode(
    [
      withFlowComment,
      generatedWarning,
      generatedVariables,
      categoriesVariables,
      foundationVariable,
      falsyString(platform !== "javascript", customFoundation),
      exportFoundation,
    ],
    platform,
  );
};

const flowFoundation = {
  name: "flow/foundation",
  formatter: ({ allProperties }) => {
    return foundationFactory(allProperties, "flow");
  },
};

const typescriptFoundation = {
  name: "typescript/foundation",
  formatter: ({ allProperties }) => {
    return foundationFactory(allProperties, "typescript");
  },
};

const javascriptFoundation = {
  name: "javascript/foundation",
  formatter: ({ allProperties }) => {
    return foundationFactory(allProperties, "javascript");
  },
};

module.exports = { flowFoundation, typescriptFoundation, javascriptFoundation };
