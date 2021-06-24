import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import { Text } from "@kiwicom/orbit-components";
import { Editor } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";

import Board from "./Board";
import { PREVIEW_ID } from "./consts";

type BgType = "white" | "dark" | "grid";

interface Props {
  exampleId: string;
  maxHeight?: number;
  background: BgType;
  minHeight?: number;
}

const BOARD_HEIGHT = 90;

const getBackground = (type: BgType) => ({ theme }) => {
  if (type === "grid") {
    return `
      background:
      linear-gradient(-90deg, rgba(0,0,0,.08) 1px, transparent 1px),
      linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
      linear-gradient(-90deg, rgba(0, 0, 0, .06) 1px, transparent 1px),
      linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px),
      linear-gradient(transparent 3px, ${theme.orbit.paletteWhite} 3px, ${theme.orbit.paletteWhite} 78px, transparent 78px),
      linear-gradient(-90deg, ${theme.orbit.paletteInkNormal} 1px, transparent 1px),
      linear-gradient(-90deg, transparent 3px, ${theme.orbit.paletteWhite} 3px, ${theme.orbit.paletteWhite} 78px, transparent 78px),
      linear-gradient(${theme.orbit.paletteInkNormal} 1px, transparent 1px),
      #f2f2f2;

    background-size:
        20px 20px,
        20px 20px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px;
    `;
  }

  if (type === "dark") return `background: ${theme.orbit.paletteInkNormal}`;

  return `background: ${theme.orbit.paletteWhite}`;
};

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.orbit.boxShadowRaisedSubtle};
    border-radius: 12px;
    overflow: hidden;
  `};
`;

const StyledFrame = styled.iframe<{ minHeight?: number; background: BgType; height?: number }>`
  ${({ background, height, minHeight }) => css`
    width: 100%;
    min-height: ${minHeight}px;
    height: ${Number(height) + BOARD_HEIGHT}px;
    ${getBackground(background)};
  `};
`;

const ReactExample = ({ exampleId, background = "white", minHeight, maxHeight }: Props) => {
  const [height, setHeight] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [isEditorOpened, setOpenEditor] = React.useState(false);

  const { allFile } = useStaticQuery(
    graphql`
      query ExamplesQuery {
        allFile(filter: { absolutePath: { regex: "/__examples__/" } }) {
          nodes {
            id
            fields {
              example
              example_id
            }
          }
        }
      }
    `,
  );

  React.useEffect(() => {
    const key = exampleId.toLowerCase();
    if (code) {
      window.localStorage.setItem(key, code);
    }

    return () => window.localStorage.removeItem(key);
  }, [setCode, code]);

  const measuredRef = React.useCallback(
    n => {
      if (n !== null && loaded) {
        const innerDocument: Document = n.contentWindow.document;
        const preview = innerDocument.getElementById(PREVIEW_ID);

        if (preview) {
          setHeight(preview?.getBoundingClientRect().height);
        }
      }
    },
    [loaded],
  );

  const example = allFile.nodes.find(n => n.fields.example_id === exampleId);

  if (!example) return <Text>{`Could not find example with the id: ${exampleId}`}</Text>;

  // const scopeOutput = example.fields.scope
  //   .map(({ path, name: moduleName, default: isDefault }) => {
  //     if (isDefault) return `import ${moduleName} from ${path}`;
  //     return `import { ${moduleName} }  from ${path}`;
  //   })
  //   .join("\n");

  return (
    <StyledWrapper>
      <StyledFrame
        background={background}
        title={exampleId}
        minHeight={minHeight}
        height={height}
        onLoad={() => setLoaded(true)}
        ref={measuredRef}
        src={`${window.location.origin}/examples/${example.id}`}
      />

      <Board
        isEditorOpened={isEditorOpened}
        onOpenEditor={() => setOpenEditor(!isEditorOpened)}
        code={example}
      />

      {isEditorOpened && (
        <Editor
          style={{ margin: 0, borderRadius: "0 0 12px 12px" }}
          theme={dracula}
          onChange={str => setCode(str)}
          language="jsx"
          code={example.fields.example}
        />
      )}
    </StyledWrapper>
  );
};

export default ReactExample;
