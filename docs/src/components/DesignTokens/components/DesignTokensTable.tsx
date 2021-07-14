import * as React from "react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  mediaQueries as mq,
} from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import DesignTokenIcon from "./DesignTokenIcon";
import DesignTokenValue from "./DesignTokenValue";
import { StyledDesignTokenBase } from "./DesignTokenColor";
import { h3 as H3 } from "../../../mdx-components";
import camelCase from "../../../utils/camelCase";
import OptionsFilter from "../OptionsFilter";
import { GlobalCategories, Platforms, Token } from "../typings";

const StyledDesignTokensTable = styled.div`
  ${mq.desktop(css`
    table {
      table-layout: fixed;
    }
  `)}
`;

const StyledCol = styled.col`
  ${({ $width }) =>
    css`
      width: ${$width};
      max-width: ${$width};
    `}
`;

const DesignTokensTable = ({
  tokens,
  filter,
  platform,
  showDeprecated,
  tableName,
  showVariantColumn,
}: {
  tokens: Array<Token>;
  filter: string;
  platform: keyof typeof Platforms;
  showDeprecated?: boolean;
  tableName: string;
  showVariantColumn?: boolean;
}) => {
  const [variantFilterValue, setVariantFilterValue] = React.useState<Array<string>>([]);

  const handleVariantSelection = name => {
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
    .filter(({ name }) => name.toLowerCase().indexOf(filter) !== -1)
    .filter(({ value }) => {
      if (showDeprecated) {
        return true;
      }
      return !value.deprecated;
    })
    .filter(({ value }) => {
      if (showVariantColumn && variantFilterValue.length > 0) {
        return variantFilterValue.includes(value.schema.variant);
      }
      return true;
    });

  if (filteredTokens.length > 0) {
    return (
      <>
        <H3>{tableName}</H3>
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
              <StyledCol $width={showVariantColumn ? "40%" : "60%"} />
              {showVariantColumn && <StyledCol $width="30%" />}
              <StyledCol $width={showVariantColumn ? "30%" : "40%"} />
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
                          deprecated={!!deprecated}
                          hasStrikeThrough
                          width="280px"
                          showCopyButton
                        />
                      </Stack>
                    </TableCell>
                    {showVariantColumn && (
                      <TableCell verticalAlign="middle" align="left">
                        <DesignTokenValue width="120px" value={camelCase(variant)} />
                      </TableCell>
                    )}
                    <TableCell verticalAlign="middle" align="left">
                      <Stack direction="row" spacing="none" align="center">
                        <DesignTokenValue
                          value={tokenValue}
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
  }
  return null;
};

export default DesignTokensTable;
