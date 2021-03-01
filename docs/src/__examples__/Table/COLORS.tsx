import * as React from "react";
import {
  Heading,
  Table,
  Stack,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

export default {
  Example: () => (
    <Stack>
      <Stack>
        <Heading as="h3" type="title3">
          Striped or not
        </Heading>
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
          <Table striped={false}>
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
        <Stack>
          <Heading as="h3" type="title3">
            Primary or secondary
          </Heading>
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
            <Table type="secondary">
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
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description:
      "Tables can be either striped (the default with alternating background colors in rows) or now. They can also be either primary (the default) or secondary.",
  },
};
