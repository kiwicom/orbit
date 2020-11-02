// @noflow
/* eslint-disable no-param-reassign */
function transformStackSpacings(fileInfo, api) {
  const j = api.jscodeshift;
  return j(fileInfo.source)
    .find(j.JSXOpeningElement, { name: { name: "Stack" } })
    .find(j.JSXAttribute, { name: { name: "icon" } })
    .forEach(path => {
      path.node.name.name = "iconRight";
    })
    .toSource();
}

module.exports = transformStackSpacings;
