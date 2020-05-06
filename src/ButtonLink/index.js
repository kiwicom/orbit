// @flow
import * as React from "react";

import { TYPES } from "./consts";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import useTheme from "../hooks/useTheme";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getButtonLinkStyles from "./helpers/getButtonLinkStyles";
import getButtonLinkIconForeground from "./helpers/getButtonLinkIconForeground";
import getCommonProps from "../primitives/ButtonPrimitive/common/getCommonProps";

import type { Props } from "./index";

const ButtonLink = React.forwardRef<Props, HTMLButtonElement>(
  ({ type = TYPES.PRIMARY, disabled = false, transparent = false, ...props }, ref) => {
    const theme = useTheme();
    const propsWithTheme = { theme, ...props };
    const { padding, ...commonProps } = getCommonProps(propsWithTheme);
    const buttonLinkStyles = getButtonLinkStyles({ type, theme, disabled, transparent });
    const icons = getIconContainer({
      ...propsWithTheme,
      iconForeground: getButtonLinkIconForeground({ type, theme }),
    });
    return (
      <ButtonPrimitive
        ref={ref}
        disabled={disabled}
        {...props}
        {...buttonLinkStyles}
        {...commonProps}
        {...icons}
        padding={transparent ? "0" : padding}
      />
    );
  },
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
