// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import { warning } from "@kiwicom/js";

import defaultTheme from "../defaultTheme";
import { ICON_SIZES } from "../Icon/consts";
import { TYPE_OPTIONS, SIZE_OPTIONS, TOKENS, BUTTON_STATES } from "./consts";
import Loading, { StyledSpinner } from "../Loading";
import { getSize } from "../Icon";
import type { Ref } from "../common/common.js.flow";
import getSpacingToken from "../common/getSpacingToken";
import getSizeToken from "./helpers/getSizeToken";
import getTypeToken from "./helpers/getTypeToken";
import getButtonSpacing from "./helpers/getButtonSpacing";
import getIconSpacing from "./helpers/getIconSpacing";
import getButtonBoxShadow from "./helpers/getButtonBoxShadow";
import getFocus from "./helpers/getFocus";

import type { Props } from "./index";

// media query only for IE 10+, not Edge
const onlyIE = (style, breakpoint = "all") =>
  css`
    @media ${breakpoint} and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${style};
    }
  `;

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${getIconSpacing()};
  color: ${({ bordered }) =>
    bordered ? getTypeToken(TOKENS.colorTextButtonBordered) : getTypeToken(TOKENS.colorTextButton)};
  transition: background ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  > * {
    width: ${({ sizeIcon }) => getSize(sizeIcon)};
    height: ${({ sizeIcon }) => getSize(sizeIcon)};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

export const StyledButton = styled(
  ({
    theme,
    component,
    circled,
    external,
    type,
    icon,
    iconLeft,
    iconRight,
    sizeIcon,
    width,
    bordered,
    loading,
    onlyIcon,
    block,
    style,
    dataTest,
    submit,
    buttonRef,
    ariaControls,
    ariaExpanded,
    spaceAfter,
    title,
    ...props
  }) => {
    const isButtonWithHref = component === "button" && props.href;
    const Component = isButtonWithHref ? "a" : component;
    const buttonType = submit ? "submit" : "button";
    return (
      <Component
        data-test={dataTest}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={title}
        type={!isButtonWithHref ? buttonType : undefined}
        {...props}
        ref={buttonRef}
      >
        {props.children}
      </Component>
    );
  },
)`
  position: relative;
  display: ${({ href, component }) => (href || component === "a" ? "inline-flex" : "flex")};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  appearance: none;
  text-decoration: none;
  width: ${({ block, width, onlyIcon }) =>
    block
      ? "100%"
      : (width && `${width}px`) || (onlyIcon && getSizeToken(TOKENS.heightButton)) || "auto"};
  flex: ${({ block }) => (block ? "1 1 auto" : "0 0 auto")};
  max-width: 100%; // to ensure that Buttons content wraps in IE
  height: ${getSizeToken(TOKENS.heightButton)};
  background: ${({ bordered }) =>
    bordered
      ? getTypeToken(TOKENS.backgroundButtonBordered)
      : getTypeToken(TOKENS.backgroundButton)};
  color: ${({ bordered }) =>
    bordered
      ? getTypeToken(TOKENS.colorTextButtonBordered)
      : getTypeToken(TOKENS.colorTextButton)} !important;
  border: 0;
  border-radius: ${({ theme, circled }) =>
    circled ? getSizeToken(TOKENS.heightButton) : theme.orbit.borderRadiusNormal};
  padding: ${getButtonSpacing()};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold}!important;
  font-size: ${getSizeToken(TOKENS.fontSizeButton)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  opacity: ${({ disabled, theme }) => disabled && theme.orbit.opacityButtonDisabled};
  margin-bottom: ${getSpacingToken};
  ${getButtonBoxShadow(BUTTON_STATES.DEFAULT)};

  &:hover {
    background: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TOKENS.backgroundButtonBorderedHover)
        : getTypeToken(TOKENS.backgroundButtonHover))};
    color: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TOKENS.colorTextButtonBorderedHover)
        : getTypeToken(TOKENS.colorTextButtonHover))}!important;
    ${getButtonBoxShadow(BUTTON_STATES.HOVER)};

    ${IconContainer} {
      color: ${({ disabled, bordered }) =>
        !disabled &&
        (bordered
          ? getTypeToken(TOKENS.colorTextButtonBorderedHover)
          : getTypeToken(TOKENS.colorTextButtonHover))};
    }
  }

  &:active {
    ${({ disabled, bordered }) =>
      !disabled &&
      css`
        background: ${bordered
          ? getTypeToken(TOKENS.backgroundButtonBorderedActive)
          : getTypeToken(TOKENS.backgroundButtonActive)};
        color: ${bordered
          ? getTypeToken(TOKENS.colorTextButtonBorderedActive)
          : getTypeToken(TOKENS.colorTextButtonActive)}!important;
        ${getButtonBoxShadow(BUTTON_STATES.ACTIVE)};
        & ${IconContainer} {
          color: ${bordered
            ? getTypeToken(TOKENS.colorTextButtonBorderedActive)
            : getTypeToken(TOKENS.colorTextButtonActive)};
        }
      `};
  }

  ${getFocus()}

  ${StyledSpinner} {
    width: ${getSizeToken(TOKENS.loadingWidth)};
    height: ${getSizeToken(TOKENS.loadingHeight)};
  }
`;

StyledButton.defaultProps = {
  theme: defaultTheme,
};

const StyledButtonContent = styled(({ theme, loading, ...props }) => <div {...props} />)`
  visibility: ${({ loading }) => loading && "hidden"};
  height: 100%;
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;

  // IE flexbox bug
  ${onlyIE(css`
    min-width: 100%;
    max-width: 1px;
  `)};
`;

StyledButtonContent.defaultProps = {
  theme: defaultTheme,
};

const StyledButtonContentChildren = styled.div`
  display: inline-block;
`;

// $FlowExpected
const Button = React.forwardRef((props: Props, ref: Ref) => {
  const {
    component = "button",
    children,
    bordered,
    disabled,
    href,
    size = SIZE_OPTIONS.NORMAL,
    icon,
    iconRight,
    external,
    type = TYPE_OPTIONS.PRIMARY,
    block,
    loading = false,
    width = 0,
    role,
    onClick,
    circled,
    submit,
    tabIndex,
    ariaExpanded,
    className,
    ariaControls,
    spaceAfter,
    dataTest,
    title,
  } = props;
  const iconLeft = props.iconLeft || icon;
  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;
  const onlyIcon = iconLeft && !children;
  const isDisabled = loading || disabled;

  warning(
    !(!children && !title),
    "Warning: children or title property is missing on Button. Use title property to add aria-label to be accessible for screen readers. More information https://orbit.kiwi/components/button/api/#accessibility",
  );

  return (
    <StyledButton
      onClick={onClick}
      iconLeft={iconLeft}
      iconRight={iconRight}
      bordered={bordered}
      block={block}
      component={component}
      disabled={isDisabled}
      loading={loading}
      onlyIcon={onlyIcon}
      size={size}
      sizeIcon={sizeIcon}
      href={!disabled ? href : null}
      target={!disabled && href && external ? "_blank" : undefined}
      rel={!disabled && href && external ? "noopener noreferrer" : undefined}
      type={type}
      width={width}
      className={className}
      buttonRef={ref}
      role={role}
      circled={circled}
      submit={submit}
      tabIndex={tabIndex}
      ariaExpanded={ariaExpanded}
      ariaControls={ariaControls}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
      title={title}
    >
      {loading && <Loading type="buttonLoader" />}
      <StyledButtonContent loading={loading}>
        {iconLeft && (
          <IconContainer
            bordered={bordered}
            onlyIcon={onlyIcon}
            size={size}
            sizeIcon={sizeIcon}
            type={type}
          >
            {iconLeft}
          </IconContainer>
        )}
        {children && <StyledButtonContentChildren>{children}</StyledButtonContentChildren>}
        {iconRight && (
          <IconContainer
            bordered={bordered}
            onlyIcon={onlyIcon}
            size={size}
            sizeIcon={sizeIcon}
            type={type}
            right
          >
            {iconRight}
          </IconContainer>
        )}
      </StyledButtonContent>
    </StyledButton>
  );
});

Button.displayName = "Button";

export default Button;
