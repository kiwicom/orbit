import * as React from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import styled, { css, createGlobalStyle } from "styled-components";
import { OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";
import { graphql } from "gatsby";

import useSandbox from "../../hooks/useSandbox";
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

  button {
    border: none;
  }

`;

const PureSandbox = ({ data }) => {
  const { example, example_id, scope } = data.allExample.nodes[0];
  const { code } = useSandbox(example_id, example.example);
  const modules = getModules(scope);

  return (
    <div dir="ltr">
      <OrbitProvider theme={defaultTheme}>
        <LiveProvider
          code={code || example}
          scope={{ ...modules, styled, Icons, css }}
          language="jsx"
          theme={themes.dracula}
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
      </OrbitProvider>
    </div>
  );
};

export const pageQuery = graphql`
  query ExamplePurePageQuery($id: String!) {
    allExample(filter: { id: { eq: $id } }) {
      nodes {
        id
        example
        example_id
        scope {
          name
          path
          default
        }
      }
    }
  }
`;

export default PureSandbox;
