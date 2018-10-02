// @flow

import * as React from "react";
import { TouchableNativeFeedback } from "react-native";

type Props = {|
  +children: React.Node | null,
  +onPress: () => void,
|};

export default function Button(props: Props) {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>{props.children}</TouchableNativeFeedback>
  );
}
