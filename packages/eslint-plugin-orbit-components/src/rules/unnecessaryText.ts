import * as t from "@babel/types";
import { Rule } from "eslint";

import isOrbitComponent from "../utils/isOrbitComponent";
import detectOriginalOrbitName from "../utils/detectOriginalOrbitName";

export default {
  create: (context: Rule.RuleContext) => {
    const importedOrbitComponents: Record<string, string> = {};
    const JSXElements: t.JSXElement[] = [];

    const doNotUseTextIn = ["Button", "Heading"];

    const registerImport = (ctx: Rule.RuleContext, node: t.ImportDeclaration, name: string) => {
      if (isOrbitComponent(name)) {
        const ORIGINAL_ORBIT_NAME = detectOriginalOrbitName(node);
        const LOCAL_NAME = node.specifiers[0].local.name;
        if (ORIGINAL_ORBIT_NAME) {
          importedOrbitComponents[LOCAL_NAME] = ORIGINAL_ORBIT_NAME;
        }
      }
    };

    return {
      JSXElement(node: t.JSXElement) {
        JSXElements.push(node);
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
              doNotUseTextIn.find(x => x === importedOrbitComponents[localName]) &&
              node.children
            ) {
              node.children.forEach(child => {
                if (t.isJSXElement(child)) {
                  if (!child.openingElement) return;
                  if (t.isJSXIdentifier(child.openingElement.name)) {
                    const childElementName = child.openingElement.name.name;
                    if (importedOrbitComponents[childElementName] === "Text") {
                      context.report({
                        // @ts-expect-error TODO
                        node: child,
                        message:
                          `Don't wrap ${localName}'s children to Text component. ` +
                          `This wrapping in unnecessary and breaks visual style of ${localName}'s typography.`,
                      });
                    }
                  }
                }
              });
            }
          }
        });
      },
    };
  },
};
