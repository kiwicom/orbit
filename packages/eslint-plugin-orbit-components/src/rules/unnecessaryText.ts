import { AST_NODE_TYPES, TSESTree as t } from "@typescript-eslint/utils";

import ruleCreator from "../utils/ruleCreator";
import isOrbitComponent from "../utils/isOrbitComponent";
import detectOriginalOrbitName from "../utils/detectOriginalOrbitName";

export default ruleCreator({
  name: "unnecessary-text",
  meta: {
    type: "problem",
    docs: {
      description: "Prevents unnecessary wrapping of components to Text component",
    },
    messages: {
      error: `Don't wrap {{ name }}'s children to Text component. This wrapping in unnecessary and breaks visual style of {{ name }}'s typography.`,
    },
    schema: [],
  },
  defaultOptions: [],

  create: context => {
    const importedOrbitComponents: Record<string, string> = {};
    const JSXElements: t.JSXElement[] = [];

    const doNotUseTextIn = ["Button", "Heading"];

    const registerImport = (node: t.ImportDeclaration, name: string) => {
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
          registerImport(node, name);
        }
      },

      "Program:exit": () => {
        JSXElements.forEach(node => {
          if (node.openingElement.name.type === AST_NODE_TYPES.JSXIdentifier) {
            const localName = node.openingElement.name.name;
            if (
              localName in importedOrbitComponents &&
              doNotUseTextIn.find(x => x === importedOrbitComponents[localName]) &&
              node.children
            ) {
              node.children.forEach(child => {
                if (child.type === AST_NODE_TYPES.JSXElement) {
                  if (!child.openingElement) return;
                  if (child.openingElement.name.type === AST_NODE_TYPES.JSXIdentifier) {
                    const childElementName = child.openingElement.name.name;
                    if (importedOrbitComponents[childElementName] === "Text") {
                      context.report({
                        node: child,
                        messageId: "error",
                        data: {
                          name: localName,
                        },
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
});
