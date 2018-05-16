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

const IconContainer = styled(({ tokens, variation, sizeIcon, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${props => (props.onlyIcon ? "0" : props.tokens.marginRightIcon[props.size])};
  color: ${props => props.tokens.colorTextButton[props.variation][props.type]};

  > * {
    width: ${props => iconSizes[props.sizeIcon]};
    height: ${props => iconSizes[props.sizeIcon]};
  }
`;

const StyledButton = styled(
  ({ tokens, theme, type, variation, icon, sizeIcon, width, disabled, ...props }) => (
    <button {...props} />
  ),
)`
  box-sizing: border-box;
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props =>
    props.block
      ? "100%"
      : (props.width && `${props.width}px`) ||
        (props.onlyIcon && `${props.tokens.heightButton[props.size]}`) ||
        "auto"};
  height: ${props => props.tokens.heightButton[props.size]};
  background: ${props =>
    props.bordered
      ? props.tokens.backgroundButton.bordered
      : props.tokens.backgroundButton[props.variation][props.type]};
  color: ${props => props.tokens.colorTextButton[props.variation][props.type]};
  border: 0;
  box-shadow: ${props =>
    props.bordered
      ? `inset 0 0 0 1px ${props.tokens.borderColorButton[props.variation][props.type]}`
      : "0"};
  border-radius: ${props => props.theme.borderRadiusNormal};
  padding: 0 ${props => (props.onlyIcon ? "0" : props.tokens.paddingButton[props.size])} 0
    ${props =>
      (props.onlyIcon && "0") ||
      (props.icon
        ? props.tokens.paddingButtonWithIcon[props.size]
        : props.tokens.paddingButton[props.size])};
  font-weight: ${props => props.theme.fontWeightBold};
  font-size: ${props => props.tokens.fontSizeButton[props.size]};
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? props.theme.opacityButtonDisabled : "1")};
  transition: all 0.15s ease-in-out;
  outline: 0;

  &:hover {
    background: ${props =>
      props.bordered
        ? props.tokens.backgroundButtonHover[props.variation]
        : props.tokens.backgroundButtonHover[props.variation][props.type]};
    border-color: ${props =>
      props.bordered && props.tokens.borderColorButtonHover[props.variation][props.type]};
    color: ${props => props.tokens.colorTextButtonHover[props.variation][props.type]};
  }

  &:active {
    transform: scale(${props => props.theme.modifierScaleButtonActive});
    background: ${props =>
      props.bordered
        ? props.tokens.backgroundButtonActive[props.variation]
        : props.tokens.backgroundButtonActive[props.variation][props.type]};
    border-color: ${props =>
      props.bordered && props.tokens.borderColorButtonActive[props.variation][props.type]};
    color: ${props => props.tokens.colorTextButtonActive[props.variation][props.type]};
  }
`;

const Button = (props: Props) => {
  const { children, bordered, size, icon, theme } = props;
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
