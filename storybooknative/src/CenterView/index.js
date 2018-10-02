// @flow

import * as React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Main = styled(View)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

type Props = {|
  children: React.ChildrenArray<React.Node> | null,
|};

export default function CenterView(props: Props) {
  return <Main>{props.children}</Main>;
}
