import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import Heading from "../Heading";
import Stack from "../Stack";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SIZES, TYPES } from "./consts";

import Tag from ".";

type TagPropsAndCustomArgs = React.ComponentProps<typeof Tag> & {
  content?: string;
  removable?: boolean;
};

const meta: Meta<TagPropsAndCustomArgs> = {
  title: "Tag",
  component: Tag,

  args: {
    content: "Transport",
    size: SIZES.NORMAL,
    removable: true,
    selected: true,
    dateTag: false,
    type: TYPES.NEUTRAL,
    iconLeft: "PlusMinus",
    labelDismiss: "Dismiss",
    onClick: action("onClick"),
    onRemove: action("onRemove"),
  },

  argTypes: {
    size: {
      options: Object.values(SIZES),
      control: {
        type: "select",
      },
    },
    type: {
      options: Object.values(TYPES),
      control: {
        type: "select",
      },
    },
    iconLeft: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    controls: {
      exclude: ["onRemove", "onClick"],
    },
  },
};

export default meta;
type Story = StoryObj<TagPropsAndCustomArgs>;

export const Default: Story = {
  render: ({ onClick, onRemove, labelDismiss }) => (
    <Stack direction="column">
      <Heading type="title2">Neutral</Heading>
      <Stack inline>
        <Tag>Non actionable</Tag>
        <Tag iconLeft={<Icons.PlusMinus />}>With icon</Tag>
        <Tag onClick={onClick}>Default</Tag>
        <Tag selected onClick={onClick}>
          Selected
        </Tag>
        <Tag onRemove={onRemove} labelDismiss={labelDismiss}>
          Removable
        </Tag>
        <Tag selected onRemove={onRemove} onClick={onClick} labelDismiss={labelDismiss}>
          Selected Removable
        </Tag>
      </Stack>
      <Heading type="title2">Colored</Heading>
      <Stack inline>
        <Tag type="colored">Non actionable</Tag>
        <Tag type="colored" iconLeft={<Icons.PlusMinus />}>
          With icon
        </Tag>
        <Tag type="colored" onClick={onClick}>
          Default
        </Tag>
        <Tag type="colored" selected onClick={onClick}>
          Selected
        </Tag>
        <Tag type="colored" onRemove={onRemove} labelDismiss={labelDismiss}>
          Removable
        </Tag>
        <Tag
          type="colored"
          selected
          onRemove={onRemove}
          onClick={onClick}
          labelDismiss={labelDismiss}
        >
          Selected Removable
        </Tag>
      </Stack>
      <Heading>dateTag</Heading>
      <Tag type="colored" dateTag selected onClick={onClick}>
        with dateTag selected color is Ink
      </Tag>
    </Stack>
  ),

  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  render: ({ content, removable, iconLeft, onRemove, ...args }) => {
    const IconLeft = iconLeft ? Icons[iconLeft as string] : null;

    return (
      <Tag
        {...args}
        iconLeft={IconLeft && <IconLeft />}
        onRemove={removable ? onRemove : undefined}
      >
        {content}
      </Tag>
    );
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl: Story = {
  render: ({ content, removable, iconLeft, onRemove, ...args }) => {
    const IconLeft = iconLeft ? Icons[iconLeft as string] : null;

    return (
      <RenderInRtl>
        <Tag
          {...args}
          onRemove={removable ? onRemove : undefined}
          iconLeft={IconLeft && <IconLeft />}
        >
          {content}
        </Tag>
      </RenderInRtl>
    );
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
