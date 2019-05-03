// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import { warning } from "@kiwicom/js";

import defaultTheme from "../defaultTheme";
import { TYPES, SIZES, TOKENS, BUTTON_STATES } from "./consts";
import { ICON_SIZES } from "../Icon/consts";
import { getSize } from "../Icon";
import type { Ref } from "../common/common.js.flow";
import getSpacingToken from "../common/getSpacingToken";
import getIconSpacing from "./helpers/getIconSpacing";
import getSizeToken from "./helpers/getSizeToken";
import getTypeToken from "./helpers/getTypeToken";
import getButtonSpacing from "./helpers/getButtonLinkSpacing";
import getButtonLinkBoxShadow from "./helpers/getButtonLinkBoxShadow";

import type { Props } from "./index";

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${getIconSpacing()};

  > * {
    width: ${({ sizeIcon }) => getSize(sizeIcon)};
    height: ${({ sizeIcon }) => getSize(sizeIcon)};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

export const StyledButtonLink = styled(
  ({
    onlyIcon,
    component,
    circled,
    external,
    block,
    type,
    icon,
    iconLeft,
    iconRight,
    sizeIcon,
    width,
    children,
    transparent,
    style,
    theme,
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
        type={!isButtonWithHref ? buttonType : undefined}
        {...props}
        ref={buttonRef}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={title}
      >
        {children}
      </Component>
    );
  },
)`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  box-sizing: border-box;
  appearance: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ block, width, onlyIcon }) =>
    block
      ? "100%"
      : (width && `${width}px`) || (onlyIcon && getSizeToken(TOKENS.heightButton)) || "auto"};
  flex: ${({ block }) => (block ? "1 1 auto" : "0 0 auto")};
  height: ${getSizeToken(TOKENS.heightButton)};
  background: ${getTypeToken(TOKENS.backgroundButton)};
  color: ${getTypeToken(TOKENS.colorTextButton)}!important;
  border: 0;
  border-radius: ${({ theme, circled }) =>
    circled ? getSizeToken(TOKENS.heightButton) : theme.orbit.borderRadiusNormal};
  padding: ${getButtonSpacing()};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold}!important;
  font-size: ${getSizeToken(TOKENS.fontSizeButton)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled, theme }) => (disabled ? theme.orbit.opacityButtonDisabled : "1")};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  text-decoration: none;
  margin-bottom: ${getSpacingToken};

  &:hover {
    ${({ transparent, disabled }) =>
      !disabled &&
      css`
        background: ${!transparent && getTypeToken(TOKENS.backgroundButtonHover)};
        color: ${getTypeToken(TOKENS.colorTextButtonHover)}!important;
      `};
  }

  &:active {
    ${({ transparent, disabled }) =>
      !disabled &&
      css`
        background: ${!transparent && getTypeToken(TOKENS.backgroundButtonActive)};
        color: ${getTypeToken(TOKENS.colorTextButtonActive)}!important;
        ${getButtonLinkBoxShadow(BUTTON_STATES.ACTIVE)};
      `};
  }

  &:focus {
    ${getButtonLinkBoxShadow(BUTTON_STATES.FOCUS)};
  }
`;

StyledButtonLink.defaultProps = {
  theme: defaultTheme,
};

const StyledButtonLinkContent = styled.div`
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

const StyledButtonLinkContentChildren = styled.div`
  display: flex;
  flex-basis: auto;
  justify-content: center;
  align-items: center;
`;

// $FlowExpected
const ButtonLink = React.forwardRef((props: Props, ref: Ref) => {
  const {
    external,
    children,
    component = "button",
    href,
    size = SIZES.NORMAL,
    icon,
    iconRight,
    type = TYPES.PRIMARY,
    onClick,
    width = 0,
    role,
    disabled,
    block,
    circled,
    submit,
    transparent,
    ariaExpanded,
    ariaControls,
    spaceAfter,
    dataTest,
    tabIndex,
    title,
    block,
  } = props;

  const iconLeft = props.iconLeft || icon;
  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;

  const onlyIcon = iconLeft && !children;

  warning(
    !(!children && !title),
    "Warning: children or title property is missing on ButtonLink. Use title property to add aria-label to be accessible for screen readers. More information https://orbit.kiwi/components/buttonlink/#accessibility",
  );

  const handleMouseDown = ev => {
    ev.preventDefault();
    if (onClick) {
      onClick(ev);
    }
  };

  return (
    <StyledButtonLink
      onMouseDown={handleMouseDown}
      onKeyDown={onClick}
      component={component}
      size={size}
      onlyIcon={onlyIcon}
      sizeIcon={sizeIcon}
      type={type}
      href={href}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener noreferrer" : undefined}
      iconLeft={iconLeft}
      iconRight={iconRight}
      buttonRef={ref}
      width={width}
      role={role}
      disabled={disabled}
      block={block}
      circled={circled}
      submit={submit}
      transparent={transparent}
      ariaExpanded={ariaExpanded}
      ariaControls={ariaControls}
      spaceAfter={spaceAfter}
      tabIndex={tabIndex}
      dataTest={dataTest}
    >
      <StyledButtonLinkContent>
        {iconLeft && (
          <IconContainer size={size} type={type} onlyIcon={onlyIcon} sizeIcon={sizeIcon}>
            {iconLeft}
          </IconContainer>
        )}
        {children && <StyledButtonLinkContentChildren>{children}</StyledButtonLinkContentChildren>}
        {iconRight && (
          <IconContainer size={size} type={type} onlyIcon={onlyIcon} sizeIcon={sizeIcon} right>
            {iconRight}
          </IconContainer>
        )}
      </StyledButtonLinkContent>
    </StyledButtonLink>
  );
});

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
