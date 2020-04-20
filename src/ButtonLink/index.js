// @flow
import * as React from "react";

import { TYPES } from "./consts";
import { SIZE_OPTIONS } from "../primitives/ButtonPrimitive/common/consts";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import getIconSize from "../primitives/ButtonPrimitive/common/getIconSize";
import useTheme from "../hooks/useTheme";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getButtonLinkStyles from "./helpers/getButtonLinkStyles";
import getButtonLinkIconForeground from "./helpers/getButtonLinkIconForeground";
import getCommonProps from "../primitives/ButtonPrimitive/common/getCommonProps";

import type { Props } from "./index";

const ButtonLink = React.forwardRef<Props, HTMLButtonElement>(
  (
    {
      children,
      asComponent = "button",
      size = SIZE_OPTIONS.NORMAL,
      type = TYPES.PRIMARY,
      iconLeft,
      disabled,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const onlyIcon = Boolean(iconLeft && !children);
    const sizeIcon = getIconSize(size);

    const iconForeground = getButtonLinkIconForeground({ type, theme });
    const buttonLinkStyles = getButtonLinkStyles({ type, disabled, theme, ...props });
    const commonProps = getCommonProps({ type, size, iconLeft, onlyIcon, theme, ...props });
    return (
      <ButtonPrimitive
        asComponent={asComponent}
        onlyIcon={onlyIcon}
        iconLeft={iconLeft}
        ref={ref}
        {...props}
        {...buttonLinkStyles}
        {...commonProps}
        leftIconContainer={getIconContainer({
          onlyIcon,
          theme,
          size,
          sizeIcon,
          type,
          iconForeground,
        })}
        rightIconContainer={getIconContainer({
          onlyIcon,
          theme,
          size,
          sizeIcon,
          right: true,
          iconForeground,
        })}
      >
        {children}
      </ButtonPrimitive>
    );
  },
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
