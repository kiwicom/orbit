import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import Illustration from "../Illustration";
import { NAMES } from "../Illustration/consts.mts";
import type { Name } from "../Illustration/types";
import Button from "../Button";
import List from "../List";
import ListItem from "../List/ListItem";

import CallOutBanner from ".";

type CallOutBannerPropsAndCustomArgs = React.ComponentProps<typeof CallOutBanner> & {
  illustrationName: Name;
};

const meta: Meta<CallOutBannerPropsAndCustomArgs> = {
  title: "CallOutBanner",
  component: CallOutBanner,

  args: {
    title: "Rooms in Warsaw",
    description:
      "Select your hotel, hostel, apartment, or B&B from more than a million properties worldwide.",
    illustrationName: "Accommodation",
  },

  argTypes: {
    illustrationName: {
      options: NAMES,
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<CallOutBannerPropsAndCustomArgs>;

export const Default: Story = {
  render: ({ illustrationName, ...args }) => (
    <CallOutBanner
      {...args}
      illustration={
        illustrationName ? <Illustration size="small" name={illustrationName} /> : undefined
      }
      actions={
        <Button
          type="secondary"
          size="small"
          onClick={action("onClick")}
          iconRight={<Icons.NewWindow />}
        >
          Find a Room
        </Button>
      }
    >
      <List type="secondary">
        <ListItem icon={<Icons.Check color="success" />}>Up to 50% off.</ListItem>
        <ListItem icon={<Icons.Check color="success" />}>
          From 3-star budget to 5-star luxury.
        </ListItem>
      </List>
    </CallOutBanner>
  ),

  parameters: {
    info: "This is the default configuration of this component.",
  },
};

export const Actionable: Story = {
  render: ({ illustrationName, actions, ...args }) => {
    return (
      <CallOutBanner
        {...args}
        onClick={action("onClick")}
        illustration={
          illustrationName ? <Illustration size="small" name={illustrationName} /> : undefined
        }
        actions={
          actions ? (
            <Button
              type="secondary"
              size="small"
              onClick={action("onClick")}
              iconRight={<Icons.NewWindow />}
            >
              Find a Room
            </Button>
          ) : null
        }
      >
        <List type="secondary">
          <ListItem icon={<Icons.Check color="success" />}>Up to 50% off.</ListItem>
          <ListItem icon={<Icons.Check color="success" />}>
            From 3-star budget to 5-star luxury.
          </ListItem>
        </List>
      </CallOutBanner>
    );
  },

  args: {
    actions: true,
  },
};

export const Playground: Story = {
  render: ({ onClick, actions, illustrationName, ...args }) => {
    return (
      <CallOutBanner
        {...args}
        onClick={onClick ? action("onClick") : undefined}
        illustration={
          illustrationName ? <Illustration size="small" name={illustrationName} /> : undefined
        }
        actions={
          actions ? (
            <Button
              type="secondary"
              size="small"
              onClick={action("onClick")}
              iconRight={<Icons.NewWindow />}
            >
              Find a Room
            </Button>
          ) : null
        }
      >
        <List type="secondary">
          <ListItem icon={<Icons.Check color="success" />}>Up to 50% off.</ListItem>
          <ListItem icon={<Icons.Check color="success" />}>
            From 3-star budget to 5-star luxury.
          </ListItem>
        </List>
      </CallOutBanner>
    );
  },

  args: {
    actions: false,
  },
};
