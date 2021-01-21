import isOrbitComponent from "../utils/isOrbitComponent";
import detectOriginalOrbitName from "../utils/detectOriginalOrbitName";
import { Rule } from "eslint";
import * as t from "@babel/types";

export default {
  create: (context: Rule.RuleContext) => {
    const importedOrbitComponents: Record<string, string | undefined> = {};
    const JSXElements: t.JSXElement[] = [];
    const variables: Record<string, (string | null)[]> = {};
    const Buttons = ["Button", "ButtonLink"];

    const registerImport = (ctx: Rule.RuleContext, node: t.ImportDeclaration, name: string) => {
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
          if (t.isObjectExpression(declaration.init)) {
            if (declaration.init.properties.length > 0) {
              if (t.isIdentifier(declaration.id)) {
                variables[declaration.id.name] = declaration.init.properties.map(property => {
                  if (t.isProperty(property) && t.isIdentifier(property.key)) {
                    return property.key.name;
                  }
                  return null;
                });
              }
            }
          }
        });
      },

      ImportDeclaration: (node: t.ImportDeclaration) => {
        if (node.specifiers.length) {
          const name = node.source.value;
          registerImport(context, node, name);
        }
      },

      "Program:exit": () => {
        JSXElements.forEach(node => {
          if (t.isJSXIdentifier(node.openingElement.name)) {
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
                node.openingElement.attributes.filter(n => n.type === "JSXSpreadAttribute") || [];
              if (spread.length > 0) {
                /*
                The object can be imported from different file/module,
                therefore we skip empty object variable declarations
               */
                if (Object.keys(variables).length === 0) return;

                spread.forEach(s => {
                  if (t.isJSXSpreadAttribute(s) && t.isIdentifier(s.argument)) {
                    const { name } = s.argument;
                    /*
                  If the spreading variable name is in object declarations, we can check if "title"
                  is present, or report warning.
                 */
                    if (!(name in variables)) return;
                    if (variables[name].find(v => v === "title")) return;

                    context.report({
                      // @ts-expect-error TODO
                      node,
                      message: `${localName} doesn't have children. Please provide title property to add aria-label, so it's accessible for screen readers.`,
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
                  // @ts-expect-error TODO
                  node,
                  message: `${localName} doesn't have children. Please provide title property to add aria-label, so it's accessible for screen readers.`,
                });
              }
            }
          }
        });
      },
    };
  },
};
