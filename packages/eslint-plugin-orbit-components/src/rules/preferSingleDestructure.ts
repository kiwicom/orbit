import { TSESTree as t, AST_NODE_TYPES } from "@typescript-eslint/utils";

import ruleCreator from "../utils/ruleCreator";

const LIMIT = 1;

export const ERROR =
  "Using many arrow function expressions in a single styled component can negatively impact performance. Consider using one single function to destructure all props and return one single css helper function if possible.";

const preferSingleDestructure = ruleCreator({
  name: "prefer-single-destructure",
  meta: {
    type: "suggestion",
    deprecated: true,
    docs: {
      description:
        "Using too many arrow functions in interpolations can have a negative impact on performance, because they have to be evaluated with execution context. This is done internally by wrapping all functions into css helper from styled-components . In most cases it's far more better to use one single arrow function and then use nested conditions that returns css if necessary.",
    },
    messages: {
      error: ERROR,
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
          if (def.length > 0) {
            specifier = def[0].local.name;
          }
        }
      },

      TaggedTemplateExpression(node: t.TaggedTemplateExpression) {
        if (node.tag.type === AST_NODE_TYPES.MemberExpression) {
          if (
            node.tag.object.type === AST_NODE_TYPES.Identifier &&
            node.tag.object.name === specifier
          ) {
            if (node.quasi.type === AST_NODE_TYPES.TemplateLiteral) {
              const count = node.quasi.expressions.filter(
                e => e.type === AST_NODE_TYPES.ArrowFunctionExpression,
              ).length;
              if (count > LIMIT) {
                context.report({
                  node,
                  messageId: "error",
                });
              }
            }
          }
        }
      },
    };
  },
});

export default preferSingleDestructure;
