// @flow
import TYPES from "../consts";
import type { GetBorderRadius } from "./getBorderRadius";

const getBorderRadius: GetBorderRadius = ({ type, selectable, theme }) => {
  if (type === TYPES.HORIZONTAL && !selectable) {
    return theme.orbit.borderRadiusNormal;
  }
  return null;
};

export default getBorderRadius;
