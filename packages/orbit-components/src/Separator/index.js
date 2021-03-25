// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
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
  theme: defaultTheme,
};

const Separator = ({ spaceAfter }: Props): React.Node => <StyledSeparator spaceAfter={spaceAfter} />;

export default Separator;
