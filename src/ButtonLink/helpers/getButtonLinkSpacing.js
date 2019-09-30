// @flow
import { TOKENS, SIZES } from "../consts";
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
      [SIZES.LARGE]: theme.orbit.paddingButtonLarge,
      [SIZES.NORMAL]: theme.orbit.paddingButtonNormal,
      [SIZES.SMALL]: theme.orbit.paddingButtonSmall,
    },
    [TOKENS.paddingButtonWithIcons]: {
      [SIZES.LARGE]: theme.orbit.paddingButtonLargeWithIcons,
      [SIZES.NORMAL]: theme.orbit.paddingButtonNormalWithIcons,
      [SIZES.SMALL]: theme.orbit.paddingButtonSmallWithIcons,
    },
    [TOKENS.paddingButtonWithLeftIcon]: {
      [SIZES.LARGE]: theme.orbit.paddingButtonLargeWithLeftIcon,
      [SIZES.NORMAL]: theme.orbit.paddingButtonNormalWithLeftIcon,
      [SIZES.SMALL]: theme.orbit.paddingButtonSmallWithLeftIcon,
    },
    [TOKENS.paddingButtonWithRightIcon]: {
      [SIZES.LARGE]: theme.orbit.paddingButtonLargeWithRightIcon,
      [SIZES.NORMAL]: theme.orbit.paddingButtonNormalWithRightIcon,
      [SIZES.SMALL]: theme.orbit.paddingButtonSmallWithRightIcon,
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
