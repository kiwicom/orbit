import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SPACINGS_AFTER } from "../../common/consts";

import Grid from ".";

type GridPropsAndCustomArgs = React.ComponentProps<typeof Grid> & { divsCount: number };

const meta: Meta<GridPropsAndCustomArgs> = {
  title: "Grid",
  component: Grid,

  args: {
    divsCount: 14,
    className: "",
    as: "div",
    width: "100%",
    columns: "repeat(4, 1fr)",
    rows: "repeat(4, 40px)",
    columnGap: "5px",
    rowGap: "10px",
    gap: "",
    maxWidth: "1440px",
    inline: false,
    spaceAfter: SPACINGS_AFTER.NORMAL,
    mediumMobile: {},
    largeMobile: {},
    tablet: {},
    desktop: {},
    largeDesktop: {
      inline: false,
      rows: "repeat(4, 40px)",
      columns: "repeat(5, minmax(10px, 1fr))",
      gap: "15px",
      rowGap: "20px",
      columnGap: "20px",
      maxWidth: "1440px",
      width: "100%",
    },
  },

  argTypes: {
    spaceAfter: {
      name: "spaceAfter",
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<GridPropsAndCustomArgs>;

export const Playground: Story = {
  render: ({ as, divsCount, columns, rows, columnGap, rowGap, gap, width, ...args }) => (
    <Grid
      as={as || "div"}
      columns={columns || undefined}
      rows={rows || undefined}
      columnGap={columnGap || undefined}
      rowGap={rowGap || undefined}
      gap={gap || undefined}
      width={width || undefined}
      {...args}
    >
      {Array.from({ length: divsCount }, (_, idx) => (
        <div key={idx} style={{ background: "rgba(0, 169, 145, 0.2)" }} />
      ))}
    </Grid>
  ),

  parameters: {
    info: "You can try all possible configurations of this component. When changing the values of rows, columns, or divsCount, ensure that the sum of allowed rows and columns is higher than divsCount. Be aware of each viewport breakpoint and its corresponding screen minimum width value. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};
