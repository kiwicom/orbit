import * as React from "react";
import styled, { css } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import type * as Common from "../../common/types";
import type { Theme } from "../../defaultTheme";
import defaultTheme from "../../defaultTheme";
import { TYPE_OPTIONS, WEIGHT_OPTIONS, ELEMENT_OPTIONS, SIZE_OPTIONS } from "../consts";
import { textAlign } from "../../utils/rtl";
import { getLinkStyle } from "../../TextLink/deprecated";
import { spacingUtility } from "../../utils/common";
import type { Type, Weight } from "../types";

const getTypeToken = ({ theme, type }: { theme: Theme; type: Type }): string => {
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

const getWeightToken = ({ theme, weight }: { theme: Theme; weight: Weight }): string | null => {
  const weightTokens = {
    [WEIGHT_OPTIONS.NORMAL]: theme.orbit.fontWeightNormal,
    [WEIGHT_OPTIONS.MEDIUM]: theme.orbit.fontWeightMedium,
    [WEIGHT_OPTIONS.BOLD]: theme.orbit.fontWeightBold,
  };

  if (!weight) return null;

  return weightTokens[weight];
};

const getSizeToken = ({ theme, size }: { theme: Theme; size: Common.Size }): string | null => {
  const sizeTokens = {
    [SIZE_OPTIONS.EXTRA_LARGE]: theme.orbit.fontSizeTextExtraLarge,
    [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeTextSmall,
  };

  if (!size) return null;

  return sizeTokens[size];
};

const getLineHeightToken = ({
  theme,
  size,
}: {
  theme: Theme;
  size?: Common.Size | null;
}): string | null => {
  const lineHeightTokens = {
    [SIZE_OPTIONS.EXTRA_LARGE]: theme.orbit.lineHeightTextExtraLarge,
    [SIZE_OPTIONS.LARGE]: theme.orbit.lineHeightTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.lineHeightTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.lineHeightTextSmall,
  };

  if (!size) return null;

  return lineHeightTokens[size];
};

/**
 * @deprecated use .orbit-text selector instead
 */
export const StyledText = styled(
  ({ element: TextElement = ELEMENT_OPTIONS.P, children, className, dataTest, id }) => (
    <TextElement className={className} data-test={dataTest} id={id}>
      {children}
    </TextElement>
  ),
)`
  ${({
    theme,
    align,
    uppercase,
    size,
    weight,
    strikeThrough,
    $type,
    italic,
    withBackground,
    margin,
  }) => css`
    font-family: ${theme.orbit.fontFamily};
    background: ${withBackground && convertHexToRgba(getTypeToken({ theme, type: $type }), 10)};
    font-size: ${getSizeToken({ theme, size })};
    font-weight: ${getWeightToken({ theme, weight })};
    color: ${getTypeToken({ theme, type: $type })};
    line-height: ${getLineHeightToken({ theme, size })};
    text-align: ${textAlign(align)};
    text-transform: ${uppercase && `uppercase`};
    text-decoration: ${strikeThrough && `line-through`};
    font-style: ${italic && `italic`};
    margin: 0;
    ${spacingUtility(margin)};

    a:not(.orbit-text-link) {
      ${getLinkStyle({ theme, $type })};
    }
  `}
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

export default StyledText;
