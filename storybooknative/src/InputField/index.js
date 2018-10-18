// @flow

import * as React from "react";
import { TextInput, View } from "react-native";

import styled from "../styled";
import defaultTokens from "../defaultTokens";
import { SIZE_OPTIONS, TYPE_OPTIONS, TOKENS } from "./consts";

import type { Props } from "./index";

const getToken = (name, { theme, size }) => {
  const tokens = {
    [TOKENS.heightInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightInputNormal,
    },
    [TOKENS.fontSizeInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeInputNormal,
    },
    [TOKENS.paddingInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingInputNormal,
    },
  };

  return tokens[name][size];
};

const StyledInputContainer = styled(View, props => {
  const { theme } = props;
  return {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: getToken(TOKENS.heightInput, props),
    borderRadius: theme.orbit.borderRadiusNormal,
  };
});

StyledInputContainer.defaultProps = {
  theme: defaultTokens,
};

const StyledFakeInput = styled(View, props => {
  const { theme, error, disabled } = props;
  return {
    width: "100%",
    position: "absolute",
    zIndex: 1,
    height: getToken(TOKENS.heightInput, props),
    borderRadius: theme.orbit.borderRadiusNormal,
    borderWidth: "1px",
    borderColor: error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput,
    backgroundColor: disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput,
  };
});

StyledFakeInput.defaultProps = {
  theme: defaultTokens,
};

const StyledTextInput = styled(TextInput, props => {
  const { theme, disabled } = props;
  return {
    padding: getToken(TOKENS.paddingInput, props),
    borderRadius: theme.orbit.borderRadiusNormal,
    color: disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput,
    fontSize: getToken(TOKENS.fontSizeInput, props),
    width: "100%",
    height: "100%",
    lineHeight: getToken(TOKENS.heightInput, props),
    zIndex: 2,
  };
});

StyledTextInput.defaultProps = {
  theme: defaultTokens,
};

const InputField = (props: Props) => {
  const {
    size = SIZE_OPTIONS.NORMAL,
    type = TYPE_OPTIONS.TEXT,
    label,
    help,
    error,
    inlineLabel,
    prefix,
    suffix,
    disabled,
    required,
    ...rest
  } = props;
  return (
    <React.Fragment>
      {label !== undefined && label}
      <StyledInputContainer size={size} disabled={disabled} error={error}>
        <StyledTextInput
          underlineColorAndroid="transparent"
          autoCorrect={false}
          placeholderTextColor={defaultTokens.orbit.colorPlaceholderInput}
          size={size}
          type={type}
          {...rest}
        />
        <StyledFakeInput size={size} disabled={disabled} error={error} />
      </StyledInputContainer>
    </React.Fragment>
  );
};

export default InputField;
