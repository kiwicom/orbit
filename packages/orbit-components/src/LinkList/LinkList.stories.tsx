import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { DIRECTIONS, SPACINGS } from "../utils/layout/consts";
import TextLink from "../TextLink";

import LinkList from ".";

const meta: Meta<typeof LinkList> = {
  title: "LinkList",
  component: LinkList,

  parameters: {
    info: "LinkList component. Check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    direction: DIRECTIONS.ROW,
    spacing: SPACINGS.FOUR_HUNDRED,
    legacy: false,
    indent: false,
  },

  argTypes: {
    direction: {
      options: Object.values(DIRECTIONS),
      control: {
        type: "select",
      },
    },
    spacing: {
      options: Object.values(SPACINGS),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkList>;

export const Playground: Story = {
  render: args => (
    <LinkList {...args}>
      <TextLink type="secondary">Flight 1</TextLink>
      <TextLink type="secondary">Flight 2</TextLink>
      <TextLink type="secondary">Flight 3</TextLink>
      <TextLink type="secondary">Flight 4</TextLink>
    </LinkList>
  ),
};
