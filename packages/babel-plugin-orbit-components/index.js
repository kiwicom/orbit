/* eslint-disable vars-on-top, no-param-reassign */
module.exports = function orbitComponents(babel) {
  var t = babel.types;

  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path) {
        if (path.node.source.value !== "@kiwicom/orbit-components") {
          return;
        }

        if (path.node.specifiers.filter(t.isImportSpecifier).length === 0) {
          return;
        }

        path.node.specifiers.forEach(function specFn(spec) {
          var importedPath = "@kiwicom/orbit-components";
          if (t.isImportSpecifier(spec)) {
            var importedName = spec.imported.name;
            spec = t.importDefaultSpecifier(t.identifier(spec.local.name));

            importedPath = "@kiwicom/orbit-components/lib/" + importedName;
          }

          path.insertAfter(
            t.importDeclaration([spec], t.stringLiteral(importedPath))
          );
        });

        path.remove();
      }
    }
  };
};
