// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text, select } from "@storybook/addon-knobs";

import ALIGN_OPTIONS from "./TableCell/consts";
import TYPE_OPTIONS from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Table, { TableFooter, TableHead, TableBody, TableRow, TableCell } from "./index";

storiesOf("Table", module)
  .add(
    "Default Table",
    () => (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell as="th" scope="col">
              Number
            </TableCell>
            <TableCell as="th" scope="col">
              Lorem
            </TableCell>
            <TableCell as="th" scope="col">
              ipsum dolo
            </TableCell>
            <TableCell as="th" scope="col">
              sit amet
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell as="th" scope="row">
              1
            </TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell as="th" scope="row">
              2
            </TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Compact Table",
    () => (
      <Table compact>
        <TableHead>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    {
      info:
        "This is the compact configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Secondary type",
    () => (
      <Table type="secondary">
        <TableHead>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    {
      info:
        "This is the compact configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Without stripes",
    () => (
      <Table type="secondary" striped={false}>
        <TableHead>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    {
      info:
        "This is the compact configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const compact = boolean("compact", false);
      const striped = boolean("striped", true);
      const children = text("children", "Lorem ipsum dolor sit amet");
      const dataTest = text("dataTest", "test");
      const align = select("align", Object.values(ALIGN_OPTIONS), ALIGN_OPTIONS.CENTER);
      const type = select("type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PRIMARY);
      return (
        <Table striped={striped} type={type} compact={compact} dataTest={dataTest}>
          <TableHead>
            <TableRow>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First column</TableCell>
              <TableCell>Second column</TableCell>
              <TableCell>Third column</TableCell>
              <TableCell>Fourth column</TableCell>
              <TableCell>Fifth column</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>First column</TableCell>
              <TableCell>Second column</TableCell>
              <TableCell>Third column</TableCell>
              <TableCell>Fourth column</TableCell>
              <TableCell>Fifth column</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>First column</TableCell>
              <TableCell>Second column</TableCell>
              <TableCell>Third column</TableCell>
              <TableCell>Fourth column</TableCell>
              <TableCell>Fifth column</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>First column</TableCell>
              <TableCell>Second column</TableCell>
              <TableCell>Third column</TableCell>
              <TableCell>Fourth column</TableCell>
              <TableCell>Fifth column</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>First column</TableCell>
              <TableCell>Second column</TableCell>
              <TableCell>Third column</TableCell>
              <TableCell>Fourth column</TableCell>
              <TableCell>Fifth column</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
