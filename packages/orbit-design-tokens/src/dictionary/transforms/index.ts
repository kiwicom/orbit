import SD from "style-dictionary";

import * as attributes from "./attributes.js";
import * as names from "./names.js";
import * as values from "./values.js";

const transforms = {
  attributes,
  names,
  values,
};

const registerTransforms = (Dictionary: typeof SD): void => {
  Object.values(transforms).forEach(type => {
    Object.values(type).forEach(transform => {
      Dictionary.registerTransform(transform);
    });
  });
};

export default registerTransforms;
