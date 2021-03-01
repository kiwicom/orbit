import * as React from "react";
import {
  Heading,
  Table,
  Stack,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
} from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Stack>
        <Heading as="h3" type="title3">
          Horizontal alignment
        </Heading>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" as="th">
                Left
              </TableCell>
              <TableCell align="center" as="th">
                Center
              </TableCell>
              <TableCell align="right" as="th">
                Right
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">Left-aligned text</TableCell>
              <TableCell align="center">Center-aligned text</TableCell>
              <TableCell align="right">Right-aligned text</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Left-aligned text</TableCell>
              <TableCell align="center">Center-aligned text</TableCell>
              <TableCell align="right">Right-aligned text</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>
      <Stack>
        <Heading as="h3" type="title3">
          Vertical alignment
        </Heading>
        <div style={{ maxWidth: "20em" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left" as="th">
                  Property
                </TableCell>
                <TableCell align="left" as="th">
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left" verticalAlign="top">
                  <code>top</code>
                </TableCell>
                <TableCell align="left" whiteSpace="pre-wrap" verticalAlign="top">
                  This text is aligned against the top of the cell.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" verticalAlign="middle">
                  <code>middle</code>
                </TableCell>
                <TableCell align="left" whiteSpace="pre-wrap" verticalAlign="middle">
                  This text is aligned against the middle of the cell. The default.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" verticalAlign="bottom">
                  <code>bottom</code>
                </TableCell>
                <TableCell align="left" whiteSpace="pre-wrap" verticalAlign="bottom">
                  This text is aligned against the bottom of the cell.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Alignment",
    description:
      "Text in table cells can be horizontally aligned left, center (the default), or right. Also, it can be vertically aligned with the top, middle (the default), or bottom of the cell.",
  },
};
