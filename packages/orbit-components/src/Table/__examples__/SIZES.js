// @flow
import * as React from "react";

import Stack from "../../Stack";
import Table from "../index";
import TableCell from "../TableCell";
import TableBody from "../TableBody";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Stack flex>
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
      <Table compact>
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
    </Stack>
  ),
  info: {
    title: "Sizes",
    description: "Tables can be either normal (the default) or compact.",
  },
};
