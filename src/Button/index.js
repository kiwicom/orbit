// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { ICON_SIZES } from "../Icon/consts";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";

import type { Props } from "./index";

const getToken = (theme, type, name) => {
  const tokens = {
    heightButton: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.heightButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightButtonSmall,
    },
    fontSizeButton: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeButtonSmall,
    },
    paddingButton: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmall,
    },
    paddingButtonWithIcon: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLargeWithIcon,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormalWithIcon,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmallWithIcon,
    },
    marginRightIcon: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.marginButtonIconLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.marginButtonIconNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.marginButtonIconSmall,
    },
    backgroundButton: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonGoogle,
    },
    backgroundButtonHover: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondaryHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCriticalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonFacebookHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonGoogleHover,
    },
    backgroundButtonActive: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondaryActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCriticalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonFacebookActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonGoogleActive,
    },
    colorTextButton: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogle,
    },
    colorTextButtonBordered: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleBordered,
    },
    colorTextButtonHover: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleHover,
    },
    colorTextButtonBorderedHover: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleBorderedHover,
    },
    colorTextButtonActive: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleActive,
    },
    colorTextButtonBorderedActive: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleBorderedActive,
    },
    borderColorButton: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.borderColorButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.borderColorButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.orbit.borderColorButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.borderColorButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.orbit.borderColorButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.borderColorButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.borderColorButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.borderColorButtonGoogleBordered,
    },
    borderColorButtonHover: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.borderColorButtonPrimaryBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.borderColorButtonSecondaryBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.borderColorButtonInfoBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.borderColorButtonSuccessBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.borderColorButtonWarningBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.borderColorButtonCriticalBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.borderColorButtonFacebookBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.borderColorButtonGoogleBorderedHover,
    },
    borderColorButtonActive: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.borderColorButtonPrimaryBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.borderColorButtonSecondaryBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.borderColorButtonInfoBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.borderColorButtonSuccessBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.borderColorButtonWarningBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.borderColorButtonCriticalBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.borderColorButtonFacebookBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.borderColorButtonGoogleBorderedActive,
    },
  };

  return tokens[name][type];
};

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${({ onlyIcon, theme, size }) =>
    onlyIcon ? "0" : getToken(theme, size, "marginRightIcon")};
  color: ${({ theme, bordered, type }) =>
    bordered
      ? getToken(theme, type, "colorTextButtonBordered")
      : getToken(theme, type, "colorTextButton")};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;

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
  margin-left: ${({ onlyIcon, theme, size }) =>
    onlyIcon ? "0" : getToken(theme, size, "marginRightIcon")};
