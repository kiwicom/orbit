import * as React from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import styled, { css, createGlobalStyle } from "styled-components";
import * as Components from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";
import { ThemeProvider, defaultTheme } from "@kiwicom/orbit-components";

import Board from "../components/ReactExample/Board";
import ViewportsRuler from "../components/ReactExample/ViewportsRuler";
import { PREVIEW_ID, EDITOR_ID } from "../components/ReactExample/consts";

const StyledWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const StyledPreviewWrapper = styled.div<{ width: number }>`
  ${({ theme, width }) => css`
    max-width: ${width}px;
    width: 100%;
    overflow: scroll;
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
  const { example, example_id, scope, pure } = pathContext;
  const [isEditorOpened, setOpenEditor] = React.useState(false);
  const [width, setPreviewWidth] = React.useState(0);
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    const handleStorage = (ev: StorageEvent) => {
      if (ev.key === example_id.toLowerCase() && ev.newValue) {
        setCode(ev.newValue);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [setCode, example_id]);

  const getCurrentWidth = React.useCallback(size => setPreviewWidth(size), []);

  const modules = scope.reduce((acc, { name: moduleName, path }) => {
    if (path.match(/@kiwicom\/orbit-components\/icons/)) {
      return {
        ...acc,
        [moduleName]: Icons[moduleName],
      };
    }

    return {
      ...acc,
      [moduleName]: Components[moduleName],
    };
  }, {});

  const scopeOutput = scope
    .map(({ path, name: moduleName, default: isDefault }) => {
      if (isDefault) return `import ${moduleName} from ${path}`;
      return `import { ${moduleName} }  from ${path}`;
    })
    .join("\n");

  return (
    <ThemeProvider theme={defaultTheme}>
      <LiveProvider code={code || example} scope={{ ...modules, styled, css }} theme={dracula}>
        <GlobalStyle />
        <StyledWrapper>
          <ViewportsRuler onChangeSize={getCurrentWidth} />
          <Components.Stack justify="center" align="center">
            <StyledPreviewWrapper width={width} id={PREVIEW_ID}>
              <LivePreview />
            </StyledPreviewWrapper>
          </Components.Stack>
          {!pure && (
            <Board
              isEditorOpened={isEditorOpened}
              onOpenEditor={() => setOpenEditor(!isEditorOpened)}
              code={[scopeOutput, example].join("\n\n")}
            />
          )}
          {!pure && isEditorOpened && <LiveEditor id={EDITOR_ID} />}
        </StyledWrapper>
      </LiveProvider>
    </ThemeProvider>
  );
};

export default Sandbox;
