import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.blockquote`
  ${({ theme }) => `
    padding: ${theme.orbit.spaceMedium} 0;
    background-color: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.spaceMedium};
  `};
`;

const StyledContent = styled.div`
  ${({ theme }) => `
    padding: ${theme.orbit.spaceXSmall} ${theme.orbit.spaceLarge} ${theme.orbit.spaceXSmall}
      ${theme.orbit.spaceMedium};
    border-left: 4px solid ${theme.orbit.paletteInkLight};
    font-style: italic;

    > * + * {
      margin-top: ${theme.orbit.spaceXSmall};
    }

    .author {
      color: ${theme.orbit.paletteInkLight}
    }
  `};
`;

interface Props {
  children: React.ReactNode;
}

export default function BlockQuote({ children }: Props) {
  return (
    <StyledWrapper>
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  );
}
