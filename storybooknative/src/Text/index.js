// @flow
import * as React from "react";
import { Text as RNText } from "react-native";

import styled, { lineHeight } from "../styled";
import defaultTokens from "../defaultTokens";
import { TYPE_OPTIONS, WEIGHT_OPTIONS, ALIGN_OPTIONS, SIZE_OPTIONS } from "./consts";

import type { Props } from "./index";

const getTypeToken = ({ theme, type }) => {
  const typeTokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextSecondary,
    [TYPE_OPTIONS.ATTENTION]: theme.orbit.colorTextAttention,
    [TYPE_OPTIONS.INFO]: theme.orbit.colorTextInfo,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextSuccess,
    [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextWarning,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextCritical,
    [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextWhite,
  };
  return typeTokens[type];
};

const getWeightToken = ({ theme, weight }) => {
  const weightTokens = {
    [WEIGHT_OPTIONS.NORMAL]: theme.orbit.fontWeightNormal,
    [WEIGHT_OPTIONS.BOLD]: theme.orbit.fontWeightBold,
  };
  return weightTokens[weight];
};

const getSizeToken = ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeTextSmall,
  };
  return sizeTokens[size];
};

const StyledText = styled(RNText, props => ({
  fontSize: getSizeToken(props),
  fontWeight: getWeightToken(props),
  color: getTypeToken(props),
  lineHeight: lineHeight(getSizeToken(props), props.theme.orbit.lineHeightText),
  textAlign: props.align,
  textTransform: props.uppercase ? `uppercase` : `none`,
  fontStyle: props.italic ? `italic` : `normal`,
  margin: 0,
}));

StyledText.defaultProps = {
  theme: defaultTokens,
};

const Text = ({
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.LEFT,
  uppercase = false,
  italic = false,
  children,
}: Props) => (
  <StyledText
    type={type}
    size={size}
    weight={weight}
    align={align}
    uppercase={uppercase}
    italic={italic}
  >
    {children}
  </StyledText>
);

export default Text;
