// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ELEMENT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
} from "./consts";
import getSpacingToken from "../common/getSpacingToken";
import { textAlign } from "../utils/rtl";
import { StyledTextLink } from "../TextLink";
import getTextLinkColor from "../TextLink/helpers/getTextLinkColor";
import { TYPE_OPTIONS as TEXTLINK_TYPE_OPTIONS } from "../TextLink/consts";

import type { Props } from "./index";

const getLinkStyle = type => ({ theme }) => css`
  // Common styles for "a" in Text

  &,
  &:link,
  &:visited {
    color: ${getTextLinkColor({ theme, type })};
    text-decoration: ${type === TYPE_OPTIONS.SECONDARY
      ? theme.orbit.textDecorationTextLinkSecondary
      : theme.orbit.textDecorationTextLinkPrimary};
    font-weight: ${theme.orbit.fontWeightLinks};
  }

  &:hover,
  &:active,
  &:focus {
    outline: none;
    text-decoration: none;
    color: ${theme.orbit.paletteProductNormalHover};
  }
`;

const getTypeToken = ({ theme, type }) => {
  const typeTokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextSecondary,
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

const getLineHeightToken = ({ theme, size }) => {
  const lineHeightTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.lineHeightTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.lineHeightTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.lineHeightTextSmall,
  };
  return lineHeightTokens[size];
};

export const StyledText = styled(({ element: TextElement, children, className, dataTest, id }) => (
  <TextElement className={className} data-test={dataTest} id={id}>
    {children}
  </TextElement>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${getSizeToken};
  font-weight: ${getWeightToken};
  color: ${getTypeToken};
  line-height: ${getLineHeightToken};
  text-align: ${({ align }) => textAlign(align)};
  text-transform: ${({ uppercase }) => uppercase && `uppercase`};
  font-style: ${({ italic }) => italic && `italic`};
  margin: 0;
  margin-bottom: ${getSpacingToken};

  a:not(${StyledTextLink}) {
    // TextLink in Text always win
    // Get styles from TextLink
    ${getLinkStyle(TEXTLINK_TYPE_OPTIONS.PRIMARY)}
  }
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

const Text = ({
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.LEFT,
  as = ELEMENT_OPTIONS.P,
  uppercase = false,
  italic = false,
  dataTest,
  spaceAfter,
  children,
  id,
}: Props) => {
  return (
    <StyledText
      id={id}
      type={type}
      size={size}
      weight={weight}
      align={align}
      element={as}
      uppercase={uppercase}
      italic={italic}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    >
      {children}
    </StyledText>
  );
};

export default Text;
