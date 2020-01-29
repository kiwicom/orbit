/* eslint-disable no-param-reassign, flowtype/require-valid-file-annotation */

/**
 * Usually, we take the destructed component name and append it after `/libs/` like so:
 *
 *     import { Alert } from "@kiwicom/orbit-components";
 *          ↓ ↓ ↓ ↓ ↓ ↓
 *     import Alert from "@kiwicom/orbit-components/lib/Alert";
 *
 * However, there are some exceptions which we have to handle manually and change the resulting
 * output. The following configuration maps destructed component to the new path (appended to libs).
 */
const pathOverwrites = {
  CardContent: 'Card/CardContent', // TODO: doesn't exist anymore (?)
  CardHeader: 'Card/CardHeader',
  CardSection: 'Card/CardSection',
  Grid: 'utils/Grid',
  Icons: 'icons',
  mediaQueries: 'utils/mediaQuery',
  ModalFooter: 'Modal/ModalFooter',
  ModalHeader: 'Modal/ModalHeader',
  ModalSection: 'Modal/ModalSection',
  TableBody: 'Table/TableBody',
  TableCell: 'Table/TableCell',
  TableHead: 'Table/TableHead',
  TableRow: 'Table/TableRow',
  LayoutColumn: 'Layout/LayoutColumn',
  BreadcrumbsItem: 'Breadcrumbs/BreadcrumbsItem',
  BadgePrimitive: 'primitives/BadgePrimitive',
};

const parsedImportPaths = ['@kiwicom/orbit-components', '@kiwicom/orbit-components/lib/icons'];

module.exports = function orbitComponents(babel) {
  const t = babel.types;

  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path) {
        if (parsedImportPaths.indexOf(path.node.source.value) === -1) {
          // ignore unknown paths
          return;
        }

        if (path.node.specifiers.filter(t.isImportSpecifier).length === 0) {
          return;
        }

        path.node.specifiers.forEach(function specFn(spec) {
          let importedPath = path.node.source.value;

          if (t.isImportSpecifier(spec)) {
            const importedName = spec.imported.name;
            spec = t.importDefaultSpecifier(t.identifier(spec.local.name));

            // icons will already have /lib in the name, this adds the /lib to normal components
            if (importedPath.indexOf('/lib') === -1) {
              importedPath += '/lib';
            }

            if (pathOverwrites[importedName]) {
              importedPath += `/${pathOverwrites[importedName]}`;
            } else {
              importedPath += `/${importedName}`;
            }
          }

          path.insertAfter(t.importDeclaration([spec], t.stringLiteral(importedPath)));
        });

        path.remove();
      },
    },
  };
};
