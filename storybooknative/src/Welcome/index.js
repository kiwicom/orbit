// @flow

import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Wrapper = styled(View)`
  flex-grow: 1;
  padding: 24px;
  justify-content: center;
`;

const Header = styled(Text)`
  font-size: 18px;
  margin-bottom: 18px;
`;

const Content = styled(Text)`
  font-size: 12px;
  margin-bottom: 10px;
  line-height: 18px;
`;

const Welcome = () => (
  <Wrapper>
    <Header>Welcome to React Native Storybook</Header>
    <Content>
      This is a UI Component development environment for your React Native app. Here you can display
      and interact with your UI components as stories. A story is a single state of one or more UI
      components. You can have as many stories as you want. In other words a story is like a visual
      test case.
    </Content>
    <Content>
      We have added some stories inside the &quot;storybook/stories&quot; directory for examples.
      Try editing the &quot;storybook/stories/Welcome.js&quot; file to edit this message.
    </Content>
  </Wrapper>
);

export default Welcome;
