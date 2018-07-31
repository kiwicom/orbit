// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";

import type { Props } from "./index";

export const StyledCardContent = styled.div`
  padding: ${({ theme }) => theme.orbit.spaceLarge};
`;

StyledCardContent.defaultProps = {
  theme: defaultTokens,
};

const CardContent = ({ children }: Props) => <StyledCardContent>{children}</StyledCardContent>;

export default CardContent;
