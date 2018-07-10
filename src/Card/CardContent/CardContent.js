// @flow
import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import type { Props } from "./CardContent";

export const StyledCardContent = styled.div`
  padding: ${({ theme }) => theme.spaceLarge};
`;

const CardContent = ({ children, theme = defaultTokens }: Props) => (
  <StyledCardContent theme={theme}>{children}</StyledCardContent>
);

export default CardContent;
