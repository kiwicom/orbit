// @flow
const _ = require("lodash");

const fileTemplate = require("./fileTemplate");
const withFlowComment = require("./withFlowComment");

const createCategoryObject = (category, values) => {
  let objString = "";
  const indent = "  ";

  objString += `export const ${category} = {`;

  const createVariable = (name, value) => `${indent}${indent}${name}: "${value}"`;

  const subCategorizedTokens = _.groupBy(values, token => token.attributes.name);

  Object.keys(subCategorizedTokens).forEach(color => {
    objString += `\n${indent}${color}: {\n`;
    const colorValues = subCategorizedTokens[color];
    objString += `${colorValues
      .map(({ attributes: { type, state }, value }) =>
        createVariable(_.camelCase([type, state].join(" ")), value),
      )
      .join(",\n")},\n`;
    objString += `${indent}},`;
  });
  objString += "\n};\n";
  return objString;
};

const javascriptFoundationFormatter = dictionary => {
  const groupedTokens = _.groupBy(dictionary.allProperties, token => token.attributes.category);

  const tokens = Object.entries(groupedTokens)
    .map(([category, values]) => {
      return createCategoryObject(category, values);
    })
    .join("\n");

  return [withFlowComment, fileTemplate, tokens].join("\n");
};

module.exports = {
  name: "js/foundation",
  formatter: javascriptFoundationFormatter,
};
