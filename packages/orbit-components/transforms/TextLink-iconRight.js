// @noflow
/* eslint-disable no-param-reassign */
function transformTextLinkIconRight(fileInfo, api) {
  const j = api.jscodeshift;
  return j(fileInfo.source)
    .find(j.JSXOpeningElement, { name: { name: "TextLink" } })
    .find(j.JSXAttribute, { name: { name: "icon" } })
    .forEach(path => {
      path.node.name.name = "iconRight";
    })
    .toSource();
}

module.exports = transformTextLinkIconRight;
