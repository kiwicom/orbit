// @flow
import * as React from "react";
import { View, Text } from "react-native";

import Touchable from "../Touchable";
import styled from "../styled";
import defaultTokens from "../defaultTokens";
import { TYPE_OPTIONS, SIZE_OPTIONS, TOKENS } from "./consts";

import type { Props } from "./index";

const getSizeToken = (name, { theme, size }) => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.heightButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightButtonSmall,
    },
    [TOKENS.paddingButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmall,
    },
    [TOKENS.fontSizeButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeButtonSmall,
    },
  };
  return tokens[name][size];
};
const getTypeToken = (name, { theme, type }) => {
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
    },
  };
  return tokens[name][type];
};

export const StyledButton = styled(View, props => {
  const { bordered, theme, block, width, circled, disabled } = props;
  return {
    justifyContent: "center",
    alignItems: "center",
    height: getSizeToken(TOKENS.heightButton, props),
    backgroundColor: bordered
      ? theme.orbit.backgroundButtonBordered
      : getTypeToken(TOKENS.backgroundButton, props),
    width: block ? "100%" : width || "auto",
    borderWidth: bordered ? 1 : 0,
    borderColor: getTypeToken(TOKENS.borderColorButton, props),
    borderRadius: circled
      ? getSizeToken(TOKENS.heightButton, props)
      : theme.orbit.borderRadiusNormal,
    padding: 0,
    paddingLeft: getSizeToken(TOKENS.paddingButton, props),
    paddingRight: getSizeToken(TOKENS.paddingButton, props),
    opacity: disabled && theme.orbit.opacityButtonDisabled,
  };
});

StyledButton.defaultProps = {
  theme: defaultTokens,
};

const StyledText = styled(Text, props => {
  const { bordered, theme } = props;
  return {
    color: bordered
      ? getTypeToken(TOKENS.colorTextButtonBordered, props)
      : getTypeToken(TOKENS.colorTextButton, props),
    fontWeight: theme.orbit.fontWeightBold,
    fontSize: getSizeToken(TOKENS.fontSizeButton, props),
  };
});

StyledText.defaultProps = {
  theme: defaultTokens,
};

const Button = (props: Props) => {
  const {
    onPress,
    children,
    size = SIZE_OPTIONS.NORMAL,
    type = TYPE_OPTIONS.PRIMARY,
    ...rest
  } = props;
  const onPressHandler = onPress || (() => {});
  let width;
  if (props.block) {
    width = "100%";
  } else {
    width = props.width || "auto";
  }

  return (
    <Touchable disabled={props.disabled || !props.onPress} onPress={onPressHandler} width={width}>
      <StyledButton size={size} type={type} {...rest}>
        <StyledText size={size} type={type} {...rest}>
          {children}
        </StyledText>
      </StyledButton>
    </Touchable>
  );
};

export default Button;
