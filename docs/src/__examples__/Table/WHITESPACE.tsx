import * as React from "react";
import { Table, Stack, TableCell, TableBody, TableRow, TableHead } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" as="th">
              Property
            </TableCell>
            <TableCell align="left" as="th">
              Example
            </TableCell>
            <TableCell align="left" as="th">
              Whitespace
            </TableCell>
            <TableCell align="left" as="th">
              Line breaks
            </TableCell>
            <TableCell align="left" as="th">
              Wrapping
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">
              <code>nowrap</code>
            </TableCell>
            <TableCell align="left">
              By default, {"              "}sequences of whitespace are collapsed and line breaks
              {"\n"}
              are suppressed.
            </TableCell>
            <TableCell align="left">Suppressed</TableCell>
            <TableCell align="left">Suppressed</TableCell>
            <TableCell align="left">Doesn&apos;t wrap</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" verticalAlign="bottom">
              <code>pre-line</code>
            </TableCell>
            <TableCell align="left" whiteSpace="pre-line">
              This setting suppresses {"              "}sequences of whitespace but preserves
              {"\n"}
              line breaks.
            </TableCell>
            <TableCell align="left">Suppressed</TableCell>
            <TableCell align="left">Preserved</TableCell>
            <TableCell align="left">Doesn&apos;t wrap</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">
              <code>pre</code>
            </TableCell>
            <TableCell align="left" whiteSpace="pre">
              This setting preserves {"              "}sequences of whitespace and {"\n"}
              line breaks. But does not automatically wrap.
            </TableCell>
            <TableCell align="left">Preserved</TableCell>
            <TableCell align="left">Preserved</TableCell>
            <TableCell align="left">Wraps</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" verticalAlign="bottom">
              <code>pre-wrap</code>
            </TableCell>
            <TableCell align="left" whiteSpace="pre-wrap">
              This setting preserves {"              "}sequences of whitespace and
              {"\n"}
              line breaks. It automatically wraps.
            </TableCell>
            <TableCell align="left">Preserved</TableCell>
            <TableCell align="left">Preserved</TableCell>
            <TableCell align="left">Wraps</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div style={{ maxWidth: "15em" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" as="th">
                Property
              </TableCell>
              <TableCell align="left" as="th">
                Example
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">
                <code>nowrap</code>
              </TableCell>
              <TableCell align="left" whiteSpace="nowrap">
                This text does not automatically wrap to fit the given space.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <code>pre</code>
              </TableCell>
              <TableCell align="left" whiteSpace="pre">
                This text does not automatically wrap to fit the given space.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div style={{ maxWidth: "15em" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" as="th">
                Property
              </TableCell>
              <TableCell align="left" as="th">
                Example
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">
                <code>pre-wrap</code>
              </TableCell>
              <TableCell align="left" whiteSpace="pre-wrap">
                This text automatically wraps to fit the given space.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <code>pre-line</code>
              </TableCell>
              <TableCell align="left" whiteSpace="pre-wrap">
                This text automatically wraps to fit the given space.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Stack>
  ),
  info: {
    title: "Whitespace",
    description:
      "You can set how to handle the whitespace inside table cells, including whether the text wraps to fit the given space.",
  },
};
