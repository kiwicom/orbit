// @flow
import { SIZE_OPTIONS, TOKENS } from "./consts";
import { rtlSpacing } from "../../../utils/rtl";
import { getSize } from "../../../Icon";
import type { GetIconContainer } from "./getIconContainer";

const getIconSpacing = ({ theme, right, size, onlyIcon }) => {
  if (onlyIcon) {
    return null;
  }
  const tokens = {
    [TOKENS.marginRightIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.marginButtonIconLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.marginButtonIconNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.marginButtonIconSmall,
    },
  };
  if (right) {
    return rtlSpacing(`0 0 0 ${tokens[TOKENS.marginRightIcon][size]}`)({ theme });
  }
  return rtlSpacing(`0 ${tokens[TOKENS.marginRightIcon][size]} 0 0`)({ theme });
};

const getIconContainer: GetIconContainer = ({
  onlyIcon,
  theme,
  right,
  size,
  sizeIcon,
  iconForeground,
}) => {
  return {
    margin: getIconSpacing({ theme, right, size, onlyIcon }),
    height: getSize(sizeIcon)({ theme }),
    width: getSize(sizeIcon)({ theme }),
    ...iconForeground,
  };
};

export default getIconContainer;
