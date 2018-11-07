// @flow

import * as React from "react";
import { View, Text } from "react-native";

import defaultTokens from "../defaultTokens";
import TOKENS from "./consts";
import styled, {lineHeight} from "../styled";
import Touchable from "../Touchable";

import type { Props } from "./index";

const getToken = (name, { theme, hasError, disabled, checked }) => {
  const tokens = {
    [TOKENS.borderColor]:
      hasError && !disabled && !checked
        ? theme.orbit.borderColorCheckboxRadioError
        : theme.orbit.borderColorCheckboxRadio,
    [TOKENS.iconColor]: disabled
      ? theme.orbit.colorIconCheckboxRadioDisabled
      : theme.orbit.colorIconCheckboxRadio,
  };

  return tokens[name];
};

const StyledWrapper = styled(View, props => {
  const { theme, disabled } = props;
  return {
    display: "flex", // react native web
    flexDirection: "row",
    opacity: disabled ? theme.orbit.opacityCheckboxDisabled : 1.0,
  };
});

StyledWrapper.defaultProps = {
  theme: defaultTokens,
};

const StyledTextWrapper = styled(View, props => {
  const { theme } = props;
  return {
    display: "flex", // react native web
    flexDirection: "column",
    marginLeft: theme.orbit.spaceXSmall,
  };
});

StyledTextWrapper.defaultProps = {
  theme: defaultTokens,
};

const StyledLabel = styled(Text, props => {
  const { theme, checked } = props;
  return {
    fontWeight: checked ? theme.orbit.fontWeightMedium : theme.orbit.fontWeightNormal,
    fontSize: theme.orbit.fontSizeFormLabel,
    color: theme.orbit.colorFormLabel,
    height: theme.orbit.heightCheckbox,
    lineHeight: lineHeight(theme.orbit.fontSizeFormLabel, theme.orbit.heightCheckbox),
  };
});

StyledLabel.defaultProps = {
  theme: defaultTokens,
};

const StyledInfo = styled(Text, props => {
  const { theme } = props;
  return {
    fontSize: theme.orbit.fontSizeFormFeedback,
    color: theme.orbit.colorInfoCheckBoxRadio,
    lineHeight: lineHeight(theme.orbit.fontSizeFormFeedback, theme.orbit.lineHeightText),
  };
});

StyledInfo.defaultProps = {
  theme: defaultTokens,
};

const StyledCheckbox = styled(View, props => {
  const { theme } = props;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.orbit.backgroundInput,
    height: theme.orbit.heightCheckbox,
    width: theme.orbit.widthCheckbox,
    borderRadius: theme.orbit.borderRadiusNormal,
    borderWidth: "1px",
    borderColor: getToken(TOKENS.borderColor, props),
  };
});

StyledCheckbox.defaultProps = {
  theme: defaultTokens,
};

const StyledIconPlaceholder = styled(Text, props => {
  const { checked } = props;
  return {
    color: getToken(TOKENS.iconColor, props),
    opacity: checked ? 1.0 : 0.0,
  };
});

StyledIconPlaceholder.defaultProps = {
  theme: defaultTokens,
};

const Check = props => <StyledIconPlaceholder {...props}>i</StyledIconPlaceholder>;

export default function Checkbox(props: Props) {
  const { hasError = false, disabled = false, checked = false, onChange, label, info } = props;
  return (
    <Touchable onPress={onChange} disabled={disabled}>
      <StyledWrapper disabled={disabled}>
        <StyledCheckbox disabled={disabled} hasError={hasError} checked={checked}>
          <Check disabled={disabled} hasError={hasError} checked={checked} />
        </StyledCheckbox>
        <StyledTextWrapper>
          {label != null && <StyledLabel checked={checked}>{label}</StyledLabel>}
          {info != null && <StyledInfo>{info}</StyledInfo>}
        </StyledTextWrapper>
      </StyledWrapper>
    </Touchable>
  );
}
