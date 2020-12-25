import isOrbitComponent from "../utils/isOrbitComponent";
import detectOriginalOrbitName from "../utils/detectOriginalOrbitName";

export default {
  create: context => {
    const importedOrbitComponents = [];
    const JSXElements = [];

    const doNotUseTextIn = ["Button", "Heading"];

    const registerImport = (ctx, node, name) => {
      if (isOrbitComponent(name)) {
        const ORIGINAL_ORBIT_NAME = detectOriginalOrbitName(node);
        const LOCAL_NAME = node.specifiers[0].local.name;
        importedOrbitComponents[LOCAL_NAME] = ORIGINAL_ORBIT_NAME;
      }
    };

    return {
      JSXElement(node) {
        JSXElements.push(node);
      },

      ImportDeclaration: node => {
        if (node.specifiers.length) {
          const name = node.source.value;
          registerImport(context, node, name);
        }
      },

      "Program:exit": () => {
        JSXElements.forEach(node => {
          const localName = node.openingElement.name.name;
          if (
            localName in importedOrbitComponents &&
            doNotUseTextIn.find(x => x === importedOrbitComponents[localName]) &&
            node.children
          ) {
            // eslint-disable-next-line array-callback-return
            node.children.map(child => {
              if (!child.openingElement) return;
              const childElementName = child.openingElement.name.name;
              if (importedOrbitComponents[childElementName] === "Text") {
                context.report({
                  node: child,
                  message:
                    `Don't wrap ${localName}'s children to Text component. ` +
                    `This wrapping in unnecessary and breaks visual style of ${localName}'s typography.`,
                });
              }
            });
          }
        });
      },
    };
  },
};
