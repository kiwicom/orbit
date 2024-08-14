import React from "react";
import styled, { css } from "styled-components";

import { StyledAnchor } from "../HeadingWithLink";

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    border-left: 3px solid ${theme.orbit.paletteInkDark};
    padding: ${theme.orbit.space400};
    background: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.borderRadius100};
    ${StyledAnchor} + & {
      margin-top: ${theme.orbit.space100} !important;
    }
    & + p {
      margin-top: ${theme.orbit.space600} !important;
    }
  `};
`;

const StyledContent = styled.div`
  ${({ theme }) => css`
    font-style: italic;
    font-weight: 500;
    blockquote p {
      font-size: 18px;
    }
    blockquote > * + *,
    figcaption {
      margin-top: ${theme.orbit.space200};
    }
  `};
`;

const StyledAuthor = styled.p`
  ${({ theme }) => css`
    color: ${theme.orbit.paletteInkDark};
  `}
`;

interface Props {
  children: React.ReactNode;
}

export default function BlockQuote({ children }: Props) {
  const lastChild = React.Children.toArray(children)[React.Children.count(children) - 1];

  // if quote ends with author
  if (
    React.isValidElement(lastChild) &&
    typeof lastChild.props.children === "string" &&
    lastChild.props.children.startsWith("—")
  ) {
    return (
      <StyledWrapper>
        <StyledContent>
          <figure>
            <blockquote>
              {React.Children.map(
                children,
                (child, index) => index < React.Children.count(children) - 1 && child,
              )}
            </blockquote>
            <figcaption>
              <StyledAuthor>{lastChild.props.children}</StyledAuthor>
            </figcaption>
          </figure>
        </StyledContent>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <StyledContent>
        <blockquote>{children}</blockquote>
      </StyledContent>
    </StyledWrapper>
  );
}
