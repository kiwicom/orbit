// @flow

import * as React from "react";
import { TouchableHighlight } from "react-native";

type Props = {|
  +children: React.Node | null,
  +onPress: () => void,
|};

export default function Button(props: Props) {
  return <TouchableHighlight onPress={props.onPress}>{props.children}</TouchableHighlight>;
}
