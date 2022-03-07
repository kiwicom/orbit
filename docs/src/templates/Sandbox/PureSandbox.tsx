import * as React from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import styled, { css, createGlobalStyle } from "styled-components";
import { ThemeProvider, defaultTheme } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

import useSandbox from "./useSandbox";
import { getModules } from "../../components/ReactExample/helpers";
import { PREVIEW_ID } from "../../components/ReactExample/consts";

const GlobalStyle = createGlobalStyle`
  body,
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }
`;

const PureSandbox = ({ pageContext }) => {
  const { example, example_id, scope } = pageContext;
  const { code } = useSandbox(example_id);
  const modules = getModules(scope);

  return (
    <ThemeProvider theme={defaultTheme}>
      <LiveProvider
        code={code || example}
        scope={{ ...modules, styled, Icons, css }}
        theme={dracula}
      >
        <LiveError />
        <GlobalStyle />
        <section
          id={PREVIEW_ID}
          css={css`
            padding: 30px 10px;
          `}
        >
          <LivePreview />
        </section>
      </LiveProvider>
    </ThemeProvider>
  );
};

export default PureSandbox;
