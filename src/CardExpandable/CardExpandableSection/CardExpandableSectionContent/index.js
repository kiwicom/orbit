// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../../defaultTokens";

import type { Props } from "./index";

export const StyledCardExpandableSectionContent = styled.div`
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
`;

StyledCardExpandableSectionContent.defaultProps = {
  theme: defaultTokens,
};

const CardExpandableSectionContent = ({ children }: Props) => (
  <StyledCardExpandableSectionContent>{children}</StyledCardExpandableSectionContent>
);

export default CardExpandableSectionContent;
