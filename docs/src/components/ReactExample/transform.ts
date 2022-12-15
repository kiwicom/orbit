import { transform as babelTransform } from "@babel/standalone";
import type { BabelFileResult } from "@babel/core";
import type { ObjectProperty } from "@babel/types";
import generator from "@babel/generator";

/* eslint-disable no-param-reassign */
const parseArrayOfObjectProps = (props: ObjectProperty[]) => {
  return props.reduce((acc, prop) => {
    if (prop.type === "ObjectProperty") {
      const { key, value } = prop;
      if (key.type === "Identifier") {
        if (
          value.type === "NumericLiteral" ||
          value.type === "StringLiteral" ||
          value.type === "BooleanLiteral"
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
      ({ types: t }) => {
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
                        Object.entries(knobsObj)
                          .map(([name, val]) => {
                            if (val == null) return undefined;
                            return t.objectProperty(t.identifier(name), parseValue(val));
                          })
                          .filter(Boolean),
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

// A bit hacky, but it works. We need to parse it back to jsx in order to show it in the editor
// Babel standalone still parses the code to createElement
export const transformReactElementToJsx = (exampleName: string, example: string) => {
  let jsxNode = null;

  try {
    babelTransform(example, {
      filename: exampleName,
      sourceType: "module",
      ast: true,
      presets: ["typescript", "react"],
      plugins: [
        ({ types: t }) => {
          const isReactCreateElement = node =>
            t.isCallExpression(node) &&
            t.isMemberExpression(node.callee) &&
            t.isIdentifier(node.callee.object, { name: "React" }) &&
            t.isIdentifier(node.callee.property, { name: "createElement" }) &&
            !node.callee.computed;

          const isNullLikeNode = node =>
            t.isNullLiteral(node) || t.isIdentifier(node, { name: "undefined" });

          const isPlainObjectExpression = node =>
            t.isObjectExpression(node) &&
            node.properties.every(
              m =>
                t.isSpreadElement(m) ||
                (t.isObjectProperty(m, { computed: false }) &&
                  getJSXIdentifier(m.key) !== null &&
                  getJSXAttributeValue(m.value) !== null),
            );

          function getJSXNode(node) {
            if (!isReactCreateElement(node)) return null;

            const [nameNode, propsNode, ...childNodes] = node.arguments;

            const name = getJSXName(nameNode);
            if (name === null) return null;

            const props = getJSXProps(propsNode);
            if (props === null) return null;

            const children = getJSXChildren(childNodes);
            if (children === null) return null;

            const selfClosing = children.length === 0;
            const startTag = t.jSXOpeningElement(name, props, selfClosing);
            const endTag = selfClosing ? null : t.jSXClosingElement(name);

            return t.jSXElement(startTag, endTag, children, selfClosing);
          }

          function getJSXName(node) {
            if (node == null) return null;

            const name = getJSXIdentifier(node);
            if (name !== null) return name;

            if (!t.isMemberExpression(node)) return null;
            const object = getJSXName(node.object);
            const property = getJSXName(node.property);
            if (object === null || property === null) return null;
            return t.jSXMemberExpression(object, property);
          }

          function getJSXProps(node) {
            if (node == null || isNullLikeNode(node)) return [];

            if (t.isCallExpression(node) && t.isIdentifier(node.callee, { name: "_extends" })) {
              const props = node.arguments.map(getJSXProps);
              if (props.every(prop => prop !== null)) return [].concat.apply([], props);
            }

            if (!t.isObjectExpression(node) && t.isExpression(node))
              return [t.jSXSpreadAttribute(node)];

            if (!isPlainObjectExpression(node)) return null;
            return node.properties.map(prop =>
              t.isObjectProperty(prop)
                ? t.jSXAttribute(getJSXIdentifier(prop.key), getJSXAttributeValue(prop.value))
                : t.jSXSpreadAttribute(prop.argument),
            );
          }

          function getJSXChild(node) {
            if (t.isStringLiteral(node)) return t.jSXText(node.value);
            if (isReactCreateElement(node)) return getJSXNode(node);
            if (t.isExpression(node)) return t.jSXExpressionContainer(node);
            return null;
          }

          function getJSXChildren(nodes) {
            const children = nodes.filter(node => !isNullLikeNode(node)).map(getJSXChild);
            if (children.some(child => child == null)) return null;
            return children;
          }

          function getJSXIdentifier(node) {
            if (t.isIdentifier(node)) return t.jSXIdentifier(node.name);
            if (t.isStringLiteral(node)) return t.jSXIdentifier(node.value);
            return null;
          }

          function getJSXAttributeValue(node) {
            if (t.isStringLiteral(node)) return node;
            if (t.isJSXElement(node)) return node;
            if (t.isExpression(node)) return t.jSXExpressionContainer(node);
            return null;
          }

          return {
            visitor: {
              CallExpression(path) {
                const node = getJSXNode(path.node);
                path.node = node;
                jsxNode = node;
              },
            },
          };
        },
      ],
    });
  } catch (err) {
    console.error(err);
  }

  return jsxNode ? generator(jsxNode).code : example;
};

export const getProperties = (exampleName: string, example: string) => {
  const result: ObjectProperty[] = [];

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
                const [, props] = node.arguments;
                if (t.isObjectExpression(props)) {
                  props.properties.forEach((prop: ObjectProperty) => {
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
