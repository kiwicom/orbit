// @flow
import * as React from "react";

import { TYPE_OPTIONS } from "./consts";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getCommonProps from "../primitives/ButtonPrimitive/common/getCommonProps";
import useTheme from "../hooks/useTheme";
import getButtonStyles from "./helpers/getButtonStyles";
import getButtonIconForeground from "./helpers/getButtonIconForeground";

import type { Props } from "./index";

const Button = React.forwardRef<Props, HTMLButtonElement>(
  ({ type = TYPE_OPTIONS.PRIMARY, bordered = false, disabled = false, ...props }, ref) => {
    const theme = useTheme();
    const propsWithTheme = { theme, ...props };
    const commonProps = getCommonProps(propsWithTheme);
    const buttonStyles = getButtonStyles({ type, theme, bordered, disabled });
    const icons = getIconContainer({
      ...propsWithTheme,
      iconForeground: getButtonIconForeground({ bordered, type, theme }),
    });
    return (
      <ButtonPrimitive
        ref={ref}
        disabled={disabled}
        {...props}
        {...buttonStyles}
        {...commonProps}
        {...icons}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
