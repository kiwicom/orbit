import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Text } from "@kiwicom/orbit-components";

import { copyImports } from "./helpers";
import Example from "./Example";

export type BgType = "white" | "dark" | "grid";
export interface Props {
  exampleId: string;
  responsive?: boolean;
  height?: number;
  background?: BgType;
}

const ReactExample = ({ exampleId, responsive = true, background = "white", height }: Props) => {
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
            exampleVariants {
              name
              code
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
          }
        }
      }
    `,
  );

  const key = exampleId.toLowerCase();
  const example = allExample.nodes.find(({ example_id }) => example_id === key);

  if (!example) return <Text>Could not find example with the id: {exampleId}</Text>;

  const imports = copyImports(example.scope);

  return (
    <Example
      responsive={responsive}
      height={height}
      imports={imports}
      background={background}
      exampleKnobs={example.exampleKnobs}
      exampleVariants={example.exampleVariants}
      exampleId={example.id}
      exampleName={exampleId}
      defaultCode={example.example}
    />
  );
};

export default ReactExample;
