import * as React from "react";
import { Table, Stack, TableCell, TableBody, TableRow, TableHead } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

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
              <Icons.BaggageChecked /> Checked baggage
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
              <Icons.BaggageChecked /> Checked baggage
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
