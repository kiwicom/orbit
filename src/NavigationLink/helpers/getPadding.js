// @flow
import TYPES from "../consts";
import { rtlSpacing } from "../../utils/rtl";

const getPadding = ({ type, theme }) => {
  if (type === TYPES.HORIZONTAL) {
    return rtlSpacing(`0 ${theme.orbit.spaceXSmall}`);
  }
  if (type === TYPES.VERTICAL) {
    return rtlSpacing(
      `${theme.orbit.spaceXXXSmall} ${theme.orbit.spaceXSmall} ${theme.orbit.spaceXXXSmall} ${
        theme.orbit.spaceXXLarge
      }`,
    );
  }
  return null;
};

export default getPadding;
