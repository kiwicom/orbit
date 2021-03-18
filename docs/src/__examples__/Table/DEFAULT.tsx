import * as React from "react";
import { Table, TableCell, TableBody, TableHead, TableRow } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

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
            <Icons.BaggageChecked /> Checked baggage
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
