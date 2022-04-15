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
import { getLinkStyle, StyledTextLink } from "../TextLink";

import type { Props } from ".";

const getTypeToken = ({ theme, type }) => {
  const typeTokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.textPrimaryForeground,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.textSecondaryForeground,
    [TYPE_OPTIONS.INFO]: theme.orbit.textInfoForeground,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.textSuccessForeground,
    [TYPE_OPTIONS.WARNING]: theme.orbit.textWarningForeground,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.textCriticalForeground,
    [TYPE_OPTIONS.WHITE]: theme.orbit.textWhiteForeground,
  };
  return typeTokens[type];
};

const getWeightToken = ({ theme, weight }) => {
  const weightTokens = {
    [WEIGHT_OPTIONS.NORMAL]: theme.orbit.fontWeightNormal,
    [WEIGHT_OPTIONS.MEDIUM]: theme.orbit.fontWeightMedium,
    [WEIGHT_OPTIONS.BOLD]: theme.orbit.fontWeightBold,
  };
  return weightTokens[weight];
};

const getSizeToken = ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeSmall,
  };
  return sizeTokens[size];
};

const getLineHeightToken = ({ theme, size }) => {
  const lineHeightTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.lineHeightLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.lineHeightNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.lineHeightSmall,
  };
  return lineHeightTokens[size];
};

export const StyledText: any = styled(
  ({ element: TextElement, children, className, dataTest, id }) => (
    <TextElement className={className} data-test={dataTest} id={id}>
      {children}
    </TextElement>
  ),
)`
  ${({ theme, align, uppercase, strikeThrough, type, italic }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-size: ${getSizeToken};
    font-weight: ${getWeightToken};
    color: ${getTypeToken};
    line-height: ${getLineHeightToken};
    text-align: ${textAlign(align)};
    text-transform: ${uppercase && `uppercase`};
    text-decoration: ${strikeThrough && `line-through`};
    font-style: ${italic && `italic`};
    margin: 0;
    margin-bottom: ${getSpacingToken};

    a:not(${StyledTextLink}) {
      // TextLink in Text always win
      ${getLinkStyle({ theme, type })}// Get styles from TextLink
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledText.defaultProps = {
  theme: defaultTheme,
};

const Text = ({
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.LEFT,
  as = ELEMENT_OPTIONS.P,
  uppercase,
  italic,
  strikeThrough,
  dataTest,
  spaceAfter,
  children,
  id,
}: Props): React.Node => {
  return (
    <StyledText
      id={id}
      type={type}
      size={size}
      strikeThrough={strikeThrough}
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
