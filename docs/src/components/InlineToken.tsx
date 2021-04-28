import React from "react";
import styled from "styled-components";
import tokensList from "@kiwicom/orbit-design-tokens/output/theo-spec.json";
import { warning } from "@adeira/js";
import { Stack, Text, Tooltip } from "@kiwicom/orbit-components";

import DesignTokenIcon from "./DesignTokensList/components/DesignTokenIcon";

const StyledInlineToken = styled.span`
  height: 24px;
  display: inline-flex;
  padding: 0 12px 0 4px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  align-items: center;
  border: 1px dashed #dee7f5;
  background: white;
  top: 3px;
  position: relative;
`;

const findValue = value => {
  const tokenValue = value in tokensList ? tokensList[value] : false;
  warning(!!tokenValue, "Value %s haven't been find in all tokens.", value);
  return tokenValue;
};

const getTokenName = value => {
  if (value.startsWith("palette")) {
    const values = value.match(/[A-Z][a-z]+/g);
    return values.filter(Boolean).join(" / ");
  }
  return value;
};

const InlineToken = ({ value }) => {
  const tokenValue = findValue(value);
  const tokenName = getTokenName(value);
  return (
    <Tooltip
      content={<Text>Token value: {tokenValue}</Text>}
      preferredPosition="top"
      preferredAlign="center"
    >
      <StyledInlineToken>
        <Stack inline spacing="XSmall" shrink align="center">
          <DesignTokenIcon value={tokenValue} />
          <span>{tokenName}</span>
        </Stack>
      </StyledInlineToken>
    </Tooltip>
  );
};

export default InlineToken;
