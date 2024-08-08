import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import * as Icons from "../icons";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import ButtonGroup from ".";

const meta: Meta<typeof ButtonGroup> = {
  title: "ButtonGroup",
  component: ButtonGroup,

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const WithButtons: Story = {
  render: () => (
    <ButtonGroup>
      <Button iconLeft={<Icons.Airplane />}>Button</Button>
      <Button iconLeft={<Icons.ChevronDown />} title="Show more" />
    </ButtonGroup>
  ),
};

export const WithButtonLinks: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonLink type="secondary" iconLeft={<Icons.Airplane />}>
        Button
      </ButtonLink>
      <ButtonLink type="secondary" iconLeft={<Icons.ChevronDown />} title="Show more" />
    </ButtonGroup>
  ),
};

export const Rtl: Story = {
  render: () => (
    <RenderInRtl>
      <ButtonGroup>
        <Button iconLeft={<Icons.Airplane />}>Button</Button>
        <Button iconLeft={<Icons.ChevronDown />} title="Show more" />
      </ButtonGroup>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
