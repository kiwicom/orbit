import { types as t, traverse } from "@babel/core";
import { parse } from "@babel/parser";
import generate from "@babel/generator";

interface Scope {
  name: string;
  path: string;
  default: boolean;
}

export const getAst = str =>
  parse(str, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });

export const getScope = example => {
  const scope: Scope[] = [];

  getAst(example).program.body.forEach(n => {
    if (t.isImportDeclaration(n)) {
      const p = n.source.value;
      if (n.source.value.match(/@kiwicom\/orbit-components|styled-components/)) {
        n.specifiers.forEach(s => {
          if (t.isImportDefaultSpecifier(s)) {
            if (t.isIdentifier(s.local)) scope.push({ name: s.local.name, path: p, default: true });
          }

          if (t.isImportSpecifier(s)) {
            if (t.isIdentifier(s.imported))
              scope.push({ name: s.imported.name, path: p, default: false });
          }
        });
      }
    }
  });

  return scope;
};

export const getByName = (ast, name) => {
  let output;

  traverse(ast, {
    TSTypeAnnotation: path => {
      path.remove();
    },

    TSTypeParameterInstantiation: path => {
      path.remove();
    },
  });

  ast.program.body.forEach(n => {
    if (t.isExportDefaultDeclaration(n)) {
      // @ts-expect-error TODO
      n.declaration.properties.forEach(prop => {
        if (t.isObjectProperty(prop)) {
          if (t.isIdentifier(prop.key) && prop.key.name === name) {
            output = generate(prop.value).code;
          }
        }
      });
    }
  });

  return output;
};
