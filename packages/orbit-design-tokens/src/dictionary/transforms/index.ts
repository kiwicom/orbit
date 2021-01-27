import attributes from "./attributes";
import names from "./names";
import values from "./values";
import type { StyleDictionary } from "style-dictionary";

const transforms = {
  attributes,
  names,
  values,
};

const registerTransforms = (StyleDictionary: StyleDictionary): void => {
  Object.values(transforms).forEach(type => {
    Object.values(type).forEach(transform => {
      StyleDictionary.registerTransform(transform);
    });
  });
};

export default registerTransforms;
