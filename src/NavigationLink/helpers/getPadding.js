// @flow
import TYPES from "../consts";
import { rtlSpacing } from "../../utils/rtl";
import type { GetPadding } from "./getPadding";

const getPadding: GetPadding = ({ type, theme }) => {
  if (type === TYPES.HORIZONTAL) {
    return rtlSpacing(`0 ${theme.orbit.spaceXSmall}`)({ theme });
  }
  if (type === TYPES.VERTICAL) {
    return rtlSpacing(`0 0 0 ${theme.orbit.spaceXXLarge}`)({ theme });
  }
  return null;
};

export default getPadding;
