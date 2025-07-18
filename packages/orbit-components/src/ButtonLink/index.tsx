"use client";

import * as React from "react";
import cx from "clsx";

import ButtonPrimitive from "../primitives/ButtonPrimitive";
import {
  iconOnlyStyles,
  paddingBothIconsStyles,
  paddingLeftIconStyles,
  paddingNoIconsStyles,
  paddingRightIconStyles,
  sizeStyles,
} from "../primitives/ButtonPrimitive/sizes";
import type { Props, Type } from "./types";

const typeStyles: Record<Type, string> = {
  primary:
    "bg-button-link-primary-background hover:[@media(hover)_and_(pointer:fine)]:bg-button-link-primary-background-hover active:bg-button-link-primary-background-active focus:bg-button-link-primary-background-focus text-button-link-primary-foreground focus:text-button-link-primary-foreground-focus active:text-button-link-primary-foreground-active hover:[@media(hover)_and_(pointer:fine)]:text-button-link-primary-foreground-hover",
  secondary:
    "bg-button-link-secondary-background hover:[@media(hover)_and_(pointer:fine)]:bg-button-link-secondary-background-hover active:bg-button-link-secondary-background-active focus:bg-button-link-secondary-background-focus text-button-link-secondary-foreground focus:text-button-link-secondary-foreground-focus active:text-button-link-secondary-foreground-active hover:[@media(hover)_and_(pointer:fine)]:text-button-link-secondary-foreground-hover",
  critical:
    "bg-button-link-critical-background hover:[@media(hover)_and_(pointer:fine)]:bg-button-link-critical-background-hover active:bg-button-link-critical-background-active focus:bg-button-link-critical-background-focus text-button-link-critical-foreground focus:text-button-link-critical-foreground-focus active:text-button-link-critical-foreground-active hover:[@media(hover)_and_(pointer:fine)]:text-button-link-critical-foreground-hover",
};

const typeCompactStyles: Record<Type, string> = {
  primary:
    "text-button-link-primary-foreground focus:text-button-link-primary-foreground-focus active:text-button-link-primary-foreground-active hover:[@media(hover)_and_(pointer:fine)]:text-button-link-primary-foreground-hover",
  secondary:
    "text-button-link-secondary-foreground focus:text-product-normal-hover active:text-product-normal-active hover:[@media(hover)_and_(pointer:fine)]:text-product-normal-hover",
  critical:
    "text-button-link-critical-foreground focus:text-button-link-critical-foreground-focus active:text-button-link-critical-foreground-active hover:[@media(hover)_and_(pointer:fine)]:text-button-link-critical-foreground-hover",
};

const typeDisabledStyles: Record<Type, string> = {
  primary: "bg-button-link-primary-background text-button-link-primary-foreground",
  secondary: "bg-button-link-secondary-background text-button-link-secondary-foreground",
  critical: "bg-button-link-critical-background text-button-link-critical-foreground",
};

const typeCompactDisabledStyles: Record<Type, string> = {
  primary: "text-button-link-primary-foreground",
  secondary: "text-button-link-secondary-foreground",
  critical: "text-button-link-critical-foreground",
};

const ButtonLink = ({
  type = "primary",
  size = "normal",
  compact,
  disabled,
  children,
  iconLeft,
  iconRight,
  ref,
  ...props
}: Props) => {
  return (
    <ButtonPrimitive
      ref={ref}
      iconLeft={iconLeft}
      iconRight={iconRight}
      disabled={disabled}
      {...props}
      className={cx(
        "space-x-200 rtl:space-x-reverse",
        sizeStyles[size],
        children == null && iconOnlyStyles[size],
        compact !== true && disabled !== true && typeStyles[type],
        compact === true && disabled !== true && typeCompactStyles[type],
        compact !== true && disabled === true && typeDisabledStyles[type],
        compact === true && disabled === true && typeCompactDisabledStyles[type],
        compact !== true &&
          children != null && [
            iconLeft == null && iconRight == null && paddingNoIconsStyles[size],
            iconLeft != null && iconRight == null && paddingLeftIconStyles[size],
            iconLeft == null && iconRight != null && paddingRightIconStyles[size],
            iconLeft != null && iconRight != null && paddingBothIconsStyles[size],
          ],
        props.circled === true && "rounded-full",
      )}
    >
      {children}
    </ButtonPrimitive>
  );
};

export default ButtonLink;
