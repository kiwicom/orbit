// @flow

import * as React from "react";
import { Text as RNText } from "react-native";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import styled from "../styled";
import iconsMap from "./icons.json";

import type { Props } from "./index";

const StyledText = styled(RNText, props => {
  const { theme, size, color } = props;
  return {
    fontFamily: "orbit-icons",
    includeFontPadding: false,
    textAlignVertical: "center",
    color: color || theme.colorIconPrimary,
    fontSize: size || 20,
  };
});

StyledText.defaultProps = {
  theme: defaultTokens,
};

const getIconCharacter = name => {
  const icon = iconsMap[name];
  if (!icon) {
    throw Error(`Icon with name "${name}" does not exist.`);
  }

  if (/^E(.{3})$/.test(iconsMap[name].character)) {
    return String.fromCharCode(parseInt(iconsMap[name].character, 16));
  }
  return iconsMap[name].character;
};

const Icon = ({ name, color, size }: Props) => (
  <StyledText color={color} size={size}>
    {getIconCharacter(name)}
  </StyledText>
);

export default Icon;
