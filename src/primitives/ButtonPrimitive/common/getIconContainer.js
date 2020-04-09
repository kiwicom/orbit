// @flow
import { SIZE_OPTIONS, TOKENS } from "./consts";
import { rtlSpacing } from "../../../utils/rtl";
import { getSize } from "../../../Icon";

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

const getIconContainer = ({ onlyIcon, theme, right, size, sizeIcon }) => {
  return {
    spacing: getIconSpacing({ theme, right, size, onlyIcon }),
    foreground: null,
    foregroundHover: null,
    foregroundActive: null,
    height: getSize(sizeIcon)({ theme }),
    width: getSize(sizeIcon)({ theme }),
  };
};

export default getIconContainer;
