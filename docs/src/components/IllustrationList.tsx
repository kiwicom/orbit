import React from "react";
import { TextLink } from "@kiwicom/orbit-components";
import illustrationList from "@kiwicom/orbit-components/lib/data/illustrations.json";
import airportIllustrationList from "@kiwicom/orbit-components/lib/data/airportIllustrations.json";

import VisualList from "./VisualList";

export interface IllustrationObjectShape {
  original: string;
  resized: string;
}

const IllustrationList = ({ airport }) => {
  const listToUse = airport ? airportIllustrationList : illustrationList;
  const getImgSource = (illustrationObject: IllustrationObjectShape) => illustrationObject.resized;
  const actions = (illustrationObject: IllustrationObjectShape) => (
    <TextLink href={illustrationObject.original} external>
      Download PNG illustration
    </TextLink>
  );

  const componentName = airport ? "AirportIllustration" : "Illustration";

  const exampleCode = (name: string) =>
    `import { ${componentName} } from "@kiwicom/orbit-components";\n\n<${componentName} name="${name}" />`;

  return (
    <VisualList
      list={listToUse}
      actions={actions}
      getImgSource={getImgSource}
      exampleCode={exampleCode}
    />
  );
};

export default IllustrationList;
