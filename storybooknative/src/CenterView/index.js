// @flow

import * as React from "react";
import { View } from "react-native";

import styled from "../styled";

const style = {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5fcff",
};

const Main = styled(View, style);

type Props = {|
  children: React.ChildrenArray<React.Node> | null,
|};

export default function CenterView(props: Props) {
  return <Main>{props.children}</Main>;
}
