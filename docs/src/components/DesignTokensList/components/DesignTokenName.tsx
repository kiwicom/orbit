import React from "react";
import { Tooltip } from "@kiwicom/orbit-components";

import useCopyToClipboard from "../../../hooks/useCopyToClipboard";

const DesignTokenName = ({ children }) => {
  const [isCopied, copy] = useCopyToClipboard(1000);
  return (
    <Tooltip
      content="Click to copy the name of the token."
      preferredAlign="center"
      preferredPosition="bottom"
    >
      <span onClick={() => copy(children)} role="button">
        {isCopied ? "Copied!" : children}
      </span>
    </Tooltip>
  );
};

export default DesignTokenName;
