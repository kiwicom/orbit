import { transform as babelTransform } from "@babel/standalone";
import _ from "lodash";
import type { BabelFileResult } from "@babel/core";
import { types as babelTypes } from "@babel/core";

/* eslint-disable no-param-reassign */

const parseArrayOfObjectProps = (props: babelTypes.ObjectProperty[]) => {
  return props.reduce((acc, prop) => {
    if (babelTypes.isObjectProperty(prop)) {
      const { key, value } = prop;
      if (babelTypes.isIdentifier(key)) {
        if (
          babelTypes.isNumericLiteral(value) ||
          babelTypes.isStringLiteral(value) ||
          babelTypes.isBooleanLiteral(value)
        ) {
          acc[key.name] = value.value;
        }
      }
    }

    return acc;
  }, {});
};

export const transform = (
  exampleName: string,
  code: string,
  knobs: Record<string, Record<string, string | number | boolean>>,
) => {
  const result: BabelFileResult = babelTransform(code, {
    filename: exampleName,
    sourceType: "module",
    presets: ["typescript", "react"],
    plugins: [
      ({ types: t }: { types: typeof babelTypes }) => {
        const parseValue = (value: string | number | boolean) => {
          if (typeof value === "boolean") return t.booleanLiteral(value);
          if (typeof value === "number") return t.numericLiteral(value);
          if (typeof value === "string") return t.stringLiteral(value);

          return t.nullLiteral();
        };

        return {
          visitor: {
            CallExpression: path => {
              const { node } = path;
              if (
                t.isMemberExpression(node.callee) &&
                node.callee.property.name === "createElement"
              ) {
                const [component] = node.arguments;
                if (t.isIdentifier(component)) {
                  const { name: componentName } = component;
                  const knobsObj = knobs[componentName];

                  // for initial knobs applying
                  if (knobsObj) {
                    path.node.arguments = [
                      path.node.arguments[0],
                      t.objectExpression(
                        Object.entries(knobsObj).map(([name, val]) => {
                          return t.objectProperty(t.identifier(name), parseValue(val));
                        }),
                      ),
                      ...path.node.arguments.slice(2),
                    ];
                  }
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

export const pureTransform = (exampleName: string, example: string) => {
  const result: BabelFileResult = babelTransform(example, {
    filename: exampleName,
    sourceType: "module",
    presets: ["typescript", "react"],
  });

  return result.code || "";
};

export const getProperties = (exampleName: string, example: string) => {
  const result: babelTypes.ObjectProperty[] = [];

  babelTransform(example, {
    filename: exampleName,
    sourceType: "module",
    presets: ["typescript", "react"],
    plugins: [
      ({ types: t }: { types: typeof babelTypes }) => {
        return {
          visitor: {
            CallExpression: path => {
              const { node } = path;
              if (t.isMemberExpression(node.callee)) {
                const [, props] = node.arguments;
                if (t.isObjectExpression(props)) {
                  props.properties.forEach(prop => {
                    if (t.isObjectProperty(prop)) {
                      result.push(prop);
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

  return parseArrayOfObjectProps(result);
};
