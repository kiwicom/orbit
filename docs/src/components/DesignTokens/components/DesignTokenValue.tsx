import React from "react";
import styled from "styled-components";
import { Truncate, Tooltip } from "@kiwicom/orbit-components";
import { Check } from "@kiwicom/orbit-components/icons";

import CopyIcon from "../../../images/icons/CopyIcon.svg";
import useCopyToClipboard from "../../../hooks/useCopyToClipboard";

const StyledCopyButton = styled.button`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  ${({ $isCopied }) => $isCopied && "opacity: 1"};
`;

const StyledTokenValue = styled.span`
  display: inline-flex;
  align-items: center;

  :hover {
    ${StyledCopyButton} {
      opacity: 1;
    }
  }
`;

const StyledStrikeThrough = styled.span`
  ${({ $hasStrikeThrough }) => $hasStrikeThrough && "text-decoration: line-through;"};
  opacity: 0.5;
`;

const DesignTokenValue = ({
  value,
  deprecated,
  hasStrikeThrough,
  showCopyButton,
  width = "200px",
}: {
  value: string | number;
  deprecated?: boolean;
  hasStrikeThrough?: boolean;
  showCopyButton?: boolean;
  width?: string;
}) => {
  const [isCopied, copy] = useCopyToClipboard(2000);

  const wrapValue = () => <Truncate maxWidth={width}>{value}</Truncate>;

  const renderValue = () => {
    if (deprecated) {
      return (
        <Tooltip content="Token is deprecated" preferredAlign="center" preferredPosition="bottom">
          <StyledStrikeThrough $hasStrikeThrough={hasStrikeThrough}>
            {wrapValue()}
          </StyledStrikeThrough>
        </Tooltip>
      );
    }
    return wrapValue();
  };
  return (
    <StyledTokenValue title={value}>
      {renderValue()}
      {showCopyButton && (
        <StyledCopyButton
          $isCopied={isCopied}
          type="button"
          onClick={() => copy(String(value))}
          title={String(value)}
        >
          {isCopied ? <Check /> : <CopyIcon />}
        </StyledCopyButton>
      )}
    </StyledTokenValue>
  );
};

export default DesignTokenValue;
