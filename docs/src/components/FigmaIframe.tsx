import React from "react";
import styled, { css } from "styled-components";

interface Props {
  border?: string;
  height?: number;
  maxWidth: number;
}

const StyledIframe = styled.iframe<Props>`
  ${({ border, height, maxWidth }) => css`
    width: 100%;
    height: ${height && `${height}px`};
    max-width: ${maxWidth && `${maxWidth}px`};
    border: ${border || `1px solid rgba(0, 0, 0, 0.1)`};
  `}
`;

const FigmaIframe = ({ maxWidth, height = 400, ...props }: Props) => {
  return (
    <StyledIframe allowFullScreen loading="lazy" height={height} maxWidth={maxWidth} {...props} />
  );
};

export default FigmaIframe;
