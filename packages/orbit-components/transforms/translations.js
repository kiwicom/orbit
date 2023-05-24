// @noflow
/* eslint-disable no-param-reassign */
const COMPONENTS = [
  "Popover",
  "Tooltip",
  "Modal",
  "Drawer",
  "Wizard",
  "Alert",
  "MobileDialogPrimitive",
  "MobileDialog",
  "NavigationBar",
  "Breadcrumbs",
  "Card",
];

const getPropName = name => {
  if (name === "Drawer") return "labelHide";
  if (name === "NavigationBar") return "openTitle";
  if (name === "Breadcrumbs") return "goBackTitle";

  return "labelClose";
};

const getTranslationKey = name => {
  if (name === "Drawer") return "orbit.drawer_hide";
  if (name === "NavigationBar") return "orbit.navigationbar_open_menu";
  if (name === "Breadcrumbs") return "orbit.breadcrumbs_back";

  return "orbit.button_close";
};

function translations(fileInfo, api, { withImport = true }) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const findComponent = name => root.find(j.JSXOpeningElement, { name: { name } });

  if (COMPONENTS.some(c => findComponent(c).size() > 0)) {
    const TranslateImport = root.find(j.ImportDeclaration, {
      source: { value: "@kiwicom/nitro/lib/services/intl/context" },
    });

    if (TranslateImport.size() === 0 && withImport) {
      root
        .find(j.Program)
        .get("body", 0)
        .insertAfter(
          j.importDeclaration(
            [j.importSpecifier(j.identifier("useIntl"))],
            j.literal("@kiwicom/nitro/lib/services/intl/context"),
          ),
        );
    }
  }

  COMPONENTS.forEach(component => {
    findComponent(component).forEach(path => {
      const propName = getPropName(component);
      const translationKey = getTranslationKey(component);

      path.node.attributes = [
        ...path.node.attributes,
        j.jsxAttribute(
          j.jsxIdentifier(propName),
          j.jsxExpressionContainer(
            j.callExpression(j.identifier("translate"), [j.stringLiteral(translationKey)]),
          ),
        ),
      ];
    });
  });

  root.find(j.JSXOpeningElement, { name: { name: "Wizard" } }).forEach(path => {
    const total = path.node.attributes.find(attr => attr.name.name === "completedSteps");
    const active = path.node.attributes.find(attr => attr.name.name === "activeStep");

    path.node.attributes = [
      ...path.node.attributes,
      j.jsxAttribute(
        j.jsxIdentifier("labelProgress"),
        j.jsxExpressionContainer(
          j.callExpression(j.identifier("translate"), [
            j.stringLiteral("orbit.wizard_progress"),
            j.objectExpression([
              j.objectProperty(j.identifier("number"), active.value.expression),
              j.objectProperty(j.identifier("total"), total.value.expression),
            ]),
          ]),
        ),
      ),
    ];
  });

  return root.toSource();
}

module.exports = translations;
