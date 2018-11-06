// @flow strict

import * as React from "react";
import { Text as RNText } from "react-native";

import styled from "../styled";
import defaultTokens from "../defaultTokens";

import type { Props } from "./index";

const StyledText = styled(RNText, () => ({
  fontFamily: "orbit-icons",
  includeFontPadding: false,
  textAlignVertical: "center",
  color: defaultTokens.orbit.colorIconPrimary,
  fontSize: 20,
}));

const Icon = ({ name, style }: Props) => <StyledText style={style}>{name}</StyledText>;

export default Icon;
