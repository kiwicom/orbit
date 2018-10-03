function convertHexToRgba(color, opacity) {
  var removeHash = color.replace("#", "");
  var hex = removeHash.length === 3 ? removeHash + removeHash : removeHash;
  var red = parseInt(hex.substring(0, 2), 16);
  var green = parseInt(hex.substring(2, 4), 16);
  var blue = parseInt(hex.substring(4, 6), 16);
  return "rgba(" + red + ", " + green + ", " + blue + ", " + opacity / 100 + ")";
}
module.exports = convertHexToRgba;
