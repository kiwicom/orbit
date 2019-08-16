// @flow
import { RTL_POSITIONS } from "../consts";
import type { SwitchPreferredPosition } from "./switchPreferredPosition";

const switchPreferredPosition: SwitchPreferredPosition = ({ rtl }, preferredPosition) => {
  if (rtl) {
    if (preferredPosition === RTL_POSITIONS.LEFT) {
      return RTL_POSITIONS.RIGHT;
    }
    if (preferredPosition === RTL_POSITIONS.RIGHT) {
      return RTL_POSITIONS.LEFT;
    }
  }
  return preferredPosition;
};

export default switchPreferredPosition;
