// @flow
import * as React from "react";

import ButtonPrimitive from "../primitives/ButtonPrimitive";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getCommonProps from "../primitives/ButtonPrimitive/common/getCommonProps";
import useTheme from "../hooks/useTheme";
import getSocialButtonStyles from "./helpers/getSocialButtonStyles";
import getSocialButtonIconForeground from "./helpers/getSocialButtonIconForeground";
import getSocialButtonIcon from "./helpers/getSocialButtonIcon";
import { TYPE_OPTIONS } from "./consts";

import type { Props } from "./index";

const SocialButton = React.forwardRef<Props, HTMLButtonElement>(
  ({ type = TYPE_OPTIONS.APPLE, disabled = false, ...props }, ref) => {
    const theme = useTheme();
    const propsWithTheme = { theme, ...props };
    const commonProps = getCommonProps(propsWithTheme);
    const buttonStyles = getSocialButtonStyles({ type, disabled, theme });
    const icons = getIconContainer({
      ...propsWithTheme,
      iconForeground: getSocialButtonIconForeground({ type, theme }),
    });
    const iconLeft = getSocialButtonIcon(type);
    return (
      <ButtonPrimitive
        ref={ref}
        {...props}
        {...buttonStyles}
        {...commonProps}
        {...icons}
        disabled={disabled}
        iconLeft={iconLeft}
        iconRight={null}
        circled={false}
      />
    );
  },
);

SocialButton.displayName = "SocialButton";

export default SocialButton;
