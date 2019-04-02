// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { TYPES, SIZES, TOKENS } from "./consts";
import { ICON_SIZES } from "../Icon/consts";
import { getSize } from "../Icon";
import { rtlSpacing } from "../utils/rtl";
import type { Ref } from "../common/common.js.flow";
import { SIZE_OPTIONS } from "../Button/consts";

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

const buttonSpacing = () => ({ theme, onlyIcon, iconRight, iconLeft, size }) => {
  if (onlyIcon) return rtlSpacing(theme.orbit.paddingButtonWithoutText);
  const tokens = {
    [TOKENS.paddingButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmall,
    },
    [TOKENS.paddingButtonWithIcons]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLargeWithIcons,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormalWithIcons,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmallWithIcons,
    },
    [TOKENS.paddingButtonWithLeftIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLargeWithLeftIcon,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormalWithLeftIcon,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmallWithLeftIcon,
    },
    [TOKENS.paddingButtonWithRightIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLargeWithRightIcon,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormalWithRightIcon,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmallWithRightIcon,
    },
  };
  if (iconLeft && iconRight) {
    return rtlSpacing(tokens[TOKENS.paddingButtonWithIcons][size]);
  }
  if (iconLeft && !iconRight) {
    return rtlSpacing(tokens[TOKENS.paddingButtonWithLeftIcon][size]);
  }
  if (!iconLeft && iconRight) {
    return rtlSpacing(tokens[TOKENS.paddingButtonWithRightIcon][size]);
  }
  return rtlSpacing(tokens[TOKENS.paddingButton][size]);
};

const iconSpacing = () => ({ theme, right, size, onlyIcon }) => {
  const tokens = {
    [TOKENS.marginRightIcon]: {
      [SIZES.LARGE]: theme.orbit.marginButtonIconLarge,
      [SIZES.NORMAL]: theme.orbit.marginButtonIconNormal,
      [SIZES.SMALL]: theme.orbit.marginButtonIconSmall,
    },
  };

  if (onlyIcon) {
    return null;
  }

  return rtlSpacing(
    right
      ? `0 0 0 ${tokens[TOKENS.marginRightIcon][size]}`
      : `0 ${tokens[TOKENS.marginRightIcon][size]} 0 0`,
  );
};

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${iconSpacing()};

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
  height: ${getSizeToken(TOKENS.heightButton)};
  background: ${getTypeToken(TOKENS.backgroundButton)};
  color: ${getTypeToken(TOKENS.colorTextButton)}!important;
  border: 0;
  border-radius: ${({ theme, circled }) =>
    circled ? getSizeToken(TOKENS.heightButton) : theme.orbit.borderRadiusNormal};
  padding: ${buttonSpacing()};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold}!important;
  font-size: ${getSizeToken(TOKENS.fontSizeButton)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled, theme }) => (disabled ? theme.orbit.opacityButtonDisabled : "1")};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  text-decoration: none;

  &:hover {
    ${({ transparent, disabled }) =>
      !disabled &&
      css`
        background: ${!transparent && getTypeToken(TOKENS.backgroundButtonHover)};
        color: ${getTypeToken(TOKENS.colorTextButtonHover)}!important;
      `};
  }

  &:active {
    ${({ transparent, disabled, theme }) =>
      !disabled &&
      css`
        transform: scale(${theme.orbit.modifierScaleButtonActive});
        background: ${!transparent && getTypeToken(TOKENS.backgroundButtonActive)};
        color: ${getTypeToken(TOKENS.colorTextButtonActive)}!important;
      `};
  }

  &:focus {
    ${({ disabled, theme }) =>
      !disabled &&
      css`
        box-shadow: 0 0 1px 1px ${theme.orbit.colorTextButtonWhiteBordered},
          0 0 1px 3px rgba(1, 118, 210, 0.6); // TODO: Create token
        &:active {
          box-shadow: none;
        }
      `};
  }
`;

StyledButtonLink.defaultProps = {
  theme: defaultTheme,
};

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
    ariaExpanded,
    ariaControls,
  } = props;

  const iconLeft = props.iconLeft || icon;
  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;

  const onlyIcon = iconLeft && !children;

  return (
    <StyledButtonLink
      {...props}
      onClick={onClick}
      component={component}
      size={size}
      onlyIcon={onlyIcon}
      sizeIcon={sizeIcon}
      type={type}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener noreferrer" : undefined}
      iconLeft={iconLeft}
      buttonRef={ref}
      width={width}
    >
      {iconLeft && (
        <IconContainer size={size} type={type} onlyIcon={onlyIcon} sizeIcon={sizeIcon}>
          {iconLeft}
        </IconContainer>
      )}
      {children}
      {iconRight && (
        <IconContainer size={size} type={type} onlyIcon={onlyIcon} sizeIcon={sizeIcon} right>
          {iconRight}
        </IconContainer>
      )}
    </StyledButtonLink>
  );
});

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
