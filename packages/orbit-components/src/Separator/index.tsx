import * as React from "react";
import styled, { css } from "styled-components";

import type * as Common from "../common/types";
import type { Theme } from "../defaultTheme";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";
import { left, right } from "../utils/rtl";
import type { Props, Indent, Align } from "./types";

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getIndentAmount({
  theme,
  indent,
}: // StyledContainer takes more props, so this shouldn't be exact
{
  theme: Theme;
  indent: Indent;
}) {
  return indent === "none" ? 0 : theme.orbit[`space${capitalize(indent)}`];
}

const StyledContainer = styled.div<{ align: Align; indent: Indent }>`
  ${({ align }) => css`
    box-sizing: border-box;
    width: 100%;
    ${align === "left" &&
    css`
      padding-${right}: ${getIndentAmount};
    `};
    ${align === "right" &&
    css`
      padding-${left}: ${getIndentAmount};
    `};
    ${align === "center" &&
    css`
      padding: 0 ${getIndentAmount};
    `};
  `};
`;

export const StyledSeparator = styled.hr<{ spaceAfter?: Common.SpaceAfterSizes }>`
  ${({ theme }) => css`
    height: ${theme.orbit.heightSeparator};
    background: ${theme.orbit.backgroundSeparator};
    box-sizing: border-box;
    border-style: none;
    margin-top: 0;
    margin-bottom: ${getSpacingToken};
  `};
`;

StyledSeparator.defaultProps = {
  theme: defaultTheme,
};

const Separator = ({ align = "left", indent = "none", spaceAfter }: Props) => (
  <StyledContainer align={align} indent={indent}>
    <StyledSeparator spaceAfter={spaceAfter} />
  </StyledContainer>
);

export default Separator;
