// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import Loading, { StyledSpinner } from "../../Loading";
import getSpacingToken from "../../common/getSpacingToken";
import ButtonPrimitiveContent from "./components/ButtonPrimitiveContent";
import ButtonPrimitiveIconContainer, {
  StyledButtonPrimitiveIconContainer,
} from "./components/ButtonPrimitiveIconContainer";
import ButtonPrimitiveContentChildren from "./components/ButtonPrimitiveContentChildren";
import mq from "../../utils/mediaQuery";

import type { Props } from "./index";

const iconContainerColor = (color: ?string, important = true) => css`
  ${StyledButtonPrimitiveIconContainer} {
    color: ${color} ${important && "!important"};
  }
`;

export const StyledButtonPrimitive = styled(
  ({
    asComponent = "button",
    dataTest,
    submit,
    disabled,
    forwardedRef,
    ariaControls,
    ariaExpanded,
    ariaLabelledby,
    ariaCurrent,
    title,
    className,
    rel,
    href,
    target,
    external,
    tabIndex,
    onClick,
    role,
    ...props
  }) => {
    const isButtonWithHref = asComponent === "button" && href;
    const Component = isButtonWithHref ? "a" : asComponent;
    const buttonType = submit ? "submit" : "button";
    const relValues = rel ? rel.split(" ") : [];
    // add noopener and noreferrer whenever external
    if (external && !disabled && href) {
      if (!relValues.includes("noopener")) {
        relValues.push("noopener");
      }
      if (!relValues.includes("noreferrer")) {
        relValues.push("noreferrer");
      }
    }

    return (
      <Component
        ref={forwardedRef}
        data-test={dataTest}
        aria-controls={ariaControls}
        aria-current={ariaCurrent}
        aria-expanded={ariaExpanded}
        aria-label={title}
        aria-labelledby={ariaLabelledby}
        type={!isButtonWithHref ? buttonType : undefined}
        className={className}
        disabled={disabled}
        href={!disabled ? href : null}
        target={!disabled && href && external ? "_blank" : undefined}
        rel={relValues.length > 0 ? relValues.join(" ") : undefined}
        tabIndex={tabIndex}
        onClick={!disabled ? onClick : null}
        role={role}
      >
        {props.children}
      </Component>
    );
  },
)`
  ${({
    foreground,
    disabled,
    fullWidth,
    href,
    theme,
    asComponent,
    circled,
    padding,
    background,
    fontWeight,
    fontSize,
    height,
    width,
    onlyIcon,
    icons,
    foregroundHover,
    foregroundActive,
    foregroundFocus,
    backgroundHover,
    backgroundActive,
    backgroundFocus,
    boxShadow,
    boxShadowHover,
    boxShadowFocus,
    boxShadowActive,
    underlined,
  }) => css`
    height: ${height};
    position: relative;
    display: ${href || asComponent === "a" ? "inline-flex" : "flex"};
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    appearance: none;
    text-align: center;
    text-decoration: ${underlined ? "underline" : "none"};
    flex: ${fullWidth ? "1 1 auto" : "0 0 auto"};
    max-width: 100%; // to ensure that Buttons content wraps in IE
    background: ${background};
    color: ${foreground}!important;
    border: 0;
    padding: ${padding};
    border-radius: ${circled ? height : "6px"};
    font-family: ${theme.orbit.fontFamily};
    font-weight: ${fontWeight || theme.orbit.fontWeightMedium};
    font-size: ${fontSize};
    line-height: 1.4; // preventing inheriting with safe value
    cursor: ${disabled ? "not-allowed" : "pointer"};
    transition: all ${theme.orbit.durationFast} ease-in-out !important;
    outline: 0;
    opacity: ${disabled && theme.orbit.opacityButtonDisabled};
    margin-bottom: ${getSpacingToken};
    width: ${fullWidth ? "100%" : width || (onlyIcon && height) || "auto"};
    box-shadow: ${boxShadow};

    ${mq.tablet(css`
      border-radius: ${circled ? height : theme.orbit.borderRadiusNormal};
    `)}

    ${iconContainerColor(icons && icons.foreground, false)};

    ${StyledSpinner} {
      width: ${icons && icons.width};
      height: ${icons && icons.height};
    }

    &:hover {
      ${!disabled &&
      css`
        background: ${backgroundHover};
        color: ${foregroundHover}!important;
        box-shadow: ${boxShadowHover};
        text-decoration: none;
        ${iconContainerColor(icons && icons.foregroundHover)};
      `};
    }

    &:active {
      ${!disabled &&
      css`
        background: ${backgroundActive};
        box-shadow: ${boxShadowActive};
        color: ${foregroundActive}!important;
        text-decoration: none;
        ${iconContainerColor(icons && icons.foregroundActive)};
      `};
    }

    :focus {
      box-shadow: ${boxShadowFocus};
      background: ${backgroundFocus};
      color: ${foregroundFocus}!important;
      text-decoration: none;
      ${iconContainerColor(icons && icons.foregroundFocus)};
    }

    :focus:not(:focus-visible) {
      box-shadow: none;
      background: ${background};
      color: ${foregroundFocus}!important;
      text-decoration: none;
      ${iconContainerColor(icons && icons.foregroundFocus)};
    }
    :-moz-focusring,
    :focus-visible {
      box-shadow: ${boxShadowFocus};
      background: ${backgroundFocus};
      color: ${foregroundFocus}!important;
      text-decoration: none;
      ${iconContainerColor(icons && icons.foregroundFocus)};
    }
  `}};
`;

StyledButtonPrimitive.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitive = React.forwardRef<Props, HTMLButtonElement>((props, ref) => {
  const {
    loading,
    disabled,
    children,
    iconLeft,
    iconRight,
    // Need to setup null values so the object exits by default
    icons = { width: null, height: null, leftMargin: null, rightMargin: null },
    contentAlign = "center",
    contentWidth,
  } = props;
  const { width, height, leftMargin, rightMargin } = icons;
  const isDisabled = loading || disabled;
  const onlyIcon = Boolean(iconLeft && !children);
  return (
    <StyledButtonPrimitive
      forwardedRef={ref}
      onlyIcon={onlyIcon}
      {...props}
      disabled={isDisabled}
      className={undefined}
    >
      {loading && <Loading type="buttonLoader" />}
      <ButtonPrimitiveContent loading={loading} contentAlign={contentAlign}>
        {iconLeft && (
          <ButtonPrimitiveIconContainer width={width} height={height} margin={leftMargin}>
            {iconLeft}
          </ButtonPrimitiveIconContainer>
        )}
        {children && (
          <ButtonPrimitiveContentChildren
            hasIcon={Boolean(iconLeft || iconRight)}
            contentWidth={contentWidth}
          >
            {children}
          </ButtonPrimitiveContentChildren>
        )}
        {iconRight && (
          <ButtonPrimitiveIconContainer width={width} height={height} margin={rightMargin}>
            {iconRight}
          </ButtonPrimitiveIconContainer>
        )}
      </ButtonPrimitiveContent>
    </StyledButtonPrimitive>
  );
});

ButtonPrimitive.displayName = "ButtonPrimitive";

export default ButtonPrimitive;
