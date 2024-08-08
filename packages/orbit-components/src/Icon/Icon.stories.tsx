import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import IconList from "./IconList";
import * as Icons from "../icons";
import { ICON_SIZES, ICON_COLORS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import OrbitIcon from ".";

const getIcon = source => Icons[source];

type IconPropsAndCustomArgs = React.ComponentProps<typeof OrbitIcon> & { source: string };

const meta: Meta<IconPropsAndCustomArgs> = {
  title: "Icon",
  component: OrbitIcon,

  parameters: {
    info: "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    size: ICON_SIZES.MEDIUM,
    color: ICON_COLORS.PRIMARY,
    source: "Airplane",
    dataTest: "test",
    ariaLabel: "label",
    ariaHidden: true,
    customColor: "#ABCDEF",
  },

  argTypes: {
    size: {
      options: Object.values(ICON_SIZES),
      control: {
        type: "select",
      },
    },
    color: {
      options: Object.values(ICON_COLORS),
      control: {
        type: "select",
      },
    },
    source: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<IconPropsAndCustomArgs>;

export const Default: Story = {
  render: ({ source, ...args }) => {
    const Icon = getIcon(source);
    return <Icon {...args} />;
  },
};

export const CustomColor: Story = {
  render: ({ source, ...args }) => {
    const Icon = getIcon(source);

    return <Icon {...args} />;
  },

  args: {
    customColor: "#ff0000",
  },
};

export const ReversedOnRtl: Story = {
  render: ({ source, ...args }) => {
    const Icon = getIcon(source);

    return (
      <RenderInRtl>
        <Icon reverseOnRtl {...args} />
      </RenderInRtl>
    );
  },

  args: {
    source: "ChevronBackward",
  },
};

export const ListOfAllIcons = () => <IconList />;
