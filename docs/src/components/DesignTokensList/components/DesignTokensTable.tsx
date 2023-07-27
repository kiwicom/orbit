import React from "react";
import {
  Stack,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  mediaQueries as mq,
} from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";
import { camelCase, upperFirst } from "lodash";

import DesignTokenIcon from "./DesignTokenIcon";
import DesignTokenValue from "./DesignTokenValue";
import { StyledDesignTokenBase } from "./DesignTokenColor";
import OptionsFilter from "../OptionsFilter";
import { GlobalCategories, Platforms, Token } from "../types.d";

interface Props {
  tokens: Token[];
  filter: string;
  platform: keyof typeof Platforms;
  showReplacement?: boolean;
  tableName: string;
  showVariantColumn?: boolean;
}

const StyledDesignTokensTable = styled.div`
  ${mq.desktop(css`
    table {
      table-layout: fixed;
    }
  `)};
`;

const StyledCol = styled.col<{ $width: string | number }>`
  ${({ $width }) =>
    css`
      width: ${$width};
      max-width: ${$width};
    `};
`;

const DesignTokensTable = ({
  tokens,
  filter,
  platform,
  tableName,
  showVariantColumn,
  showReplacement,
}: Props) => {
  const [variantFilterValue, setVariantFilterValue] = React.useState<string[]>([]);

  const handleVariantSelection = (name: string) => {
    if (variantFilterValue.includes(name)) {
      setVariantFilterValue(prev => prev.filter(category => category !== name));
      return;
    }

    setVariantFilterValue(prev => [...prev, name]);
  };

  const variants = tokens
    .map(({ value }) => value?.schema?.variant)
    .filter(Boolean)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map(v => ({ key: v, name: camelCase(v) }));

  const filteredTokens = tokens
    .filter(({ name }) => name.toLowerCase().includes(filter))
    .filter(({ value }) => {
      if (showVariantColumn && variantFilterValue.length > 0 && value.schema.variant) {
        return variantFilterValue.includes(value.schema.variant);
      }
      return true;
    });

  if (filteredTokens.length === 0) return null;

  return (
    <>
      <Heading type="title2">{upperFirst(tableName)}</Heading>
      {showVariantColumn && (
        <OptionsFilter
          value={variantFilterValue}
          options={variants}
          onChange={handleVariantSelection}
          label="Selected variants"
        />
      )}
      <StyledDesignTokensTable>
        <Table striped={false} compact>
          <colgroup>
            <StyledCol $width={showVariantColumn || showReplacement ? "40%" : "60%"} />
            {(showVariantColumn || showReplacement) && <StyledCol $width="30%" />}
            <StyledCol $width={showVariantColumn || showReplacement ? "30%" : "40%"} />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell as="th" scope="col">
                <Stack direction="row" spacing="XSmall" align="center">
                  <StyledDesignTokenBase size="medium" />
                  <span>Name</span>
                </Stack>
              </TableCell>
              {showVariantColumn && (
                <TableCell as="th" scope="col">
                  Variant
                </TableCell>
              )}
              {showReplacement && (
                <TableCell as="th" scope="col">
                  Replacement
                </TableCell>
              )}
              <TableCell as="th" scope="col">
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTokens.map(({ name, value }) => {
              const {
                type,
                category,
                deprecated,
                replacement,
                schema: { object, variant },
              } = value;
              const { value: tokenValue } = value[platform];

              const showedTyped = object in GlobalCategories ? object : category || type;

              return (
                <TableRow>
                  <TableCell verticalAlign="middle">
                    <Stack direction="row" spacing="XSmall" align="center">
                      <DesignTokenIcon
                        value={platform === "foundation" ? value.javascript.value : tokenValue}
                        type={showedTyped}
                        size="medium"
                      />
                      <DesignTokenValue
                        value={name}
                        replacement={replacement}
                        deprecated={!!deprecated}
                        hasStrikeThrough
                        width="280px"
                        showCopyButton
                      />
                    </Stack>
                  </TableCell>
                  {showVariantColumn && (
                    <TableCell verticalAlign="middle" align="left">
                      <DesignTokenValue
                        width="120px"
                        value={String(camelCase(variant))}
                        replacement={replacement}
                      />
                    </TableCell>
                  )}
                  {showReplacement && (
                    <TableCell verticalAlign="middle" align="left">
                      <DesignTokenValue
                        width="300px"
                        value={replacement || "none"}
                        replacement={replacement}
                      />
                    </TableCell>
                  )}
                  <TableCell verticalAlign="middle" align="left">
                    <Stack direction="row" spacing="none" align="center">
                      <DesignTokenValue
                        value={tokenValue}
                        replacement={replacement}
                        deprecated={!!deprecated}
                        width="200px"
                        showCopyButton
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledDesignTokensTable>
    </>
  );
};

export default DesignTokensTable;
