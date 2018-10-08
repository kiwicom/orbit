// @flow

import * as React from "react";
import { View } from "react-native";

import styled from "../styled";

const Main = styled(View, {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5fcff",
});

type Props = {|
  children: React.ChildrenArray<React.Node> | null,
|};

export default function CenterView(props: Props) {
  return <Main>{props.children}</Main>;
}
