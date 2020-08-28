// @flow
import { rtlSpacing } from "../../../utils/rtl";
import { SIZE_OPTIONS, TOKENS } from "./consts";
import type { GetPadding } from "./getPadding";

const getSpacing: GetPadding = (onlyIcon, iconRight, iconLeft, size, theme) => {
  const wrappedRtl = value => rtlSpacing(value)({ theme });
  if (onlyIcon) return wrappedRtl(theme.orbit.paddingButtonWithoutText);
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
  if (iconLeft && iconRight) return wrappedRtl(tokens[TOKENS.paddingButtonWithIcons][size]);
  if (iconLeft && !iconRight) return wrappedRtl(tokens[TOKENS.paddingButtonWithLeftIcon][size]);
  if (!iconLeft && iconRight) return wrappedRtl(tokens[TOKENS.paddingButtonWithRightIcon][size]);
  return wrappedRtl(tokens[TOKENS.paddingButton][size]);
};

export default getSpacing;
