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
  createArrayExpression,
  createDefaultImport,
} from "../utils/create";
import { isColor, isBoxShadow, isSpacing } from "../utils/is";
import { getValue } from "../utils/get";
import { falsyString, flattenSpacing } from "../utils/string";

const functionName = "createTokens";

const createSpacingValue = values => {
  // wrap up the value into interpolation only if the value is not pixelized or zero
  const value = values.map(v => (!/[\d]+px/g.test(v) && String(v) !== "0" ? `\${${v}}` : v));
  return `\`${value.join(" ")}\``;
};

const createSpacing = (name: string, spacing: { [key: string]: Property }) =>
  createObjectProperty(name, createSpacingValue(flattenSpacing(name, spacing)));

/*
  Used for generating typescript file that contains javascript and typescript declarations together.
 */
const typescriptFactory = allProperties => {
  const type = "type";

  const foundationImport = createTypeImport("foundation", "./defaultFoundation");

  const transparentColorImport = falsyString(
    allProperties.some(({ opacity }) => opacity != null),
    createDefaultImport("transparentColor", "./transparentColor"),
  );

  const boxShadowImport = falsyString(
    allProperties.some(isBoxShadow),
    createDefaultImport("boxShadow", "./boxShadow"),
  );
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
    const { name, value, opacity } = prop;
    const plainValue = getValue(value);
    if (isColor(prop) && opacity) {
      return createObjectProperty(name, `transparentColor(${plainValue}, ${opacity})`);
    }
    if (isSpacing(prop)) {
      const {
        attributes: { spacing },
      } = prop;
      return createSpacing(name, spacing);
    }
    if (isBoxShadow(prop)) {
      const {
        attributes: { "box-shadow": boxShadow },
      } = prop;
      const boxShadowDefinition = boxShadow.map(
        ({ x, y, blur, spread, color, opacity: colorOpacity }) => {
          const definition = {
            def: [x, y, blur, spread],
            color: `transparentColor(${getValue(color)}, ${colorOpacity})`,
          };
          const values = Object.keys(definition).map(key => {
            const val = Array.isArray(definition[key])
              ? createArrayExpression(createValue(definition[key], "javascript"))
              : definition[key];
            return createObjectProperty(key, val);
          });
          return createObjectExpression(createValue(values, "javascript"));
        },
      );
      const boxShadowValue = createArrayExpression(createValue(boxShadowDefinition, "javascript"));

      return createObjectProperty(name, `boxShadow(${boxShadowValue})`);
    }
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
    [
      generatedWarning,
      transparentColorImport,
      boxShadowImport,
      foundationImport,
      tokensType,
      functionType,
      createTokens,
      exportFunction,
    ],
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
