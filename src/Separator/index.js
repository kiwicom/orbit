// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";

export const StyledSeparator = styled.hr`
  width: 100%;
  height: 1px; // TODO create token
  background: ${({ theme }) => theme.orbit.paletteCloudNormal}; // TODO create token
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
