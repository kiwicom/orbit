import tokensList from "@kiwicom/orbit-design-tokens/lib/docs-tokens.json";

import { TokenSchema } from "./typings";

const findTokenAttributes = (
  name: string,
): {
  type: string;
  value: string;
  schema: TokenSchema;
} => {
  const tokenValue = name in tokensList ? tokensList[name] : "";

  if (!tokenValue) {
    return {
      value: "",
      type: "",
      schema: { namespace: "", object: "", variant: "", subVariant: "" },
    };
  }

  const {
    type,
    schema,
    javascript: { value },
  } = tokenValue;

  return { type, value, schema };
};

export default findTokenAttributes;
