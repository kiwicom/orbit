// @flow

const errorValue = (name, value, type, toType) =>
  `Invalid value: '${name}: ${value}' is not a valid value for '${type}', cannot transform to '${toType}' \n`;

const errorTransform = (transform, neededTransform) =>
  `Can't use transform '${transform}', because transform '${neededTransform}' is not being used. Add it into the transformGroup settings. \n`;

module.exports = {
  errorValue,
  errorTransform,
};
