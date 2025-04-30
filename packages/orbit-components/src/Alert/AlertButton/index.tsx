"use client";

import * as React from "react";

import { TYPE_OPTIONS } from "./consts";
import ButtonPrimitive from "../../primitives/ButtonPrimitive";
import getIconContainer from "../../primitives/ButtonPrimitive/common/getIconContainer";
import getCommonProps from "../../primitives/ButtonPrimitive/common/getCommonProps";
import useTheme from "../../hooks/useTheme";
import getAlertButtonStyles from "./helpers/getAlertButtonStyles";
import getAlertButtonIconForeground from "./helpers/getAlertButtonIconForeground";
import { SIZE_OPTIONS } from "../../primitives/ButtonPrimitive/common/consts";
import type { Props } from "./types";

const AlertButton = ({ ref, type = TYPE_OPTIONS.INFO, disabled = false, ...props }: Props) => {
  const theme = useTheme();
  const propsWithTheme = { theme, ...props };
  const commonProps = getCommonProps({ ...propsWithTheme, size: SIZE_OPTIONS.SMALL });
  const buttonStyles = getAlertButtonStyles({ type, theme, disabled });
  const icons = getIconContainer({
    ...propsWithTheme,
    iconForeground: getAlertButtonIconForeground({ type, theme }),
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
};

export default AlertButton;
