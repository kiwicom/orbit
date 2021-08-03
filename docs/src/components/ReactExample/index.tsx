import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Text } from "@kiwicom/orbit-components";

import { copyImports } from "./helpers";
import Example from "./Example";

export type BgType = "white" | "dark" | "grid";
export interface Props {
  exampleId: string;
  maxHeight?: number;
  background?: BgType;
  minHeight?: number;
}

const ReactExample = ({ exampleId, background = "white", minHeight, maxHeight }: Props) => {
  const [code, setCode] = React.useState("");
  const [isEditorOpened, setOpenEditor] = React.useState(false);
  const [origin, setOrigin] = React.useState("");
  const [width, setPreviewWidth] = React.useState(0);

  const { allFile } = useStaticQuery(
    graphql`
      query ExamplesQuery {
        allFile(filter: { absolutePath: { regex: "/__examples__/" } }) {
          nodes {
            id
            fields {
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
      }
    `,
  );

  React.useEffect(() => {
    const key = exampleId.toLowerCase();
    if (code) window.localStorage.setItem(key, code);
    setOrigin(window.location.origin);

    return () => window.localStorage.removeItem(key);
  }, [setCode, code, exampleId, setOrigin]);

  const example = allFile.nodes.find(n => n.fields.example_id === exampleId);
  const handleChangeRulerSize = React.useCallback(size => setPreviewWidth(size), []);

  if (!example) return <Text>Could not find example with the id: {exampleId}</Text>;

  const imports = copyImports(example.fields.scope);
  const codeWithImports = [imports, example.fields.example].join("\n");

  return (
    <Example
      isEditorOpened={isEditorOpened}
      minHeight={minHeight}
      maxHeight={maxHeight}
      background={background}
      origin={origin}
      width={width}
      code={codeWithImports}
      exampleId={example.id}
      fullPageExampleId={exampleId.toLowerCase()}
      example={example.fields.example}
      onChangeCode={c => setCode(c)}
      onChangeSize={handleChangeRulerSize}
      onOpenEditor={() => setOpenEditor(prev => !prev)}
    />
  );
};

export default ReactExample;
