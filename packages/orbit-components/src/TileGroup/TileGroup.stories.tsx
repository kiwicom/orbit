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
import Tile from "../Tile";

import TileGroup from ".";

const getIcon = source => Icons[source];

type TileGroupPropsAndCustomArgs = React.ComponentProps<typeof TileGroup> &
  React.ComponentProps<typeof Tile>;

const meta: Meta<TileGroupPropsAndCustomArgs> = {
  title: "TileGroup",
  component: TileGroup,
};

export default meta;
type Story = StoryObj<TileGroupPropsAndCustomArgs>;

export const Playground: Story = {
  render: ({ as, children, ...args }) => {
    const Icon = getIcon("GenderMan");

    return (
      <TileGroup as={as || "div"} {...args}>
        {Array.from({ length: 4 }, (_, idx) => (
          <Tile
            key={idx}
            icon={Icon && <Icon />}
            onClick={action("clicked")}
            expandable
            header={
              <Stack justify="between" align="center" direction="row" shrink>
                <Stack spacing="none" direction="column" shrink>
                  <Stack direction="row" align="center" spacing="200">
                    <Heading type="title4">Mr. Hot potato</Heading>
                    <CountryFlag code="cz" name="Czechia" />
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
          </Tile>
        ))}
      </TileGroup>
    );
  },

  parameters: {
    info: "This is the playground configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    id: "ID",
    as: "div",
    children: "This is example of expanded content",
  },
};

export const Rtl: Story = {
  render: () => (
    <RenderInRtl>
      <TileGroup>
        {Array.from({ length: 4 }, (_, idx) => (
          <Tile
            key={idx}
            onClick={action("clicked")}
            description={
              <Stack justify="between" direction="row">
                <Text>Mr. John Smith</Text>
                <Text>20 kg</Text>
              </Stack>
            }
            expandable
          >
            This is example of expanded content
          </Tile>
        ))}
      </TileGroup>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
