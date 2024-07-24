import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Badge from ".";

type BadgePropsAndCustomArgs = React.ComponentProps<typeof Badge> & {
  content?: string;
};

const meta: Meta<BadgePropsAndCustomArgs> = {
  title: "Badge",
  component: Badge,

  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    content: "Badge",
    icon: "Airplane",
  },

  argTypes: {
    icon: {
      options: Object.keys(Icons),
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
  },
};

export default meta;
type Story = StoryObj<BadgePropsAndCustomArgs>;

const getIcon = (source: string | null) => source && Icons[source];

export const Default: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },
};

export const Neutral: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },
  args: { type: TYPE_OPTIONS.NEUTRAL, icon: "Sightseeing" },
};

export const Info: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },
  args: { type: TYPE_OPTIONS.INFO, icon: "InformationCircle" },
};

export const InfoSubtle: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },

  args: { type: TYPE_OPTIONS.INFO_SUBTLE, icon: "Sightseeing" },
};

export const Success: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },
  args: { type: TYPE_OPTIONS.SUCCESS, icon: "CheckCircle" },
};

export const SuccessSubtle: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },

  args: { type: TYPE_OPTIONS.SUCCESS, icon: "CheckCircle" },
};

export const Warning: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },

  args: { type: TYPE_OPTIONS.WARNING, icon: "Clock" },
};

export const WarningSubtle: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },

  args: { type: TYPE_OPTIONS.WARNING_SUBTLE, icon: "Clock" },
};

export const Critical: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },

  args: { type: TYPE_OPTIONS.CRITICAL, icon: "Passport" },
};

export const CriticalSubtle: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },

  args: { type: TYPE_OPTIONS.CRITICAL_SUBTLE, icon: "Sightseeing" },
};

export const Dark: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },

  args: { type: TYPE_OPTIONS.DARK, icon: "Sightseeing" },
};

export const White: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <div style={{ backgroundColor: "#46515e", padding: "10px" }}>
        <Badge {...args} icon={Icon && <Icon />}>
          {content}
        </Badge>
      </div>
    );
  },

  args: { type: TYPE_OPTIONS.WHITE, icon: "Sightseeing" },
};

export const BadgeWithTranslatedNode: Story = {
  render: ({ icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        <span>Content should </span>
        <span>be</span>
        <span> with space</span>
      </Badge>
    );
  },

  parameters: { controls: { exclude: ["content"] } },
};

export const Playground: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    type: TYPE_OPTIONS.INFO_SUBTLE,
    ariaLabel: "test",
  },
};

export const Accessibility: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <Badge {...args} icon={Icon && <Icon />}>
        {content}
      </Badge>
    );
  },

  parameters: {
    info: "This is a preview of component accessibility props.",
  },

  args: {
    ariaLabel: "test",
  },
};

export const Rtl: Story = {
  render: ({ content, icon, ...args }) => {
    const Icon = getIcon(icon as string);

    return (
      <RenderInRtl>
        <Badge {...args} icon={Icon && <Icon />}>
          {content}
        </Badge>
      </RenderInRtl>
    );
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: { type: TYPE_OPTIONS.INFO },
};
