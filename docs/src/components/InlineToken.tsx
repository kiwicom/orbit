import * as React from "react";
import styled, { css } from "styled-components";
import { Text, Tooltip } from "@kiwicom/orbit-components";

import DesignTokenIcon from "./DesignTokens/components/DesignTokenIcon";
import upperFirst from "../utils/upperFirst";
import { TokenSchema } from "./DesignTokens/typings";
import findTokenAttributes from "./DesignTokens/findTokenAttributes";

const StyledInlineTokenWrapper = styled.span`
  flex-shrink: 1;
  vertical-align: -3px; /* align with the baseline of surrounding text */
  line-height: 1.2;
`;

const StyledInlineToken = styled.span<{ size?: "medium" | "large" }>`
  ${({ theme, size = "medium" }) => css`
    display: inline-flex;
    font-size: 14px;
    font-weight: bold;
    align-items: center;
    border: 1px dashed #dee7f5;
    background: white;

    ${size === "medium" &&
    css`
      height: 22px;
      border-radius: 11px;
      padding-left: 2px;
      padding-right: 8px;

      > * + * {
        margin-left: ${theme.orbit.spaceOneX};
      }
    `};
    ${size === "large" &&
    css`
      height: 44px;
      border-radius: 22px;
      padding-left: 6px;
      padding-right: 18px;

      > * + * {
        margin-left: ${theme.orbit.spaceTwoX};
      }
    `};
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

const getAlternateTokenName = (
  name: string,
  size: "medium" | "large" = "medium",
  schema: TokenSchema,
): React.ReactNode => {
  if (typeof name !== "string") return name;

  if (schema?.object === "palette") {
    const { variant, subVariant } = schema;
    return (
      <StyledLabel size={size}>
        <span>{upperFirst(variant)}</span>
        {subVariant && (
          <StyledLabelVariant size={size}>
            {subVariant
              .split(/[-\s]/g)
              .map(s => upperFirst(s))
              .join(" ")}
          </StyledLabelVariant>
        )}
      </StyledLabel>
    );
  }

  return name;
};

interface Props {
  alternateName?: boolean;
  name: string;
  size?: "medium" | "large";
}

const InlineToken = ({ size, alternateName, name }: Props) => {
  const { value, type, schema } = findTokenAttributes(name);
  const tokenName = alternateName ? getAlternateTokenName(name, size, schema) : name;
  return (
    <StyledInlineTokenWrapper>
      <Tooltip
        content={
          <>
            <Text>Token value: {value}</Text>
            {alternateName && <Text>Token name: {name}</Text>}
          </>
        }
        preferredPosition="top"
        preferredAlign="center"
      >
        <StyledInlineToken size={size}>
          <DesignTokenIcon size={size === "medium" ? "small" : size} value={value} type={type} />
          <span>{tokenName}</span>
        </StyledInlineToken>
      </Tooltip>
    </StyledInlineTokenWrapper>
  );
};

export default InlineToken;
