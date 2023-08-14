/* eslint-disable no-param-reassign */

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
  BadgeListItem: "BadgeList/BadgeListItem",
  BreadcrumbsItem: "Breadcrumbs/BreadcrumbsItem",
  ButtonPrimitive: "primitives/ButtonPrimitive",
  CardHeader: "Card/CardHeader",
  CardSection: "Card/CardSection",
  ToastRoot: "Toast",
  createToast: "Toast",
  createToastPromise: "Toast",
  calculateCountOf: "Slider/utils/calculateCountOf",
  AccordionSection: "Accordion/AccordionSection",
  Grid: "utils/Grid",
  Icons: "icons",
  IllustrationPrimitive: "primitives/IllustrationPrimitive",
  InputStepperStateless: "deprecated/InputStepper/InputStepperStateless",
  ClickOutside: "deprecated/ClickOutside",
  InputStepper: "deprecated/InputStepper",
  ItinerarySegment: "Itinerary/ItinerarySegment",
  ItinerarySeparator: "Itinerary/ItinerarySeparator",
  ItineraryStatus: "Itinerary/ItineraryStatus",
  ItineraryBadgeList: "Itinerary/ItineraryBadgeList",
  ItineraryBadgeListItem: "Itinerary/ItineraryBadgeList/ItineraryBadgeListItem",
  ItinerarySegmentDetail: "Itinerary/ItinerarySegment/ItinerarySegmentDetail",
  ItinerarySegmentStop: "Itinerary/ItinerarySegment/ItinerarySegmentStop",
  ItinerarySegmentBanner: "Itinerary/ItinerarySegment/ItinerarySegmentBanner",
  LayoutColumn: "Layout/LayoutColumn",
  ListItem: "List/ListItem",
  mediaQueries: "utils/mediaQuery",
  ModalFooter: "Modal/ModalFooter",
  ModalHeader: "Modal/ModalHeader",
  ModalSection: "Modal/ModalSection",
  NavigationDrawer: "Drawer",
  SmartPassV1: "SmartPassIllustrations/illustrations/SmartPassV1",
  SmartPassV2: "SmartPassIllustrations/illustrations/SmartPassV2",
  SmartPassV3: "SmartPassIllustrations/illustrations/SmartPassV3",
  SmartPassV4: "SmartPassIllustrations/illustrations/SmartPassV4",
  SmartPassV5: "SmartPassIllustrations/illustrations/SmartPassV5",
  StepperStateless: "Stepper/StepperStateless",
  TableBody: "Table/TableBody",
  TabList: "Tabs/components/TabList",
  TabPanels: "Tabs/components/TabPanels",
  TabPanel: "Tabs/components/TabPanel",
  Tab: "Tabs/components/Tab",
  TableCell: "Table/TableCell",
  TableFooter: "Table/TableFooter",
  TableHead: "Table/TableHead",
  TableRow: "Table/TableRow",
  TimelineStep: "Timeline/TimelineStep",
  SeatLegend: "Seat/components/SeatLegend",
  WizardStep: "Wizard/WizardStep",
  useMediaQuery: "hooks/useMediaQuery",
  useTheme: "hooks/useTheme",
  useInterval: "hooks/useInterval",
  useLockScrolling: "hooks/useLockScrolling",
  useRandomId: "hooks/useRandomId",
  useRandomIdSeed: { path: "hooks/useRandomId", named: true },
  useFocusTrap: "hooks/useFocusTrap",
  rtl: { path: `utils/rtl`, namespace: true },
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
            const isIcon = importedPath.includes("icons");
            // icons will already have /lib in the name, this adds the /lib to normal components
            if (!importedPath.includes("/lib")) {
              if (isIcon) {
                importedPath = importedPath.replace("icons", "lib/icons");
              } else {
                importedPath += "/lib";
              }
            }

            if (pathOverwrites[importedName] && !isIcon) {
              if (pathOverwrites[importedName].named) {
                spec = t.importSpecifier(
                  t.identifier(spec.local.name),
                  t.identifier(spec.local.name),
                );
                importedPath += `/${pathOverwrites[importedName].path}`;
              } else if (pathOverwrites[importedName].namespace) {
                spec = t.importNamespaceSpecifier(t.identifier(spec.local.name));
                importedPath += `/${pathOverwrites[importedName].path}`;
              } else {
                // Currently there are only overrides for non icons
                importedPath += `/${pathOverwrites[importedName]}`;
              }
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
