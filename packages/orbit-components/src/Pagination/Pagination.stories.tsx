import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SIZES } from "./consts";

import Pagination from ".";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,

  args: {
    pageCount: 6,
    labelPrev: "prev",
    labelNext: "next",
    onPageChange: action("onPageChange"),
  },

  parameters: {
    info: "Pagination component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onPageChange"],
    },
  },
};

type Story = StoryObj<typeof Pagination>;

export default meta;

export const Default: Story = {
  render: ({ pageCount, ...args }) => (
    <Pagination
      {...args}
      labelProgress={<span>{`Numbers of pages: ${pageCount}`}</span>}
      pageCount={pageCount}
    />
  ),

  parameters: {
    controls: {
      exclude: ["onPageChange", "selectedPage", "hideLabels", "size"],
    },
  },
};

export const Playground: Story = {
  render: ({ selectedPage, pageCount, ...args }) => (
    <Pagination
      {...args}
      labelProgress={<span>{`${selectedPage} of ${pageCount}`}</span>}
      pageCount={pageCount}
      selectedPage={selectedPage}
    />
  ),

  args: {
    selectedPage: 1,
    pageCount: 99,
    size: SIZES.NORMAL,
    hideLabels: false,
  },

  argTypes: {
    size: {
      options: Object.values(SIZES),
      control: {
        type: "select",
      },
    },
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Pagination {...args} />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    ...Playground.args,
  },

  argTypes: {
    ...Playground.argTypes,
  },
};
