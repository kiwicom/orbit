// @flow

import * as React from "react";
import { Text as RNText, Platform } from "react-native";
import styled from "styled-components";

import getSpacingToken from "../common/getSpacingToken";
import defaultTokens from "../defaultTokens";
import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
  ELEMENT_OPTIONS,
} from "./consts";

import type { Props } from "./index";

const getSizeToken = () => ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeTextSmall,
  };
  return sizeTokens[size];
};

const getWeightToken = () => ({ theme, weight }) => {
  const weightTokens = {
    [WEIGHT_OPTIONS.NORMAL]: theme.orbit.fontWeightNormal,
    [WEIGHT_OPTIONS.BOLD]: theme.orbit.fontWeightBold,
  };
  return weightTokens[weight];
};

const getTypeToken = () => ({ theme, type }) => {
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

const Text = styled(
  Platform.OS !== "web"
    ? RNText
    : ({ element = "span", children, className, dataTest }) => {
        const TextElement = element;
        return (
          <TextElement className={className} data-test={dataTest}>
            {children}
          </TextElement>
        );
      },
)`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${getSizeToken()};
  font-weight: ${getWeightToken()};
  color: ${getTypeToken()};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  text-align: ${({ align }) => align};
  text-transform: ${({ uppercase }) => uppercase && `uppercase`};
  font-style: ${({ italic }) => italic && `italic`};
  margin: 0;
  margin-bottom: ${getSpacingToken};
`;

Text.defaultProps = {
  theme: defaultTokens,
};
export default ({
  element = ELEMENT_OPTIONS.P,
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.LEFT,
  uppercase = false,
  italic = false,
  dataTest,
  spaceAfter,
  children,
}: Props) => (
  <Text
    element={element}
    type={type}
    size={size}
    weight={weight}
    align={align}
    uppercase={uppercase}
    italic={italic}
    dataTest={dataTest}
    spaceAfter={spaceAfter}
  >
    {children}
  </Text>
);
