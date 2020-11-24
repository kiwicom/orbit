// @flow

const throwError = message => {
  throw new Error(message);
};

const throwErrorValue = (name, value, type, toType) => {
  return throwError(
    `Invalid value: '${name}: ${value}' is not a valid value for '${type}', cannot transform to '${toType}' \n`,
  );
};

const throwErrorTransform = (transform, neededTransform) => {
  return throwError(
    `Can't use transform '${transform}', because transform '${neededTransform}' is not being used. Add it into the transformGroup settings. \n`,
  );
};

module.exports = {
  throwErrorValue,
  throwError,
  throwErrorTransform,
};
