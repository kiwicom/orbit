"use client";

import * as React from "react";
import cx from "clsx";

import Loading from "../../Loading";
import createRel from "./common/createRel";
import onKeyDown from "../../utils/handleKeyDown";
import { getSpaceAfterClasses } from "../../common/tailwind";
import type { Props } from "./types";

interface ComponentProps extends Props {
  className?: string;
  style?: React.CSSProperties;
}

const ButtonPrimitiveComponent = React.forwardRef(function Component(
  {
    asComponent = "button",
    dataTest,
    submit,
    disabled,
    ariaControls,
    ariaExpanded,
    ariaLabelledby,
    ariaCurrent,
    title,
    rel,
    href,
    external,
    onClick,
    children,
    ...props
  }: ComponentProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>,
) {
  const isButtonWithHref = asComponent === "button" && href;
  const Element = isButtonWithHref ? "a" : asComponent;
  const buttonType = submit ? "submit" : "button";

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) =>
    asComponent === "div" ? onKeyDown(onClick)(ev) : undefined;

  return (
    <Element
      ref={ref}
      data-test={dataTest}
      aria-controls={ariaControls}
      aria-current={ariaCurrent}
      aria-expanded={ariaExpanded}
      aria-label={title}
      aria-labelledby={ariaLabelledby}
      type={!isButtonWithHref ? buttonType : undefined}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      href={!disabled ? href : null}
      target={!disabled && href && external ? "_blank" : undefined}
      rel={createRel({ external, href, rel })}
      // Needs to be here for non <button> elements
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </Element>
  );
});

ButtonPrimitiveComponent.displayName = "ButtonPrimitiveComponent";

