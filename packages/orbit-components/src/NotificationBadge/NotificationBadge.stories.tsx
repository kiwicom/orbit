import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TYPE_OPTIONS } from "../Badge/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import * as Icons from "../icons";

import NotificationBadge from ".";

const getIcon = (source: string | null) => source && Icons[source];

const meta: Meta<typeof NotificationBadge> = {
  title: "NotificationBadge",
  component: NotificationBadge,

  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    children: "10",
    icon: undefined,
    type: TYPE_OPTIONS.INFO,
    ariaLabel: "10 unread notifications",
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

type Story = StoryObj<typeof NotificationBadge>;

export const Default: Story = {
  render: ({ children }) => <NotificationBadge>{children}</NotificationBadge>,

  parameters: {
    controls: {
      exclude: ["icon", "type", "ariaLabel"],
    },
  },
};

export const Playground: Story = {
  render: ({ children, icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <NotificationBadge {...args} icon={Icon && <Icon />}>
        {children}
      </NotificationBadge>
    );
  },

  args: {
    id: "notification-badge-id",
  },

  parameters: {
    info: "Playground of NotificationBadge. Try all of possible options. Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl: Story = {
  render: ({ children, ...args }) => (
    <RenderInRtl>
      <NotificationBadge {...args}>{children}</NotificationBadge>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
