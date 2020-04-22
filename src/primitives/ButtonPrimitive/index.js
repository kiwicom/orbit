// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import Loading, { StyledSpinner } from "../../Loading";
import mq from "../../utils/mediaQuery";
import getSpacingToken from "../../common/getSpacingToken";
import ButtonPrimitiveContent from "./components/ButtonPrimitiveContent";
import ButtonPrimitiveIconContainer, {
  StyledButtonPrimitiveIconContainer,
} from "./components/ButtonPrimitiveIconContainer";
import ButtonPrimitiveContentChildren from "./components/ButtonPrimitiveContentChildren";

import type { Props } from "./index";

export const StyledButtonPrimitive = styled(
  ({
    asComponent = "button",
    dataTest,
    submit,
    disabled,
    forwardedRef,
    ariaControls,
    ariaExpanded,
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

    return (
      <Component
        ref={forwardedRef}
        data-test={dataTest}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={title}
        type={!isButtonWithHref ? buttonType : undefined}
        className={className}
        href={!disabled ? href : null}
        target={!disabled && href && external ? "_blank" : undefined}
        rel={!disabled && href && external ? "noopener noreferrer" : undefined}
        tabIndex={tabIndex}
        onClick={onClick}
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
    backgroundHover,
    backgroundActive,
    backgroundFocus,
    boxShadow,
    boxShadowHover,
    boxShadowFocus,
    boxShadowActive,
  }) => css`
    height: ${height};
    position: relative;
    display: ${href || asComponent === "a" ? "inline-flex" : "flex"};
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    appearance: none;
    text-decoration: none;
    flex: ${fullWidth ? "1 1 auto" : "0 0 auto"};
    max-width: 100%; // to ensure that Buttons content wraps in IE
    background: ${background};
    color: ${foreground};
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
    width: 100%;
    box-shadow: ${boxShadow};

    ${StyledButtonPrimitiveIconContainer} {
      color: ${icons && icons.foreground};
    }

    ${StyledSpinner} {
      width: ${icons && icons.width};
      height: ${icons && icons.height};
    }

    &:hover {
      background: ${backgroundHover};
      color: ${foregroundHover};
      box-shadow: ${boxShadowHover};

      ${StyledButtonPrimitiveIconContainer} {
        color: ${icons && icons.foregroundHover};
      }
    }

    &:active {
      ${!disabled &&
      css`
        background: ${backgroundActive};
        box-shadow: ${boxShadowActive};
        color: ${foregroundActive};
        ${StyledButtonPrimitiveIconContainer} {
          color: ${icons && icons.foregroundActive};
        }
      `};
    }

    :focus {
      box-shadow: ${boxShadowFocus};
      background: ${backgroundFocus};
    }

    :focus:not(:focus-visible) {
      box-shadow: none;
      background: ${background};
    }
    :-moz-focusring,
    :focus-visible {
      box-shadow: ${boxShadowFocus};
      background: ${backgroundFocus};
    }
    ${mq.tablet(css`
      width: ${fullWidth ? "100%" : width || (onlyIcon && height) || "auto"};
      border-radius: ${circled ? height : theme.orbit.borderRadiusNormal};
    `)};
  `}};
`;

StyledButtonPrimitive.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitive = React.forwardRef<Props, HTMLButtonElement>((props, ref) => {
  console.log(props);
  const {
    loading,
    disabled,
    children,
    iconLeft,
    iconRight,
    // Need to setup null values so the object exits by default
    icons = { width: null, height: null, leftMargin: null, rightMargin: null },
  } = props;
  const { width, height, leftMargin, rightMargin } = icons;
  const isDisabled = loading || disabled;
  const onlyIcon = Boolean(iconLeft && !children);
  return (
    <StyledButtonPrimitive forwardedRef={ref} onlyIcon={onlyIcon} {...props} disabled={isDisabled}>
      {loading && <Loading type="buttonLoader" />}
      <ButtonPrimitiveContent loading={loading}>
        {iconLeft && (
          <ButtonPrimitiveIconContainer width={width} height={height} margin={leftMargin}>
            {iconLeft}
          </ButtonPrimitiveIconContainer>
        )}
        {children && <ButtonPrimitiveContentChildren>{children}</ButtonPrimitiveContentChildren>}
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