const ButtonPrimitive = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    {
      // Elements
      children,
      iconLeft,
      iconRight,
      // Container vars
      height,
      padding,
      contentAlign = "center",
      fontWeight,
      fontSize,
      foreground,
      foregroundHover,
      foregroundActive,
      foregroundFocus,
      background,
      backgroundHover,
      backgroundActive,
      backgroundFocus,
      boxShadow,
      boxShadowHover,
      boxShadowFocus,
      boxShadowActive,
      // Content vars
      contentWidth,
      // Icon vars
      icons,
      // Modificators
      fullWidth,
      centered,
      underlined,
      circled,
      spaceAfter,
      // Status
      loading,
      disabled,
      // Rest
      className,
      ...props
    }: Props,
    ref,
  ) => {
    const isLink = props.href != null || props.asComponent === "a";
    const isDisabled = loading === true || disabled === true;

    const varsButton = {
      "--button-height": height,
      "--button-padding": padding,
      "--button-content-align": contentAlign,
      "--button-font-weight": fontWeight,
      "--button-font-size": fontSize,
      "--button-foreground": foreground,
      "--button-foreground-hover": foregroundHover,
      "--button-foreground-active": foregroundActive,
      "--button-foreground-focus": foregroundFocus,
      "--button-background": background,
      "--button-background-hover": backgroundHover,
      "--button-background-active": backgroundActive,
      "--button-background-focus": backgroundFocus,
      "--button-box-shadow": boxShadow,
      "--button-box-shadow-hover": boxShadowHover,
      "--button-box-shadow-focus": boxShadowFocus,
      "--button-box-shadow-active": boxShadowActive,
      // loader
      "--button-icon-width": icons?.width,
      "--button-icon-height": icons?.height,
    } as React.CSSProperties;

    const varsContent = {
      "--button-content-width": contentWidth,
    } as React.CSSProperties;

    const varsIcons = {
      "--button-icon-width": icons?.width,
      "--button-icon-height": icons?.height,
      "--button-icon-left-margin": icons?.leftMargin,
      "--button-icon-right-margin": icons?.rightMargin,
      "--button-icon-foreground": icons?.foreground,
      "--button-icon-foreground-focus": icons?.foregroundFocus,
      "--button-icon-foreground-hover": icons?.foregroundHover,
      "--button-icon-foreground-active": icons?.foregroundActive,
    } as React.CSSProperties;

    return (
      <ButtonPrimitiveComponent
        ref={ref}
        {...props}
        disabled={isDisabled}
        className={cx(
          className,
          "orbit-button-primitive font-base duration-fast group relative max-w-full items-center border-none text-center leading-none transition-all [&>*]:align-middle [&_.orbit-loading-spinner]:stroke-[currentColor]",
          fullWidth && "w-full",
          centered || children == null
            ? "justify-center"
            : "[justify-content:var(--button-content-align)]",
          circled !== true && "rounded-large tb:rounded-normal",
          isDisabled
            ? "cursor-not-allowed opacity-30"
            : "cursor-pointer hover:no-underline focus:no-underline active:no-underline",
          isLink ? "inline-flex" : "flex",
          underlined && "underline",
          boxShadowFocus != null && "outline-none",
          spaceAfter != null && getSpaceAfterClasses(spaceAfter),
          // loader
          varsButton["--button-icon-height"] != null &&
            "[&_.orbit-loading-spinner]:h-[var(--button-icon-height)]",
          varsButton["--button-icon-width"] != null &&
            "[&_.orbit-loading-spinner]:w-[var(--button-icon-width)]",
          // button vars
          varsButton["--button-height"] != null && "h-[var(--button-height)]",
          varsButton["--button-height"] != null &&
            circled === true &&
            "rounded-[var(--button-height)]",
          varsButton["--button-height"] != null && children == null && "w-[var(--button-height)]",
          varsButton["--button-padding"] != null && "p-[var(--button-padding)]",
          varsButton["--button-font-weight"] == null
            ? "font-medium"
            : "font-[var(--button-font-weight)]",
          varsButton["--button-font-size"] != null && "text-[length:var(--button-font-size)]",
          varsButton["--button-foreground"] != null && "text-[color:var(--button-foreground)]",
          varsButton["--button-foreground-hover"] != null &&
            !isDisabled &&
            "hover:text-[color:var(--button-foreground-hover)]",
          varsButton["--button-foreground-active"] != null &&
            !isDisabled &&
            "active:text-[color:var(--button-foreground-active)] active:focus:text-[color:var(--button-foreground-active)]",
          varsButton["--button-foreground-focus"] != null &&
            !isDisabled &&
            "focus:text-[color:var(--button-foreground-focus)]",
          varsButton["--button-background"] != null && "bg-[var(--button-background)]",
          varsButton["--button-background-hover"] != null &&
            !isDisabled &&
            "hover:bg-[var(--button-background-hover)] hover:focus:bg-[var(--button-background-hover)]",
          varsButton["--button-background-active"] != null &&
            !isDisabled &&
            "active:bg-[var(--button-background-active)] active:focus:bg-[var(--button-background-active)]",
          varsButton["--button-background-focus"] != null &&
            !isDisabled &&
            "focus:bg-[var(--button-background-focus)]",
          varsButton["--button-box-shadow"] != null && "[box-shadow:var(--button-box-shadow)]",
          varsButton["--button-box-shadow-hover"] != null &&
            !isDisabled &&
            "hover:[box-shadow:var(--button-box-shadow-hover)]",
          varsButton["--button-box-shadow-focus"] != null &&
            !isDisabled &&
            "focus:[box-shadow:var(--button-box-shadow-focus)]",
          varsButton["--button-box-shadow-active"] != null &&
            !isDisabled &&
            "active:[box-shadow:var(--button-box-shadow-active)] active:focus:[box-shadow:var(--button-box-shadow-active)]",
        )}
        style={varsButton}
      >
        {loading && <Loading type="buttonLoader" />}

        {iconLeft != null && (
          <div
            className={cx(
              "orbit-button-primitive-icon flex items-center justify-center",
              loading === true && "invisible",
              // icon vars
              varsIcons["--button-icon-height"] != null && "[&>svg]:h-[var(--button-icon-height)]",
              varsIcons["--button-icon-width"] != null && "[&>svg]:w-[var(--button-icon-width)]",
              varsIcons["--button-icon-left-margin"] != null &&
                children != null &&
                "m-[var(--button-icon-left-margin)]",
              varsIcons["--button-icon-foreground"] != null &&
                "text-[color:var(--button-icon-foreground)]",
              varsIcons["--button-icon-foreground-hover"] != null &&
                !isDisabled &&
                "group-hover:text-[color:var(--button-icon-foreground-hover)]",
              varsIcons["--button-icon-foreground-focus"] != null &&
                !isDisabled &&
                "group-focus:text-[color:var(--button-icon-foreground-focus)]",
              varsIcons["--button-icon-foreground-active"] != null &&
                !isDisabled &&
                "group-active:text-[color:var(--button-icon-foreground-active)] group-active:group-focus:text-[color:var(--button-icon-foreground-active)]",
            )}
            style={varsIcons}
          >
            {iconLeft}
          </div>
        )}
        {children != null && (
          <div
            className={cx(
              "orbit-button-primitive-content inline-block",
              (iconLeft != null || iconRight != null) && "text-start",
              loading === true && "invisible",
              centered !== true && "flex-1",
              // content vars
              varsContent["--button-content-width"] != null && "w-[var(--button-content-width)]",
            )}
            style={varsContent}
          >
            {children}
          </div>
        )}
        {iconRight != null && (
          <div
            className={cx(
              "orbit-button-primitive-icon flex items-center justify-center",
              loading === true && "invisible",
              // icon vars
              varsIcons["--button-icon-height"] != null && "[&>svg]:h-[var(--button-icon-height)]",
              varsIcons["--button-icon-width"] != null && "[&>svg]:w-[var(--button-icon-width)]",
              varsIcons["--button-icon-right-margin"] != null &&
                "m-[var(--button-icon-right-margin)]",
              varsIcons["--button-icon-foreground"] != null &&
                "text-[color:var(--button-icon-foreground)]",
              varsIcons["--button-icon-foreground-hover"] != null &&
                !isDisabled &&
                "group-hover:text-[color:var(--button-icon-foreground-hover)]",
              varsIcons["--button-icon-foreground-focus"] != null &&
                !isDisabled &&
                "group-focus:text-[color:var(--button-icon-foreground-focus)]",
              varsIcons["--button-icon-foreground-active"] != null &&
                !isDisabled &&
                "group-active:text-[color:var(--button-icon-foreground-active)] group-active:group-focus:text-[color:var(--button-icon-foreground-active)]",
            )}
            style={varsIcons}
          >
            {iconRight}
          </div>
        )}
      </ButtonPrimitiveComponent>
    );
  },
);

ButtonPrimitive.displayName = "ButtonPrimitive";

export default ButtonPrimitive;
