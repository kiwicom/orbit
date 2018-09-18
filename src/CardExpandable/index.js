// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";

import type { Props } from "./index";

const StyledCardExpandable = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

StyledCardExpandable.defaultProps = {
  theme: defaultTokens,
};

const CardExpandable = ({ children }: Props) => (
  <StyledCardExpandable>{children}</StyledCardExpandable>
);

export default CardExpandable;
