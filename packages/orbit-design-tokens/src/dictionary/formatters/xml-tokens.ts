import xml from "xml";
import _ from "lodash";
import { Property } from "style-dictionary";

import { isSpacing } from "../utils/is";
import { flattenSpacing } from "../utils/string";

const getSpacingValue = (name, spacing) => {
  return flattenSpacing(name, spacing).join(" ");
};

const getTokenValue = prop => {
  if (isSpacing(prop)) {
    const {
      attributes: { spacing },
      name,
    } = prop;
    return getSpacingValue(name, spacing);
  }
  return prop.value;
};

const xmlFactory = properties => {
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

const xmlTokens = {
  name: "xml/tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string =>
    xmlFactory(allProperties),
};

export default { xmlTokens };
