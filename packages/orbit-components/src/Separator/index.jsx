// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";
import { left, right } from "../utils/rtl";

import type { Props, Indent } from ".";

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getIndentAmount({
  theme,
  indent,
}: // StyledContainer takes more props, so this shouldn't be exact
// eslint-disable-next-line flowtype/require-exact-type
{
  theme: typeof defaultTheme,
  indent: Indent,
}) {
  return indent === "none" ? 0 : theme.orbit[`space${capitalize(indent)}`];
}

const StyledContainer = styled.div`
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

const StyledSeparator = styled.hr`
  ${({ theme }) => css`
    height: ${theme.orbit.heightSeparator};
    background: ${theme.orbit.backgroundSeparator};
    box-sizing: border-box;
    border-style: none;
    margin-top: 0;
    margin-bottom: ${getSpacingToken};
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSeparator.defaultProps = {
  theme: defaultTheme,
};

const Separator = ({ align = "left", indent = "none", spaceAfter }: Props): React.Node => (
  <StyledContainer align={align} indent={indent}>
    <StyledSeparator spaceAfter={spaceAfter} />
  </StyledContainer>
);

export default Separator;
