import * as t from "@babel/types";
import { Rule } from "eslint";

export const RightOrLeftError =
  "Do not use theme.rtl as the test value of conditional expression. Consider importing either left or right function from @kiwicom/orbit-components. See more on https://orbit.kiwi/utilities/right-to-left-languages/.";

export const SpacingError =
  "Do not use theme.rtl as the test value of conditional expression. Consider importing rtlSpacing function from @kiwicom/orbit-components. See more on https://orbit.kiwi/utilities/right-to-left-languages/.";

const rtlUtils: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Prevents bad RTL patterns",
      category: "Possible Errors",
      recommended: true,
    },
  },

  // @ts-expect-error TODO
  create: (context: Rule.RuleContext) => {
    let specifier = "";

    return {
      ImportDeclaration(node: t.ImportDeclaration) {
        if (node.source.value === "styled-components") {
          const def = node.specifiers.filter(s => t.isImportDefaultSpecifier(s));
          specifier = def[0].local.name;
        }
      },

      TaggedTemplateExpression(node: t.TaggedTemplateExpression) {
        if (t.isMemberExpression(node.tag)) {
          if (t.isIdentifier(node.tag.object) && node.tag.object.name === specifier) {
            if (t.isTemplateLiteral(node.quasi)) {
              node.quasi.expressions.forEach(e => {
                if (t.isArrowFunctionExpression(e)) {
                  if (t.isConditionalExpression(e.body)) {
                    if (t.isMemberExpression(e.body.test) && t.isIdentifier(e.body.test.property)) {
                      if (e.body.test.property.name === "rtl") {
                        const { consequent } = e.body;
                        // if it's literal value of which matches patterns
                        // @ts-expect-error babel-types
                        if (t.isLiteral(consequent) && consequent.value) {
                          const regexWithProp = new RegExp(
                            /left|right|margin-left|margin-right|padding-left|padding-right/g,
                          );

                          // @ts-expect-error babel-types
                          if (consequent.value.match(regexWithProp)) {
                            context.report({
                              // @ts-expect-error TODO
                              node: consequent,
                              message: RightOrLeftError,
                            });
                          } else {
                            context.report({
                              // @ts-expect-error TODO
                              node: consequent,
                              message: SpacingError,
                            });
                          }
                        }

                        if (t.isTemplateLiteral(consequent)) {
                          context.report({
                            // @ts-expect-error TODO
                            node: consequent,
                            message: SpacingError,
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
};

export default rtlUtils;
