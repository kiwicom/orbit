import React from "react";
import styled, { css } from "styled-components";

import { StyledAnchor } from "./HeadingWithLink";

interface Props {
  border?: string;
  height?: number;
  maxWidth: number;
}

const StyledIframe = styled.iframe<Props>`
  ${({ theme, border, height, maxWidth }) => css`
    width: 100%;
    border: none;
    height: ${height && `${height}px`};
    max-width: ${maxWidth && `${maxWidth}px`};
    border: ${border || `1px solid rgba(0, 0, 0, 0.1)`};

    *:not(${StyledAnchor}) + & {
      margin-top: ${theme.orbit.space600} !important;
    }
    & + ${StyledAnchor} {
      margin-top: ${theme.orbit.space800} !important;
    }
    & + :not(${StyledAnchor}) {
      margin-top: ${theme.orbit.space600} !important;
    }
  `}
`;

const FigmaIframe = ({ maxWidth, height = 400, ...props }: Props) => {
  return (
    <StyledIframe allowFullScreen loading="lazy" height={height} maxWidth={maxWidth} {...props} />
  );
};

export default FigmaIframe;
