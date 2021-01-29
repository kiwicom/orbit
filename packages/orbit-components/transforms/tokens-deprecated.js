// @noflow
/* eslint-disable no-param-reassign */
const deprecatedTokens = require("@kiwicom/orbit-design-tokens/lib/deprecated-tokens");

function transformDeprecatedTokens(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root
    .find(j.MemberExpression, {
      object: { object: { name: "theme" }, property: { name: "orbit" } },
    })
    .forEach(node => {
      if (node.value.property.name in deprecatedTokens) {
        node.value.property.name = deprecatedTokens[node.value.property.name];
      }
    });
  return root.toSource();
}

module.exports = transformDeprecatedTokens;
