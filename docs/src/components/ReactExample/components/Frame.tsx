import * as React from "react";
import styled, { css } from "styled-components";

import { PREVIEW_ID } from "../consts";
import { BgType } from "..";

interface Props {
  pageId?: string;
  background?: BgType;
  isFullScreen?: boolean;
  isPlayground?: boolean;
  height?: number | string;
  exampleId?: string;
  origin: string;
}

const DEFAULT_HEIGHT = 100;

export const getBackground =
  (type: BgType) =>
  ({ theme }) => {
    if (type === "grid") {
      return `
      background:
      linear-gradient(-90deg, rgba(0,0,0,.08) 1px, transparent 1px),
      linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
      linear-gradient(-90deg, rgba(0, 0, 0, .06) 1px, transparent 1px),
      linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px),
      linear-gradient(transparent 3px, ${theme.orbit.paletteWhite} 3px, ${theme.orbit.paletteWhite} 78px, transparent 78px),
      linear-gradient(-90deg, ${theme.orbit.paletteInkDark} 1px, transparent 1px),
      linear-gradient(-90deg, transparent 3px, ${theme.orbit.paletteWhite} 3px, ${theme.orbit.paletteWhite} 78px, transparent 78px),
      linear-gradient(${theme.orbit.paletteInkDark} 1px, transparent 1px),
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

    if (type === "dark") return `background: ${theme.orbit.paletteInkDark}`;

    return `background: ${theme.orbit.paletteWhite}`;
  };

interface StyledProps extends Partial<Props> {
  $height: number | string;
}

export const StyledFrame = styled.iframe<Partial<StyledProps>>`
  ${({ background, isFullScreen, $height }) => css`
    width: 100%;
    min-height: 120px;
    height: ${isFullScreen ? `100%` : $height};
    ${background && getBackground(background)};
  `};
`;

const Frame = ({
  background,
  isFullScreen,
  exampleId,
  height,
  pageId,
  origin,
  isPlayground,
}: Props) => {
  const [measuredHeight, setMeasuredHeight] = React.useState<number>(0);
  const [loaded, setLoaded] = React.useState(false);

  const measuredRef = React.useCallback(
    n => {
      if (n !== null && loaded) {
        const innerDocument: Document = n.contentWindow.document;
        const preview = innerDocument.getElementById(PREVIEW_ID);

        if (preview) {
          setMeasuredHeight(preview?.getBoundingClientRect().height);
        }
      }
    },
    [loaded],
  );

  return (
    <StyledFrame
      isFullScreen={isFullScreen}
      background={background}
      title={exampleId}
      $height={height || measuredHeight || DEFAULT_HEIGHT}
      loading="lazy"
      allow="allow-popups allow-modals allow-same-origin allow-scripts"
      onLoad={() => setLoaded(true)}
      ref={measuredRef}
      src={isPlayground ? `${origin}/playground-full` : `${origin}/examples/${pageId}/`}
    />
  );
};

export default Frame;
