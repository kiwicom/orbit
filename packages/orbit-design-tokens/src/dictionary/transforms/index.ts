import type { StyleDictionary } from "style-dictionary";

import * as attributes from "./attributes";
import * as names from "./names";
import * as values from "./values";

const transforms = {
  attributes,
  names,
  values,
};

const registerTransforms = (Dictionary: StyleDictionary): void => {
  Object.values(transforms).forEach(type => {
    Object.values(type).forEach(transform => {
      Dictionary.registerTransform(transform);
    });
  });
};

export default registerTransforms;
