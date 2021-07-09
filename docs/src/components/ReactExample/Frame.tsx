import * as React from "react";
import styled, { css } from "styled-components";

import { PREVIEW_ID } from "./consts";

import { BgType } from ".";

const BOARD_HEIGHT = 100;

interface Props {
  pageId: string;
  background: BgType;
  fullHeight?: boolean;
  minHeight?: number;
  maxHeight?: number;
  exampleId: string;
  origin: string;
}

const getBackground = (type: BgType) => ({ theme }) => {
  if (type === "grid") {
    return `
      background:
      linear-gradient(-90deg, rgba(0,0,0,.08) 1px, transparent 1px),
      linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
      linear-gradient(-90deg, rgba(0, 0, 0, .06) 1px, transparent 1px),
      linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px),
      linear-gradient(transparent 3px, ${theme.orbit.paletteWhite} 3px, ${theme.orbit.paletteWhite} 78px, transparent 78px),
      linear-gradient(-90deg, ${theme.orbit.paletteInkNormal} 1px, transparent 1px),
      linear-gradient(-90deg, transparent 3px, ${theme.orbit.paletteWhite} 3px, ${theme.orbit.paletteWhite} 78px, transparent 78px),
      linear-gradient(${theme.orbit.paletteInkNormal} 1px, transparent 1px),
      #f2f2f2;

    background-size:
        20px 20px,
        20px 20px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px;
    `;
  }

  if (type === "dark") return `background: ${theme.orbit.paletteInkNormal}`;

  return `background: ${theme.orbit.paletteWhite}`;
};

const StyledFrame = styled.iframe<Partial<Props>>`
  ${({ background, height, fullHeight, minHeight, maxHeight }) => css`
    width: 100%;
    min-height: ${minHeight && `${minHeight}px`};
    max-height: ${maxHeight && `${maxHeight}px`};
    height: ${fullHeight ? `100%` : `${Number(height) + BOARD_HEIGHT}px`};
    ${background && getBackground(background)};
  `};
`;

const Frame = ({
  background,
  exampleId,
  minHeight,
  pageId,
  origin,
  maxHeight,
  fullHeight,
}: Props) => {
  const [height, setHeight] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  const measuredRef = React.useCallback(
    n => {
      if (n !== null && loaded) {
        const innerDocument: Document = n.contentWindow.document;
        const preview = innerDocument.getElementById(PREVIEW_ID);

        if (preview) {
          setHeight(preview?.getBoundingClientRect().height);
        }
      }
    },
    [loaded],
  );

  return (
    <StyledFrame
      background={background}
      fullHeight={fullHeight}
      title={exampleId}
      minHeight={minHeight}
      maxHeight={maxHeight}
      height={height}
      loading="lazy"
      allow="allow-popups allow-modals allow-same-origin allow-scripts"
      onLoad={() => setLoaded(true)}
      ref={measuredRef}
      src={`${origin}/examples/${pageId}/`}
    />
  );
};

export default Frame;
