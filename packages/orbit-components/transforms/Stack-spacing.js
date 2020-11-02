// @noflow
/* eslint-disable no-param-reassign */

const mediaQueries = ["mediumMobile", "largeMobile", "tablet", "desktop", "largeDesktop"];

const oldSpacings = [
  "none",
  "extraTight",
  "tight",
  "condensed",
  "compact",
  "natural",
  "comfy",
  "loose",
  "extraLoose",
];

const newSpacings = [
  "none",
  "XXXSmall",
  "XXSmall",
  "XSmall",
  "small",
  "medium",
  "large",
  "XLarge",
  "XXLarge",
];

const replaceValue = value => {
  if (newSpacings.findIndex(v => v === value) === -1) {
    return newSpacings[oldSpacings.findIndex(v => v === value)];
  }
  return value;
};

function transformStackSpacing(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  // basic usage on JSX element with string literal
  root
    .find(j.JSXOpeningElement, { name: { name: "Stack" } })
    .find(j.JSXAttribute, { name: { name: "spacing" } })
    .forEach(path => {
      path.node.value.value = replaceValue(path.node.value.value);
    });

  // usage in media queries with string literal
  mediaQueries.forEach(mq => {
    root
      .findJSXElements("Stack")
      .find(j.JSXAttribute, { name: { name: mq }, value: { type: "JSXExpressionContainer" } })
      .find(j.ObjectExpression)
      .find(j.Property, { key: { name: "spacing" } })
      .forEach(path => {
        path.node.value.value = replaceValue(path.node.value.value);
      });
  });

  // usage in conditional expression
  root
    .findJSXElements("Stack")
    .find(j.JSXAttribute, { name: { name: "spacing" } })
    .find(j.ConditionalExpression)
    .forEach(path => {
      path.node.consequent.value = replaceValue(path.node.consequent.value);
      path.node.alternate.value = replaceValue(path.node.alternate.value);
    });
  return root.toSource();
}

module.exports = transformStackSpacing;
