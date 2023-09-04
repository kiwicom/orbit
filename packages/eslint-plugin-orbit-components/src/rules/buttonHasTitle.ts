import { TSESTree as t, AST_NODE_TYPES } from "@typescript-eslint/utils";

import isOrbitComponent from "../utils/isOrbitComponent";
import detectOriginalOrbitName from "../utils/detectOriginalOrbitName";
import ruleCreator from "../utils/ruleCreator";

export default ruleCreator({
  name: "button-has-title",
  meta: {
    type: "suggestion",
    docs: {
      description: "Button should have title prop.",
    },
    messages: {
      error: `'{{ name }}' doesn't have children. Please provide title property to add aria-label, so it's accessible for screen readers.`,
    },
    deprecated: true,
    schema: [],
  },
  defaultOptions: [],

  create: context => {
    const importedOrbitComponents: Record<string, string | undefined> = {};
    const JSXElements: t.JSXElement[] = [];
    const variables: Record<string, (string | null)[]> = {};
    const Buttons = ["Button", "ButtonLink"];

    const registerImport = (node: t.ImportDeclaration, name: string) => {
      if (isOrbitComponent(name)) {
        const ORIGINAL_ORBIT_NAME = detectOriginalOrbitName(node);
        const LOCAL_NAME = node.specifiers[0].local.name;
        importedOrbitComponents[LOCAL_NAME] = ORIGINAL_ORBIT_NAME;
      }
    };

    return {
      JSXElement(node: t.JSXElement) {
        JSXElements.push(node);
      },

      VariableDeclaration(node: t.VariableDeclaration) {
        node.declarations.forEach(declaration => {
          if (declaration.init != null && declaration.init.type !== AST_NODE_TYPES.ObjectExpression)
            return undefined;
          if (declaration.id?.type !== AST_NODE_TYPES.Identifier) return undefined;

          if (declaration.init != null) {
            variables[declaration.id?.name] = declaration.init.properties.map(property => {
              if (property.type === AST_NODE_TYPES.Property && property.key.type === "Identifier") {
                return property.key.name;
              }

              return null;
            });
          }

          return null;
        });
      },

      ImportDeclaration: (node: t.ImportDeclaration) => {
        if (node.specifiers.length) {
          const name = node.source.value;
          registerImport(node, name);
        }
      },

      "Program:exit": () => {
        JSXElements.forEach(node => {
          if (
            node.openingElement.name &&
            node.openingElement.name.type === AST_NODE_TYPES.JSXIdentifier
          ) {
            const localName = node.openingElement.name.name;
            if (
              localName in importedOrbitComponents &&
              Buttons.find(x => x === importedOrbitComponents[localName])
            ) {
              /*
                We can safely return, because the JSXElement is not selfClosing - does have children.
                e.g. <Button>children</Button>
               */
              if (!node.openingElement.selfClosing) return;
              /*
                It's to possible to use rest spread to attach properties to components.
                Therefore, we need to check if `title` property is in the spreading object.
               */
              const spread =
                node.openingElement.attributes.filter(
                  n => n.type === AST_NODE_TYPES.JSXSpreadAttribute,
                ) || [];
              if (spread.length > 0) {
                /*
                  The object can be imported from different file/module,
                  therefore we skip empty object variable declarations
                 */
                if (Object.keys(variables).length === 0) return;

                spread.forEach(s => {
                  if (s.type !== AST_NODE_TYPES.JSXSpreadAttribute) return;
                  if (s.argument.type === "Identifier" && s.argument.name in variables) {
                    const { name } = s.argument;
                    /*
                    If the spreading variable name is in object declarations, we can check if "title"
                    is present, or report warning.
                   */
                    if (!(name in variables)) return;
                    if (variables[name].find(v => v === "title")) return;

                    context.report({
                      node,
                      messageId: "error",
                    });
                  }
                });

                /*
                  Last check for JSX attributes, if "title" is present
                 */
              } else if (
                !node.openingElement.attributes.find(
                  n => n.type === "JSXAttribute" && n.name.name === "title",
                )
              ) {
                context.report({
                  node,
                  messageId: "error",
                });
              }
            }
          }
        });
      },
    };
  },
});
