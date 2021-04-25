import * as React from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import styled, { StyleSheetManager, css } from "styled-components";
import { LivePreview } from "react-live";
import { Stack } from "@kiwicom/orbit-components";

type BgType = "white" | "dark" | "grid";
interface Props {
  background?: BgType;
  width: number;
}

const BOARD_HEIGHT = 68;

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

const StyledFrame = styled(Frame)`
  ${({ background, height }) => css`
    width: 100%;
    height: ${Number(height) + BOARD_HEIGHT}px;
    ${getBackground(background)};
  `};
`;

const StyledPreviewWrapper = styled.div<{ width: number }>`
  ${({ theme, width }) => css`
    max-width: ${width}px;
    width: 100%;
    overflow: scroll;
    padding-top: ${theme.orbit.spaceXLarge};
  `};
`;

const Preview = ({ background = "white", width }: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [loaded, setLoad] = React.useState(false);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (ref && ref.current && loaded) {
      setHeight(ref.current.clientHeight);
    }
  }, [loaded, setHeight]);

  return (
    <StyledFrame background={background} height={height} onLoad={() => setLoad(true)}>
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document.head}>
            <>
              <Stack justify="center" align="center">
                <StyledPreviewWrapper ref={ref} width={width}>
                  <LivePreview />
                </StyledPreviewWrapper>
              </Stack>
            </>
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </StyledFrame>
  );
};

export default Preview;
