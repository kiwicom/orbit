import { warning } from "@adeira/js";
import tokensList from "@kiwicom/orbit-design-tokens/lib/docs-tokens.json";

import { TokenSchema } from "./typings";

const findTokenAttributes = (
  name: string,
): {
  type: string | null;
  value: string | null;
  schema: TokenSchema;
} => {
  const tokenValue = name in tokensList ? tokensList[name] : "";
  if (!tokenValue)
    return {
      value: null,
      type: null,
      schema: { namespace: null, object: null, variant: null, subVariant: null },
    };
  warning(!!tokenValue, "%s wasn't found in the tokens.", name);
  const {
    type,
    schema,
    javascript: { value },
  } = tokenValue;
  return { type, value, schema };
};

export default findTokenAttributes;
