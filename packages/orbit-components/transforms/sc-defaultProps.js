// @noflow
/* eslint-disable no-param-reassign */

const SUPPRESS_COMMENT =
  " $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198";

export default function transformStyledComponentsDefaultProps(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  function isDefaultPropsOfStyledComponent(path) {
    return (
      path.node.expression.left &&
      path.node.expression.left.property &&
      path.node.expression.left.property.name === "defaultProps" &&
      root
        .find(j.VariableDeclaration)
        .filter(decl => {
          return decl.node.declarations.some(
            d =>
              d.id.name === path.node.expression.left.object.name &&
              d.init.tag &&
              ((d.init.tag.object && d.init.tag.object.name === "styled") ||
                (d.init.tag.callee &&
                  ((d.init.tag.callee.name && d.init.tag.callee.name === "styled") ||
                    (d.init.tag.callee.object &&
                      d.init.tag.callee.object.callee &&
                      d.init.tag.callee.object.callee.name === "styled")))),
          );
        })
        .size() > 0
    );
  }

  return root
    .find(j.ExpressionStatement)
    .filter(isDefaultPropsOfStyledComponent)
    .forEach(path => {
      path.node.comments = path.node.comments || [];
      if (!path.node.comments.some(comment => comment.value === SUPPRESS_COMMENT)) {
        path.node.comments.push(j.commentLine(SUPPRESS_COMMENT));
      }
    })
    .toSource();
}

export const parser = "flow";
