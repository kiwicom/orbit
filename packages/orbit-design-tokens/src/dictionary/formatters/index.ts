import type { StyleDictionary } from "style-dictionary";

import javascriptFoundation from "./javascript-foundation";
import javascriptTokens from "./javascript-tokens";
import xmlTokens from "./xml-tokens";
import jsonTokens from "./json-tokens";
import cssTokens from "./css-tokens";

const formatters = {
  ...javascriptFoundation,
  ...javascriptTokens,
  ...xmlTokens,
  ...jsonTokens,
  ...cssTokens,
};

const registerFormatters = (Dictionary: StyleDictionary): void => {
  Object.values(formatters).forEach(formatter => {
    Dictionary.registerFormat(formatter);
  });
};

export default registerFormatters;
