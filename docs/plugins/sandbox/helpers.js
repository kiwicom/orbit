const { parse } = require("@babel/parser");
const t = require("@babel/types");

const getScope = example => {
  const code = parse(example, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });

  const scope = [];

  code.program.body.forEach(n => {
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

module.exports = {
  getScope,
};
