import React from "react";
import {
  Inline,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@kiwicom/orbit-components";
import { BaggageCabin, BaggageChecked30 } from "@kiwicom/orbit-components/icons";

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
            <Inline align="center">
              <BaggageCabin /> Cabin baggage
            </Inline>
          </TableCell>
          <TableCell>Free</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Inline align="center">
              <BaggageChecked30 /> Checked baggage
            </Inline>
          </TableCell>
          <TableCell>Paid-for option</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  exampleKnobs: [
    {
      component: "Table",
      knobs: [
        { name: "compact", type: "boolean", defaultValue: false },
        {
          name: "type",
          type: "select",
          defaultValue: "primary",
          options: ["primary", "secondary"],
        },
      ],
    },
    {
      component: "TableCell",
      knobs: [
        {
          name: "scope",
          type: "select",
          defaultValue: "",
          options: ["col", "row", "colgroup", "rowgroup"],
          component: "TableCell",
        },
        {
          name: "verticalAlign",
          type: "select",
          defaultValue: "",
          options: ["baseline", "middle", "top", "bottom"],
          component: "TableCell",
        },
        {
          name: "whiteSpace",
          type: "select",
          defaultValue: "",
          options: ["nowrap", "pre", "pre-line", "normal"],
          component: "TableCell",
        },
        {
          name: "as",
          type: "select",
          defaultValue: "th",
          options: ["th", "td"],
          component: "TableCell",
        },
        {
          name: "align",
          type: "select",
          defaultValue: "",
          options: ["left", "center", "right"],
          component: "TableCell",
        },
      ],
    },
  ],
};
