// @flow
import type { GetProperty } from "./getProperty";

const getProperty: GetProperty = (property, { index, devices }, props) => {
  const viewport = props && props[devices[index]];
  if (viewport && viewport[property]) {
    return viewport[property];
  } else if (index !== 0) {
    return getProperty(property, { index: index - 1, devices }, props);
  }
  return null;
};

export default getProperty;
