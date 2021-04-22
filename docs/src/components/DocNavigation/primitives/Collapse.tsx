import React from "react";
import { Collapse as OrbitCollapse, mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

const StyledCollapseWrapper = styled.div`
  > * {
    border-bottom: 0;
  }
`;
const StyledCollapseLabel = styled.div`
  font-size: 16px;
`;
const StyledCollapseContent = styled.div<{ hasCategories: boolean }>`
  ${({ hasCategories }) => css`
    ${hasCategories
      ? `
        padding-left: 0.5rem;
        > * + * {
          margin-top: 0.5rem;
        }
      `
      : css`
          ${mediaQueries.desktop(css`
            padding-left: 0.5rem;
          `)};
          > * {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            ${mediaQueries.desktop(css`
              padding-left: 0;
              padding-right: 0;
            `)};
          }
        `}
  `};
`;

interface Props extends React.ComponentProps<typeof OrbitCollapse> {
  hasCategories: boolean;
}

export default function Collapse({ expanded, label, hasCategories, children, onClick }: Props) {
  return (
    <StyledCollapseWrapper>
      <OrbitCollapse
        expanded={expanded}
        label={<StyledCollapseLabel>{label}</StyledCollapseLabel>}
        onClick={onClick}
      >
        <StyledCollapseContent hasCategories={hasCategories}>{children}</StyledCollapseContent>
      </OrbitCollapse>
    </StyledCollapseWrapper>
  );
}
