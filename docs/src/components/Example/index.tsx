import React from "react";
import { LiveProvider, LivePreview, LiveEditor } from "react-live";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import loadable from "@loadable/component";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { Grid, ButtonLink, Stack, Tooltip } from "@kiwicom/orbit-components";
import dracula from "prism-react-renderer/themes/dracula";
import ChevronUp from "@kiwicom/orbit-components/lib/icons/ChevronUp";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Copy from "../../images/copy.svg";

interface Props {
  name: string;
}

const StyledPreviewWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.orbit.boxShadowFixed};
  padding: 20px;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
`;

const StyledBoard = styled.div``;

const Example = ({ name }: Props) => {
  const [isOpened, setOpenEditor] = React.useState(false);
  const [isCopied, setCopied] = React.useState(false);

  const { allFile } = useStaticQuery(
    graphql`
      query ExamplesQuery {
        allFile(filter: { absolutePath: { regex: "/__examples__/" } }) {
          nodes {
            id
            relativePath
            fields {
              example_id
              example
            }
          }
        }
      }
    `,
  );

  const { fields } = allFile.nodes.find(n => n.fields.example_id === name);

  // TODO: just temporary, investigating
  // dynamic import: https://github.com/gregberge/loadable-components/pull/483
  const modules = ["Button", "Heading", "Text", "Stack"].reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: loadable(() => import(`@kiwicom/orbit-components`), {
        resolveComponent: mod => mod[cur],
      }),
    };
  }, {});

  return (
    <>
      <LiveProvider
        code={fields.example}
        scope={{ ...modules, css, styled, defaultTheme, Grid }}
        theme={dracula}
      >
        <StyledPreviewWrapper>
          <LivePreview />
        </StyledPreviewWrapper>
        <StyledBoard>
          <Stack flex justify="between" align="center">
            <Stack inline>
              <ButtonLink
                onClick={() => setOpenEditor(prev => !prev)}
                type="secondary"
                ariaExpanded={isOpened}
                iconRight={isOpened ? <ChevronUp /> : <ChevronDown />}
              >
                Code
              </ButtonLink>
            </Stack>
            <Stack inline justify="end" align="center">
              <CopyToClipboard text={fields.example}>
                <Tooltip
                  preferredPosition="top"
                  preferredAlign="center"
                  content={isCopied ? "copied" : "copy to clipboard"}
                >
                  <ButtonLink
                    onClick={() => setCopied(true)}
                    type="secondary"
                    ariaLabelledby="copy to clipboard"
                  >
                    <Copy />
                  </ButtonLink>
                </Tooltip>
              </CopyToClipboard>
            </Stack>
          </Stack>
        </StyledBoard>
        {isOpened && <LiveEditor />}
      </LiveProvider>
    </>
  );
};

export default Example;
