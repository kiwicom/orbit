// @flow strict

import * as React from "react";
import { View, FlatList } from "react-native";

import Text from "../Text";
import styled from "../styled";
import iconsMap from "./icons.json";

import Icon from "./index";

const StyledFlatList = styled(FlatList, () => ({
  width: "100%",
}));

const StyledView = styled(View, () => ({
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 20,
  paddingHorizontal: 40,
  justifyContent: "space-between",
}));

const IconsList = () => (
  <StyledFlatList
    data={Object.keys(iconsMap)}
    keyExtractor={item => item}
    showsVerticalScrollIndicator={false}
    renderItem={({ item }) => (
      <StyledView key={item}>
        <Text>{item}</Text>
        <Icon name={item} size={40} />
      </StyledView>
    )}
  />
);

export default IconsList;
