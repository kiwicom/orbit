const { graphql } = require("gatsby");

const DefaultValue = {
  name: "DefaultValue",
  description: "DefaultValue",
  serialize(value) {
    return value;
  },
  parseValue(value) {
    return value;
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      case graphql.Kind.INT:
        return parseInt(ast.value, 10);
      case graphql.Kind.OBJECT:
      case graphql.Kind.LIST:
        return JSON.stringify(ast.value);
      default:
        return ast.value;
    }
  },
};

module.exports = {
  DefaultValue,
};
