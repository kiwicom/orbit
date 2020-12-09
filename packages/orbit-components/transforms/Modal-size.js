// @noflow
/* eslint-disable no-param-reassign */
function transformModalSizeProp(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  return root
    .find(j.JSXOpeningElement, { name: { name: "Modal" } })
    .find(j.JSXAttribute, { name: { name: "size" } })
    .forEach(path => {
      const { loc, type } = path.node.value;
      if (type === "StringLiteral" || type === j.Literal.name) {
        path.node.value.value = "extraLarge";
      } else {
        console.warn(
          "Unable to transform Modal size value because it's not a string literal, please verify whether large size is being used and use extraLarge instead.",
          `${fileInfo.path}:${loc.start.line}:${loc.start.column}`,
        );
      }
    })
    .toSource();
}

module.exports = transformModalSizeProp;
