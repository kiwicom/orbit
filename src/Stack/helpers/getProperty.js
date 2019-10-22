// @flow
import type { GetDirectionProperty, GetSpacingProperty } from "./getProperty";

export const getDirectionProperty: GetDirectionProperty = ({ index, devices }, props) => {
  const viewport = props && props[devices[index]];
  if (viewport && viewport.direction) {
    return viewport.direction;
  }
  if (index !== 0) {
    return getDirectionProperty({ index: index - 1, devices }, props);
  }
  return null;
};

export const getSpacingProperty: GetSpacingProperty = ({ index, devices }, props) => {
  const viewport = props && props[devices[index]];
  if (viewport && viewport.spacing) {
    return viewport.spacing;
  }
  if (index !== 0) {
    return getSpacingProperty({ index: index - 1, devices }, props);
  }
  return null;
};
