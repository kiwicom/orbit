import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ALIGN_OPTIONS, WHITE_SPACE } from "./TableCell/consts";
import { TYPE_OPTIONS, TYPE_AS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Table, { TableFooter, TableHead, TableBody, TableRow, TableCell } from ".";

const tableRow = (
  <TableRow>
    {Array.from({ length: 4 }, (_, i) => (
      <TableCell key={i}>lorem ipsum</TableCell>
    ))}
  </TableRow>
);

type TablePropsAndCustomArgs = React.ComponentProps<typeof Table> &
  React.ComponentProps<typeof TableCell>;

const meta: Meta<TablePropsAndCustomArgs> = {
  title: "Table",
  component: Table,
};

export default meta;

type Story = StoryObj<TablePropsAndCustomArgs>;

export const DefaultTable: Story = {
  render: () => (
    <Table>
      <TableHead>{tableRow}</TableHead>
      <TableBody>{Array(2).fill(tableRow)}</TableBody>
    </Table>
  ),

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  render: ({ id, compact, type, striped, children, ...args }) => {
    return (
      <Table id={id} type={type} compact={compact} striped={striped}>
        <TableHead>
          <TableRow>
            {Array.from({ length: 4 }, (_, idx) => (
              <TableCell key={idx} {...args}>
                {children}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 3 }, (_, i) => (
            <TableRow key={i}>
              {Array.from({ length: 4 }, (__, j) => (
                <TableCell key={j} {...args}>
                  {children}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {Array.from({ length: 4 }, (_, idx) => (
              <TableCell key={idx} {...args}>
                {children}
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    );
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    id: "table-id",
    compact: false,
    type: TYPE_OPTIONS.SECONDARY,
    striped: true,
    align: ALIGN_OPTIONS.CENTER,
    verticalAlign: "middle",
    whiteSpace: WHITE_SPACE.NOWRAP,
    children: "Lorem ipsum dolor sit amet",
    as: TYPE_AS.TD,
    scope: "col",
  },

  argTypes: {
    // Table category
    id: { table: { category: "Table" } },
    compact: { table: { category: "Table" } },
    striped: { table: { category: "Table" } },
    type: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
      table: { category: "Table" },
    },
    // TableCell category
    children: { table: { category: "TableCell" } },
    scope: {
      options: ["col", "row", "colgroup", "rowgroup"],
      control: {
        type: "select",
      },
      table: { category: "TableCell" },
    },
    align: {
      options: Object.values(ALIGN_OPTIONS),
      control: {
        type: "select",
      },
      table: { category: "TableCell" },
    },
    verticalAlign: {
      options: ["top", "bottom", "baseline", "middle"],
      control: {
        type: "select",
      },
      table: { category: "TableCell" },
    },
    whiteSpace: {
      options: Object.values(WHITE_SPACE),
      control: {
        type: "select",
      },
      table: { category: "TableCell" },
    },
    as: {
      options: Object.values(TYPE_AS),
      control: {
        type: "select",
      },
      table: { category: "TableCell" },
    },
  },
};

export const Rtl: Story = {
  render: () => (
    <RenderInRtl>
      <Table>
        <TableHead>{tableRow}</TableHead>
        <TableBody>{Array(2).fill(tableRow)}</TableBody>
      </Table>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
