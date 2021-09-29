import * as t from "@babel/types";
import { Rule } from "eslint";

export const ERRORS = {
  variableDeclaration: "Do not use defaultTheme as value, use useTheme() hook or ThemeConsumer",
  styled:
    "Do not use defaultTheme directly inside styled components, either create defaultProps or consume the theme from with arrow function expression.",
  import: "Do not name defaultTheme import as theme, please rename it to defaultTheme/themeDefault",
  destructured: "Do not destructured defaultTheme, use useTheme() hook or ThemeConsumer",
};

const defaultThemeRule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Rule helps to avoid bad patterns of defaultTheme usage",
      category: "Possible errors",
      recommended: true,
    },
  },

  // @ts-expect-error todo
  create: (context: Rule.RuleContext) => {
    let specifier = "";

    return {
      ImportDeclaration(node: t.ImportDeclaration) {
        if (node.source.value === "@kiwicom/orbit-components/lib/defaultTheme") {
          node.specifiers.forEach(s => {
            if (t.isImportDefaultSpecifier(s)) {
              if (s.local.name === "theme") {
                context.report({
                  // @ts-expect-error TODO
                  node,
                  message: ERRORS.import,
                });
              } else if (t.isImportDefaultSpecifier(s)) {
                specifier = s.local.name;
              }
            }
          });
        }
      },

      /**
       * Prevents:
          const kek = {
            activeColor: "red",
            theme: defaultTheme.orbit.paletteBlueNormal,
          }
      */

      VariableDeclaration(node: t.VariableDeclaration) {
        node.declarations.forEach(n => {
          if (t.isVariableDeclarator(n)) {
            if (t.isObjectExpression(n.init)) {
              n.init.properties.forEach(p => {
                // @ts-expect-error @babel/eslint-parser uses "Property" instead of "ObjectProperty"
                if (t.isProperty(p) || p.type === "Property") {
                  if (t.isMemberExpression(p.value)) {
                    if (
                      t.isMemberExpression(p.value.object) &&
                      t.isIdentifier(p.value.object.object)
                    ) {
                      if (specifier === p.value.object.object.name) {
                        context.report({
                          // @ts-expect-error TODO
                          node: p,
                          message: ERRORS.variableDeclaration,
                        });
                      }
                    }
                  }
                }
              });
            }

            /**
              Prevents destructure of defaultTheme:
                const {
                  borderWidthCard,
                  borderStyleCard,
                  borderColorCard,
                  borderRadiusNormal,
                  spaceMedium,
                } = defaultTheme.orbit;
             */

            if (t.isMemberExpression(n.init) && t.isObjectPattern(n.id)) {
              if (t.isIdentifier(n.init.object)) {
                if (specifier === n.init.object.name) {
                  context.report({
                    // @ts-expect-error TODO
                    node,
                    message: ERRORS.destructured,
                  });
                }
              }
            }
          }
        });
      },

      /**
       * Prevents defaultTheme as literal inside styled component:
          const Wrapper = styled.div`
            background: ${defaultTheme.orbit.paletteWhite};
          `
       */

      TemplateLiteral(node: t.TemplateLiteral) {
        node.expressions.forEach(exp => {
          if (t.isMemberExpression(exp)) {
            if (t.isMemberExpression(exp.object) && t.isIdentifier(exp.object.object)) {
              if (specifier === exp.object.object.name) {
                context.report({
                  // @ts-expect-error TODO
                  node: exp,
                  message: ERRORS.styled,
                });
              }
            }
          }
        });
      },
    };
  },
};

export default defaultThemeRule;
