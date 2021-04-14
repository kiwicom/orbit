import * as React from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { StyleSheetManager } from "styled-components";
import { ThemeProvider } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import styled from "styled-components";

const StyledFrame = styled(Frame)`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

interface Props {
  children: React.ReactNode;
}

const Iframe = ({ children }: Props) => {
  return (
    <StyledFrame>
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document.head}>
            <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </StyledFrame>
  );
};

export default Iframe;
