// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ELEMENT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
} from "./consts";
import getSpacingToken from "../common/getSpacingToken";
import { textAlign } from "../utils/rtl";
import { getLinkStyle, StyledTextLink } from "../TextLink";
import { TYPE_OPTIONS as TEXTLINK_TYPE_OPTIONS } from "../TextLink/consts";

import type { Props } from "./index";

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

const getWeightToken = () => ({ theme, weight }) => {
  const weightTokens = {
    [WEIGHT_OPTIONS.NORMAL]: theme.orbit.fontWeightNormal,
    [WEIGHT_OPTIONS.BOLD]: theme.orbit.fontWeightBold,
  };
  return weightTokens[weight];
};

const getSizeToken = () => ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeTextSmall,
  };
  return sizeTokens[size];
};

export const StyledText = styled(({ element: TextElement, children, className, dataTest }) => (
  <TextElement className={className} data-test={dataTest}>
    {children}
  </TextElement>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${getSizeToken()};
  font-weight: ${getWeightToken()};
  color: ${getTypeToken()};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  text-align: ${({ align }) => textAlign(align)};
  text-transform: ${({ uppercase }) => uppercase && `uppercase`};
  font-style: ${({ italic }) => italic && `italic`};
  margin: 0;
  margin-bottom: ${getSpacingToken};

  a:not(${StyledTextLink}) {
    // TextLink in Text always win
    ${({ theme }) =>
      getLinkStyle({ theme, type: TEXTLINK_TYPE_OPTIONS.PRIMARY })} // Get styles from TextLink
  }
`;

StyledText.defaultProps = {
  theme: defaultTokens,
};

const Text = ({
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.LEFT,
  element = ELEMENT_OPTIONS.P,
  uppercase = false,
  italic = false,
  dataTest,
  spaceAfter,
  children,
}: Props) => (
  <StyledText
    type={type}
    size={size}
    weight={weight}
    align={align}
    element={element}
    uppercase={uppercase}
    italic={italic}
    dataTest={dataTest}
    spaceAfter={spaceAfter}
  >
    {children}
  </StyledText>
);

export default Text;
