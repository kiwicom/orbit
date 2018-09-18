// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";

const StyledSeparator = styled.hr`
  width: 100%;
  height: ${({ theme }) => theme.orbit.heightSeparator};
  background: ${({ theme }) => theme.orbit.backgroundSeparator};
  box-sizing: border-box;
  border-style: none;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.orbit.spaceLarge};
`;

StyledSeparator.defaultProps = {
  theme: defaultTokens,
};

const Separator = () => <StyledSeparator />;

export default Separator;
