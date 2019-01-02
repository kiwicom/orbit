// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from "./index";

const StyledSeparator = styled.hr`
  width: 100%;
  height: ${({ theme }) => theme.orbit.heightSeparator};
  background: ${({ theme }) => theme.orbit.backgroundSeparator};
  box-sizing: border-box;
  border-style: none;
  margin-top: 0;
  margin-bottom: ${getSpacingToken};
`;

StyledSeparator.defaultProps = {
  theme: defaultTokens,
};

const Separator = ({ spaceAfter }: Props) => <StyledSeparator spaceAfter={spaceAfter} />;

export default Separator;
