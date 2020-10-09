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
  AlertButton: "Alert/AlertButton",
  BadgePrimitive: "primitives/BadgePrimitive",
  BreadcrumbsItem: "Breadcrumbs/BreadcrumbsItem",
  ButtonPrimitive: "primitives/ButtonPrimitive",
  CardContent: "Card/CardContent", // TODO: doesn't exist anymore (?)
  CardHeader: "Card/CardHeader",
  CardSection: "Card/CardSection",
  DepreacatedCardHeader: "deprecated/Card/CardHeader",
  DeprecatedCard: "deprecated/Card",
  DeprecatedCardSection: "deprecated/Card/CardSection",
  DestinationCard: "deprecated/DestinationCard",
  DestinationHeader: "deprecated/DestinationHeader",
  Grid: "utils/Grid",
  Icons: "icons",
  IllustrationPrimitive: "primitives/IllustrationPrimitive",
  InputStepperStateless: "InputStepper/InputStepperStateless",
  LayoutColumn: "Layout/LayoutColumn",
  ListItem: "List/ListItem",
  mediaQueries: "utils/mediaQuery",
  ModalFooter: "Modal/ModalFooter",
  ModalHeader: "Modal/ModalHeader",
  ModalSection: "Modal/ModalSection",
  NavigationDrawer: "Drawer",
  PricingTableItem: "PricingTable/PricingTableItem",
  StepperStateless: "Stepper/StepperStateless",
  TableBody: "Table/TableBody",
  TableCell: "Table/TableCell",
  TableFooter: "Table/TableFooter",
  TableHead: "Table/TableHead",
  TableRow: "Table/TableRow",
  TripDate: "deprecated/TripSector/TripDate",
  TripLayover: "deprecated/TripSector/TripLayover",
  TripSector: "deprecated/TripSector",
  TripSegment: "deprecated/TripSegment",
};

const parsedImportPaths = [
  "@kiwicom/orbit-components",
  "@kiwicom/orbit-components/lib/icons",
  "@kiwicom/orbit-components/icons",
];

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
            if (!importedPath.includes("/lib")) {
              if (importedPath.includes("icons")) {
                importedPath = importedPath.replace("icons", "lib/icons");
              } else {
                importedPath += "/lib";
              }
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
