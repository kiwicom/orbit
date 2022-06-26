import { graphql } from "gatsby";

const DefaultValue = {
  name: "DefaultValue",
  description: "DefaultValue primitives",
  serialize(value) {
    if (typeof value !== "string" && typeof value !== "boolean" && typeof value !== "number") {
      throw new Error("Value must be either a String, Boolean or Number");
    }

    return value;
  },
  parseValue(value) {
    if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean") {
      throw new Error("Value must be either a String, Boolean or Number");
    }

    return value;
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      // @ts-expect-error TODO
      case graphql.Kind.INT:
        return parseInt(ast.value, 10);
      // @ts-expect-error TODO
      case graphql.Kind.STRING:
        return ast.value;
      // @ts-expect-error TODO
      case graphql.Kind.BOOLEAN:
        return ast.value;
      default:
        throw new Error("Value must be either a String, Int or Boolean");
    }
  },
};

export default DefaultValue;
