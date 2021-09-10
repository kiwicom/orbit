// @noflow
/* eslint-disable no-param-reassign */
function transformInkLighterToken(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  return root
    .find(j.Identifier, { name: "paletteInkLighter" })
    .forEach(path => {
      path.node.name = "paletteCloudDarker";
    })
    .toSource();
}

module.exports = transformInkLighterToken;
