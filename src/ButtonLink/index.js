// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { TYPES, SIZES, TOKENS } from "./consts";
import { ICON_SIZES } from "../Icon/consts";
import { getSize } from "../Icon";
import { rtlSpacing } from "../utils/rtl";
import type { Ref } from "../common/common.js.flow";

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
  const tokens = {
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
  };

  /*
  TODO: we need to define/update tokens
  NEEDS TO BE CHECKED ONCE AGAIN DUE TO https://github.com/kiwicom/orbit-design-tokens/pull/55

  paddingButtonWithoutText: 0

  paddingButtonSmall: 0 12px
  paddingButtonNormal: 0 16px
  paddingButtonLarge: 0 28px


  paddingButtonSmallWithIcons: 0 8px
  paddingButtonNormalWithIcons: 0 8px
  paddingButtonLargeWithIcons: 0 12px

  paddingButtonSmallWithLeftIcon: 0 12px 0 8px
  paddingButtonNormalWithLeftIcon: 0 16px 0 8px
  paddingButtonLargeWithLeftIcon: 0 28px 0 12px

  paddingButtonSmallWithRightIcon: 0 8px 0 12px
  paddingButtonNormalWithRightIcon: 0 8px 0 16px
  paddingButtonLargeWithRightIcon: 0 12px 0 28px
  */
  return rtlSpacing(
    (onlyIcon && "0") ||
      (iconLeft && iconRight && `0 ${tokens[TOKENS.paddingButtonWithIcon][size]}`) ||
      (iconLeft &&
        !iconRight &&
        `0 ${tokens[TOKENS.paddingButton][size]} 0 ${
          tokens[TOKENS.paddingButtonWithIcon][size]
        }`) ||
      (!iconLeft &&
        iconRight &&
        `0 ${tokens[TOKENS.paddingButtonWithIcon][size]} 0 ${
          tokens[TOKENS.paddingButton][size]
        }`) ||
      `0 ${tokens[TOKENS.paddingButton][size]}`,
  );
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
    submit,
    buttonRef,
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

// $FlowExpected
const ButtonLink = React.forwardRef((props: Props, ref: Ref) => {
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
  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;

  const onlyIcon = iconLeft && !children;

  return (
    <StyledButtonLink
      {...props}
      onClick={onClick}
      component={component}
      onlyIcon={onlyIcon}
      sizeIcon={sizeIcon}
      type={type}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener noreferrer" : undefined}
      iconLeft={iconLeft}
      buttonRef={ref}
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

ButtonLink.defaultProps = {
  component: "button",
  external: false,
  type: "primary",
  size: "normal",
  width: 0,
  transparent: false,
};

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
