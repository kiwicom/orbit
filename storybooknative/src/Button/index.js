// @flow
import * as React from "react";
import { View, Text, Platform } from "react-native";

import Touchable from "../Touchable";
import styled, { type Style } from "../styled";
import defaultTokens from "../defaultTokens";
import { TYPE_OPTIONS, SIZE_OPTIONS, TYPE_TOKENS, SIZE_TOKENS } from "./consts";
import type { Props, SizeTokens, TypeTokens } from "./index.js.flow";

const getSizeToken = (name: SizeTokens, { theme, size }) => {
  const tokens = {
    [SIZE_TOKENS.heightButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.heightButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightButtonSmall,
    },
    [SIZE_TOKENS.paddingButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmall,
    },
    [SIZE_TOKENS.fontSizeButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeButtonSmall,
    },
  };
  return tokens[name][size];
};
const getTypeToken = (name: TypeTokens, { theme, type }) => {
  const tokens = {
    [TYPE_TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonGoogle,
    },
    [TYPE_TOKENS.borderColorButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.borderColorButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.borderColorButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.orbit.borderColorButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.borderColorButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.orbit.borderColorButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.borderColorButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.borderColorButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.borderColorButtonGoogleBordered,
    },
    [TYPE_TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogle,
    },
    [TYPE_TOKENS.colorTextButtonBordered]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleBordered,
    },
  };
  return tokens[name][type];
};

export const StyledButton = styled(View, (props): Style => {
  const { bordered, theme, width, circled, disabled } = props;
  return {
    width,
    justifyContent: "center",
    alignItems: "center",
    height: getSizeToken(SIZE_TOKENS.heightButton, props),
    backgroundColor: bordered
      ? theme.orbit.backgroundButtonBordered
      : getTypeToken(TYPE_TOKENS.backgroundButton, props),
    borderWidth: bordered ? "1px" : "0px",
    borderColor: getTypeToken(TYPE_TOKENS.borderColorButton, props),
    borderRadius: circled
      ? getSizeToken(SIZE_TOKENS.heightButton, props)
      : theme.orbit.borderRadiusNormal,
    padding: 0,
    paddingLeft: getSizeToken(SIZE_TOKENS.paddingButton, props),
    paddingRight: getSizeToken(SIZE_TOKENS.paddingButton, props),
    opacity: disabled && theme.orbit.opacityButtonDisabled,
  };
});

StyledButton.defaultProps = {
  theme: defaultTokens,
};

const StyledText = styled(Text, (props): Style => {
  const { bordered, theme } = props;
  return {
    color: bordered
      ? getTypeToken(TYPE_TOKENS.colorTextButtonBordered, props)
      : getTypeToken(TYPE_TOKENS.colorTextButton, props),
    fontWeight: theme.orbit.fontWeightBold,
    fontSize: getSizeToken(SIZE_TOKENS.fontSizeButton, props),
  };
});

StyledText.defaultProps = {
  theme: defaultTokens,
};

const StyledTouchableWrapper = styled(View, (props): Style => ({
  overflow: "hidden",
  width: props.width,
  borderRadius: props.circled
    ? getSizeToken(SIZE_TOKENS.heightButton, props)
    : props.theme.orbit.borderRadiusNormal,
}));

StyledTouchableWrapper.defaultProps = {
  theme: defaultTokens,
};

const Button = (props: Props) => {
  const {
    onPress = () => {},
    children,
    size = SIZE_OPTIONS.NORMAL,
    type = TYPE_OPTIONS.PRIMARY,
    ...rest
  } = props;
  let width;
  if (props.block) {
    width = "100%";
  } else {
    width = props.width ? `${props.width}px` : "auto";
  }

  if (Platform.OS === "android") {
    return (
      <StyledTouchableWrapper size={size} width={width} circled={props.circled}>
        <Touchable disabled={props.disabled || !props.onPress} onPress={onPress} width={width}>
          <StyledButton size={size} type={type} {...rest} width={width}>
            <StyledText size={size} type={type} bordered={props.bordered}>
              {children}
            </StyledText>
          </StyledButton>
        </Touchable>
      </StyledTouchableWrapper>
    );
  }

  return (
    <Touchable disabled={props.disabled || !props.onPress} onPress={onPress} width={width}>
      <StyledButton size={size} type={type} {...rest} width={width}>
        <StyledText size={size} type={type} bordered={props.bordered}>
          {children}
        </StyledText>
      </StyledButton>
    </Touchable>
  );
};

export default Button;
