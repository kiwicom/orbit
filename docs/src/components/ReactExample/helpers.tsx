import * as Components from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";
import { types as t, traverse } from "@babel/core";
import { parse } from "@babel/parser";
import generate from "@babel/generator";
import _ from "lodash";

/* eslint-disable no-param-reassign */

interface Scope {
  path: string;
  name: string;
  default: boolean;
}

export const getModules = (scope: Scope[]) =>
  scope.reduce((acc, { name: moduleName, path }) => {
    if (path.match(/@kiwicom\/orbit-components\/icons/)) {
      return {
        ...acc,
        [moduleName]: Icons[moduleName],
      };
    }

    return {
      ...acc,
      [moduleName]: Components[moduleName],
    };
  }, {});

export const copyImports = (scope: Scope[]) =>
  scope
    .map(({ path, name: moduleName, default: isDefault }) => {
      if (isDefault) return `import ${moduleName} from ${path}`;
      return `import { ${moduleName} } from "${path}"`;
    })
    .join("\n");

export const transform = (example: string, knobs: Record<string, string>) => {
  const getCode = str =>
    parse(str, {
      sourceType: "module",
      plugins: ["typescript", "jsx"],
    });

  const ast = getCode(example);

  traverse(ast, {
    JSXOpeningElement: path => {
      const attrs = path.node.attributes
        .map(attr => {
          if (t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name)) return attr.name.name;
          return "";
        })
        .filter(Boolean);

      if (_.has(knobs, attrs)) {
        Object.entries(knobs).forEach(([prop, value]) => {
          if (prop !== "children" && value && !value.includes("icon")) {
            path.node.attributes.push(
              t.jsxAttribute(t.jsxIdentifier(prop), t.stringLiteral(value)),
            );
          }

          if (value.includes("icon")) {
            const name = value.split("-icon")[0];
            const node = t.jsxExpressionContainer(
              t.jsxElement(
                t.jsxOpeningElement(t.jsxIdentifier(["Icons.", name].join("")), [], true),
                null,
                [],
                true,
              ),
            );

            path.node.attributes.push(t.jsxAttribute(t.jsxIdentifier(prop), node));
          }
        });
      }
    },

    JSXAttribute: path => {
      const namePath = path.node.name;
      const valuePath = path.get("value");

      if (t.isJSXIdentifier(namePath)) {
        if (valuePath.isStringLiteral()) {
          const knob = knobs[namePath.name];

          if (knob === "true") {
            path.node.value = null;
          }

          if (knob === "false") {
            path.node.value = t.jsxExpressionContainer(t.booleanLiteral(false));
          }

          // if (valuePath.node.value.includes("icon")) {
          //   const name = valuePath.node.value.split("-icon")[0];
          //   const node = t.jsxExpressionContainer(
          //     t.jsxElement(t.jsxOpeningElement(t.jsxIdentifier(name), [], true), null, [], true),
          //   );

          //   valuePath.replaceWith(node);
          // }
        }
      }
    },
  });

  const { code } = generate(ast);

  return code;
};
