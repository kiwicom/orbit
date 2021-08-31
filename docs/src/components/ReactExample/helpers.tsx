import * as Components from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";
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

const getAttribute = (value: string, name: string) => {
  if (value === "true") return t.jsxAttribute(t.jsxIdentifier(name), null);

  if (value === "false") {
    return t.jsxAttribute(t.jsxIdentifier(name), t.jsxExpressionContainer(t.booleanLiteral(false)));
  }

  return t.jsxAttribute(t.jsxIdentifier(name), t.stringLiteral(value));
};

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
      const namePath = path.node.name;
      Object.entries(knobs).forEach(([id, knobsObj]) => {
        if (t.isJSXIdentifier(namePath)) {
          if (namePath.name.toLowerCase() === id.toLowerCase()) {
            const current = path.node.attributes
              .map(attr => (t.isJSXAttribute(attr) ? attr.name.name : ""))
              .filter(Boolean);

            Object.entries(knobsObj).forEach(([name, val]) => {
              if (!current.includes(name)) {
                const value = val.toString();

                path.node.attributes.push(getAttribute(value, name));

                if (value.includes("-icon")) {
                  const iconName = `Icons.${value.split("-icon")[0]}`;
                  path.node.attributes.push(
                    t.jsxAttribute(
                      t.jsxIdentifier(name),
                      t.jsxExpressionContainer(
                        t.jsxElement(
                          t.jsxOpeningElement(t.jsxIdentifier(iconName), [], true),
                          null,
                          [],
                          true,
                        ),
                      ),
                    ),
                  );
                }
              }
            });
          }
        }
      });
    },
    JSXAttribute: path => {
      Object.entries(knobs).forEach(([, knobsObj]) => {
        if (t.isJSXIdentifier(path.node.name)) {
          const { name } = path.node.name;
          if (_.has(knobsObj, [name])) {
            const knob = knobsObj[name];
            const { value } = path.node;

            if (t.isJSXExpressionContainer(value) || name.includes("icon")) {
              if (knob.toString().includes("-icon")) {
                const iconName = `Icons.${knob.split("-icon")[0]}`;
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
          }
        }
      });
    },
  });

  const { code } = generate(ast);

  return code;
};
