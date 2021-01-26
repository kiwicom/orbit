import javascriptFoundation from "./javascript-foundation";
import javascriptTokens from "./javascript-tokens";
import type { StyleDictionary } from "style-dictionary";

const formatters = {
  ...javascriptFoundation,
  ...javascriptTokens,
};

const registerFormatters = (StyleDictionary: StyleDictionary): void => {
  Object.values(formatters).forEach(formatter => {
    StyleDictionary.registerFormat(formatter);
  });
};

export default registerFormatters;
