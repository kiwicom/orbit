import { transform as babelTransform } from "@babel/standalone";
import type { BabelFileResult, NodePath } from "@babel/core";
import type {
  ObjectProperty,
  JSXAttribute,
  JSXIdentifier,
  JSXOpeningElement,
  JSXSpreadAttribute,
} from "@babel/types";
import fp from "lodash/fp";

export const transform = (
  exampleName: string,
  code: string,
  knobs: Record<string, Record<string, string | number | boolean>>,
) => {
  const result: BabelFileResult = babelTransform(code, {
    filename: exampleName,
    sourceType: "module",
    plugins: [
      "syntax-jsx",
      ({ types: t }) => {
        const parsePropValue = (value: string | number | boolean) => {
          if (typeof value === "string" && value.includes("-icon")) {
            const iconName = `${value.split("-icon")[0]}`;
            return t.jsxExpressionContainer(
              t.jsxElement(
                t.jsxOpeningElement(
                  t.jsxMemberExpression(t.jsxIdentifier("Icons"), t.jsxIdentifier(iconName)),
                  [],
                  true,
                ),
                null,
                [],
                true,
              ),
            );
          }

          if (typeof value === "boolean") return t.jsxExpressionContainer(t.booleanLiteral(value));
          if (typeof value === "number") return t.jsxExpressionContainer(t.numericLiteral(value));
          if (typeof value === "string") return t.stringLiteral(value);

          return t.expressionContainer(t.nullLiteral());
        };

        return {
          visitor: {
            JSXOpeningElement: (path: NodePath<JSXOpeningElement>) => {
              const { node } = path;
              if (t.isJSXIdentifier(node.name)) {
                const { name } = node.name as JSXIdentifier;
                const defaultKnobs = knobs[name];
                const getProp = (
                  attributes: (JSXAttribute | JSXSpreadAttribute)[],
                  propName: string,
                ) =>
                  fp.compose(
                    fp.find(
                      (attr: JSXAttribute) => t.isJSXAttribute(attr) && attr.name.name === propName,
                    ),
                    fp.filter(t.isJSXAttribute),
                  )(attributes);

                if (defaultKnobs) {
                  Object.entries(defaultKnobs).forEach(([propName, propValue]) => {
                    if (propValue == null) return;
                    const prop = getProp(node.attributes, propName);

                    if (prop) {
                      prop.value = parsePropValue(propValue);
                    } else {
                      node.attributes.push(
                        t.jsxAttribute(t.jsxIdentifier(propName), parsePropValue(propValue)),
                      );
                    }
                  });
                }
              }
            },
          },
        };
      },
    ],
  });

  return result.code || "";
};

export const getProperties = (exampleName: string, example: string) => {
  const result = {};

  babelTransform(example, {
    filename: exampleName,
    sourceType: "module",
    presets: ["typescript", "react"],
    plugins: [
      ({ types: t }) => {
        return {
          visitor: {
            CallExpression: path => {
              const { node } = path;
              if (t.isMemberExpression(node.callee)) {
                const [identifier, props] = node.arguments;
                if (identifier && identifier.name) {
                  result[identifier.name] = {};
                  if (t.isObjectExpression(props)) {
                    props.properties.forEach((prop: ObjectProperty) => {
                      if (t.isObjectProperty(prop)) {
                        const { key, value } = prop;
                        if (t.isIdentifier(key)) {
                          if (
                            value.type === "NumericLiteral" ||
                            value.type === "StringLiteral" ||
                            value.type === "BooleanLiteral"
                          ) {
                            // @ts-expect-error it's identifier
                            result[identifier.name][key.name] = value.value;
                          }
                        }
                      }
                    });
                  }
                }
              }
            },
          },
        };
      },
    ],
  });

  return result;
};
