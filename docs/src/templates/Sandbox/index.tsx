import * as React from "react";
import { LiveProvider } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import styled, { css, createGlobalStyle } from "styled-components";
import { ThemeProvider, defaultTheme } from "@kiwicom/orbit-components";

import { getModules, copyImports } from "../../components/ReactExample/helpers";
import useSandbox from "./useSandbox";
import Example from "../../components/ReactExample/Example";

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
  const { code, origin, setCode } = useSandbox(example_id);

  const handleChangeRulerSize = React.useCallback(size => setPreviewWidth(size), []);

  const modules = getModules(scope);
  const codeWithImports = copyImports(scope);

  React.useEffect(() => {
    const key = example_id.toLowerCase();
    if (code) window.localStorage.setItem(key, code);

    return () => window.localStorage.removeItem(key);
  }, [setCode, code, example_id]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <LiveProvider code={code || example} scope={{ ...modules, styled, css }} theme={dracula}>
        <GlobalStyle />
        <Example
          onChangeSize={handleChangeRulerSize}
          code={codeWithImports}
          exampleId={id}
          isFullPage
          example={example}
          origin={origin}
          isEditorOpened={isEditorOpened}
          width={width}
          onChangeCode={c => setCode(c)}
          onOpenEditor={() => setOpenEditor(prev => !prev)}
        />
      </LiveProvider>
    </ThemeProvider>
  );
};

export default Sandbox;
