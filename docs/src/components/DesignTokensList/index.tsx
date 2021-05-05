import React, { useState, useEffect } from "react";
import tokensList from "@kiwicom/orbit-design-tokens/output/theo-spec.json";
import {
  Box,
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

const allTokens = Object.keys(tokensList)
  .map(key => ({ name: key, value: tokensList[key] }))
  .sort((a, b) => (a.name < b.name ? -1 : 1));

const DesignToken = ({ value }) => {
  const [isCopied, copy] = useCopyToClipboard(2000);
  return (
    <Tooltip content="Click to copy" preferredPosition="bottom" preferredAlign="center">
      {isCopied ? (
        <Box padding={{ top: "XXXSmall", bottom: "XXXSmall" }}>
          <StyledDesignTokenOther>Copied!</StyledDesignTokenOther>
        </Box>
      ) : (
        <Stack inline spacing="XSmall" shrink align="center">
          <DesignTokenIcon value={value} />
          <span role="button" onClick={() => copy(value)} title={value}>
            <Truncate maxWidth="200px">{value}</Truncate>
          </span>
        </Stack>
      )}
    </Tooltip>
  );
};

const DesignTokensTable = ({ tokens, filter }) => {
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

function useDebounce(value, delay) {
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
