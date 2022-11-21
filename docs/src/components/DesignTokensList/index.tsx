import React, { useState, useEffect } from "react";
import tokensList from "@kiwicom/orbit-design-tokens/output/theo-spec.json";
import { convertRgbaToHex } from "@kiwicom/orbit-design-tokens";
import {
  InputField,
  Stack,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Truncate,
  Tooltip,
} from "@kiwicom/orbit-components";
import { Search } from "@kiwicom/orbit-components/icons";

import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { StyledDesignTokenOther } from "./components/DesignTokenColor";
import DesignTokenIcon from "./components/DesignTokenIcon";
import DesignTokenName from "./components/DesignTokenName";

export type TokenNameType = string;
export type TokenValueType = string | number;
// @ts-expect-error force type because Object.entries makes the value unknown
const allTokens: Array<{ name: TokenName; value: TokenValue }> = Object.entries(tokensList)
  .map(([name, value]) => ({ name, value }))
  .sort((a, b) => (a.name < b.name ? -1 : 1));

const DesignToken = ({ value }: { value: TokenValueType }) => {
  const [isCopied, copy] = useCopyToClipboard(2000);
  const formattedValue =
    typeof value !== "string" || !value.startsWith("rgb") ? value : convertRgbaToHex(value);

  return isCopied ? (
    <Stack inline spacing="XSmall" shrink align="center">
      <StyledDesignTokenOther />
      <span>Copied!</span>
    </Stack>
  ) : (
    <Tooltip content="Click to copy">
      <Stack inline spacing="XSmall" shrink align="center">
        <DesignTokenIcon value={value} />
        <button
          type="button"
          onClick={() => copy(String(formattedValue))}
          title={String(formattedValue)}
        >
          <Truncate maxWidth="200px">{formattedValue}</Truncate>
        </button>
      </Stack>
    </Tooltip>
  );
};

const DesignTokensTable = ({ tokens, filter }: { tokens: typeof allTokens; filter: string }) => {
  return (
    <Table striped={false}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tokens
          .filter(({ name }) => name.toLowerCase().indexOf(filter) !== -1)
          .map(({ name, value }) => (
            <TableRow>
              <TableCell verticalAlign="middle">
                <Stack spacing="none" align="center" shrink>
                  <DesignTokenName>{name}</DesignTokenName>
                </Stack>
              </TableCell>
              <TableCell verticalAlign="middle" align="left">
                <DesignToken value={value} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const DesignTokensList = () => {
  const [filter, setFilter] = useState<string>("");
  const debouncedFilter = useDebounce(filter, 300);
  return (
    <Stack spacing="large">
      <InputField
        prefix={<Search />}
        placeholder="Filter design tokens..."
        value={filter}
        onChange={event => setFilter(event.currentTarget.value)}
      />
      <DesignTokensTable tokens={allTokens} filter={debouncedFilter} />
    </Stack>
  );
};

export default DesignTokensList;
