"use client";

import * as React from "react";

import ButtonPrimitive from "../primitives/ButtonPrimitive";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getCommonProps from "../primitives/ButtonPrimitive/common/getCommonProps";
import ChevronForwardIcon from "../icons/ChevronForward";
import useTheme from "../hooks/useTheme";
import getSocialButtonStyles from "./helpers/getSocialButtonStyles";
import getSocialButtonIconForeground from "./helpers/getSocialButtonIconForeground";
import getSocialButtonIcon from "./helpers/getSocialButtonIcon";
import { TYPE_OPTIONS } from "./consts";
import type { Props } from "./types";

const SocialButton = ({
  type = TYPE_OPTIONS.APPLE,
  disabled = false,
  size,
  ref,
  ...props
}: Props) => {
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
        <ChevronForwardIcon
          customColor={type === TYPE_OPTIONS.APPLE ? "#FFF" : ""}
          color="primary"
          ariaHidden
          reverseOnRtl
        />
      }
      circled={false}
    />
  );
};

export default SocialButton;
