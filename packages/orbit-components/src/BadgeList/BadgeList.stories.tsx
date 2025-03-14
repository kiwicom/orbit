import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import Tooltip from "../Tooltip";
import TextLink from "../TextLink";
import { SIZE_OPTIONS, TYPE_OPTIONS } from "./consts";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import BadgeList, { BadgeListItem } from ".";

type BadgeListPropsAndCustomArgs = React.ComponentProps<typeof BadgeList> &
  React.ComponentProps<typeof BadgeListItem>;

const meta: Meta<BadgeListPropsAndCustomArgs> = {
  title: "BadgeList",
  component: BadgeList,
};

export default meta;
type Story = StoryObj<BadgeListPropsAndCustomArgs>;

export const Default: Story = {
  render: () => (
    <BadgeList>
      <BadgeListItem icon={<Icons.AlertCircle />}>
        You&apos;re departing from a different place
      </BadgeListItem>
      <BadgeListItem icon={<Icons.BaggageCabin />}>
        You must collect and recheck your baggage
      </BadgeListItem>
    </BadgeList>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Types: Story = {
  render: () => {
    const component = type => (
      <BadgeListItem icon={<Icons.KiwiComGuarantee />} type={type}>
        <TextLink onClick={action("link clicked")} type="secondary">
          Transfer protected
        </TextLink>{" "}
        by the Kiwi.com Guarantee
      </BadgeListItem>
    );
    return (
      <BadgeList>
        {component(TYPE_OPTIONS.NEUTRAL)}
        {component(TYPE_OPTIONS.INFO)}
        {component(TYPE_OPTIONS.SUCCESS)}
        {component(TYPE_OPTIONS.WARNING)}
        {component(TYPE_OPTIONS.CRITICAL)}
      </BadgeList>
    );
  },

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <BadgeList>
      <BadgeListItem icon={<Icons.AlertCircle />} size="small">
        Size small
      </BadgeListItem>
      <BadgeListItem icon={<Icons.BaggageCabin />} size="normal">
        Size normal
      </BadgeListItem>
    </BadgeList>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  render: ({ type, size, strikeThrough, ariaLabel, iconLabel }) => (
    <BadgeList ariaLabel={ariaLabel}>
      <BadgeListItem
        icon={<Icons.AlertCircle />}
        type={type}
        strikeThrough={strikeThrough}
        size={size}
        iconLabel={iconLabel}
      >
        You&apos;re departing from a different place
      </BadgeListItem>
      <BadgeListItem
        icon={<Icons.SelfTransfer />}
        type={type}
        strikeThrough={strikeThrough}
        size={size}
        iconLabel={iconLabel}
      >
        <Tooltip content="Additional information">
          <Text>Self transfer at Vienna</Text>
        </Tooltip>{" "}
        is your responsibility
      </BadgeListItem>
      <BadgeListItem
        icon={<Icons.KiwiComGuarantee />}
        type={type}
        strikeThrough={strikeThrough}
        size={size}
        iconLabel={iconLabel}
      >
        <TextLink onClick={action("link clicked")} type="secondary">
          Transfer protected
        </TextLink>{" "}
        by the Kiwi.com Guarantee
      </BadgeListItem>
    </BadgeList>
  ),

  parameters: {
    info: "Here you can try BadgeList component with additional functionality.",
  },

  args: {
    type: TYPE_OPTIONS.NEUTRAL,
    size: SIZE_OPTIONS.SMALL,
    strikeThrough: false,
    ariaLabel: "This is the BadgeList aria label",
    iconLabel: "This is the icon aria label",
  },

  argTypes: {
    type: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
    },
    size: {
      options: Object.values(SIZE_OPTIONS),
      control: {
        type: "select",
      },
    },
  },
};

export const RTL: Story = {
  render: () => (
    <RenderInRtl>
      <BadgeList>
        <BadgeListItem icon={<Icons.AlertCircle />}>
          You&apos;re departing from a different place
        </BadgeListItem>
        <BadgeListItem icon={<Icons.SelfTransfer />}>
          <Tooltip content="Additional information">
            <Text>Self transfer at Vienna</Text>
          </Tooltip>{" "}
          is your responsibility
        </BadgeListItem>
        <BadgeListItem icon={<Icons.KiwiComGuarantee />}>
          <TextLink onClick={action("link clicked")} type="secondary">
            Transfer protected
          </TextLink>{" "}
          by the Kiwi.com Guarantee
        </BadgeListItem>
      </BadgeList>
    </RenderInRtl>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};
