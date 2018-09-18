// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";

import type { Props } from "./index";

const StyledCardExpandableContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

StyledCardExpandableContent.defaultProps = {
  theme: defaultTokens,
};

const CardExpandableContent = ({ children }: Props) => (
  <StyledCardExpandableContent>{children}</StyledCardExpandableContent>
);

export default CardExpandableContent;
