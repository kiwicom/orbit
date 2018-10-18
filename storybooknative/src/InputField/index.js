// @flow strict

import * as React from "react";
import { TextInput } from "react-native"; // eslint-disable-line no-restricted-imports

import Text from "../Text";
import styled from "../styled";

type Props = {|
  +placeholder?: string,
  +label?: React.Element<typeof Text>,
  +defaultValue?: string,
  +autoFocus?: boolean,
  +onChangeText?: (text: string) => void,
  +keyboardType?: "email-address" | "numeric" | "number-pad",
  +secureTextEntry?: boolean,
  +maxLength?: number,
|};

const StyledTextInput = styled(TextInput, props => {});

const InputField = (props: Props) => {
  const { label, ...rest } = props;
  return (
    <React.Fragment>
      {label && <Text>{label}</Text>}
      <StyledTextInput underlineColorAndroid="transparent" autoCorrect={false} {...rest} />
    </React.Fragment>
  );
};

export default InputField;
