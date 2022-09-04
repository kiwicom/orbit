import * as React from "react";

import ButtonPrimitive from "../primitives/ButtonPrimitive";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getCommonProps from "../primitives/ButtonPrimitive/common/getCommonProps";
import ChevronRightIcon from "../icons/ChevronRight";
import useTheme from "../hooks/useTheme";
import getSocialButtonStyles from "./helpers/getSocialButtonStyles";
import getSocialButtonIconForeground from "./helpers/getSocialButtonIconForeground";
import getSocialButtonIcon from "./helpers/getSocialButtonIcon";
import { TYPE_OPTIONS } from "./consts";
import { Props } from "./index.d";

const SocialButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ type = TYPE_OPTIONS.APPLE, disabled = false, size, ...props }, ref) => {
    const theme = useTheme();
    const propsWithTheme = { theme, size, ...props };
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
        {...commonProps}
        {...buttonStyles}
        {...icons}
        disabled={disabled}
        iconLeft={iconLeft}
        iconRight={
          <ChevronRightIcon
            customColor={type === TYPE_OPTIONS.APPLE ? "#FFF" : ""}
            color="primary"
          />
        }
        circled={false}
      />
    );
  },
);

SocialButton.displayName = "SocialButton";

export default SocialButton;
