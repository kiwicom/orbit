// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { TYPES, SIZES, TOKENS } from "./consts";
import { ICON_SIZES } from "../Icon/consts";

import type { Props } from "./index";

const getSizeToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZES.LARGE]: theme.orbit.heightButtonLarge,
      [SIZES.NORMAL]: theme.orbit.heightButtonNormal,
      [SIZES.SMALL]: theme.orbit.heightButtonSmall,
    },
    [TOKENS.fontSizeButton]: {
      [SIZES.LARGE]: theme.orbit.fontSizeButtonLarge,
      [SIZES.NORMAL]: theme.orbit.fontSizeButtonNormal,
      [SIZES.SMALL]: theme.orbit.fontSizeButtonSmall,
    },
    [TOKENS.paddingButton]: {
      [SIZES.LARGE]: theme.orbit.paddingButtonLarge,
      [SIZES.NORMAL]: theme.orbit.paddingButtonNormal,
      [SIZES.SMALL]: theme.orbit.paddingButtonSmall,
    },
    [TOKENS.paddingButtonWithIcon]: {
      [SIZES.LARGE]: theme.orbit.paddingButtonLargeWithIcon,
      [SIZES.NORMAL]: theme.orbit.paddingButtonNormalWithIcon,
      [SIZES.SMALL]: theme.orbit.paddingButtonSmallWithIcon,
    },
    [TOKENS.marginRightIcon]: {
      [SIZES.LARGE]: theme.orbit.marginButtonIconLarge,
      [SIZES.NORMAL]: theme.orbit.marginButtonIconNormal,
      [SIZES.SMALL]: theme.orbit.marginButtonIconSmall,
    },
  };
  return tokens[name][size];
};
const getTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondary,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
    },
    [TOKENS.colorTextButton]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondary,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryHover,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryActive,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryActive,
    },
  };

  return tokens[name][type];
};

const IconContainer = styled(({ theme, sizeIcon, type, onlyIcon, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${({ onlyIcon }) => (onlyIcon ? "0" : getSizeToken(TOKENS.marginRightIcon))};

  > * {
    width: ${({ sizeIcon }) => ICON_SIZES[sizeIcon]};
    height: ${({ sizeIcon }) => ICON_SIZES[sizeIcon]};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
};

const IconContainerRight = styled(IconContainer)`
  margin-right: 0;
  margin-left: ${({ onlyIcon }) => (onlyIcon ? "0" : getSizeToken(TOKENS.marginRightIcon))};
`;

IconContainerRight.defaultProps = {
  theme: defaultTokens,
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
    ...props
  }) => {
    let Component = component;

    if (Component === "button" && props.href) {
      Component = "a";
    }

    return (
      <Component data-test={dataTest} {...props}>
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
  height: ${getSizeToken(TOKENS.heightButton)};
  background: ${getTypeToken(TOKENS.backgroundButton)};
  color: ${getTypeToken(TOKENS.colorTextButton)}!important;
  border: 0;
  border-radius: ${({ theme, circled }) =>
    circled ? getSizeToken(TOKENS.heightButton) : theme.orbit.borderRadiusNormal};
  padding: 0;
  padding-right: ${({ onlyIcon, iconRight }) =>
    (onlyIcon && "0") ||
    (iconRight ? getSizeToken(TOKENS.paddingButtonWithIcon) : getSizeToken(TOKENS.paddingButton))};
  padding-left: ${({ onlyIcon, icon, iconLeft }) =>
    (onlyIcon && "0") ||
    (iconLeft || icon
      ? getSizeToken(TOKENS.paddingButtonWithIcon)
      : getSizeToken(TOKENS.paddingButton))};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold}!important;
  font-size: ${getSizeToken(TOKENS.fontSizeButton)};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled, theme }) => (disabled ? theme.orbit.opacityButtonDisabled : "1")};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  text-decoration: none;

  &:enabled:hover {
    background: ${({ transparent }) => !transparent && getTypeToken(TOKENS.backgroundButtonHover)};
    color: ${getTypeToken(TOKENS.colorTextButtonHover)}!important;
  }

  &:enabled:active {
    transform: scale(${({ theme }) => theme.orbit.modifierScaleButtonActive});
    background: ${({ transparent }) => !transparent && getTypeToken(TOKENS.backgroundButtonActive)};
    color: ${getTypeToken(TOKENS.colorTextButtonActive)}!important;
  }

  &:enabled:focus {
    box-shadow: ${({ transparent, theme }) => !transparent && theme.orbit.boxShadowButtonFocus};

    &:active {
      box-shadow: none;
    }
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
    href,
    size = SIZES.NORMAL,
    icon,
    iconRight,
    type = TYPES.PRIMARY,
    onClick,
  } = props;

  const iconLeft = props.iconLeft || icon;
  const sizeIcon = size === SIZES.SMALL ? "small" : "medium";

  const onlyIcon = iconLeft && !children;

  return (
    <StyledButtonLink
      onClick={onClick}
      component={component}
      onlyIcon={onlyIcon}
      sizeIcon={sizeIcon}
      type={type}
      target={href && external ? "_blank" : undefined}
      {...props}
    >
      {iconLeft && (
        <IconContainer size={size} type={type} onlyIcon={onlyIcon} sizeIcon={sizeIcon}>
          {iconLeft}
        </IconContainer>
      )}
      {children}
      {iconRight && (
        <IconContainerRight size={size} type={type} onlyIcon={onlyIcon} sizeIcon={sizeIcon}>
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
