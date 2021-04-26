import React, { useState } from "react";
import styled, { css } from "styled-components";
import tokensList from "@kiwicom/orbit-design-tokens/lib/docs-tokens.json";
import {
  ButtonLink,
  InputField,
  Stack,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Heading,
  Badge,
  Tooltip,
} from "@kiwicom/orbit-components";
import { Search } from "@kiwicom/orbit-components/icons";

import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import DesignTokenColor from "./components/DesignTokenColor";
import DesignTokenName from "./components/DesignTokenName";

const allTokens = Object.keys(tokensList).map(key => ({ name: key, ...tokensList[key] }));

const DesignToken = ({ type, value }) => {
  const [isCopied, copy] = useCopyToClipboard(1000);
  const onClick = () => copy(value);
  const render = () => {
    if (type === "color") return <DesignTokenColor value={value} onClick={onClick} />;
    return null;
  };
  return (
    <Tooltip
      content={isCopied ? "Value copied!" : "Click to copy the value."}
      preferredPosition="bottom"
      preferredAlign="center"
    >
      {render()}
    </Tooltip>
  );
};

const DesignTokensTable = ({ tokens, filter }) => {
  return (
    <Table striped={false}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="center">Status</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tokens
          .filter(({ name }) => name.toLowerCase().indexOf(filter) !== -1)
          .map(({ type, deprecated, javascript: { name, value } }) => (
            <TableRow>
              <TableCell verticalAlign="middle">
                <Stack spacing="none" align="center" shrink>
                  <DesignTokenName>{name}</DesignTokenName>
                </Stack>
              </TableCell>
              <TableCell align="center">
                {deprecated ? (
                  <>
                    <Tooltip
                      preferredPosition="bottom"
                      preferredAlign="center"
                      content="This token is deprecated. Replace it for something"
                    >
                      <Badge type="critical">Deprecated</Badge>
                    </Tooltip>
                  </>
                ) : (
                  <Badge type="success">For use</Badge>
                )}
              </TableCell>
              <TableCell verticalAlign="middle" align="center">
                <Stack spacing="none" align="center" shrink>
                  <DesignToken type={type} value={value} />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

const Index = () => {
  const [filter, setFilter] = useState<string>("");
  return (
    <Stack spacing="large">
      <InputField
        prefix={<Search />}
        placeholder="Filter design tokens..."
        value={filter}
        onChange={event => setFilter(event.currentTarget.value)}
      />
      <DesignTokensTable tokens={allTokens} filter={filter} />
    </Stack>
  );
};

export default Index;
