import * as React from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import styled, { StyleSheetManager, css } from "styled-components";
import { LivePreview } from "react-live";

type BgType = "white" | "dark" | "grid";
interface Props {
  background?: BgType;
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

const StyledFrame = styled(Frame)`
  ${({ background }) => css`
    width: 100%;
    height: 100%;
    overflow: scroll;
    ${getBackground(background)};
  `};
`;

const StyledPreview = styled(LivePreview)`
  padding: ${({ theme }) => theme.orbit.spaceXLarge};
`;

const Preview = ({ background = "white" }: Props) => {
  return (
    <StyledFrame background={background}>
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document.head}>
            <StyledPreview />
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </StyledFrame>
  );
};

export default Preview;
