import * as React from "react";

import { SIZE_OPTIONS, TOKENS } from "./consts";
import { rtlSpacing } from "../../../utils/rtl";
import { getSize } from "../../../Icon";
import { ICON_SIZES } from "../../../Icon/consts";
import { Size, IconForeground, IconProps } from "../types";
import { Theme } from "../../../defaultTheme";

type getIconContainerType = ({
  iconLeft,
  children,
  theme,
  size,
  iconForeground,
}: {
  iconLeft?: React.ReactNode;
  children?: React.ReactNode;
  theme: Theme;
  size?: Size;
  iconForeground: IconForeground;
}) => { icons: IconProps };

const getIconSpacing = (onlyIcon: boolean, size: Size, theme: Theme) => {
  if (onlyIcon) return null;

  const tokens = {
    [TOKENS.marginRightIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.marginButtonIconLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.marginButtonIconNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.marginButtonIconSmall,
    },
  };

  return {
    leftMargin: rtlSpacing(`0 ${tokens[TOKENS.marginRightIcon][size]} 0 0`)({ theme }),
    rightMargin: rtlSpacing(`0 0 0 ${tokens[TOKENS.marginRightIcon][size]}`)({ theme }),
  };
};

const getIconContainer: getIconContainerType = ({
  iconLeft,
  children,
  theme,
  size = SIZE_OPTIONS.NORMAL,
  iconForeground,
}) => {
  const onlyIcon = Boolean(iconLeft && !children);
  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;
  const computedSize = getSize(sizeIcon)({ theme });
  return {
    icons: {
      height: computedSize,
      width: computedSize,
      ...getIconSpacing(onlyIcon, size, theme),
      ...iconForeground,
    },
  };
};

export default getIconContainer;
