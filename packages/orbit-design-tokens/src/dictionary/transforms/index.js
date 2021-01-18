// @flow
const attributes = require("./attributes");
const names = require("./names");
const values = require("./values");

const transforms = {
  attributes,
  names,
  values,
};

const registerTransforms = StyleDictionary => {
  Object.values(transforms).forEach(type => {
    Object.values(type).forEach(transform => {
      StyleDictionary.registerTransform(transform);
    });
  });
};

module.exports = registerTransforms;
