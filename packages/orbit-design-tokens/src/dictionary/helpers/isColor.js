// @flow
const isColor = ({ type, attributes: { category } }) => type === "color" || category === "color";

module.exports = isColor;
