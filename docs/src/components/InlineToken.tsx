import React from "react";
import styled, { css } from "styled-components";
import tokensList from "@kiwicom/orbit-design-tokens/output/theo-spec.json";
import { warning } from "@adeira/js";
import { Text, Tooltip } from "@kiwicom/orbit-components";

import DesignTokenIcon from "./DesignTokensList/components/DesignTokenIcon";
import { TokenNameType, TokenValueType } from "./DesignTokensList";

const StyledInlineTokenWrapper = styled.span`
  flex-shrink: 1;
  vertical-align: -3px; /* align with the baseline of surrounding text */
`;

const StyledInlineToken = styled.span<{ size?: "medium" | "large" }>`
  ${({ theme, size = "medium" }) => css`
    display: inline-flex;
    align-items: center;
    ${size === "medium" &&
    `
      height: 22px;
      border-radius: 11px;
      padding-left: 4px;
      padding-right: 8px;
    `};
    ${size === "large" &&
    `
      height: 44px;
      border-radius: 22px;
      padding-left: 6px;
      padding-right: 18px;
    `};
    display: inline-flex;
    font-size: 14px;
    font-weight: bold;
    align-items: center;
    border: 1px dashed #dee7f5;
    background: white;

    > * + * {
      margin-left: ${theme.orbit.spaceXSmall};
    }
  `}
`;

const StyledLabel = styled.span<{ size: "medium" | "large" }>`
  ${({ size }) => `
    display: inline-flex;
    ${
      size === "medium" &&
      `
        > * + * {
          margin-left: 4px;
        }
      `
    };
    ${
      size === "large" &&
      `
        flex-direction: column;
      `
    };
  `}
`;
const StyledLabelVariant = styled.span<{ size: "medium" | "large" }>`
  ${({ theme, size }) => `
    font-weight: normal;
    color: ${theme.orbit.paletteInkLight};
    ${
      size === "large" &&
      `
        font-size: 12px;
      `
    };
  `}
`;

const findValue = (name: TokenNameType): TokenValueType => {
  const tokenValue = name in tokensList ? tokensList[name] : "";
  warning(!!tokenValue, "%s wasn't found in the tokens.", name);
  return tokenValue;
};

const getAlternateTokenName = (
  name: TokenNameType,
  size: "medium" | "large" = "medium",
): React.ReactNode => {
  if (typeof name !== "string") return name;

  if (name.startsWith("palette")) {
    const values = name.match(/[A-Z][a-z]+/g);
    if (!values) return name;
    const filteredValues = values.filter(Boolean);
    if (filteredValues.length === 1) return values[0];
    return (
      <StyledLabel size={size}>
        <span>{filteredValues[0]}</span>
        <StyledLabelVariant size={size}>
          {filteredValues[1]}
          {filteredValues[2] && ` ${filteredValues.slice(1).join(" ")}`}
        </StyledLabelVariant>
      </StyledLabel>
    );
  }
  return name;
};

interface Props {
  alternateName?: boolean;
  name: TokenNameType;
  size?: "medium" | "large";
}

const InlineToken = ({ size, alternateName, name }: Props) => {
  const tokenValue = findValue(name);
  const tokenName = alternateName ? getAlternateTokenName(name, size) : name;
  return (
    <StyledInlineTokenWrapper>
      <Tooltip
        content={
          <>
            <Text>Token value: {tokenValue}</Text>
            {alternateName && <Text>Token name: {name}</Text>}
          </>
        }
        placement="bottom"
      >
        <StyledInlineToken size={size}>
          <DesignTokenIcon size={size} value={tokenValue} />
          <span>{tokenName}</span>
        </StyledInlineToken>
      </Tooltip>
    </StyledInlineTokenWrapper>
  );
};

export default InlineToken;
