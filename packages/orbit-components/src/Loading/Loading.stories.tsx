import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import TYPE_OPTIONS from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Text from "../Text";
import Card, { CardSection } from "../Card";
import Illustration from "../Illustration";

import Loading from ".";

const meta: Meta<typeof Loading> = {
  title: "Loading",
  component: Loading,

  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    loading: true,
    type: TYPE_OPTIONS.PAGE_LOADER,
  },

  argTypes: {
    type: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const DefaultWithChildren: Story = {
  render: args => (
    <Loading {...args}>
      <Text>Loading prop is false.</Text>
    </Loading>
  ),

  parameters: {
    controls: {
      exclude: ["children", "customSize", "type"],
    },
  },

  args: {
    text: "Please wait, content is loading...",
  },

  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
};

export const CardLoading: Story = {
  render: ({ loading }) => {
    return (
      <Card loading={loading} title="Card title" description="Card description">
        <Loading loading={loading} type="boxLoader">
          <CardSection>
            <Illustration name="EnjoyApp" size="medium" />
          </CardSection>
        </Loading>
      </Card>
    );
  },

  parameters: {
    info: "Example of usage of Loading component inside Card. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["children", "customSize", "text", "type"],
    },
  },
};

export const Playground: Story = {
  render: ({ customSize, ...args }) => (
    <div className="stroke-blue-dark">
      <Loading {...args} customSize={customSize === 0 ? undefined : customSize} />
    </div>
  ),

  args: {
    ...DefaultWithChildren.args,
    customSize: 50,
    id: "loader-id",
  },

  argTypes: {
    ...DefaultWithChildren.argTypes,
  },

  parameters: {
    info: "Playground of Loading component. Type buttonLoader inherits parent's stroke color. For visualisation of undefined value for customSize arg, set value number 0. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["children", "loading"],
    },
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Loading {...args} />
    </RenderInRtl>
  ),

  args: {
    type: TYPE_OPTIONS.INLINE_LOADER,
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
