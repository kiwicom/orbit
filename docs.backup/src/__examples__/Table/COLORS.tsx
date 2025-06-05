import React from "react";
import {
  Heading,
  Inline,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@kiwicom/orbit-components";
import { BaggageCabin, BaggageChecked30 } from "@kiwicom/orbit-components/icons";

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
                  <Inline>
                    <BaggageCabin /> Cabin baggage
                  </Inline>
                </TableCell>
                <TableCell>Free</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Inline>
                    <BaggageChecked30 /> Checked baggage
                  </Inline>
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
                  <Inline>
                    <BaggageCabin /> Cabin baggage
                  </Inline>
                </TableCell>
                <TableCell>Free</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Inline>
                    <BaggageChecked30 /> Checked baggage
                  </Inline>
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
                    <Inline>
                      <BaggageCabin /> Cabin baggage
                    </Inline>
                  </TableCell>
                  <TableCell>Free</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Inline>
                      <BaggageChecked30 /> Checked baggage
                    </Inline>
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
                    <Inline>
                      <BaggageCabin /> Cabin baggage
                    </Inline>
                  </TableCell>
                  <TableCell>Free</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Inline>
                      <BaggageChecked30 /> Checked baggage
                    </Inline>
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
};
