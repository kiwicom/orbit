// @flow strict

import * as React from "react";
import { View, StyleSheet } from "react-native";

import styled from "../styled";
import defaultTokens from "../defaultTokens";
import Touchable from "../Touchable";

import { Props } from "./index";

const addStylesHelper = props => ({
  borderStyle: "solid",
  padding: "10px",
  backgroundColor: props.theme.orbit.paletteWhite,
  android: {
    marginHorizontal: 8,
    elevation: 1,
    borderRadius: 3,
    overflow: "hidden",
  },
  ios: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: props.theme.orbit.paletteCloudNormal,
  },
});

const StyledCard = styled(View, addStylesHelper);
StyledCard.defaultProps = {
  theme: defaultTokens,
};

const StyledTouchable = styled(Touchable, addStylesHelper);
StyledTouchable.defaultProps = {
  theme: defaultTokens,
};

export default function SimpleCard(props: Props) {
  if (props.onPress) {
    return (
      <StyledTouchable onPress={props.onPress} delayPressIn={props.delayPressIn}>
        {props.children}
      </StyledTouchable>
    );
  }

  return <StyledCard>{props.children}</StyledCard>;
}
