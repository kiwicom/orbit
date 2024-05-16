import * as React from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import { createGlobalStyle, css } from "styled-components";
import { OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";
import loadable from "@loadable/component";
import { themes } from "prism-react-renderer";

import useSandbox from "../hooks/useSandbox";
import { PREVIEW_ID } from "../components/ReactExample/consts";

const Orbit = loadable.lib(() => import("@kiwicom/orbit-components"));

const GlobalStyle = createGlobalStyle`
  body,
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }

  button {
    border: none;
  }
`;

const PlaygroundIframe = () => {
  const { code } = useSandbox(
    "playground",
    "() => <OrbitProvider theme={defaultTheme} useId={React.useId}><Button>Hello world!</Button></OrbitProvider>",
  );

  return (
    <OrbitProvider useId={React.useId} theme={defaultTheme}>
      <Orbit>
        {orbit => {
          const { Icons, ...components } = orbit;
          return (
            <LiveProvider
              code={code}
              theme={themes.shadesOfPurple}
              scope={{ ...Icons, Icons, ...components, defaultTheme }}
            >
              <LiveError />
              <GlobalStyle />
              <section
                id={PREVIEW_ID}
                css={css`
                  padding: 10px;
                `}
              >
                <LivePreview />
              </section>
            </LiveProvider>
          );
        }}
      </Orbit>
    </OrbitProvider>
  );
};

export default PlaygroundIframe;
