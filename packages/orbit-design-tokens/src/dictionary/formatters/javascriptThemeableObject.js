// @flow
const _ = require("lodash");

const fileTemplate = require("./fileTemplate");
const withFlowComment = require("./withFlowComment");

const fnTemplate = tokens => {
  return `export default function createTheme(theme) {\n  return {\n${tokens}\n  };\n}\n`;
};
const indent = "  ";
const createVariable = (name, value) => `${indent}${indent}${name}: ${value},`;

const javascriptThemeableObjectFormatter = dictionary => {
  const createValue = value => {
    if (typeof value === "object") {
      const { type, attributes } = value;
      if (type === "color") {
        return `${[
          attributes.foundation,
          attributes.category,
          attributes.name,
          _.camelCase([attributes.type, attributes.state].join(" ")),
        ].join(".")}`;
      }
      return null;
    }
    return value;
  };

  const tokens = dictionary.allProperties
    .map(({ name, value }) => {
      return createVariable(name, createValue(value));
    })
    .join("\n");

  return [withFlowComment, fileTemplate, fnTemplate(tokens)].join("\n");
};

module.exports = {
  name: "js/tokens",
  formatter: javascriptThemeableObjectFormatter,
};
