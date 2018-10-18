// @flow strict

import * as React from "react";
import { TextInput, Text } from "react-native"; // eslint-disable-line no-restricted-imports

import styled from "../styled";

type Props = {|
  +placeholder?: React.Element<typeof Text>,
  +label?: React.Element<typeof Text>,
  +defaultValue?: string,
  +autoFocus?: boolean,
  +onChange?: (text: string) => void,
  +keyboardType?: "email-address" | "numeric" | "number-pad",
  +secureTextEntry?: boolean,
  +maxLength?: number,
|};

const StyledLabel = styled(Text, props => {});
const StyledTextInput = styled(TextInput, props => {});

const InputField = (props: Props) => (
  <React.Fragment>
    {this.props.label != null && <StyledLabel>{this.props.label}</StyledLabel>}
    <StyledTextInput
      underlineColorAndroid="transparent"
      autoCorrect={false}
      {...this.props}
      placeholder={null}
      onChangeText={props.onChange}
    />
  </React.Fragment>
);

export default InputField;
