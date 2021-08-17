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
  const [origin, setOrigin] = React.useState("");

  const { allExample } = useStaticQuery(
    graphql`
      query ExamplesQuery {
        allExample {
          nodes {
            id
            example
            example_id
            scope {
              name
              path
              default
            }
            knobs {
              name
              defaultValue
              type
              options
            }
          }
        }
      }
    `,
  );

  React.useEffect(() => {
    const key = exampleId.toLowerCase();
    if (code) window.localStorage.setItem(key, code);
    if (window.localStorage.getItem(key)) {
      setCode(window.localStorage.getItem(key) || "");
    }

    setOrigin(window.location.origin);

    return () => window.localStorage.removeItem(key);
  }, [setCode, code, exampleId, setOrigin]);

  console.log(code);

  const example = allExample.nodes.find(({ example_id }) => example_id === exampleId.toLowerCase());

  if (!example) return <Text>Could not find example with the id: {exampleId}</Text>;

  const imports = copyImports(example.scope);
  const codeWithImports = [imports, code].join("\n");

  return (
    <Example
      minHeight={minHeight}
      maxHeight={maxHeight}
      background={background}
      origin={origin}
      knobs={example.knobs}
      code={codeWithImports}
      exampleId={example.id}
      fullPageExampleId={exampleId.toLowerCase()}
      example={example.example}
      onChangeCode={c => setCode(c)}
    />
  );
};

export default ReactExample;
