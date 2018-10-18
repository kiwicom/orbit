// @flow strict

import * as React from "react";
import { TextInput, Text } from "react-native"; // eslint-disable-line no-restricted-imports

import styled from "../styled";

type Props = {|
  +placeholder?: React.Element<typeof Text>,
  +label?: React.Element<typeof Text>,
  +defaultValue?: string,
  +autoFocus?: boolean,
  +onChangeText?: (text: string) => void,
  +keyboardType?: "email-address" | "numeric" | "number-pad",
  +secureTextEntry?: boolean,
  +maxLength?: number,
|};

const StyledLabel = styled(Text, props => {});
const StyledTextInput = styled(TextInput, props => {});

const InputField = (props: Props) => {
  const { label, ...rest } = props;
  return (
    <React.Fragment>
      {label != null && <StyledLabel>{label}</StyledLabel>}
      <StyledTextInput underlineColorAndroid="transparent" autoCorrect={false} {...rest} />
    </React.Fragment>
  );
};

export default InputField;
