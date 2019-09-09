// @flow
import { TOKENS } from "../consts";
import { SIZE_OPTIONS } from "../../Button/consts";
import { rtlSpacing } from "../../utils/rtl";
import type { GetButtonLinkSpacing } from "./getButtonLinkSpacing";

const getButtonLinkSpacing: GetButtonLinkSpacing = () => ({
  theme,
  onlyIcon,
  iconRight,
  iconLeft,
  size,
}) => {
  if (onlyIcon) return rtlSpacing(theme.orbit.paddingButtonWithoutText)({ theme });
  const tokens = {
    [TOKENS.paddingButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmall,
    },
    [TOKENS.paddingButtonWithIcons]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLargeWithIcons,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormalWithIcons,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmallWithIcons,
    },
    [TOKENS.paddingButtonWithLeftIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLargeWithLeftIcon,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormalWithLeftIcon,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmallWithLeftIcon,
    },
    [TOKENS.paddingButtonWithRightIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLargeWithRightIcon,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormalWithRightIcon,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmallWithRightIcon,
    },
  };
  if (iconLeft && iconRight) {
    return rtlSpacing(tokens[TOKENS.paddingButtonWithIcons][size])({ theme });
  }
  if (iconLeft && !iconRight) {
    return rtlSpacing(tokens[TOKENS.paddingButtonWithLeftIcon][size])({ theme });
  }
  if (!iconLeft && iconRight) {
    return rtlSpacing(tokens[TOKENS.paddingButtonWithRightIcon][size])({ theme });
  }
  return rtlSpacing(tokens[TOKENS.paddingButton][size])({ theme });
};

export default getButtonLinkSpacing;
