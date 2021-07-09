import * as React from "react";
import { LiveProvider, LiveEditor } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import styled, { css, createGlobalStyle } from "styled-components";
import { ThemeProvider, defaultTheme, Stack } from "@kiwicom/orbit-components";

import { getModules, copyImports } from "../../components/ReactExample/helpers";
import Board from "../../components/ReactExample/Board";
import ViewportsRuler from "../../components/ReactExample/ViewportsRuler";
import Frame from "../../components/ReactExample/Frame";
import useSandbox from "./useSandbox";

const StyledWrapper = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const StyledPreviewWrapper = styled.div<{ width: number }>`
  ${({ theme, width }) => css`
    max-width: ${width}px;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: ${theme.orbit.spaceXLarge} ${theme.orbit.spaceMedium} ${theme.orbit.spaceXSmall};
  `};
`;

const GlobalStyle = createGlobalStyle`
  body,
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }
`;

const Sandbox = ({ pathContext }) => {
  const { example, id, example_id, scope } = pathContext;
  const [isEditorOpened, setOpenEditor] = React.useState(true);
  const [width, setPreviewWidth] = React.useState(0);
  const { code, origin } = useSandbox(example_id);

  const getCurrentWidth = React.useCallback(size => setPreviewWidth(size), []);

  const modules = getModules(scope);
  const imports = copyImports(scope);

  return (
    <ThemeProvider theme={defaultTheme}>
      <LiveProvider code={code || example} scope={{ ...modules, styled, css }} theme={dracula}>
        <GlobalStyle />
        <StyledWrapper>
          <ViewportsRuler onChangeSize={getCurrentWidth} />
          <Stack justify="center" align="center">
            <StyledPreviewWrapper width={width}>
              <Frame
                origin={origin}
                fullHeight
                pageId={id}
                exampleId={example_id}
                background="white"
              />
            </StyledPreviewWrapper>
          </Stack>
          <Board
            isEditorOpened={isEditorOpened}
            onOpenEditor={() => setOpenEditor(!isEditorOpened)}
            code={[imports, example].join("\n\n")}
          />
          {isEditorOpened && <LiveEditor />}
        </StyledWrapper>
      </LiveProvider>
    </ThemeProvider>
  );
};

export default Sandbox;
