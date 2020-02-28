// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import IconContainer from "./components/IconContainer";
import defaultTheme from "../../defaultTheme";
import Loading, { StyledSpinner } from "../../Loading";
import getSpacingToken from "../../common/getSpacingToken";
import StyledButtonContent from "./components/ButtonContent";
import mq from "../../utils/mediaQuery";
import { left } from "../../utils/rtl";

import type { Props } from "./index";

const StyledButtonContentChildren = styled.div`
  display: inline-block;
  width: 100%;
  text-align: ${left};
  ${mq.tablet(css`
    text-align: center;
  `)};
`;

StyledButtonContentChildren.defaultProps = {
  theme: defaultTheme,
};

export const StyledButton = styled(
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
    iconColorHover,
    iconColorActive,
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
    ${boxShadow};

    &:hover {
      ${backgroundHover};
      color: ${foregroundHover};
      ${boxShadowHover};

      ${IconContainer} {
        color: ${iconColorHover};
      }
    }

    &:active {
      ${!disabled &&
        css`
          ${backgroundActive};
          ${boxShadowActive};
          color: ${foregroundActive};
          & ${IconContainer} {
            color: ${iconColorActive};
          }
        `};

      ${StyledSpinner} {
        width: ${spinner && spinner.width};
        height: ${spinner && spinner.height};
      }

      ${backgroundFocus};
    }

    :focus {
      ${boxShadowFocus};
      ${backgroundFocus};
    }

    :focus:not(:focus-visible) {
      box-shadow: none;
      ${background};
    }
    :-moz-focusring,
    :focus-visible {
      ${boxShadowFocus};
      ${backgroundFocus};
    }
    ${mq.tablet(css`
      width: ${fullWidth ? "100%" : (width && `${width}px`) || (onlyIcon && height) || "auto"};
      border-radius: ${circled ? height : theme.orbit.borderRadiusNormal};
    `)};
  `}};
`;

StyledButton.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitive = React.forwardRef<Props, HTMLButtonElement>((props, ref) => {
  const { loading, disabled, children, iconLeft, iconRight, iconContainer, size } = props;
  const isDisabled = loading || disabled;
  return (
    <StyledButton disabled={isDisabled} forwardedRef={ref} {...props}>
      {loading && <Loading type="buttonLoader" />}
      <StyledButtonContent loading={loading}>
        {iconLeft && (
          <IconContainer {...iconContainer} size={size}>
            {iconLeft}
          </IconContainer>
        )}
        {children && <StyledButtonContentChildren>{children}</StyledButtonContentChildren>}
        {iconRight && (
          <IconContainer {...iconContainer} size={size} right>
            {iconRight}
          </IconContainer>
        )}
      </StyledButtonContent>
    </StyledButton>
  );
});

export default ButtonPrimitive;
