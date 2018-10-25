// @flow

import * as React from "react";
import { TextInput, View, Text } from "react-native";

import styled from "../styled";
import defaultTokens from "../defaultTokens";
import { SIZE_OPTIONS, TYPE_OPTIONS, TOKENS } from "./consts";
import FormLabel, { StyledAsterisk } from "../FormLabel";
import FormFeedback from "../FormFeedback";

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
  const { theme, error, disabled, focused } = props;
  let borderColor;
  if (focused) {
    borderColor = theme.orbit.borderColorInputFocus;
  } else {
    borderColor = error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput;
  }
  return {
    width: "100%",
    position: "absolute",
    zIndex: 1,
    height: getToken(TOKENS.heightInput, props),
    borderRadius: theme.orbit.borderRadiusNormal,
    borderWidth: "1px",
    borderColor,
    backgroundColor: disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput,
  };
});

StyledFakeInput.defaultProps = {
  theme: defaultTokens,
};

const StyledInlineLabel = styled(Text, props => {
  const { theme, filled, disabled } = props;
  return {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    display: "flex", // react native web
    paddingLeft: theme.orbit.spaceSmall,
    marginBottom: 0,
    fontSize: getToken(TOKENS.fontSizeInput, props),
    color: !filled || disabled ? theme.orbit.colorFormLabel : theme.orbit.colorFormLabelFilled,
    lineHeight: theme.orbit.lineHeightText,
    zIndex: 3,
  };
});

StyledInlineLabel.defaultProps = {
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
    height: getToken(TOKENS.heightInput, props),
    lineHeight: getToken(TOKENS.heightInput, props),
    zIndex: 2,
  };
});

StyledTextInput.defaultProps = {
  theme: defaultTokens,
};

type State = {
  focused: boolean,
};

class InputField extends React.Component<Props, State> {
  static defaultProps = {
    onBlur: () => {},
    onFocus: () => {},
  };

  constructor() {
    super();

    this.state = {
      focused: false,
    };
  }

  onBlur = () => {
    this.setState({ focused: false });
    this.props.onBlur();
  };

  onFocus = () => {
    if (!this.props.disabled) {
      this.setState({ focused: true });
    }
    this.props.onFocus();
  };

  render() {
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
    } = this.props;
    const isFilled = !!this.props.value;
    return (
      <React.Fragment>
        {label !== undefined &&
          !inlineLabel && <FormLabel label={label} isFilled={isFilled} required={required} />}
        <StyledInputContainer size={size} disabled={disabled} error={error}>
          {label !== undefined &&
            inlineLabel && (
              <StyledInlineLabel size={size} filled={isFilled} disabled={disabled}>
                {required && <StyledAsterisk filled={isFilled} />}
                {label}
              </StyledInlineLabel>
            )}
          <StyledTextInput
            underlineColorAndroid="transparent"
            autoCorrect={false}
            placeholderTextColor={defaultTokens.orbit.colorPlaceholderInput}
            editable={!disabled}
            size={size}
            type={type}
            {...rest}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
          <StyledFakeInput
            size={size}
            focused={this.state.focused}
            disabled={disabled}
            error={error}
          />
        </StyledInputContainer>
        {!!help && !error && <FormFeedback type="help">{help}</FormFeedback>}
        {!!error && <FormFeedback type="error">{error}</FormFeedback>}
      </React.Fragment>
    );
  }
}

export default InputField;
