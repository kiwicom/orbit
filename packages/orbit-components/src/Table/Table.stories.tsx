import * as React from "react";

import { ALIGN_OPTIONS, ALIGN_V_OPTIONS, WHITE_SPACE } from "./TableCell/consts";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import type { VerticalAlign } from "./TableCell/types";

import Table, { TableFooter, TableHead, TableBody, TableRow, TableCell } from ".";

export default {
  title: "Table",
};

export const DefaultTable = () => (
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
);

DefaultTable.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CompactTable = () => (
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
);

CompactTable.story = {
  parameters: {
    info: "This is the compact configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const SecondaryType = () => (
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
);

SecondaryType.story = {
  name: "Secondary type",

  parameters: {
    info: "This is the compact configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithoutStripes = () => (
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
);

WithoutStripes.story = {
  name: "Without stripes",

  parameters: {
    info: "This is the compact configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = ({
  compact,
  striped,
  children,
  dataTest,
  align,
  verticalAlign,
  whiteSpace,
  type,
}) => {
  return (
    <Table striped={striped} type={type} compact={compact} dataTest={dataTest}>
      <TableHead>
        <TableRow>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
          <TableCell whiteSpace={whiteSpace} verticalAlign={verticalAlign} align={align}>
            {children}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  compact: false,
  striped: true,
  children: "Lorem ipsum dolor sit amet",
  dataTest: "test",
  align: ALIGN_OPTIONS.CENTER,
  verticalAlign: ALIGN_V_OPTIONS.BASELINE as VerticalAlign,
  whiteSpace: WHITE_SPACE.NOWRAP,
  type: TYPE_OPTIONS.PRIMARY,
};

Playground.argTypes = {
  align: {
    options: Object.values(ALIGN_OPTIONS),
    control: {
      type: "select",
    },
  },
  verticalAlign: {
    options: Object.values(ALIGN_V_OPTIONS).filter(val =>
      ["top", "bottom", "baseline", "middle"].includes(val),
    ),
    control: {
      type: "select",
    },
  },
  whiteSpace: {
    options: Object.values(WHITE_SPACE),
    control: {
      type: "select",
    },
  },
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Rtl = () => (
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
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
