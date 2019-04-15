// @flow
import type { GetProperty } from "./getProperty";

const getProperty: GetProperty = (property, { index, devices }, props) => {
  const viewport = props && props[devices[index]];
  if (viewport && viewport[property]) {
    /*    if (property === "gap" || property === "rowGap" || property === "columnGap") {
      /!*
        Any gap can value of "null" or "0" so we don't want to apply it
       *!/
      if (!gapExists(viewport[property])) {
        if (index !== 0) {
          return getProperty(property, { index: index - 1, devices }, props);
        }
      }
    } */
    return viewport[property];
  }
  if (index !== 0) {
    return getProperty(property, { index: index - 1, devices }, props);
  }
  return null;
};

export default getProperty;
