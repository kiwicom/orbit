import type { Format } from "style-dictionary";

import { resolveValue } from "./helpers.js";
import formatCode from "../utils/format.js";
import { warning } from "./comments.js";

const cssTokens: Format = {
  name: "css/tokens",
  formatter: ({ dictionary }) => {
    const props = dictionary.allProperties.map(prop => {
      const { name } = prop;
      const value = resolveValue(prop, "scss");
      return `$${name}: ${value};`;
    });

    return formatCode([warning, props.join("\n")], "css");
  },
};

export default { cssTokens };
