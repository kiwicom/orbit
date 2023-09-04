import { TSESTree as t, AST_NODE_TYPES } from "@typescript-eslint/utils";

import ruleCreator from "../utils/ruleCreator";

export const ERRORS = {
  variableDeclaration: "Do not use defaultTheme as value, use useTheme() hook or ThemeConsumer",
  styled:
    "Do not use defaultTheme directly inside styled components, either create defaultProps or consume the theme from with arrow function expression.",
  import: "Do not name defaultTheme import as theme, please rename it to defaultTheme/themeDefault",
  destructured: "Do not destructured defaultTheme, use useTheme() hook or ThemeConsumer",
};

const defaultThemeRule = ruleCreator({
  name: "default-theme",
  meta: {
    type: "problem",
    deprecated: true,
    docs: {
      description: "Rule helps to avoid bad patterns of defaultTheme usage",
    },
    messages: ERRORS,
    schema: [],
  },
  defaultOptions: [],

  create: context => {
    let specifier = "";

    return {
      ImportDeclaration(node: t.ImportDeclaration) {
        if (node.source.value === "@kiwicom/orbit-components/lib/defaultTheme") {
          node.specifiers.forEach(s => {
            if (s.type === AST_NODE_TYPES.ImportDefaultSpecifier) {
              if (s.local.name === "theme") {
                context.report({
                  node,
                  messageId: "import",
                });
              } else if (s.type === AST_NODE_TYPES.ImportDefaultSpecifier) {
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
          if (n.type === AST_NODE_TYPES.VariableDeclarator && n.init != null) {
            if (n.init.type === AST_NODE_TYPES.ObjectExpression) {
              n.init.properties.forEach(p => {
                if (p.type === AST_NODE_TYPES.Property && p.value != null) {
                  if (p.value.type === AST_NODE_TYPES.MemberExpression) {
                    if (
                      p.value.object.type === AST_NODE_TYPES.MemberExpression &&
                      p.value.object.object.type === AST_NODE_TYPES.Identifier
                    ) {
                      if (specifier === p.value.object.object.name) {
                        context.report({
                          node: p,
                          messageId: "variableDeclaration",
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

            if (
              n.init.type === AST_NODE_TYPES.MemberExpression &&
              n.id.type === AST_NODE_TYPES.ObjectPattern
            ) {
              if (n.init.object.type === AST_NODE_TYPES.Identifier) {
                if (specifier === n.init.object.name) {
                  context.report({
                    node,
                    messageId: "destructured",
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
          if (exp.type === AST_NODE_TYPES.MemberExpression) {
            if (
              exp.object.type === AST_NODE_TYPES.MemberExpression &&
              exp.object.object.type === AST_NODE_TYPES.Identifier
            ) {
              if (specifier === exp.object.object.name) {
                context.report({
                  node: exp,
                  messageId: "styled",
                });
              }
            }
          }
        });
      },
    };
  },
});

export default defaultThemeRule;
