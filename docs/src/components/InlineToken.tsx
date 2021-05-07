import React from "react";
import styled from "styled-components";
import tokensList from "@kiwicom/orbit-design-tokens/output/theo-spec.json";
import { warning } from "@adeira/js";
import { Stack, Text, Tooltip } from "@kiwicom/orbit-components";

import DesignTokenIcon from "./DesignTokensList/components/DesignTokenIcon";
import { TokenNameType, TokenValueType } from "./DesignTokensList";

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

const findValue = (name: TokenNameType): TokenValueType => {
  const tokenValue = name in tokensList ? tokensList[name] : "";
  warning(!!tokenValue, "%s wasn't found in the tokens.", name);
  return tokenValue;
};

const getAlternateTokenName = (name: TokenNameType) => {
  if (typeof name !== "string") return name;

  if (name.startsWith("palette")) {
    const values = name.match(/[A-Z][a-z]+/g);
    if (!values) return name;
    return values.filter(Boolean).join(" / ");
  }
  return name;
};

interface Props {
  alternateName?: boolean;
  name: TokenNameType;
}

const InlineToken = ({ alternateName, name }: Props) => {
  const tokenValue = findValue(name);
  const tokenName = alternateName ? getAlternateTokenName(name) : name;
  return (
    <Tooltip
      content={
        <>
          <Text>Token value: {tokenValue}</Text>
          {alternateName && <Text>Token name: {name}</Text>}
        </>
      }
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
