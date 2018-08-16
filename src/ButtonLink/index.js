// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { TYPES, SIZES } from "./consts";
import { ICON_SIZES } from "../Icon/consts";

import type { Props } from "./index";

const IconContainer = styled(({ theme, tokens, sizeIcon, type, onlyIcon, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${props => (props.onlyIcon ? "0" : props.tokens.marginRightIcon[props.size])};

  > * {
    width: ${props => ICON_SIZES[props.sizeIcon]};
    height: ${props => ICON_SIZES[props.sizeIcon]};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
};

const IconContainerRight = styled(IconContainer)`
  margin-right: 0;
  margin-left: ${({ onlyIcon, tokens, size }) => (onlyIcon ? "0" : tokens.marginRightIcon[size])};
`;

IconContainerRight.defaultProps = {
  theme: defaultTokens,
};

export const StyledButtonLink = styled(
  ({
    tokens,
    onlyIcon,
    component,
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
    ...props
  }) => {
    let Component = component;

    if (Component === "button" && props.href) {
      Component = "a";
    }

    return <Component {...props}>{children}</Component>;
  },
)`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  box-sizing: border-box;
  appearance: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ block, width, onlyIcon, tokens, size }) =>
    block
      ? "100%"
      : (width && `${width}px`) || (onlyIcon && `${tokens.heightButton[size]}`) || "auto"};
  height: ${({ tokens, size }) => tokens.heightButton[size]};
  background: ${({ tokens, type }) => tokens.backgroundButton[type]};
  color: ${({ tokens, type }) => tokens.colorTextButton[type]}!important;
  border: 0;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  padding: 0;
  padding-right: ${({ onlyIcon, iconRight, tokens, size }) =>
    (onlyIcon && "0") ||
    (iconRight ? tokens.paddingButtonWithIcon[size] : tokens.paddingButton[size])};
  padding-left: ${({ onlyIcon, icon, iconLeft, tokens, size }) =>
    (onlyIcon && "0") ||
    (iconLeft || icon ? tokens.paddingButtonWithIcon[size] : tokens.paddingButton[size])};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold}!important;
  font-size: ${({ tokens, size }) => tokens.fontSizeButton[size]};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled, theme }) => (disabled ? theme.orbit.opacityButtonDisabled : "1")};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  text-decoration: none;

  &:enabled:hover {
    background: ${({ transparent, type, tokens }) =>
      !transparent && tokens.backgroundButtonHover[type]};
    color: ${props => props.tokens.colorTextButtonHover[props.type]}!important;
  }

  &:enabled:active {
    transform: scale(${({ theme }) => theme.orbit.modifierScaleButtonActive});
    background: ${({ transparent, tokens, type }) =>
      !transparent && tokens.backgroundButtonActive[type]};
    color: ${({ tokens, type }) => tokens.colorTextButtonActive[type]}!important;
  }
`;

StyledButtonLink.defaultProps = {
  theme: defaultTokens,
};

const ButtonLink = (props: Props) => {
  const {
    external,
    children,
    component,
    size = SIZES.NORMAL,
    icon,
    iconRight,
    type = TYPES.PRIMARY,
    theme = defaultTokens,
    onClick,
  } = props;

  const iconLeft = props.iconLeft || icon;
  const sizeIcon = size === SIZES.SMALL ? "small" : "medium";

  const onlyIcon = iconLeft && !children;
  const tokens = {
    heightButton: {
      [SIZES.LARGE]: theme.orbit.heightButtonLarge,
      [SIZES.NORMAL]: theme.orbit.heightButtonNormal,
      [SIZES.SMALL]: theme.orbit.heightButtonSmall,
    },
    fontSizeButton: {
      [SIZES.LARGE]: theme.orbit.fontSizeButtonLarge,
      [SIZES.NORMAL]: theme.orbit.fontSizeButtonNormal,
      [SIZES.SMALL]: theme.orbit.fontSizeButtonSmall,
    },
    paddingButton: {
      [SIZES.LARGE]: theme.orbit.paddingButtonLarge,
      [SIZES.NORMAL]: theme.orbit.paddingButtonNormal,
      [SIZES.SMALL]: theme.orbit.paddingButtonSmall,
    },
    paddingButtonWithIcon: {
      [SIZES.LARGE]: theme.orbit.paddingButtonLargeWithIcon,
      [SIZES.NORMAL]: theme.orbit.paddingButtonNormalWithIcon,
      [SIZES.SMALL]: theme.orbit.paddingButtonSmallWithIcon,
    },
    marginRightIcon: {
      [SIZES.LARGE]: theme.orbit.marginButtonIconLarge,
      [SIZES.NORMAL]: theme.orbit.marginButtonIconNormal,
      [SIZES.SMALL]: theme.orbit.marginButtonIconSmall,
    },
    backgroundButton: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondary,
    },
    backgroundButtonHover: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
    },
    backgroundButtonActive: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
    },
    colorTextButton: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondary,
    },
    colorTextButtonHover: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryHover,
    },
    colorTextButtonActive: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryActive,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryActive,
    },
  };

  return (
    <StyledButtonLink
      onClick={onClick}
      component={component}
      onlyIcon={onlyIcon}
      sizeIcon={sizeIcon}
      tokens={tokens}
      type={type}
      target={external ? "_blank" : undefined}
      {...props}
    >
      {iconLeft && (
        <IconContainer
          size={size}
          type={type}
          onlyIcon={onlyIcon}
          sizeIcon={sizeIcon}
          tokens={tokens}
        >
          {iconLeft}
        </IconContainer>
      )}
      {children}
      {iconRight && (
        <IconContainerRight
          size={size}
          type={type}
          onlyIcon={onlyIcon}
          sizeIcon={sizeIcon}
          tokens={tokens}
        >
          {iconRight}
        </IconContainerRight>
      )}
    </StyledButtonLink>
  );
};

ButtonLink.defaultProps = {
  component: "button",
  external: false,
  type: "primary",
  size: "normal",
  width: 0,
  transparent: false,
};

export default ButtonLink;
