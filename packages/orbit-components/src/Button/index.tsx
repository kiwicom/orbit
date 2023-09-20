"use client";

import * as React from "react";
import cx from "clsx";

import ButtonPrimitive from "../primitives/ButtonPrimitive";
import {
  iconOnlyStyles,
  circledStyles,
  paddingBothIconsStyles,
  paddingLeftIconStyles,
  paddingNoIconsStyles,
  paddingRightIconStyles,
  sizeStyles,
} from "../primitives/ButtonPrimitive/sizes";
import type { Props, Type } from "./types";

const typeStyles: Record<Type, string> = {
  primary:
    "bg-button-primary-background hover:bg-button-primary-background-hover active:bg-button-primary-background-active disabled:bg-button-primary-background focus:bg-button-primary-background-focus text-button-primary-foreground focus:text-button-primary-foreground-focus active:text-button-primary-foreground-active hover:text-button-primary-foreground-hover disabled:text-button-primary-foreground active:shadow-button-active",
  secondary:
    "bg-button-secondary-background hover:bg-button-secondary-background-hover active:bg-button-secondary-background-active disabled:bg-button-secondary-background focus:bg-button-secondary-background-focus text-button-secondary-foreground focus:text-button-secondary-foreground-focus active:text-button-secondary-foreground-active hover:text-button-secondary-foreground-hover disabled:text-button-secondary-foreground active:shadow-button-active-pale",
  critical:
    "bg-button-critical-background hover:bg-button-critical-background-hover active:bg-button-critical-background-active disabled:bg-button-critical-background focus:bg-button-critical-background-focus text-button-critical-foreground focus:text-button-critical-foreground-focus active:text-button-critical-foreground-active hover:text-button-critical-foreground-hover disabled:text-button-critical-foreground active:shadow-button-active",
  primarySubtle:
    "bg-button-primary-subtle-background hover:bg-button-primary-subtle-background-hover active:bg-button-primary-subtle-active-background disabled:bg-button-primary-subtle-background focus:bg-button-primary-subtle-background-focus text-button-primary-subtle-foreground focus:text-button-primary-subtle-foreground-focus active:text-button-primary-subtle-foreground-active hover:text-button-primary-subtle-foreground-hover disabled:text-button-primary-subtle-foreground active:shadow-button-active-pale",
  criticalSubtle:
    "bg-button-critical-subtle-background hover:bg-button-critical-subtle-background-hover active:bg-button-critical-subtle-active-background disabled:bg-button-critical-subtle-background focus:bg-button-critical-subtle-background-focus text-button-critical-subtle-foreground focus:text-button-critical-subtle-foreground-focus active:text-button-critical-subtle-foreground-active hover:text-button-critical-subtle-foreground-hover disabled:text-button-critical-subtle-foreground active:shadow-button-active-pale",
  white:
    "bg-button-white-background hover:bg-button-white-background-hover active:bg-button-white-background-active disabled:bg-button-white-background focus:bg-button-white-background-focus text-button-white-foreground focus:text-button-white-foreground-focus active:text-button-white-foreground-active hover:text-button-white-foreground-hover disabled:text-button-white-foreground active:shadow-button-active-pale",
  bundleBasic:
    "bg-button-bundle-basic-background hover:bg-button-bundle-basic-background-hover active:bg-button-bundle-basic-background-active disabled:bg-button-bundle-basic-background focus:bg-button-bundle-basic-background-focus text-white-foreground focus:text-white-foreground-focus active:text-white-foreground-active hover:text-white-foreground-hover disabled:text-white-foreground active:shadow-button-active",
  bundleMedium:
    "bg-button-bundle-medium-background hover:bg-button-bundle-medium-background-hover active:bg-button-bundle-medium-background-active disabled:bg-button-bundle-medium-background focus:bg-button-bundle-medium-background-focus text-white-foreground focus:text-white-foreground-focus active:text-white-foreground-active hover:text-white-foreground-hover disabled:text-white-foreground active:shadow-button-active",
  bundleTop:
    "bg-button-bundle-top-background hover:bg-button-bundle-top-background-hover active:bg-button-bundle-top-background-active disabled:bg-button-bundle-top-background focus:bg-button-bundle-top-background-focus text-white-foreground focus:text-white-foreground-focus active:text-white-foreground-active hover:text-white-foreground-hover disabled:text-white-foreground active:shadow-button-active",
};

/**
 * This is necessary for <a> elements since they don't have the `disabled` attribute.
 */
const typeDisabledStyled: Record<Type, string> = {
  primary: "bg-button-primary-background text-button-primary-foreground",
  secondary: "bg-button-secondary-background text-button-secondary-foreground",
  critical: "bg-button-critical-background text-button-critical-foreground",
  primarySubtle: "bg-button-primary-subtle-background text-button-primary-subtle-foreground",
  criticalSubtle: "bg-button-critical-subtle-background text-button-critical-subtle-foreground",
  white: "bg-button-white-background text-button-white-foreground",
  bundleBasic: "bg-button-bundle-basic-background text-white-foreground",
  bundleMedium: "bg-button-bundle-medium-background text-white-foreground",
  bundleTop: "bg-button-bundle-top-background text-white-foreground",
};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    { type = "primary", size = "normal", children, iconLeft, iconRight, disabled, ...props },
    ref,
  ) => {
    return (
      <ButtonPrimitive
        ref={ref}
        iconLeft={iconLeft}
        iconRight={iconRight}
        disabled={disabled}
        {...props}
        className={cx(
          "space-x-xs rtl:space-x-reverse",
          sizeStyles[size],
          children == null && iconOnlyStyles[size],
          disabled === true ? typeDisabledStyled[type] : typeStyles[type],
          children != null && iconLeft == null && iconRight == null && paddingNoIconsStyles[size],
          children != null && iconLeft != null && iconRight == null && paddingLeftIconStyles[size],
          children != null && iconLeft == null && iconRight != null && paddingRightIconStyles[size],
          children != null && iconLeft != null && iconRight != null && paddingBothIconsStyles[size],
          props.circled === true && circledStyles[size],
        )}
      >
        {children}
      </ButtonPrimitive>
    );
  },
);

Button.displayName = "Button";

export default Button;
