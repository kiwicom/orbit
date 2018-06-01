// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";
import { withTheme } from "theming";

import { iconSizes } from "../Icon";

export const TYPE_OPTIONS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  CRITICAL: "critical",
  FACEBOOK: "facebook",
  GOOGLE: "google",
};

export const SIZE_OPTIONS = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large",
};

type Props = {
  children?: React.Node,
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
  bordered: boolean,
  disabled: boolean,
  block: boolean,
  type: $Values<typeof TYPE_OPTIONS>,
  size: $Values<typeof SIZE_OPTIONS>,
  width: number,
  icon?: React.Node,
  theme: typeof defaultTokens,
};

const IconContainer = styled(({ theme, tokens, bordered, sizeIcon, type, onlyIcon, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${({ onlyIcon, tokens, size }) => (onlyIcon ? "0" : tokens.marginRightIcon[size])};
  color: ${({ tokens, bordered, type }) =>
    bordered ? tokens.colorTextButtonBordered[type] : tokens.colorTextButton[type]};
  transition: all ${({ theme }) => theme.durationFast} ease-in-out;

  > * {
    width: ${({ sizeIcon }) => iconSizes[sizeIcon]};
    height: ${({ sizeIcon }) => iconSizes[sizeIcon]};
  }
`;

const StyledButton = styled(
  ({ tokens, theme, type, icon, sizeIcon, width, bordered, onlyIcon, block, ...props }) => (
    <button {...props} />
  ),
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
  background: ${({ bordered, tokens, type }) =>
    bordered ? tokens.backgroundButtonBordered : tokens.backgroundButton[type]};
  color: ${({ tokens, bordered, type }) =>
    bordered ? tokens.colorTextButtonBordered[type] : tokens.colorTextButton[type]};
  border: 0;
  box-shadow: ${({ bordered, tokens, type }) =>
    bordered ? `inset 0 0 0 1px ${tokens.borderColorButton[type]}` : "0"};
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
    background: ${({ bordered, tokens, type }) =>
      bordered ? tokens.backgroundButtonBorderedHover : tokens.backgroundButtonHover[type]};
    border-color: ${({ bordered, tokens, type }) =>
      bordered && tokens.borderColorButtonHover[type]};
    color: ${({ tokens, bordered, type }) =>
      bordered ? tokens.colorTextButtonBorderedHover[type] : tokens.colorTextButtonHover[type]};
    & ${IconContainer} {
      color: ${({ tokens, bordered, type }) =>
        bordered ? tokens.colorTextButtonBorderedHover[type] : tokens.colorTextButtonHover[type]};
    }
  }

  &:enabled:active {
    transform: scale(${({ theme }) => theme.modifierScaleButtonActive});
    background: ${({ bordered, tokens, type }) =>
      bordered ? tokens.backgroundButtonBorderedActive : tokens.backgroundButtonActive[type]};
    border-color: ${({ bordered, tokens, type }) =>
      bordered && tokens.borderColorButtonActive[type]};
    color: ${({ tokens, bordered, type }) =>
      bordered ? tokens.colorTextButtonBorderedActive[type] : tokens.colorTextButtonActive[type]};
    & ${IconContainer} {
      color: ${({ tokens, bordered, type }) =>
        bordered ? tokens.colorTextButtonBorderedActive[type] : tokens.colorTextButtonActive[type]};
    }
  }
`;

const Button = (props: Props) => {
  const { children, bordered, size, icon, theme, type } = props;
  const sizeIcon = size === "small" ? "small" : "medium";
  const onlyIcon = icon && !children;
  const tokens = {
    heightButton: {
      [SIZE_OPTIONS.LARGE]: theme.heightButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.heightButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.heightButtonSmall,
    },
    fontSizeButton: {
      [SIZE_OPTIONS.LARGE]: theme.fontSizeButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.fontSizeButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.fontSizeButtonSmall,
    },
    paddingButton: {
      [SIZE_OPTIONS.LARGE]: theme.paddingButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.paddingButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.paddingButtonSmall,
    },
    paddingButtonWithIcon: {
      [SIZE_OPTIONS.LARGE]: theme.paddingButtonLargeWithIcon,
      [SIZE_OPTIONS.NORMAL]: theme.paddingButtonNormalWithIcon,
      [SIZE_OPTIONS.SMALL]: theme.paddingButtonSmallWithIcon,
    },
    marginRightIcon: {
      [SIZE_OPTIONS.LARGE]: theme.marginButtonIconLarge,
      [SIZE_OPTIONS.NORMAL]: theme.marginButtonIconNormal,
      [SIZE_OPTIONS.SMALL]: theme.marginButtonIconSmall,
    },
    backgroundButton: {
      [TYPE_OPTIONS.PRIMARY]: theme.backgroundButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.backgroundButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.backgroundButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.backgroundButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.backgroundButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.backgroundButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.backgroundButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.backgroundButtonGoogle,
    },
    backgroundButtonBordered: theme.backgroundButtonBordered,
    backgroundButtonHover: {
      [TYPE_OPTIONS.PRIMARY]: theme.backgroundButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.backgroundButtonSecondaryHover,
      [TYPE_OPTIONS.INFO]: theme.backgroundButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.backgroundButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.backgroundButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.backgroundButtonCriticalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.backgroundButtonFacebookHover,
      [TYPE_OPTIONS.GOOGLE]: theme.backgroundButtonGoogleHover,
    },
    backgroundButtonBorderedHover: theme.backgroundButtonBorderedHover,
    backgroundButtonActive: {
      [TYPE_OPTIONS.PRIMARY]: theme.backgroundButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.backgroundButtonSecondaryActive,
      [TYPE_OPTIONS.INFO]: theme.backgroundButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.backgroundButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.backgroundButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.backgroundButtonCriticalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.backgroundButtonFacebookActive,
      [TYPE_OPTIONS.GOOGLE]: theme.backgroundButtonGoogleActive,
    },
    backgroundButtonBorderedActive: theme.backgroundButtonBorderedActive,
    colorTextButton: {
      [TYPE_OPTIONS.PRIMARY]: theme.colorTextButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.colorTextButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.colorTextButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.colorTextButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.colorTextButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.colorTextButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.colorTextButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.colorTextButtonGoogle,
    },
    colorTextButtonBordered: {
      [TYPE_OPTIONS.PRIMARY]: theme.colorTextButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.colorTextButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.colorTextButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.colorTextButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.colorTextButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.colorTextButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.colorTextButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.colorTextButtonGoogleBordered,
    },
    colorTextButtonHover: {
      [TYPE_OPTIONS.PRIMARY]: theme.colorTextButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.colorTextButtonSecondaryHover,
      [TYPE_OPTIONS.INFO]: theme.colorTextButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.colorTextButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.colorTextButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.colorTextButtonCriticalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.colorTextButtonFacebookHover,
      [TYPE_OPTIONS.GOOGLE]: theme.colorTextButtonGoogleHover,
    },
    colorTextButtonBorderedHover: {
      [TYPE_OPTIONS.PRIMARY]: theme.colorTextButtonPrimaryBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.colorTextButtonSecondaryBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.colorTextButtonInfoBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.colorTextButtonSuccessBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.colorTextButtonWarningBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.colorTextButtonCriticalBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.colorTextButtonFacebookBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.colorTextButtonGoogleBorderedHover,
    },
    colorTextButtonActive: {
      [TYPE_OPTIONS.PRIMARY]: theme.colorTextButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.colorTextButtonSecondaryActive,
      [TYPE_OPTIONS.INFO]: theme.colorTextButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.colorTextButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.colorTextButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.colorTextButtonCriticalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.colorTextButtonFacebookActive,
      [TYPE_OPTIONS.GOOGLE]: theme.colorTextButtonGoogleActive,
    },
    colorTextButtonBorderedActive: {
      [TYPE_OPTIONS.PRIMARY]: theme.colorTextButtonPrimaryBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.colorTextButtonSecondaryBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.colorTextButtonInfoBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.colorTextButtonSuccessBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.colorTextButtonWarningBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.colorTextButtonCriticalBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.colorTextButtonFacebookBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.colorTextButtonGoogleBorderedActive,
    },
    borderColorButton: {
      [TYPE_OPTIONS.PRIMARY]: theme.borderColorButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.borderColorButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.borderColorButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.borderColorButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.borderColorButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.borderColorButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.borderColorButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.borderColorButtonGoogleBordered,
    },
    borderColorButtonHover: {
      [TYPE_OPTIONS.PRIMARY]: theme.borderColorButtonPrimaryBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.borderColorButtonSecondaryBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.borderColorButtonInfoBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.borderColorButtonSuccessBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.borderColorButtonWarningBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.borderColorButtonCriticalBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.borderColorButtonFacebookBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.borderColorButtonGoogleBorderedHover,
    },
    borderColorButtonActive: {
      [TYPE_OPTIONS.PRIMARY]: theme.borderColorButtonPrimaryBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.borderColorButtonSecondaryBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.borderColorButtonInfoBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.borderColorButtonSuccessBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.borderColorButtonWarningBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.borderColorButtonCriticalBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.borderColorButtonFacebookBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.borderColorButtonGoogleBorderedActive,
    },
  };

  return (
    <StyledButton onlyIcon={onlyIcon} sizeIcon={sizeIcon} tokens={tokens} {...props}>
      {icon && (
        <IconContainer
          size={size}
          onlyIcon={onlyIcon}
          bordered={bordered}
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
