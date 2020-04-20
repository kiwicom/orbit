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
    ...props
  }) => {
    const isButtonWithHref = asComponent === "button" && href;
    const Component = isButtonWithHref ? "a" : asComponent;
    const buttonType = submit ? "submit" : "button";

    return (
      <Component
        data-test={dataTest}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={title}
        type={!isButtonWithHref ? buttonType : undefined}
        className={className}
        ref={forwardedRef}
        href={!disabled ? href : null}
        target={!disabled && href && external ? "_blank" : undefined}
        rel={!disabled && href && external ? "noopener noreferrer" : undefined}
        tabIndex={tabIndex}
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
    iconForeground,
    iconForegroundHover,
    iconForegroundActive,
    background,
    transition,
    fontWeight,
    fontSize,
    height,
    width,
    onlyIcon,
    spinner,
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
    transition: ${transition};
    outline: 0;
    opacity: ${disabled && theme.orbit.opacityButtonDisabled};
    margin-bottom: ${getSpacingToken};
    width: 100%;
    box-shadow: ${boxShadow};

    ${StyledButtonPrimitiveIconContainer} {
      color: ${iconForeground};
    }

    &:hover {
      background: ${backgroundHover};
      color: ${foregroundHover};
      box-shadow: ${boxShadowHover};

      ${StyledButtonPrimitiveIconContainer} {
        color: ${iconForegroundHover};
      }
    }

    &:active {
      ${!disabled &&
      css`
        background: ${backgroundActive};
        box-shadow: ${boxShadowActive};
        color: ${foregroundActive};
        ${StyledButtonPrimitiveIconContainer} {
          color: ${iconForegroundActive};
        }
      `};

      ${StyledSpinner} {
        width: ${spinner && spinner.width};
        height: ${spinner && spinner.height};
      }
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
      width: ${fullWidth ? "100%" : (width && `${width}px`) || (onlyIcon && height) || "auto"};
      border-radius: ${circled ? height : theme.orbit.borderRadiusNormal};
    `)};
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
    leftIconContainer,
    rightIconContainer,
  } = props;
  const isDisabled = loading || disabled;
  return (
    <StyledButtonPrimitive disabled={isDisabled} forwardedRef={ref} {...props}>
      {loading && <Loading type="buttonLoader" />}
      <ButtonPrimitiveContent loading={loading}>
        {iconLeft && (
          <ButtonPrimitiveIconContainer {...leftIconContainer}>
            {iconLeft}
          </ButtonPrimitiveIconContainer>
        )}
        {children && <ButtonPrimitiveContentChildren>{children}</ButtonPrimitiveContentChildren>}
        {iconRight && (
          <ButtonPrimitiveIconContainer {...rightIconContainer}>
            {iconRight}
          </ButtonPrimitiveIconContainer>
        )}
      </ButtonPrimitiveContent>
    </StyledButtonPrimitive>
  );
});

export default ButtonPrimitive;
