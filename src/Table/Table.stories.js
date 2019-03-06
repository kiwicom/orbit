// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { boolean, text, withKnobs, select } from "@storybook/addon-knobs";

import ALIGN_OPTIONS from "./TableCell/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Table, { TableHead, TableBody, TableRow, TableCell } from "./index";

storiesOf("Table", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default Table", () => (
    <Table>
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
  ))
  .add("Compact Table", () => (
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
  ))
  .add("Playground", () => {
    const compact = boolean("compact", false);
    const children = text("children", "Lorem ipsum dolor sit amet");
    const dataTest = text("dataTest", "test");
    const align = select("align", Object.values(ALIGN_OPTIONS), ALIGN_OPTIONS.CENTER);
    return (
      <Table compact={compact} dataTest={dataTest}>
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
        </TableBody>
      </Table>
    );
  })
  .add("RTL", () => (
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
  ));
