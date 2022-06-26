import React from "react";
import { Tooltip } from "@kiwicom/orbit-components";

import useCopyToClipboard from "../../../hooks/useCopyToClipboard";

const DesignTokenName = ({ children }) => {
  const [isCopied, copy] = useCopyToClipboard(1000);
  return (
    <Tooltip content="Click to copy the name of the token." placement="top">
      <button onClick={() => copy(children)} type="button">
        {isCopied ? "Copied!" : children}
      </button>
    </Tooltip>
  );
};

export default DesignTokenName;
