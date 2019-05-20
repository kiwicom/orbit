/* eslint-disable vars-on-top, no-param-reassign */
var Modal = "Modal";
var Card = "Card";
var Table = "Table";

var NEST_RESOLVES = {
  ModalHeader: Modal,
  ModalSection: Modal,
  ModalFooter: Modal,
  CardHeader: Card,
  CardContent: Card,
  CardSection: Card,
  TableHead: Table,
  TableBody: Table,
  TableRow: Table,
  TableCell: Table
};

var UTILS_RESOLVES = {
  mediaQueries: "mediaQuery"
};

var parsedImportPaths = [
  "@kiwicom/orbit-components",
  "@kiwicom/orbit-components/lib/icons"
];

module.exports = function orbitComponents(babel) {
  var t = babel.types;

  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path) {
        if (parsedImportPaths.indexOf(path.node.source.value) === -1) {
          return;
        }

        if (path.node.specifiers.filter(t.isImportSpecifier).length === 0) {
          return;
        }
        path.node.specifiers.forEach(function specFn(spec) {
          var importedPath = path.node.source.value;

          if (t.isImportSpecifier(spec)) {
            var importedName = spec.imported.name;
            spec = t.importDefaultSpecifier(t.identifier(spec.local.name));

            // icons will already have /lib in the name, this adds the /lib to normal components
            if (importedPath.indexOf("/lib") === -1) {
              importedPath += "/lib";
            }

            if (NEST_RESOLVES[importedName]) {
              importedPath +=
                "/" + NEST_RESOLVES[importedName] + "/" + importedName;
            } else if (UTILS_RESOLVES[importedName]) {
              importedPath += "/utils/" + UTILS_RESOLVES[importedName];
            } else {
              importedPath += "/" + importedName;
            }
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
