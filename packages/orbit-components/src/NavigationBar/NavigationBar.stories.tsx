import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import LinkList from "../LinkList";
import ChevronDown from "../icons/ChevronDown";
import StarFull from "../icons/StarFull";
import QuestionCircle from "../icons/QuestionCircle";
import AccountCircle from "../icons/AccountCircle";
import TextLink from "../TextLink";

import NavigationBar from ".";

const meta: Meta<typeof NavigationBar> = {
  title: "NavigationBar",
  component: NavigationBar,

  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: ["onMenuOpen", "onShow", "onHide"],
    },
  },

  args: {
    hideOnScroll: true,
    openTitle: "Open navigation menu",
    id: "navigation-menu-id",
    onMenuOpen: action("onMenuOpen"),
    onShow: action("onShow"),
    onHide: action("onHide"),
    bottomStyle: "shadow",
    transparentBgAtTop: false,
  },

  argTypes: {
    bottomStyle: {
      options: ["shadow", "border"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavigationBar>;

export const NavigationBarComponent: Story = {
  render: args => (
    <NavigationBar {...args}>
      <Stack justify="between" spacing="none">
        <ButtonLink iconRight={<ChevronDown />} type="secondary">
          Flights
        </ButtonLink>
        <Stack direction="row" spacing="100" justify="end" shrink>
          <ButtonLink aria-label="Favourites" iconLeft={<StarFull />} type="secondary" />
          <ButtonLink
            aria-label="Questions and Answers"
            iconLeft={<QuestionCircle />}
            type="secondary"
          />
          <ButtonLink aria-label="Account" iconLeft={<AccountCircle />} type="secondary" />
        </Stack>
      </Stack>
    </NavigationBar>
  ),
};

export const RTL: Story = {
  render: args => (
    <RenderInRtl>
      <NavigationBar {...args}>
        <Stack flex align="center" justify="between" spacing="none">
          <LinkList direction="row">
            <TextLink type="secondary">Flights</TextLink>
            <TextLink type="secondary">Flights</TextLink>
            <TextLink type="secondary">Flights</TextLink>
            <TextLink type="secondary">Flights</TextLink>
          </LinkList>
          <Stack direction="row" spacing="100" justify="end" shrink>
            <ButtonLink type="secondary">Starred</ButtonLink>
            <ButtonLink type="secondary">Help</ButtonLink>
            <ButtonLink type="secondary">Account</ButtonLink>
          </Stack>
        </Stack>
      </NavigationBar>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
