import * as t from "@babel/types";
import { Rule } from "eslint";

const LIMIT = 1;

export const ERROR =
  "Using many arrow function expressions in a single styled component can negatively impact performance. Consider using one single function to destructure all props and return one single css helper function if possible.";

const preferSingleDestructure: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Using too many arrow functions in interpolations can have a negative impact on performance, because they have to be evaluated with execution context. This is done internally by wrapping all functions into css helper from styled-components . In most cases it's far more better to use one single arrow function and then use nested conditions that returns css if necessary.",
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
          if (def.length > 0) {
            specifier = def[0].local.name;
          }
        }
      },

      TaggedTemplateExpression(node: t.TaggedTemplateExpression) {
        if (t.isMemberExpression(node.tag)) {
          if (t.isIdentifier(node.tag.object) && node.tag.object.name === specifier) {
            if (t.isTemplateLiteral(node.quasi)) {
              const count = node.quasi.expressions.filter(e => t.isArrowFunctionExpression(e))
                .length;
              if (count > LIMIT) {
                context.report({
                  // @ts-expect-error TODO
                  node,
                  message: ERROR,
                });
              }
            }
          }
        }
      },
    };
  },
};

export default preferSingleDestructure;
