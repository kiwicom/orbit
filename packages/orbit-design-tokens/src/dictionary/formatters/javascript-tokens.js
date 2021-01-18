// @flow
const _ = require("lodash");

const flowComment = require("./comments/flow");
const generatedWarning = require("./comments/generatedWarning");
const formatCode = require("../utils/format");
const {
  createObjectProperty,
  createValue,
  createVariableDeclarator,
  createArrowFunctionExpression,
  createObjectExpression,
  falsyString,
  createEquivalentType,
  createDeclareExport,
  createTypeImport,
} = require("../utils/create");
const { determinateExport } = require("../utils/determinate");

const functionName = "createTokens";

/*
  Recursively gets value, because of alias referencing it can be nested { value: { value } }
 */
const getValue = value => {
  if (typeof value === "object") {
    return getValue(value.value);
  }
  return value;
};

const javascriptTokens = {
  name: "javascript/tokens",
  formatter: ({ allProperties }) => {
    const platform = "javascript";
    const typeImport = createTypeImport(functionName, "./createTokens");

    const functionTemplate = value => {
      const tokensValue = createObjectExpression(value);
      return createVariableDeclarator(
        createEquivalentType(functionName),
        "const",
        createArrowFunctionExpression("foundation", `(${tokensValue})`),
      );
    };

    const tokens = _.map(allProperties, prop => {
      const { name, value } = prop;
      const plainValue = getValue(value);
      return createObjectProperty(name, plainValue);
    });

    const plainTokens = createValue(tokens, platform);

    const createTokens = functionTemplate(plainTokens);

    /*
      Creates export default (declare) for Foundation, e.g. declare export default Foundation
    */
    const createExport = determinateExport(platform);
    const exportCreateTokens = createExport(functionName);

    return formatCode(
      [flowComment, generatedWarning, typeImport, createTokens, exportCreateTokens],
      platform,
    );
  },
};

/*
  Used for generating flow and typescript. Javascript is separate - it has way to many differences.
 */
const tokensTypeFactory = (allProperties, platform) => {
  const type = "type";

  const withFlowComment = falsyString(platform !== "typescript", flowComment);

  const foundationImport = createTypeImport("foundation", "./defaultFoundation");
  /*
    Generates "export type Tokens = { key: value }
   */
  const tokens = _.map(allProperties, ({ name, attributes: { foundationType } }) =>
    createObjectProperty(name, foundationType),
  );

  const tokensValue = createValue(tokens, platform);
  const tokensType = createVariableDeclarator(
    "Tokens",
    type,
    createObjectExpression(tokensValue, platform),
    true,
  );

  const functionExpression = createArrowFunctionExpression(
    createEquivalentType("foundation"),
    "Tokens",
  );
  const functionType = createVariableDeclarator(
    _.upperFirst(functionName),
    type,
    functionExpression,
    true,
  );

  /*
    Creates export default (declare) for createTheme, e.g. declare export default createTheme
  */
  const exportFunction = createDeclareExport(_.upperFirst(functionName), {
    isDefault: true,
    isDeclare: true,
  });

  return formatCode(
    [withFlowComment, generatedWarning, foundationImport, tokensType, functionType, exportFunction],
    platform,
  );
};

const flowTokens = {
  name: "flow/tokens",
  formatter: ({ allProperties }) => {
    return tokensTypeFactory(allProperties, "flow");
  },
};

const typescriptTokens = {
  name: "typescript/tokens",
  formatter: ({ allProperties }) => {
    return tokensTypeFactory(allProperties, "typescript");
  },
};

module.exports = {
  javascriptTokens,
  flowTokens,
  typescriptTokens,
};
