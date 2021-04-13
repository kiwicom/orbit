import React from "react";
import { LiveProvider, LivePreview, LiveEditor } from "react-live";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { ButtonLink, Stack, Text, Tooltip } from "@kiwicom/orbit-components";
import dracula from "prism-react-renderer/themes/dracula";
import ChevronUp from "@kiwicom/orbit-components/lib/icons/ChevronUp";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import * as Components from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

import Copy from "../../images/copy.svg";
import { copyTimeout } from "../../utils/common";

interface Props {
  exampleId: string;
}

const StyledPreviewWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.orbit.boxShadowFixed};
  padding: 20px;
`;

const StyledBoard = styled.div`
  background: ${({ theme }) => theme.orbit.paletteCloudLight};
  padding: ${({ theme }) => theme.orbit.spaceXSmall};
`;

const ReactExample = ({ exampleId }: Props) => {
  const [isOpened, setOpenEditor] = React.useState(false);
  const [isCopied, setCopied] = React.useState(false);

  React.useEffect(() => {
    copyTimeout(isCopied, setCopied);
  }, [isCopied, setCopied]);

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
              scope {
                name
                path
                default
              }
            }
          }
        }
      }
    `,
  );

  const example = allFile.nodes.find(n => n.fields.example_id === exampleId);

  if (!example) return <Text>{`Could not find example with the id: ${exampleId}`}</Text>;

  const { fields } = example;

  const modules = fields.scope.reduce((acc, { name, path }) => {
    if (path.match(/@kiwicom\/orbit-components\/icons/)) {
      return {
        ...acc,
        [name]: Icons[name],
      };
    }

    return {
      ...acc,
      [name]: Components[name],
    };
  }, {});

  const scopeOutput = fields.scope
    .map(({ path, name }) => `import { ${name} } from ${path}`)
    .join("\n");

  return (
    <LiveProvider
      code={fields.example}
      scope={{ ...modules, defaultTheme, styled, css }}
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
            <ButtonLink
              onClick={() => setOpenEditor(prev => !prev)}
              type="secondary"
              ariaExpanded={isOpened}
              iconRight={isOpened ? <ChevronUp /> : <ChevronDown />}
            >
              Playground
            </ButtonLink>
          </Stack>
          <Stack inline justify="end" align="center">
            <CopyToClipboard text={[scopeOutput, fields.example].join("\n\n")}>
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
  );
};

export default ReactExample;
