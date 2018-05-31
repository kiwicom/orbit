// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";
import { withTheme } from "theming";

import { iconSizes } from "../Icon";

type Props = {
  children?: React.Node,
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
  bordered: boolean,
  disabled: boolean,
  block: boolean,
  type:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "critical"
    | "facebook"
    | "google",
  size: "small" | "normal" | "large",
  width: number,
  icon?: React.Node,
  theme: typeof defaultTokens,
};

const IconContainer = styled(({ theme, tokens, variation, sizeIcon, type, onlyIcon, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${({ onlyIcon, tokens, size }) => (onlyIcon ? "0" : tokens.marginRightIcon[size])};
  color: ${({ tokens, variation, type }) => tokens.colorTextButton[variation][type]};
  transition: all ${({ theme }) => theme.durationFast} ease-in-out;

  > * {
    width: ${({ sizeIcon }) => iconSizes[sizeIcon]};
    height: ${({ sizeIcon }) => iconSizes[sizeIcon]};
  }
`;

const StyledButton = styled(
  ({
    tokens,
    theme,
    type,
    variation,
    icon,
    sizeIcon,
    width,
    bordered,
    onlyIcon,
    block,
    ...props
  }) => <button {...props} />,
)`
  box-sizing: border-box;
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ block, width, onlyIcon, tokens, size }) =>
    block
      ? "100%"
      : (width && `${width}px`) || (onlyIcon && `${tokens.heightButton[size]}`) || "auto"};
  height: ${({ tokens, size }) => tokens.heightButton[size]};
  background: ${({ bordered, tokens, variation, type }) =>
    bordered ? tokens.backgroundButton.bordered : tokens.backgroundButton[variation][type]};
  color: ${({ tokens, variation, type }) => tokens.colorTextButton[variation][type]};
  border: 0;
  box-shadow: ${({ bordered, tokens, variation, type }) =>
    bordered ? `inset 0 0 0 1px ${tokens.borderColorButton[variation][type]}` : "0"};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  padding: 0 ${({ onlyIcon, tokens, size }) => (onlyIcon ? "0" : tokens.paddingButton[size])} 0
    ${({ onlyIcon, icon, tokens, size }) =>
      (onlyIcon && "0") ||
      (icon ? tokens.paddingButtonWithIcon[size] : tokens.paddingButton[size])};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: ${({ tokens, size }) => tokens.fontSizeButton[size]};
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  outline: 0;

  &:disabled {
    cursor: default;
    opacity: ${({ theme }) => theme.opacityButtonDisabled};
  }
  &:enabled:hover {
    background: ${({ bordered, tokens, variation, type }) =>
      bordered
        ? tokens.backgroundButtonHover[variation]
        : tokens.backgroundButtonHover[variation][type]};
    border-color: ${({ bordered, tokens, variation, type }) =>
      bordered && tokens.borderColorButtonHover[variation][type]};
    color: ${({ tokens, variation, type }) => tokens.colorTextButtonHover[variation][type]};
    & ${IconContainer} {
      color: ${({ tokens, variation, type }) => tokens.colorTextButtonHover[variation][type]};
    }
  }

  &:enabled:active {
    transform: scale(${({ theme }) => theme.modifierScaleButtonActive});
    background: ${({ bordered, tokens, variation, type }) =>
      bordered
        ? tokens.backgroundButtonActive[variation]
        : tokens.backgroundButtonActive[variation][type]};
    border-color: ${({ bordered, tokens, variation, type }) =>
      bordered && tokens.borderColorButtonActive[variation][type]};
    color: ${({ tokens, variation, type }) => tokens.colorTextButtonActive[variation][type]};
    & ${IconContainer} {
      color: ${({ tokens, variation, type }) => tokens.colorTextButtonActive[variation][type]};
    }
  }
