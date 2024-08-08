import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import IconList from "./IconList";
import * as Icons from "../icons";
import { ICON_SIZES, ICON_COLORS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import type OrbitIcon from ".";

const getIcon = source => Icons[source];

type IconPropsAndCustomArgs = React.ComponentProps<typeof OrbitIcon> & { source: string };

const meta: Meta<IconPropsAndCustomArgs> = {
  title: "Icon",

  parameters: {
    info: "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    size: ICON_SIZES.MEDIUM,
    color: ICON_COLORS.PRIMARY,
    source: "Airplane",
    ariaLabel: "label",
    ariaHidden: true,
    customColor: "#e30606",
    reverseOnRtl: false,
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

  args: {
    customColor: undefined,
  },

  parameters: {
    controls: {
      exclude: ["customColor", "reverseOnRtl"],
    },
  },
};

export const CustomColor: Story = {
  render: ({ source, ...args }) => {
    const Icon = getIcon(source);

    return <Icon {...args} />;
  },

  parameters: {
    controls: {
      exclude: ["color", "reverseOnRtl"],
    },
  },
};

export const ReversedOnRtl: Story = {
  render: ({ source, reverseOnRtl }) => {
    const Icon = getIcon(source);

    return (
      <RenderInRtl>
        <Icon reverseOnRtl={reverseOnRtl} />
      </RenderInRtl>
    );
  },

  args: {
    source: "ChevronBackward",
    reverseOnRtl: true,
  },

  parameters: {
    controls: {
      exclude: ["size", "color", "ariaLabel", "ariaHidden", "customColor"],
    },
  },
};

export const ListOfAllIcons: Story = {
  render: () => <IconList />,

  parameters: {
    controls: {
      disable: true,
    },
  },
};
