// @flow
const _ = require("lodash");

const { getFoundationProperties, getFoundationNameValue } = require("../utils/get");
const {
  falsyString,
  createVariableDeclarator,
  createObjectProperty,
  createObject,
  createValue,
  createDeclareModule,
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

const foundationFactory = (allProperties, { withPipe, delimiter, platform }) => {
  /*
    Type checking with Flow needs to be allowed on .js and .js.flow files
   */
  const withFlowComment = falsyString(platform !== "typescript", flowComment);

  const withTypescriptDeclare = falsyString(
    platform === "typescript",
    createDeclareModule(`@kiwicom/orbit-design-tokens/lib/js/defaultFoundation`),
  );

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
      const value = createObject(createValue(propertiesValues, delimiter), withPipe);
      return createVariableDeclarator(upperFirst(typeName), variableType, value, withExport);
    });
    return types.join("\n");
  }).join("\n");

  /*
    Creates type/variable for each category, e.g. export type Base = {| space: Space |}
  */
  const categoriesVariables = _.map(serializedProperties, (names, category) => {
    const categoryNames = Object.keys(names).map(name => createObjectPropertyAlias(name));
    const value = createObject(createValue(categoryNames, delimiter), withPipe);
    return createVariableDeclarator(upperFirst(category), variableType, value, withExport);
  }).join("\n");

  /*
    Creates type/variable for each category, e.g. export type Foundation = {| base: Base |}
  */
  const foundationValue = createObject(
    createValue(
      Object.keys(serializedProperties).map(category => {
        return createObjectPropertyAlias(category);
      }),
      delimiter,
    ),
    withPipe,
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
      createObjectProperty(
        createOptionalType(name),
        createSubsetType(_.upperFirst(name), platform),
      ),
    );
    const categoryValue = createObject(createValue(subCategoriesTypes, delimiter), withPipe);
    return createObjectProperty(
      createOptionalType(category),
      createSubsetType(categoryValue, platform),
    );
  });

  const customFoundation = createVariableDeclarator(
    "CustomFoundation",
    variableType,
    createObject(createValue(customCategoryTypes, delimiter), withPipe),
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
      withTypescriptDeclare,
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
    return foundationFactory(allProperties, {
      withPipe: true,
      delimiter: ",",
      platform: "flow",
    });
  },
};

const typescriptFoundation = {
  name: "typescript/foundation",
  formatter: ({ allProperties }) => {
    return foundationFactory(allProperties, {
      withPipe: false,
      delimiter: ";",
      platform: "typescript",
    });
  },
};

const javascriptFoundation = {
  name: "javascript/foundation",
  formatter: ({ allProperties }) => {
    return foundationFactory(allProperties, {
      withPipe: false,
      delimiter: ",",
      platform: "javascript",
    });
  },
};

module.exports = { flowFoundation, typescriptFoundation, javascriptFoundation };