`;

const Button = (props: Props) => {
  const { children, bordered, size, icon, theme, type } = props;
  const sizeIcon = size === "small" ? "small" : "medium";
  const onlyIcon = icon && !children;
  const variation = bordered ? "bordered" : "filled";
  const tokens = {
    heightButton: {
      large: theme.heightButtonLarge,
      normal: theme.heightButtonNormal,
      small: theme.heightButtonSmall,
    },
    fontSizeButton: {
      large: theme.fontSizeButtonLarge,
      normal: theme.fontSizeButtonNormal,
      small: theme.fontSizeButtonSmall,
    },
    paddingButton: {
      large: theme.paddingButtonLarge,
      normal: theme.paddingButtonNormal,
      small: theme.paddingButtonSmall,
    },
    paddingButtonWithIcon: {
      large: theme.paddingButtonLargeWithIcon,
      normal: theme.paddingButtonNormalWithIcon,
      small: theme.paddingButtonSmallWithIcon,
    },
    marginRightIcon: {
      small: theme.marginButtonIconSmall,
      normal: theme.marginButtonIconNormal,
      large: theme.marginButtonIconLarge,
    },
    backgroundButton: {
      filled: {
        primary: theme.backgroundButtonPrimary,
        secondary: theme.backgroundButtonSecondary,
        info: theme.backgroundButtonInfo,
        success: theme.backgroundButtonSuccess,
        warning: theme.backgroundButtonWarning,
        critical: theme.backgroundButtonCritical,
        facebook: theme.backgroundButtonFacebook,
        google: theme.backgroundButtonGoogle,
      },
      bordered: theme.backgroundButtonBordered,
    },
    backgroundButtonHover: {
      filled: {
        primary: theme.backgroundButtonPrimaryHover,
        secondary: theme.backgroundButtonSecondaryHover,
        info: theme.backgroundButtonInfoHover,
        success: theme.backgroundButtonSuccessHover,
        warning: theme.backgroundButtonWarningHover,
        critical: theme.backgroundButtonCriticalHover,
        facebook: theme.backgroundButtonFacebookHover,
        google: theme.backgroundButtonGoogleHover,
      },
      bordered: theme.backgroundButtonBorderedHover,
    },
    backgroundButtonActive: {
      filled: {
        primary: theme.backgroundButtonPrimaryActive,
        secondary: theme.backgroundButtonSecondaryActive,
        info: theme.backgroundButtonInfoActive,
        success: theme.backgroundButtonSuccessActive,
        warning: theme.backgroundButtonWarningActive,
        critical: theme.backgroundButtonCriticalActive,
        facebook: theme.backgroundButtonFacebookActive,
        google: theme.backgroundButtonGoogleActive,
      },
      bordered: theme.backgroundButtonBorderedActive,
    },
    colorTextButton: {
      filled: {
        primary: theme.colorTextButtonPrimary,
        secondary: theme.colorTextButtonSecondary,
        info: theme.colorTextButtonInfo,
        success: theme.colorTextButtonSuccess,
        warning: theme.colorTextButtonWarning,
        critical: theme.colorTextButtonCritical,
        facebook: theme.colorTextButtonFacebook,
        google: theme.colorTextButtonGoogle,
      },
      bordered: {
        primary: theme.colorTextButtonPrimaryBordered,
        secondary: theme.colorTextButtonSecondaryBordered,
        info: theme.colorTextButtonInfoBordered,
        success: theme.colorTextButtonSuccessBordered,
        warning: theme.colorTextButtonWarningBordered,
        critical: theme.colorTextButtonCriticalBordered,
        facebook: theme.colorTextButtonFacebookBordered,
        google: theme.colorTextButtonGoogleBordered,
      },
    },
    colorTextButtonHover: {
      filled: {
        primary: theme.colorTextButtonPrimaryHover,
        secondary: theme.colorTextButtonSecondaryHover,
        info: theme.colorTextButtonInfoHover,
        success: theme.colorTextButtonSuccessHover,
        warning: theme.colorTextButtonWarningHover,
        critical: theme.colorTextButtonCriticalHover,
        facebook: theme.colorTextButtonFacebookHover,
        google: theme.colorTextButtonGoogleHover,
      },
      bordered: {
        primary: theme.colorTextButtonPrimaryBorderedHover,
        secondary: theme.colorTextButtonSecondaryBorderedHover,
        info: theme.colorTextButtonInfoBorderedHover,
        success: theme.colorTextButtonSuccessBorderedHover,
        warning: theme.colorTextButtonWarningBorderedHover,
        critical: theme.colorTextButtonCriticalBorderedHover,
        facebook: theme.colorTextButtonFacebookBorderedHover,
        google: theme.colorTextButtonGoogleBorderedHover,
      },
    },
    colorTextButtonActive: {
      filled: {
        primary: theme.colorTextButtonPrimaryActive,
        secondary: theme.colorTextButtonSecondaryActive,
        info: theme.colorTextButtonInfoActive,
        success: theme.colorTextButtonSuccessActive,
        warning: theme.colorTextButtonWarningActive,
        critical: theme.colorTextButtonCriticalActive,
        facebook: theme.colorTextButtonFacebookActive,
        google: theme.colorTextButtonGoogleActive,
      },
      bordered: {
        primary: theme.colorTextButtonPrimaryBorderedActive,
        secondary: theme.colorTextButtonSecondaryBorderedActive,
        info: theme.colorTextButtonInfoBorderedActive,
        success: theme.colorTextButtonSuccessBorderedActive,
        warning: theme.colorTextButtonWarningBorderedActive,
        critical: theme.colorTextButtonCriticalBorderedActive,
        facebook: theme.colorTextButtonFacebookBorderedActive,
        google: theme.colorTextButtonGoogleBorderedActive,
      },
    },
    borderColorButton: {
      bordered: {
        primary: theme.borderColorButtonPrimaryBordered,
        secondary: theme.borderColorButtonSecondaryBordered,
        info: theme.borderColorButtonInfoBordered,
        success: theme.borderColorButtonSuccessBordered,
        warning: theme.borderColorButtonWarningBordered,
        critical: theme.borderColorButtonCriticalBordered,
        facebook: theme.borderColorButtonFacebookBordered,
        google: theme.borderColorButtonGoogleBordered,
      },
    },
    borderColorButtonHover: {
      bordered: {
        primary: theme.borderColorButtonPrimaryBorderedHover,
        secondary: theme.borderColorButtonSecondaryBorderedHover,
        info: theme.borderColorButtonInfoBorderedHover,
        success: theme.borderColorButtonSuccessBorderedHover,
        warning: theme.borderColorButtonWarningBorderedHover,
        critical: theme.borderColorButtonCriticalBorderedHover,
        facebook: theme.borderColorButtonFacebookBorderedHover,
        google: theme.borderColorButtonGoogleBorderedHover,
      },
    },
    borderColorButtonActive: {
      bordered: {
        primary: theme.borderColorButtonPrimaryBorderedActive,
        secondary: theme.borderColorButtonSecondaryBorderedActive,
        info: theme.borderColorButtonInfoBorderedActive,
        success: theme.borderColorButtonSuccessBorderedActive,
        warning: theme.borderColorButtonWarningBorderedActive,
        critical: theme.borderColorButtonCriticalBorderedActive,
        facebook: theme.borderColorButtonFacebookBorderedActive,
        google: theme.borderColorButtonGoogleBorderedActive,
      },
    },
  };

  return (
    <StyledButton
      onlyIcon={onlyIcon}
      variation={variation}
      sizeIcon={sizeIcon}
      tokens={tokens}
      {...props}
    >
      {icon && (
        <IconContainer
          size={size}
          onlyIcon={onlyIcon}
          variation={variation}
          sizeIcon={sizeIcon}
          tokens={tokens}
          type={type}
          theme={theme}
        >
          {icon}
        </IconContainer>
      )}
      {children}
    </StyledButton>
  );
};

const ButtonWithTheme = withTheme(Button);
ButtonWithTheme.displayName = "Button";
ButtonWithTheme.defaultProps = {
  disabled: false,
  bordered: false,
  block: false,
  type: "primary",
  size: "normal",
  width: 0,
};

export default ButtonWithTheme;
