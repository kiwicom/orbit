import * as React from "react";
import styled from "styled-components";

import { StyledText } from "../Text";
import { StyledHeading } from "../Heading";
import type { Props } from "./types";

const StyledTruncate = styled.div<{ maxWidth?: string }>`
  ${({ maxWidth }) => `
    min-width: 0;
    flex: 0 1 ${maxWidth === "none" ? "100%" : maxWidth};
    max-width: ${maxWidth};
  `};
`;

const StyledTruncateContent = styled.div`
  &,
  ${StyledText}, ${StyledHeading} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Truncate = ({ children, maxWidth = "100%", dataTest }: Props) => (
  <StyledTruncate maxWidth={maxWidth} data-test={dataTest}>
    <StyledTruncateContent>{children}</StyledTruncateContent>
  </StyledTruncate>
);

export default Truncate;
