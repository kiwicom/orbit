// @flow
import * as React from "react";

import { SIZE_OPTIONS, TYPE_OPTIONS } from "./consts";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import getIconSize from "../primitives/ButtonPrimitive/common/getIconSize";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getCommonProps from "../primitives/ButtonPrimitive/common/getCommonProps";
import useTheme from "../hooks/useTheme";
import getButtonStyles from "./helpers/getButtonStyles";
import getButtonIconForeground from "./helpers/getButtonIconForeground";

import type { Props } from "./index";

const Button = React.forwardRef<Props, HTMLButtonElement>(
  (
    {
      asComponent = "button",
      children,
      size = SIZE_OPTIONS.NORMAL,
      type = TYPE_OPTIONS.PRIMARY,
      iconLeft,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const onlyIcon = Boolean(iconLeft && !children);
    const sizeIcon = getIconSize(size);
    const iconForeground = getButtonIconForeground({ type, theme, ...props });
    const commonProps = getCommonProps({ type, size, iconLeft, onlyIcon, theme, ...props });
    const buttonStyles = getButtonStyles({ size, type, theme, ...props });

    return (
      <ButtonPrimitive
        asComponent={asComponent}
        onlyIcon={onlyIcon}
        iconLeft={iconLeft}
        ref={ref}
        {...props}
        {...buttonStyles}
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

Button.displayName = "Button";

export default Button;
