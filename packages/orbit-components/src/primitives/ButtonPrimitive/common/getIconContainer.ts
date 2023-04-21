import type * as React from "react";

import { SIZE_OPTIONS } from "./consts";
import { rtlSpacing } from "../../../utils/rtl";
import { getSize } from "../../../Icon";
import { ICON_SIZES } from "../../../Icon/consts";
import type { Size, IconForeground, IconProps } from "../types";
import type { Theme } from "../../../defaultTheme";

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

const getIconSpacing = (onlyIcon: boolean, theme: Theme) => {
  if (onlyIcon) return null;

  return {
    leftMargin: rtlSpacing(`0 ${theme.orbit.marginButtonIcon} 0 0`)({ theme }),
    rightMargin: rtlSpacing(`0 0 0 ${theme.orbit.marginButtonIcon}`)({ theme }),
  };
};

const getIconSize = (size: Size) => {
  if (size === SIZE_OPTIONS.SMALL) return ICON_SIZES.SMALL;
  if (size === SIZE_OPTIONS.LARGE) return ICON_SIZES.LARGE;
  return ICON_SIZES.MEDIUM;
};

const getIconContainer: getIconContainerType = ({
  iconLeft,
  children,
  theme,
  size = SIZE_OPTIONS.NORMAL,
  iconForeground,
}) => {
  const sizeIcon = getIconSize(size);
  const computedSize = getSize(sizeIcon)({ theme });
  const onlyIcon = Boolean(iconLeft && !children);
  return {
    icons: {
      height: computedSize,
      width: computedSize,
      ...getIconSpacing(onlyIcon, theme),
      ...iconForeground,
    },
  };
};

export default getIconContainer;
