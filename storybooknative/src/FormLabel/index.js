// @flow
import React from "react";
import { Text } from "react-native";

import styled from "../styled";
import defaultTokens from "../defaultTokens";

import type { Props, AsteriskProps } from "./index";

const StyledAsteriskWrapper = styled(Text, props => {
  const { theme, filled } = props;
  return {
    fontWeight: theme.orbit.fontWeightBold,
    color: filled ? theme.orbit.colorFormLabelFilled : theme.orbit.colorTextError,
    fontSize: theme.orbit.fontSizeFormLabel,
  };
});

StyledAsteriskWrapper.defaultProps = {
  theme: defaultTokens,
};

export const StyledAsterisk = ({ filled }: AsteriskProps) => (
  <StyledAsteriskWrapper filled={filled}>* </StyledAsteriskWrapper>
);

const StyledLabel = styled(Text, props => {
  const { theme, disabled, filled } = props;
  return {
    fontSize: theme.orbit.fontSizeFormLabel,
    color: !filled || disabled ? theme.orbit.colorFormLabel : theme.orbit.colorFormLabelFilled,
    lineHeight: theme.orbit.lineHeightText,
    marginBottom: theme.orbit.spaceXXSmall,
  };
});

StyledLabel.defaultProps = {
  theme: defaultTokens,
};

const FormLabel = (props: Props) => {
  const { filled, required, disabled, label } = props;
  return (
    <StyledLabel filled={filled} disabled={disabled}>
      {required && <StyledAsterisk filled={filled} />}
      {label}
    </StyledLabel>
  );
};

export default FormLabel;
