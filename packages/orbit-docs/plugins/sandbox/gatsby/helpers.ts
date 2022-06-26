import { types as t, traverse, parseSync } from "@babel/core";
import generate from "@babel/generator";

interface Scope {
  name: string;
  path: string;
  default: boolean;
}

export const getAst = (str, filename) =>
  parseSync(str, {
    filename,
    sourceType: "module",
    presets: ["@babel/preset-typescript", "@babel/preset-react"],
  });

export const getScope = (example, file) => {
  const scope: Scope[] = [];
  const ast = getAst(example, file);

  if (!ast) return null;

  if (t.isFile(ast)) {
    ast.program.body.forEach(n => {
      if (t.isImportDeclaration(n)) {
        const p = n.source.value;
        if (n.source.value.match(/@kiwicom\/orbit-components|styled-components/)) {
          n.specifiers.forEach(s => {
            if (t.isImportDefaultSpecifier(s)) {
              if (t.isIdentifier(s.local))
                scope.push({ name: s.local.name, path: p, default: true });
            }

            if (t.isImportSpecifier(s)) {
              if (t.isIdentifier(s.imported))
                scope.push({ name: s.imported.name, path: p, default: false });
            }
          });
        }
      }
    });
  }

  return scope;
};

export const getByName = (ast, name) => {
  let output = "";

  traverse(ast, {
    TSTypeAnnotation: path => {
      path.remove();
    },

    TSTypeParameterInstantiation: path => {
      path.remove();
    },

    ExportDefaultDeclaration: path => {
      if (t.isExportDefaultDeclaration(path.node)) {
        // @ts-expect-error TODO
        path.node.declaration.properties.forEach(prop => {
          if (t.isObjectProperty(prop)) {
            if (t.isIdentifier(prop.key) && prop.key.name === name) {
              if (prop.value) {
                output = generate(prop.value).code;
              }
            }
          }
        });
      }
    },
  });

  return output;
};
