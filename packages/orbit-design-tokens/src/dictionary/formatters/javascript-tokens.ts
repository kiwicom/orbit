import _ from "lodash";
import { Property } from "style-dictionary";

import flowComment from "./comments/flow";
import generatedWarning from "./comments/generatedWarning";
import formatCode from "../utils/format";
import {
  createObjectProperty,
  createValue,
  createVariableDeclarator,
  createArrowFunctionExpression,
  createObjectExpression,
  createEquivalentType,
  createDeclareExport,
  createTypeImport,
} from "../utils/create";
import { getValue } from "../utils/get";

const functionName = "createTokens";

/*
  Used for generating typescript file that contains javascript and typescript declarations together.
 */
const typescriptFactory = allProperties => {
  const type = "type";

  const foundationImport = createTypeImport("foundation", "./defaultFoundation");
  /*
    Generates "export type Tokens = { key: value }
   */
  const tokensTypes = _.map(allProperties, ({ name, attributes: { foundationType } }) =>
    createObjectProperty(name, foundationType),
  );

  const tokensValue = createValue(tokensTypes, "typescript");
  const tokensType = createVariableDeclarator(
    "Tokens",
    type,
    createObjectExpression(tokensValue, "typescript"),
    true,
  );

  const functionExpression = createArrowFunctionExpression(
    createEquivalentType("foundation"),
    "Tokens",
  );

  const functionTemplate = (value: string) => {
    const tokens = createObjectExpression(value);
    return createVariableDeclarator(
      createEquivalentType(functionName),
      "const",
      createArrowFunctionExpression("foundation", `(${tokens})`),
    );
  };

  const tokens = _.map(allProperties, prop => {
    const { name, value } = prop;
    const plainValue = getValue(value);
    return createObjectProperty(name, plainValue);
  });

  const plainTokens = createValue(tokens, "javascript");

  const createTokens = functionTemplate(plainTokens);

  const functionType = createVariableDeclarator(
    _.upperFirst(functionName),
    type,
    functionExpression,
    true,
  );

  /*
    Creates export default (declare) for createTokens, e.g. export default createTokens
  */
  const exportFunction = createDeclareExport(functionName, {
    isDefault: true,
    isDeclare: false,
  });

  return formatCode(
    [generatedWarning, foundationImport, tokensType, functionType, createTokens, exportFunction],
    "typescript",
  );
};

/*
  Used for generating flow and typescript. Javascript is separate - it has way to many differences.
 */
const flowFactory = allProperties => {
  const type = "type";
  const platform = "flow";
  const foundationImport = createTypeImport("foundation", "./defaultFoundation.js.flow");
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
    [flowComment, generatedWarning, foundationImport, tokensType, functionType, exportFunction],
    platform,
  );
};

const flowTokens = {
  name: "flow/tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string =>
    flowFactory(allProperties),
};

const typescriptTokens = {
  name: "typescript/tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    return typescriptFactory(allProperties);
  },
};

export default { flowTokens, typescriptTokens };
