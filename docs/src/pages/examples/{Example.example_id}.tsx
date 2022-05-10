import * as React from "react";
import { LiveProvider, LiveError } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import styled, { css, createGlobalStyle } from "styled-components";
import { ThemeProvider, defaultTheme } from "@kiwicom/orbit-components";
import { graphql } from "gatsby";

import { getModules, copyImports } from "../../components/ReactExample/helpers";
import useSandbox from "../../hooks/useSandbox";
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

const Sandbox = ({ data }) => {
  const {
    id,
    example,
    exampleKnobs,
    example_id,
    scope,
    exampleVariants,
  } = data.allExample.nodes[0];
  const { code, origin, setCode } = useSandbox(example_id);

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
        <LiveError />
        <Example
          code={codeWithImports}
          exampleId={id}
          isFullPage
          exampleName={example_id}
          example={example}
          origin={origin}
          exampleKnobs={exampleKnobs}
          exampleVariants={exampleVariants || []}
          onChangeCode={c => setCode(c)}
        />
      </LiveProvider>
    </ThemeProvider>
  );
};

export const pageQuery = graphql`
  query ExamplePageQuery($example_id: String!) {
    allExample(filter: { example_id: { eq: $example_id } }) {
      nodes {
        id
        example
        example_id
        scope {
          name
          path
          default
        }
        exampleKnobs {
          component
          knobs {
            defaultValue
            options
            name
            type
          }
        }
        exampleVariants {
          name
          code
        }
      }
    }
  }
`;

export default Sandbox;
