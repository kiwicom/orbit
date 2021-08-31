const { types: t, traverse } = require("@babel/core");
const { parse } = require("@babel/parser");
const { default: generate } = require("@babel/generator");

const getAst = str =>
  parse(str, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });

const getScope = example => {
  const scope = [];

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

const getByName = (ast, name) => {
  let output;

  ast.program.body.forEach(n => {
    if (t.isExportDefaultDeclaration(n)) {
      n.declaration.properties.forEach(prop => {
        if (t.isObjectProperty(prop)) {
          if (t.isIdentifier(prop.key) && prop.key.name === name) {
            output = generate(prop.value).code;
          }
        }
      });
    }
  });

  traverse(ast, {
    TSTypeAnnotation: path => {
      path.remove();
    },

    TSTypeParameterInstantiation: path => {
      path.remove();
    },
  });

  return output;
};

module.exports = {
  getScope,
  getByName,
  getAst,
};
