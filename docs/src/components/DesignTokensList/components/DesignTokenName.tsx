import React from "react";
import styled from "styled-components";
import { Tooltip } from "@kiwicom/orbit-components";

import useCopyToClipboard from "../../../hooks/useCopyToClipboard";

const StyledDesignTokenName = styled.span`
  cursor: pointer;
`;

const DesignTokenName = ({ children }) => {
  const [isCopied, copy] = useCopyToClipboard(1000);
  return (
    <Tooltip
      content={isCopied ? "Name copied!" : "Click to copy the name of the token."}
      preferredAlign="center"
      preferredPosition="bottom"
    >
      <StyledDesignTokenName onClick={() => copy(children)} role="button">
        {children}
      </StyledDesignTokenName>
    </Tooltip>
  );
};

export default DesignTokenName;
