import * as React from "react";
import { LiveProvider, LivePreview } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import styled, { css, createGlobalStyle } from "styled-components";
import * as Components from "@kiwicom/orbit-components";
import { ThemeProvider, defaultTheme } from "@kiwicom/orbit-components";

import useSandbox from "./useSandbox";
import { getModules } from "../../components/ReactExample/helpers";

const GlobalStyle = createGlobalStyle`
  body,
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }
`;

const PureSandbox = ({ pathContext }) => {
  const { example, example_id, scope } = pathContext;
  const { code } = useSandbox(example_id);
  const modules = getModules(scope);

  return (
    <ThemeProvider theme={defaultTheme}>
      <LiveProvider code={code || example} scope={{ ...modules, styled, css }} theme={dracula}>
        <GlobalStyle />
        <Components.Stack justify="center" align="center">
          <section
            css={css`
              padding: 30px 0;
            `}
          >
            <LivePreview />
          </section>
        </Components.Stack>
      </LiveProvider>
    </ThemeProvider>
  );
};

export default PureSandbox;
