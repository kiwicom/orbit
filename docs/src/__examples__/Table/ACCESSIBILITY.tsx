import * as React from "react";
import {
  Table,
  Heading,
  Stack,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
} from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Heading as="h3" type="title3">
        Passengers
      </Heading>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell as="th" scope="col">
              Name
            </TableCell>
            <TableCell as="th" scope="col">
              Age
            </TableCell>
            <TableCell as="th" scope="col">
              Email
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell as="th" scope="row">
              Nicolás Pérez
            </TableCell>
            <TableCell>34</TableCell>
            <TableCell>nic-p@example.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell as="th" scope="row">
              Freja Møller
            </TableCell>
            <TableCell>39</TableCell>
            <TableCell>freja21@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
  ),
  info: {
    title: "Accessibility",
    description:
      "Tables can be very accessible provided you use their semantic features. Render headers as th elements (not just in bold) and use scope to define which cells the header covers.",
  },
};
