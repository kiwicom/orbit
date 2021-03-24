// @flow
import * as React from "react";

import Table from "../index";
import TableCell from "../TableCell";
import TableBody from "../TableBody";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell as="th">Baggage</TableCell>
          <TableCell as="th">Availability</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <Icons.BaggageCabin /> Cabin baggage
          </TableCell>
          <TableCell>Free</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Icons.BaggageChecked30 /> Checked baggage
          </TableCell>
          <TableCell>Paid-for option</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  info: {
    title: "Default table",
    description:
      "Tables require at least a few kinds of children. By default, the cells are center aligned and the rows alternate background colors.",
  },
};
