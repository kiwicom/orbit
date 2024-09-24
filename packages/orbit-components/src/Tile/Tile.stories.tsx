import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import * as Icons from "../icons";
import Stack from "../Stack";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Badge from "../Badge";
import Heading from "../Heading";
import CountryFlag from "../CountryFlag";

import Tile from ".";

const getIcon = source => Icons[source];

const meta: Meta<typeof Tile> = {
  title: "Tile",
  component: Tile,

  args: {
    onClick: action("clicked"),
  },

  argTypes: {
    icon: {
      options: [undefined, ...Object.keys(Icons)],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const DefaultJustWrapper: Story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: [
        "icon",
        "onClick",
        "external",
        "noPadding",
        "expandable",
        "initialExpanded",
        "noHeaderIcon",
      ],
    },
  },

  args: {
    children: "Lorem ipsum dolor sit amet",
  },
};

export const DefaultWithHeaderProps: Story = {
  render: ({ icon, ...args }) => {
    const Icon = getIcon(icon);

    return <Tile {...args} icon={Icon && <Icon />} />;
  },

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onClick", "external", "noPadding", "expandable", "initialExpanded"],
    },
  },

  args: {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    icon: "Airplane",
    noHeaderIcon: false,
  },
};

export const DefaultWithHeaderPropsAsHref: Story = {
  render: ({ icon, ...args }) => {
    const Icon = getIcon(icon);

    return <Tile {...args} icon={Icon && <Icon />} />;
  },

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onClick", "noPadding", "expandable", "initialExpanded"],
    },
  },

  args: {
    ...DefaultWithHeaderProps.args,
    href: "https://www.kiwi.com/",
    external: true,
  },
};

export const ExpandableWithCustomDescription: StoryObj<
  React.ComponentProps<typeof Tile> & { showMore: boolean }
> = {
  render: ({ children, showMore, icon, ...args }) => {
    const Icon = getIcon(icon);

    return (
      <Tile
        {...args}
        icon={Icon && <Icon />}
        header={
          <Stack justify="between" align="center" direction="row" shrink>
            <Stack spacing="none" direction="column" shrink>
              <Stack direction="row" align="center" spacing="200">
                <Heading type="title4" as="h4">
                  Mr. Hot potato
                </Heading>
                <CountryFlag code="cz" />
              </Stack>
              <Text>13/37/1337</Text>
            </Stack>
            <Stack align="center" basis="0%">
              <Badge type="infoSubtle">You</Badge>
            </Stack>
          </Stack>
        }
      >
        {children}
        {showMore && (
          <Text>
            Etiam posuere lacus quis dolor. Mauris elementum mauris vitae tortor. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
            Aenean id metus id velit ullamcorper pulvinar. Mauris metus. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </Text>
        )}
      </Tile>
    );
  },

  parameters: {
    controls: {
      exclude: ["onClick", "external", "noPadding", "initialExpanded", "noHeaderIcon"],
    },
  },

  args: {
    showMore: false,
    icon: "GenderMan",
    expandable: true,
    children: "This is example of expanded content",
  },
};

export const Playground: Story = {
  render: ({ icon, children, ...args }) => {
    const Icon = getIcon(icon);

    return (
      <Tile {...args} icon={Icon && <Icon />}>
        {children}
      </Tile>
    );
  },

  parameters: {
    info: "This is the playground configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onClick"],
    },
  },

  args: {
    ...DefaultWithHeaderPropsAsHref.args,
    id: "ID",
    expanded: false,
    header: "",
    children: "",
    noPadding: false,
    expandable: false,
    initialExpanded: false,
    htmlTitle: "Title for more info",
    as: "div",
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Tile
        {...args}
        description={
          <Stack justify="between" direction="row">
            <Text>Mr. John Smith</Text>
            <Text>20 kg</Text>
          </Stack>
        }
      />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },

  args: {
    expandable: true,
    children: "This is example of expanded content",
  },
};
