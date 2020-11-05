// @flow
const attributes = require("./attributes");
const names = require("./names");

const transforms = {
  attributes,
  names,
};

const registerTransforms = StyleDictionary => {
  Object.keys(transforms).forEach(type => {
    Object.keys(transforms[type]).forEach(transform => {
      StyleDictionary.registerTransform(transforms[type][transform]);
    });
  });
};

module.exports = registerTransforms;