`;

IconContainerRight.defaultProps = {
  theme: defaultTokens,
};

export const StyledButton = styled(
  ({
    tokens,
    theme,
    component,
    external,
    type,
    icon,
    iconLeft,
    iconRight,
    sizeIcon,
    width,
    bordered,
    onlyIcon,
    block,
    style,
    ...props
  }) => {
    const Component = component === "button" && props.href ? "a" : component;
    return <Component {...props}>{props.children}</Component>;
  },
)`
  box-sizing: border-box;
  appearance: none;
  display: ${({ href, component }) => (href || component === "a" ? "inline-flex" : "flex")};
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: ${({ block, width, onlyIcon, theme, size }) =>
    block
      ? "100%"
      : (width && `${width}px`) ||
        (onlyIcon && `${getToken(theme, size, "heightButton")}`) ||
        "auto"};
  height: ${({ theme, size }) => getToken(theme, size, "heightButton")};
  background: ${({ bordered, theme, type }) =>
    bordered ? theme.orbit.backgroundButtonBordered : getToken(theme, type, "backgroundButton")};
  color: ${({ theme, bordered, type }) =>
    bordered
      ? getToken(theme, type, "colorTextButtonBordered")
      : getToken(theme, type, "colorTextButton")} !important;
  border: 0;
  box-shadow: ${({ bordered, theme, type }) =>
    bordered && `inset 0 0 0 1px ${getToken(theme, type, "borderColorButton")}`};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  padding: 0;
  padding-right: ${({ onlyIcon, iconRight, theme, size }) =>
    (onlyIcon && "0") ||
    (iconRight
      ? getToken(theme, size, "paddingButtonWithIcon")
      : getToken(theme, size, "paddingButton"))};
  padding-left: ${({ onlyIcon, icon, iconLeft, theme, size }) =>
    (onlyIcon && "0") ||
    (iconLeft || icon
      ? getToken(theme, size, "paddingButtonWithIcon")
      : getToken(theme, size, "paddingButton"))};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold}!important;
  font-size: ${({ theme, size }) => getToken(theme, size, "fontSizeButton")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  opacity: ${({ disabled, theme }) => disabled && theme.orbit.opacityButtonDisabled};
  pointer-events: ${({ disabled }) => disabled && "none"};

  &:hover {
    background: ${({ disabled, bordered, theme, type }) =>
      !disabled &&
      (bordered
        ? theme.orbit.backgroundButtonBorderedHover
        : getToken(theme, type, "backgroundButtonHover"))};
    box-shadow: ${({ disabled, bordered, theme, type }) =>
      !disabled &&
      (bordered && `inset 0 0 0 1px ${getToken(theme, type, "borderColorButtonHover")}`)};
    color: ${({ disabled, theme, bordered, type }) =>
      !disabled &&
      (bordered
        ? getToken(theme, type, "colorTextButtonBorderedHover")
        : getToken(theme, type, "colorTextButtonHover"))} !important;
    & ${IconContainer} {
      color: ${({ disabled, theme, bordered, type }) =>
        !disabled &&
        (bordered
          ? getToken(theme, type, "colorTextButtonBorderedHover")
          : getToken(theme, type, "colorTextButtonHover"))};
    }
  }

  &:active {
    ${({ disabled, theme }) =>
      !disabled && `transform: scale(${theme.orbit.modifierScaleButtonActive})`};
    background: ${({ disabled, bordered, theme, type }) =>
      !disabled &&
      (bordered
        ? theme.orbit.backgroundButtonBorderedActive
        : getToken(theme, type, "backgroundButtonActive"))};
    box-shadow: ${({ disabled, bordered, theme, type }) =>
      !disabled && (bordered && `inset 0 0 0 1px ${getToken(theme, type, "borderColorButtonActive")}`)};
    color: ${({ disabled, theme, bordered, type }) =>
      !disabled &&
      (bordered
        ? getToken(theme, type, "colorTextButtonBorderedActive")
        : getToken(theme, type, "colorTextButtonActive"))} !important;
    & ${IconContainer} {
      color: ${({ disabled, theme, bordered, type }) =>
        !disabled &&
        (bordered
          ? getToken(theme, type, "colorTextButtonBorderedActive")
          : getToken(theme, type, "colorTextButtonActive"))};
    }
  }
`;

StyledButton.defaultProps = {
  theme: defaultTokens,
};

const Button = (props: Props) => {
  const {
    component = "button",
    disabled,
    children,
    bordered,
    size = SIZE_OPTIONS.NORMAL,
    icon,
    iconRight,
    external,
    type = TYPE_OPTIONS.PRIMARY,
    block,
    width = 0,
  } = props;
  const iconLeft = props.iconLeft || icon;
  const sizeIcon = size === "small" ? "small" : "medium";
  const onlyIcon = iconLeft && !children;

  return (
    <StyledButton
      component={component}
      disabled={disabled}
      bordered={bordered}
      block={block}
      onlyIcon={onlyIcon}
      sizeIcon={sizeIcon}
      target={external ? "_blank" : undefined}
      size={size}
      type={type}
      width={width}
      {...props}
    >
      {iconLeft && (
        <IconContainer
          size={size}
          onlyIcon={onlyIcon}
          bordered={bordered}
          sizeIcon={sizeIcon}
          type={type}
        >
          {iconLeft}
        </IconContainer>
      )}
      {children}
      {iconRight && (
        <IconContainerRight
          size={size}
          onlyIcon={onlyIcon}
          bordered={bordered}
          sizeIcon={sizeIcon}
          type={type}
        >
          {iconRight}
        </IconContainerRight>
      )}
    </StyledButton>
  );
};

export default Button;
