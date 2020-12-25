import isOrbitComponent from "../utils/isOrbitComponent";
import detectOriginalOrbitName from "../utils/detectOriginalOrbitName";

export default {
  create: context => {
    console.log("ctx", context);
    const importedOrbitComponents = {};
    const JSXElements = [];
    const variables = {};
    const Buttons = ["Button", "ButtonLink"];

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

      VariableDeclaration(node) {
        node.declarations.forEach(declaration => {
          if (declaration.init && declaration.init.type === "ObjectExpression") {
            if (declaration.init.properties.length > 0) {
              variables[declaration.id.name] = declaration.init.properties.map(property => {
                if (property.key && property.key.name) {
                  return property.key.name;
                }
                return null;
              });
            }
          }
        });
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
                const { name } = s.argument;
                /*
                  If the spreading variable name is in object declarations, we can check if "title"
                  is present, or report warning.
                 */
                if (!(name in variables)) return;
                if (variables[name].find(v => v === "title")) return;
                context.report({
                  node,
                  message: `${localName} doesn't have children. Please provide title property to add aria-label, so it's accessible for screen readers.`,
                });
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
                message: `${localName} doesn't have children. Please provide title property to add aria-label, so it's accessible for screen readers.`,
              });
            }
          }
        });
      },
    };
  },
};
