// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { ICON_SIZES } from "../Icon/consts";
import { TYPE_OPTIONS, SIZE_OPTIONS, TOKENS } from "./consts";
import Loading, { StyledSpinner } from "../Loading";
import { rtlSpacing } from "../utils/rtl";
import { getSize } from "../Icon";
import type { Ref } from "../common/common.js.flow";

import type { Props } from "./index";
import getSpacingToken from "../common/getSpacingToken";

const getSizeToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.heightButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightButtonSmall,
    },
    [TOKENS.loadingWidth]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.widthIconMedium,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.widthIconMedium,
      [SIZE_OPTIONS.SMALL]: theme.orbit.widthIconSmall,
    },
    [TOKENS.loadingHeight]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.heightIconMedium,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightIconMedium,
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightIconSmall,
    },
    [TOKENS.fontSizeButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeButtonSmall,
    },
  };
  return tokens[name][size];
};
const getTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonGoogle,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundButtonWhite,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondaryHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCriticalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonFacebookHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonGoogleHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundButtonWhiteHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondaryActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCriticalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonFacebookActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonGoogleActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundButtonWhiteActive,
    },
    [TOKENS.backgroundButtonBordered]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundButtonWhiteBordered,
    },
    [TOKENS.backgroundButtonBorderedHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundButtonWhiteBorderedHover,
    },
    [TOKENS.backgroundButtonBorderedActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundButtonWhiteBorderedActive,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogle,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextButtonWhite,
    },
    [TOKENS.colorTextButtonBordered]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleBordered,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextButtonWhiteBordered,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextButtonWhiteHover,
    },
    [TOKENS.colorTextButtonBorderedHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleBorderedHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextButtonWhiteBorderedHover,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextButtonWhiteActive,
    },
    [TOKENS.colorTextButtonBorderedActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleBorderedActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextButtonWhiteBorderedActive,
    },
    [TOKENS.borderColorButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.borderColorButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.borderColorButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.orbit.borderColorButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.borderColorButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.orbit.borderColorButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.borderColorButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.borderColorButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.borderColorButtonGoogleBordered,
      [TYPE_OPTIONS.WHITE]: theme.orbit.borderColorButtonWhiteBordered,
    },
    [TOKENS.borderColorButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.borderColorButtonPrimaryBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.borderColorButtonSecondaryBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.borderColorButtonInfoBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.borderColorButtonSuccessBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.borderColorButtonWarningBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.borderColorButtonCriticalBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.borderColorButtonFacebookBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.borderColorButtonGoogleBorderedHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.borderColorButtonWhiteBorderedHover,
    },
    [TOKENS.borderColorButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.borderColorButtonPrimaryBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.borderColorButtonSecondaryBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.borderColorButtonInfoBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.borderColorButtonSuccessBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.borderColorButtonWarningBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.borderColorButtonCriticalBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.borderColorButtonFacebookBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.borderColorButtonGoogleBorderedActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.borderColorButtonWhiteBorderedActive,
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
      [SIZE_OPTIONS.LARGE]: theme.orbit.marginButtonIconLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.marginButtonIconNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.marginButtonIconSmall,
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
  flex: ${({ block }) => (block ? "1 1 100%" : "0 0 auto")};
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
  padding: ${buttonSpacing()};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold}!important;
  font-size: ${getSizeToken(TOKENS.fontSizeButton)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  opacity: ${({ disabled, theme }) => disabled && theme.orbit.opacityButtonDisabled};
  box-shadow: ${({ bordered, theme, type }) =>
    bordered &&
    `inset 0 0 0 1px ${getTypeToken(TOKENS.borderColorButton)({
      theme,
      type,
    })}`}; // Cannot resolve with 0 0 0 1px getTypeToken(TOKENS.borderColorButton)
  margin-bottom: ${getSpacingToken};

  &:hover {
    background: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TOKENS.backgroundButtonBorderedHover)
        : getTypeToken(TOKENS.backgroundButtonHover))};
    box-shadow: ${({ disabled, bordered, theme, type }) =>
      !disabled &&
      bordered &&
      `inset 0 0 0 1px ${getTypeToken(TOKENS.borderColorButtonHover)({ theme, type })}`};
    color: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TOKENS.colorTextButtonBorderedHover)
        : getTypeToken(TOKENS.colorTextButtonHover))}!important;

    ${IconContainer} {
      color: ${({ disabled, bordered }) =>
        !disabled &&
        (bordered
          ? getTypeToken(TOKENS.colorTextButtonBorderedHover)
          : getTypeToken(TOKENS.colorTextButtonHover))};
    }
  }

  &:active {
    ${({ disabled, theme }) =>
      !disabled && `transform: scale(${theme.orbit.modifierScaleButtonActive})`};
    background: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TOKENS.backgroundButtonBorderedActive)
        : getTypeToken(TOKENS.backgroundButtonActive))};
    box-shadow: ${({ disabled, bordered, theme, type }) =>
      !disabled &&
      (bordered &&
        `inset 0 0 0 1px ${getTypeToken(TOKENS.borderColorButtonActive)({ theme, type })}`)};
    color: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TOKENS.colorTextButtonBorderedActive)
        : getTypeToken(TOKENS.colorTextButtonActive))}!important;
    & ${IconContainer} {
      color: ${({ disabled, bordered }) =>
        !disabled &&
        (bordered
          ? getTypeToken(TOKENS.colorTextButtonBorderedActive)
          : getTypeToken(TOKENS.colorTextButtonActive))};
    }
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

  ${StyledSpinner} {
    width: ${getSizeToken(TOKENS.loadingWidth)};
    height: ${getSizeToken(TOKENS.loadingHeight)};
  }
`;

StyledButton.defaultProps = {
  theme: defaultTheme,
};

const StyledButtonContent = styled.div`
  visibility: ${({ loading }) => loading && "hidden"};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

StyledButtonContent.defaultProps = {
  theme: defaultTheme,
};

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
  } = props;
  const iconLeft = props.iconLeft || icon;
  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;
  const onlyIcon = iconLeft && !children;
  const isDisabled = loading || disabled;

  return (
    <StyledButton
      {...props}
      iconLeft={iconLeft}
      bordered={bordered}
      block={block}
      component={component}
      disabled={isDisabled}
      loading={loading}
      onlyIcon={onlyIcon}
      size={size}
      sizeIcon={sizeIcon}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener noreferrer" : undefined}
      type={type}
      width={width}
      buttonRef={ref}
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
        {children}
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
