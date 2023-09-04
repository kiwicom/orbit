import { AST_NODE_TYPES, TSESTree as t } from "@typescript-eslint/utils";

import ruleCreator from "../utils/ruleCreator";

export const RightOrLeftError =
  "Do not use theme.rtl as the test value of conditional expression. Consider importing either left or right function from @kiwicom/orbit-components. See more on https://orbit.kiwi/utilities/right-to-left-languages/.";

export const SpacingError =
  "Do not use theme.rtl as the test value of conditional expression. Consider importing rtlSpacing function from @kiwicom/orbit-components. See more on https://orbit.kiwi/utilities/right-to-left-languages/.";

const rtlUtils = ruleCreator({
  name: "rtl-utils",
  meta: {
    type: "problem",
    deprecated: true,
    docs: {
      description: "Prevents bad RTL patterns",
    },
    messages: {
      RightOrLeftError,
      SpacingError,
    },
    schema: [],
  },
  defaultOptions: [],

  create: context => {
    let specifier = "";

    return {
      ImportDeclaration(node: t.ImportDeclaration) {
        if (node.source.value === "styled-components") {
          const def = node.specifiers.filter(s => s.type === AST_NODE_TYPES.ImportDefaultSpecifier);
          specifier = def[0].local.name;
        }
      },

      TaggedTemplateExpression(node: t.TaggedTemplateExpression) {
        if (node.tag.type === AST_NODE_TYPES.MemberExpression) {
          if (
            node.tag.object.type === AST_NODE_TYPES.Identifier &&
            node.tag.object.name === specifier
          ) {
            if (node.quasi.type === AST_NODE_TYPES.TemplateLiteral) {
              node.quasi.expressions.forEach(e => {
                if (e.type === AST_NODE_TYPES.ArrowFunctionExpression) {
                  if (e.body.type === AST_NODE_TYPES.ConditionalExpression) {
                    if (
                      e.body.test.type === AST_NODE_TYPES.MemberExpression &&
                      e.body.test.property.type === AST_NODE_TYPES.Identifier
                    ) {
                      if (e.body.test.property.name === "rtl") {
                        const { consequent } = e.body;
                        // if it's literal value of which matches patterns
                        if (consequent.type === AST_NODE_TYPES.Literal && consequent.value) {
                          const regexWithProp =
                            /left|right|margin-left|margin-right|padding-left|padding-right/g;
                          if (String(consequent.value).match(regexWithProp)) {
                            context.report({
                              node: consequent,
                              messageId: "RightOrLeftError",
                            });
                          } else {
                            context.report({
                              node: consequent,
                              messageId: "SpacingError",
                            });
                          }
                        }

                        if (consequent.type === AST_NODE_TYPES.TemplateLiteral) {
                          context.report({
                            node: consequent,
                            messageId: "SpacingError",
                          });
                        }
                      }
                    }
                  }
                }
              });
            }
          }
        }
      },
    };
  },
});

export default rtlUtils;
