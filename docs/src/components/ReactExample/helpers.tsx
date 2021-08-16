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
    JSXAttribute: path => {
      if (t.isJSXIdentifier(path.node.name)) {
        const { name } = path.node.name;
        if (_.has(knobs, [name])) {
          const knob = knobs[name];
          const { value } = path.node;

          if (t.isJSXExpressionContainer(value)) {
            if (knob.includes("-icon")) {
              const iconName = ["Icons.", knob.split("-icon")[0]].join("");
              path.node.value = t.jsxExpressionContainer(
                t.jsxElement(
                  t.jsxOpeningElement(t.jsxIdentifier(iconName), [], true),
                  null,
                  [],
                  true,
                ),
              );
            }
          }

          if (t.isStringLiteral(value)) {
            if (knob === "true") {
              path.node.value = null;
            }

            if (knob === "false") {
              path.node.value = t.jsxExpressionContainer(t.booleanLiteral(false));
            }

            if (value) value.value = knobs[path.node.name.name];
          }
        }
      }
    },
  });

  const { code } = generate(ast);

  return code;
};
