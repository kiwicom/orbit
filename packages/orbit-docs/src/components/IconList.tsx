import React from "react";
import { Button, Stack } from "@kiwicom/orbit-components";
import iconList from "@kiwicom/orbit-components/lib/data/icons.json";

import { pascalize } from "../utils/common";
import VisualList from "./VisualList";

export interface IconObjectShape {
  category?: string;
  character?: string;
  description?: string;
  svg: string;
  url: string;
}

const IconList = () => {
  const getImgSource = (iconObject: IconObjectShape) => {
    const content = iconObject.svg.includes("fill")
      ? iconObject.svg.replace(/#/g, "%23")
      : iconObject.svg.replace(/<svg /, `<svg xmlns="http://www.w3.org/2000/svg" `);

    return `data:image/svg+xml;utf8,${content}`;
  };

  const actions = (iconObject: IconObjectShape, copied, copy) => (
    <Stack direction="row" justify="between">
      <Button size="small" type="secondary" href={iconObject.url} external>
        Download SVG
      </Button>
      <Button size="small" type="secondary" disabled={copied} onClick={() => copy(iconObject.svg)}>
        {copied ? "Copied source!" : "Copy SVG source"}
      </Button>
    </Stack>
  );

  const exampleCode = (name: string) => {
    const pascalName = pascalize(name);
    return `import { ${pascalName} } from "@kiwicom/orbit-components/icons"\n\n<${pascalName} />`;
  };

  return (
    <VisualList
      list={iconList}
      actions={actions}
      getImgSource={getImgSource}
      exampleCode={exampleCode}
      smallVisual
    />
  );
};

export default IconList;
