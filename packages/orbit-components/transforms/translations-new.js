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

const getDefaultMessage = component => {
  if (component === "Drawer") return "Hide";
  if (component === "NavigationBar") return "Open menu";
  if (component === "Breadcrumbs") return "Back";

  return "Close";
};

function translations(fileInfo, api, { withImport = true }) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const findComponent = name => root.find(j.JSXOpeningElement, { name: { name } });

  if (COMPONENTS.some(c => findComponent(c).size() > 0)) {
    const ReactIntl = root.find(j.ImportDeclaration, {
      source: { value: "react-intl" },
    });

    if (ReactIntl.size() === 0 && withImport) {
      root
        .find(j.Program)
        .get("body", 0)
        .insertAfter(
          j.importDeclaration(
            [j.importSpecifier(j.identifier("useIntl"))],
            j.literal("react-intl"),
          ),
        );
    }
  }

  COMPONENTS.forEach((component, idx) => {
    const componentNodes = findComponent(component);

    if (componentNodes.size() > 0) {
      const componentNode = componentNodes.at(0).get();
      const componentParent = j(componentNode).closestScope();

      if (componentParent) {
        const returnStatement = componentParent.find(j.ReturnStatement);

        if (returnStatement.size() > 0 && idx === 0) {
          returnStatement.insertBefore(
            j.variableDeclaration("const", [
              j.variableDeclarator(
                j.identifier("intl"),
                j.callExpression(j.identifier("useIntl"), []),
              ),
            ]),
          );
        }
      }
    }

    componentNodes.forEach(path => {
      const propName = getPropName(component);
      const translationKey = getTranslationKey(component);

      path.node.attributes = [
        ...path.node.attributes,
        j.jsxAttribute(
          j.jsxIdentifier(propName),
          j.jsxExpressionContainer(
            j.callExpression(
              j.memberExpression(j.identifier("intl"), j.identifier("formatMessage")),
              [
                j.objectExpression([
                  j.objectProperty(j.identifier("id"), j.stringLiteral(translationKey)),
                  j.objectProperty(
                    j.identifier("defaultMessage"),
                    j.stringLiteral(getDefaultMessage(component)),
                  ),
                ]),
              ],
            ),
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
          j.callExpression(
            j.memberExpression(j.identifier("intl"), j.identifier("formatMessage")),
            [
              j.objectExpression([
                j.objectProperty(j.identifier("id"), j.stringLiteral("orbit.wizard_progress")),
                j.objectProperty(
                  j.identifier("values"),
                  j.objectExpression([
                    j.objectProperty(j.identifier("number"), active.value.expression),
                    j.objectProperty(j.identifier("total"), total.value.expression),
                  ]),
                ),
              ]),
            ],
          ),
        ),
      ),
    ];
  });

  return root.toSource();
}

module.exports = translations;
