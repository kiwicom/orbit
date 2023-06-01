"use client";

import * as React from "react";
import styled, { css } from "styled-components";

import type * as Common from "../common/types";
import type { Theme } from "../defaultTheme";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";
import { left, right } from "../utils/rtl";
import type { Props, Indent, Align } from "./types";
import useTheme from "../hooks/useTheme";

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getIndentAmount({
  theme,
  $indent,
}: // StyledContainer takes more props, so this shouldn't be exact
{
  theme: Theme;
  $indent: Indent;
}) {
  return $indent === "none" ? 0 : theme.orbit[`space${capitalize($indent)}`];
}

const StyledContainer = styled.div<{ $align: Align; $indent: Indent }>`
  ${({ $align }) => css`
    box-sizing: border-box;
    width: 100%;
    padding-${right}: ${$align === "left" && getIndentAmount};
    padding-${left}: ${$align === "right" && getIndentAmount};
    padding: ${$align === "center" && `0 ${getIndentAmount}`};
  `};
`;

export const StyledSeparator = styled.hr<{
  spaceAfter?: Common.SpaceAfterSizes;
  $type: Props["type"];
  $color?: Props["color"];
}>`
  ${({ theme, $type, $color }) => css`
    height: ${theme.orbit.heightSeparator};
    background: ${!$color && theme.orbit.backgroundSeparator};
    box-sizing: border-box;
    border-style: ${$type};
    border-color: ${$color};
    margin-top: 0;
    margin-bottom: ${getSpacingToken};
  `};
`;

StyledSeparator.defaultProps = {
  theme: defaultTheme,
};

const Separator = ({
  align = "left",
  indent = "none",
  spaceAfter,
  type = "none",
  color,
}: Props) => {
  const theme = useTheme();
  return (
    <StyledContainer $align={align} $indent={indent}>
      <StyledSeparator
        $type={type}
        spaceAfter={spaceAfter}
        $color={color && (theme.orbit[color] as Props["color"])}
      />
    </StyledContainer>
  );
};

export default Separator;
