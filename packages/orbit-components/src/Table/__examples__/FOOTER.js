// @flow
import * as React from "react";

import Table from "../index";
import TableCell from "../TableCell";
import TableBody from "../TableBody";
import TableHead from "../TableHead";
import TableFooter from "../TableFooter";
import TableRow from "../TableRow";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left" as="th">
            Trip
          </TableCell>
          <TableCell align="left" as="th">
            Cost
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="left">
            Madrid <Icons.FlightReturn /> Moscow
          </TableCell>
          <TableCell align="left">€197</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="left">
            Barcelona <Icons.FlightReturn /> Istanbul
          </TableCell>
          <TableCell align="left">€184</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="left">
            Valencia <Icons.FlightReturn /> Dubai
          </TableCell>
          <TableCell align="left">€475</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell align="left">Total</TableCell>
          <TableCell align="left">€856</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  info: {
    title: "Footer",
    description:
      "When including numeric data in tables, footers can provide a clear place for a summary.",
  },
};
