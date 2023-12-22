import _ from "lodash";
import type { DesignToken, Dictionary, Format } from "style-dictionary";

import { warning } from "./comments.js";
import formatCode from "../utils/format.js";
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
} from "../utils/create.js";
import { isColor, isBoxShadow, isSpacing } from "../utils/is.js";
import { getValue } from "../utils/get.js";
import { falsyString, flattenSpacing } from "../utils/string.js";

const functionName = "createTokens";

const createSpacingValue = (values: string[]) => {
  // wrap up the value into interpolation only if the value is not pixelized or zero
  const value = values.map(v => (!/[\d]+px/g.test(v) && String(v) !== "0" ? `\${${v}}` : v));
  return `\`${value.join(" ")}\``;
};

const createSpacing = (name: string, spacing: Record<string, DesignToken>) =>
  createObjectProperty(name, createSpacingValue(flattenSpacing(name, spacing)));

/*
  Used for generating typescript file that contains javascript and typescript declarations together.
 */
const typescriptFactory = (allProperties: Dictionary["allProperties"], complete = true) => {
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
    createObjectExpression(tokensValue),
    true,
    type,
  );

  if (!complete) return formatCode([warning, tokensType], "typescript");

  const functionExpression = createArrowFunctionExpression(
    createEquivalentType("foundation"),
    "Tokens",
  );

  const functionTemplate = (value: string) => {
    const tokens = createObjectExpression(value);
    return createVariableDeclarator(
      createEquivalentType(functionName),
      createArrowFunctionExpression("foundation", `(${tokens})`),
      false,
      "const",
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
        ({ x, y, blur, spread, color, inset = false, opacity: colorOpacity }) => {
          const definition = {
            def: [x, y, blur, spread],
            color: `transparentColor(${getValue(color)}, ${colorOpacity})`,
            inset,
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
    functionExpression,
    true,
    type,
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
      warning,
      transparentColorImport,
      boxShadowImport,
      foundationImport,
      tokensType,
      functionType,
      createTokens,
      exportFunction,
    ],
    "javascript",
  );
};

/*
  Used for generating typescript. Javascript is separate - it has way to many differences.
 */

const typescriptTokens: Format = {
  name: "typescript/tokens",
  formatter: ({ dictionary }) => {
    return typescriptFactory(dictionary.allProperties);
  },
};

const typeOnlyTokens: Format = {
  name: "typescript/typeOnlyTokens",
  formatter: ({ dictionary }) => {
    return typescriptFactory(dictionary.allProperties, false);
  },
};

export default { typescriptTokens, typeOnlyTokens };
