import React from "react";
import { LiveProvider, LiveEditor } from "react-live";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import dracula from "prism-react-renderer/themes/dracula";
import * as Components from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

import Board from "./Board";
import Preview from "./Preview";
import ViewportsRuler from "./ViewportsRuler";

interface Props {
  exampleId: string;
  maxHeight?: number;
  minHeight?: number;
}

const StyledExampleWrapper = styled.div`
  ${({ theme }) => `
    box-shadow: ${theme.orbit.boxShadowRaisedSubtle};
    border-radius: 12px;
    overflow: hidden;
  `};
`;

const StyledEditor = styled(LiveEditor)`
  ${({ theme }) => `
    border-radius: 0 0 ${theme.orbit.borderRadiusLarge} ${theme.orbit.borderRadiusLarge};
  `};
`;

const ReactExample = ({ exampleId, maxHeight, minHeight }: Props) => {
  const [isEditorOpened, setOpenEditor] = React.useState(false);
  const [width, setPreviewWidth] = React.useState(0);

  const getCurrentWidth = React.useCallback(size => setPreviewWidth(size), []);

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

  if (!example)
    return <Components.Text>{`Could not find example with the id: ${exampleId}`}</Components.Text>;

  const { fields } = example;

  const modules = fields.scope.reduce((acc, { name: moduleName, path }) => {
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

  const scopeOutput = fields.scope
    .map(({ path, name: moduleName, default: isDefault }) => {
      if (isDefault) return `import ${moduleName} from ${path}`;
      return `import { ${moduleName} }  from ${path}`;
    })
    .join("\n");

  return (
    <LiveProvider code={fields.example} scope={{ ...modules, styled, css }} theme={dracula}>
      <StyledExampleWrapper>
        <ViewportsRuler onChangeSize={getCurrentWidth} />
        <Preview width={width} minHeight={minHeight} maxHeight={maxHeight} />
        <Board
          isEditorOpened={isEditorOpened}
          onOpenEditor={() => setOpenEditor(!isEditorOpened)}
          code={[scopeOutput, fields.example].join("\n\n")}
        />
        {isEditorOpened && <StyledEditor />}
      </StyledExampleWrapper>
    </LiveProvider>
  );
};

export default ReactExample;
