import Dic from "style-dictionary";

import jsFoundation from "./jsFoundation.js";
import jsTokens from "./jsTokens.js";
import xmlTokens from "./xmlTokens.js";
import jsonTokens from "./jsonTokens.js";
import cssTokens from "./cssTokens.js";

const formatters = {
  ...cssTokens,
  ...jsonTokens,
  ...jsFoundation,
  ...jsTokens,
  ...xmlTokens,
};

const registerFormatters = (Dictionary: typeof Dic) => {
  Object.values(formatters).forEach(formatter => {
    Dictionary.registerFormat(formatter);
  });
};

export default registerFormatters;
