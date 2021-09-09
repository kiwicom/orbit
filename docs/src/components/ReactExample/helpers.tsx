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

const getAttribute = (value: string | number, name: string) => {
  if (value.toString() === "true") return t.jsxAttribute(t.jsxIdentifier(name), null);

  if (value.toString() === "false") {
    return t.jsxAttribute(t.jsxIdentifier(name), t.jsxExpressionContainer(t.booleanLiteral(false)));
  }

  if (typeof value === "number") {
    return t.jsxAttribute(t.jsxIdentifier(name), t.jsxExpressionContainer(t.numericLiteral(value)));
  }

  return t.jsxAttribute(t.jsxIdentifier(name), t.stringLiteral(value.toString()));
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
            const attributes: t.JSXAttribute[] = [];

            Object.entries(knobsObj).forEach(([name, val]) => {
              const value = val.toString();
              if (value === "") return;

              if (value.includes("-icon")) {
                const iconName = `Icons.${value.split("-icon")[0]}`;
                attributes.push(
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
              } else {
                attributes.push(getAttribute(val, name));
              }
            });

            path.node.attributes = _.uniq(attributes);
          }
        }
      });
    },
  });

  const { code } = generate(ast);

  return code;
};
