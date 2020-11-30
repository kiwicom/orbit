import { Property } from "style-dictionary";

import { resolveValue } from "./helpers";
import formatCode from "../utils/format";
import generatedWarning from "./comments/generatedWarning";

const cssTokens = {
  name: "css/tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    const props = allProperties.map(prop => {
      const { name } = prop;
      const value = resolveValue(prop, "scss");
      return `$${name}: ${value};`;
    });
    return formatCode([generatedWarning, props.join("\n")], "css");
  },
};

export default { cssTokens };
