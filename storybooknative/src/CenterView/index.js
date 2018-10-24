// @flow

import * as React from "react";
import { View } from "react-native";

import styled from "../styled";
import { AlignItems } from "../Types";

const Main = styled(View, props => ({
  flexGrow: 1,
  justifyContent: "center",
  alignItems: props.align || "center",
  backgroundColor: "#f5fcff",
}));

type Props = {|
  +children: React.ChildrenArray<React.Node> | null,
  +align?: AlignItems,
|};

export default function CenterView(props: Props) {
  return <Main {...props}>{props.children}</Main>;
}
