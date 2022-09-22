// @noflow
/* eslint-disable no-param-reassign */
function palette(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  return root
    .find(j.Identifier)
    .forEach(path => {
      const { name } = path.node;
      if (name === "paletteInkLighter") path.node.name = "paletteInkLight";
      if (name === "paletteInkLight") path.node.name = "paletteInkNormal";
      if (name === "paletteInkNormal") path.node.name = "paletteInkDark";
      if (name === "paletteCloudDarker") path.node.name = "paletteCloudDark";

      if (name === "paletteInkLighterHover") path.node.name = "paletteInkLightHover";
      if (name === "paletteInkLighterActive") path.node.name = "paletteInkLightActive";
      if (name === "paletteInkNormalHover") path.node.name = "paletteInkDarkHover";
      if (name === "paletteInkNormalActive") path.node.name = "paletteInkDarkActive";
    })
    .toSource();
}

module.exports = palette;
