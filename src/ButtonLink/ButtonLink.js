// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";

import { iconSizes } from "../Icon";

export const TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

export const SIZES = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large",
};

type Props = {|
  children?: React.Node,
  component: string | React.Node,
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
  disabled: boolean,
  block: boolean,
  external: boolean,
  type: $Values<typeof TYPES>,
  size: $Values<typeof SIZES>,
  href?: string,
  width: number,
  icon?: React.Node,
  theme: typeof defaultTokens,
  transparent: boolean,
|};

const IconContainer = styled(({ tokens, sizeIcon, type, onlyIcon, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${props => (props.onlyIcon ? "0" : props.tokens.marginRightIcon[props.size])};

  > * {
    width: ${props => iconSizes[props.sizeIcon]};
    height: ${props => iconSizes[props.sizeIcon]};
  }
`;

const StyledButton = styled(
  ({
    tokens,
    onlyIcon,
    component,
    external,
    block,
    type,
    icon,
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
  font-family: ${({ theme }) => theme.fontFamily};
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
  color: ${({ tokens, type }) => tokens.colorTextButton[type]};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  padding: 0 ${({ onlyIcon, tokens, size }) => (onlyIcon ? "0" : tokens.paddingButton[size])} 0
    ${({ onlyIcon, icon, tokens, size }) =>
      (onlyIcon && "0") ||
      (icon ? tokens.paddingButtonWithIcon[size] : tokens.paddingButton[size])};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: ${({ tokens, size }) => tokens.fontSizeButton[size]};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled, theme }) => (disabled ? theme.opacityButtonDisabled : "1")};
  transition: all 0.15s ease-in-out;
  outline: 0;
  text-decoration: none;

  &:enabled:hover {
    background: ${({ transparent, type, tokens }) =>
      !transparent && tokens.backgroundButtonHover[type]};
    color: ${props => props.tokens.colorTextButtonHover[props.type]};
  }

  &:enabled:active {
    transform: scale(${({ theme }) => theme.modifierScaleButtonActive});
    background: ${({ transparent, tokens, type }) =>
      !transparent && tokens.backgroundButtonActive[type]};
    color: ${({ tokens, type }) => tokens.colorTextButtonActive[type]};
  }
`;

const ButtonLink = (props: Props) => {
  const { external, children, component, size, icon, type, theme, onClick } = props;

  const sizeIcon = size === SIZES.SMALL ? "small" : "medium";

  const onlyIcon = icon && !children;
  const tokens = {
    heightButton: {
      [SIZES.LARGE]: theme.heightButtonLarge,
      [SIZES.NORMAL]: theme.heightButtonNormal,
      [SIZES.SMALL]: theme.heightButtonSmall,
    },
    fontSizeButton: {
      [SIZES.LARGE]: theme.fontSizeButtonLarge,
      [SIZES.NORMAL]: theme.fontSizeButtonNormal,
      [SIZES.SMALL]: theme.fontSizeButtonSmall,
    },
    paddingButton: {
      [SIZES.LARGE]: theme.paddingButtonLarge,
      [SIZES.NORMAL]: theme.paddingButtonNormal,
      [SIZES.SMALL]: theme.paddingButtonSmall,
    },
    paddingButtonWithIcon: {
      [SIZES.LARGE]: theme.paddingButtonLargeWithIcon,
      [SIZES.NORMAL]: theme.paddingButtonNormalWithIcon,
      [SIZES.SMALL]: theme.paddingButtonSmallWithIcon,
    },
    marginRightIcon: {
      [SIZES.LARGE]: theme.marginButtonIconLarge,
      [SIZES.NORMAL]: theme.marginButtonIconNormal,
      [SIZES.SMALL]: theme.marginButtonIconSmall,
    },
    backgroundButton: {
      [TYPES.PRIMARY]: theme.backgroundButtonPrimaryLink,
      [TYPES.SECONDARY]: theme.backgroundButtonSecondaryLink,
    },
    backgroundButtonHover: {
      [TYPES.PRIMARY]: theme.backgroundButtonPrimaryLinkHover,
      [TYPES.SECONDARY]: theme.backgroundButtonSecondaryLinkHover,
    },
    backgroundButtonActive: {
      [TYPES.PRIMARY]: theme.backgroundButtonPrimaryLinkActive,
      [TYPES.SECONDARY]: theme.backgroundButtonSecondaryLinkActive,
    },
    colorTextButton: {
      [TYPES.PRIMARY]: theme.colorTextButtonPrimaryLink,
      [TYPES.SECONDARY]: theme.colorTextButtonSecondaryLink,
    },
    colorTextButtonHover: {
      [TYPES.PRIMARY]: theme.colorTextButtonPrimaryLinkHover,
      [TYPES.SECONDARY]: theme.colorTextButtonSecondaryLinkHover,
    },
    colorTextButtonActive: {
      [TYPES.PRIMARY]: theme.colorTextButtonPrimaryLinkActive,
      [TYPES.SECONDARY]: theme.colorTextButtonSecondaryLinkActive,
    },
  };

  return (
    <StyledButton
      onClick={onClick}
      component={component}
      onlyIcon={onlyIcon}
      sizeIcon={sizeIcon}
      tokens={tokens}
      type={type}
      target={external ? "_blank" : undefined}
      {...props}
    >
      {icon && (
        <IconContainer
          size={size}
          type={type}
          onlyIcon={onlyIcon}
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

ButtonLink.displayName = "ButtonLink";
ButtonLink.defaultProps = {
  disabled: false,
  block: false,
  component: "button",
  external: false,
  type: "primary",
  size: "normal",
  width: 0,
  transparent: false,
  theme: defaultTokens,
};

export default ButtonLink;
