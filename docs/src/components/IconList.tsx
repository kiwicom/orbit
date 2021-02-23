import React from "react";
import { Button, Stack } from "@kiwicom/orbit-components";
import iconList from "@kiwicom/orbit-components/lib/data/icons.json";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { pascalize } from "../utils/common";
import VisualList from "./VisualList";

export interface IconObjectShape {
  category?: string;
  character: string;
  description?: string;
  svg: string;
  url: string;
}

const IconList = () => {
  const getImgSource = (iconObject: IconObjectShape) => `data:image/svg+xml;utf8,${iconObject.svg}`;
  const actions = (iconObject: IconObjectShape, copied, setCopied) => (
    <Stack direction="row" justify="between">
      <Button size="small" type="secondary" href={iconObject.url} external>
        Download SVG
      </Button>
      <CopyToClipboard text={iconObject.svg}>
        <Button size="small" type="secondary" disabled={copied} onClick={() => setCopied(true)}>
          {copied ? "Copied source!" : "Copy SVG source"}
        </Button>
      </CopyToClipboard>
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
    />
  );
};

export default IconList;
