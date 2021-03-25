// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { StyledText } from "../Text";
import { StyledHeading } from "../Heading";

import type { Props } from "./index";

const StyledTruncate = styled.div`
  min-width: 0;
  ${({ maxWidth }) => css`
    flex: 0 1 ${maxWidth === "none" ? "100%" : maxWidth};
    max-width: ${maxWidth};
  `};
`;

const StyledTruncateContent = styled.div`
  ${StyledText}, ${StyledHeading} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Truncate = ({ children, maxWidth = "100%", dataTest }: Props): React.Node => (
  <StyledTruncate maxWidth={maxWidth} data-test={dataTest}>
    <StyledTruncateContent>{children}</StyledTruncateContent>
  </StyledTruncate>
);

export default Truncate;
