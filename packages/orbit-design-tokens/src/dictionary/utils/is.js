// @flow
const isBase = ({ path }) => path && path[0] === "global";

const isColor = ({ type, attributes: { category } }) => type === "color" || category === "color";

const isSpacing = ({ type, attributes: { category } }) =>
  type === "spacing" || category === "spacing";

const isInternal = ({ internal }) => !!internal;

const isNotInternal = token => !isInternal(token);

module.exports = {
  isBase,
  isColor,
  isSpacing,
  isInternal,
  isNotInternal,
};
