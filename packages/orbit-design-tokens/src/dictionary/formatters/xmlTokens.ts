import xml from "xml";
import _ from "lodash";
import type { Format, DesignToken, Dictionary } from "style-dictionary";

import { isSpacing } from "../utils/is.js";
import { flattenSpacing } from "../utils/string.js";

const getSpacingValue = (name: string, spacing: Record<string, DesignToken>) => {
  return flattenSpacing(name, spacing).join(" ");
};

const getTokenValue = (prop: DesignToken) => {
  if (isSpacing(prop)) {
    const {
      attributes: { spacing },
      name,
    } = prop;
    return getSpacingValue(name, spacing);
  }
  return prop.value;
};

const xmlFactory = (properties: Dictionary["allProperties"]) => {
  const designTokens = _.map(properties, prop => {
    const value = getTokenValue(prop);
    const { name } = prop;
    return {
      token: [{ name }, { value }],
    };
  });
  return xml(
    { designTokens },
    {
      indent: "  ",
    },
  );
};

const xmlTokens: Format = {
  name: "xml/tokens",
  formatter: ({ dictionary }): string => xmlFactory(dictionary.allProperties),
};

export default { xmlTokens };
