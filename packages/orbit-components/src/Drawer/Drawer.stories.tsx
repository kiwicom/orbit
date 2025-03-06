import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react/";
import { action } from "@storybook/addon-actions";

import Stack from "../Stack";
import Heading from "../Heading";
import Button from "../Button";
import Text from "../Text";
import TextLink from "../TextLink";
import Separator from "../Separator";
import Illustration from "../Illustration";
import NewWindow from "../icons/NewWindow";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import POSITIONS from "./consts";
import InputField from "../InputField";
import Search from "../icons/Search";
import Tile from "../Tile";
import Collapse from "../Collapse";
import LinkList from "../LinkList";

import Drawer from ".";

const meta: Meta<typeof Drawer> = {
  title: "Drawer",
  component: Drawer,

  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onClose"],
    },
  },

  args: {
    title: "Drawer title",
    shown: true,
    position: POSITIONS.RIGHT,
    width: "480px",
    suppressed: false,
    fixedHeader: false,
    noPadding: false,
    onClose: action("onClose"),
    labelHide: "Hide",
    lockScrolling: true,
    ariaLabel: "",
  },

  argTypes: {
    position: {
      options: Object.values(POSITIONS),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const SideNavigation: Story = {
  render: args => (
    <Drawer
      {...args}
      actions={
        <Stack direction="row" justify="between" spacing="200">
          <Button type="secondary" size="small">
            Manage my bookings
          </Button>
        </Stack>
      }
    >
      <Collapse
        label="Discover"
        initialExpanded
        expandButtonLabel="Expand"
        collapseButtonLabel="Collapse"
      >
        <LinkList indent>
          <TextLink type="secondary">Refer a Friend</TextLink>
          <TextLink type="secondary">Subscribe to newsletter</TextLink>
          <TextLink type="secondary">Kiwi.com Stories</TextLink>
        </LinkList>
      </Collapse>
      <Collapse label="Guidelines" expandButtonLabel="Expand" collapseButtonLabel="Collapse">
        <LinkList indent>
          <TextLink type="secondary">Terms & Conditions</TextLink>
          <TextLink type="secondary">Terms of Use</TextLink>
          <TextLink type="secondary">Privacy Policy</TextLink>
          <TextLink type="secondary">Security</TextLink>
          <TextLink type="secondary">Cookies settings</TextLink>
        </LinkList>
      </Collapse>
      <Collapse label="Company" expandButtonLabel="Expand" collapseButtonLabel="Collapse">
        <LinkList indent>
          <TextLink type="secondary">About Kiwi.com</TextLink>
          <TextLink type="secondary">Careers</TextLink>
          <TextLink type="secondary">Care Kiwi.com</TextLink>
          <TextLink type="secondary">Code Kiwi.com</TextLink>
          <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
          <TextLink type="secondary">Press kit</TextLink>
        </LinkList>
      </Collapse>
      <LinkList>
        <TextLink type="secondary">Sign out</TextLink>
      </LinkList>
    </Drawer>
  ),

  args: {
    title: undefined,
  },

  parameters: {
    controls: {
      exclude: ["title", "onClose"],
    },
  },
};

export const SmartFaq: Story = {
  render: args => (
    <Drawer {...args}>
      <Stack>
        <Illustration name="Accommodation" />
        <Heading as="h2">Need help?</Heading>
        <Text type="secondary">We are here for you. First, let is narrow down your request.</Text>
        <Button>I have an existing booking</Button>
        <Button type="secondary">I do not have booking</Button>
        <Separator />
        <Text align="center">
          <TextLink iconRight={<NewWindow />} type="secondary">
            Full FAQ site
          </TextLink>
        </Text>
      </Stack>
    </Drawer>
  ),

  args: {
    title: undefined,
  },

  parameters: {
    controls: {
      exclude: ["title", "onClose"],
    },
  },
};

export const Suppressed: Story = {
  render: args => (
    <Drawer {...args}>
      <Stack>
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
      </Stack>
    </Drawer>
  ),

  args: {
    suppressed: true,
  },
};

export const WithTitle: Story = {
  render: args => (
    <Drawer {...args}>
      <Collapse
        label="Discover"
        initialExpanded
        expandButtonLabel="Expand"
        collapseButtonLabel="Collapse"
      >
        <LinkList indent>
          <TextLink type="secondary">Refer a Friend</TextLink>
          <TextLink type="secondary">Subscribe to newsletter</TextLink>
          <TextLink type="secondary">Kiwi.com Stories</TextLink>
        </LinkList>
      </Collapse>
      <Collapse label="Guidelines" expandButtonLabel="Expand" collapseButtonLabel="Collapse">
        <LinkList indent>
          <TextLink type="secondary">Terms & Conditions</TextLink>
          <TextLink type="secondary">Terms of Use</TextLink>
          <TextLink type="secondary">Privacy Policy</TextLink>
          <TextLink type="secondary">Security</TextLink>
          <TextLink type="secondary">Cookies settings</TextLink>
        </LinkList>
      </Collapse>
      <Collapse label="Company" expandButtonLabel="Expand" collapseButtonLabel="Collapse">
        <LinkList indent>
          <TextLink type="secondary">About Kiwi.com</TextLink>
          <TextLink type="secondary">Careers</TextLink>
          <TextLink type="secondary">Care Kiwi.com</TextLink>
          <TextLink type="secondary">Code Kiwi.com</TextLink>
          <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
          <TextLink type="secondary">Press kit</TextLink>
        </LinkList>
      </Collapse>
      <LinkList>
        <TextLink type="secondary">Sign out</TextLink>
      </LinkList>
    </Drawer>
  ),

  args: {
    title: "Drawer title",
    width: "320px",
  },
};

export const SmartFaqSearch: Story = {
  render: args => (
    <Drawer
      {...args}
      actions={
        <Button type="secondary" size="small">
          Sign In
        </Button>
      }
    >
      <Stack>
        <InputField placeholder="Search" prefix={<Search />} />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
        <Tile
          title="Cabin baggage"
          description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
        />
      </Stack>
    </Drawer>
  ),

  args: {
    title: "Help",
    suppressed: true,
  },
};

export const SideNavigationInRtl: Story = {
  render: args => (
    <RenderInRtl>
      <Drawer
        {...args}
        actions={
          <Stack direction="row" justify="between" spacing="200">
            <Button type="secondary" size="small">
              Manage my bookings
            </Button>
          </Stack>
        }
      >
        <Collapse
          label="Discover"
          initialExpanded
          expandButtonLabel="Expand"
          collapseButtonLabel="Collapse"
        >
          <LinkList>
            <TextLink type="secondary">Refer a Friend</TextLink>
            <TextLink type="secondary">Subscribe to newsletter</TextLink>
            <TextLink type="secondary">Kiwi.com Stories</TextLink>
          </LinkList>
        </Collapse>
        <Collapse label="Guidelines" expandButtonLabel="Expand" collapseButtonLabel="Collapse">
          <LinkList>
            <TextLink type="secondary">Terms & Conditions</TextLink>
            <TextLink type="secondary">Terms of Use</TextLink>
            <TextLink type="secondary">Privacy Policy</TextLink>
            <TextLink type="secondary">Security</TextLink>
            <TextLink type="secondary">Cookies settings</TextLink>
          </LinkList>
        </Collapse>
        <Collapse label="Company" expandButtonLabel="Expand" collapseButtonLabel="Collapse">
          <LinkList>
            <TextLink type="secondary">About Kiwi.com</TextLink>
            <TextLink type="secondary">Careers</TextLink>
            <TextLink type="secondary">Care Kiwi.com</TextLink>
            <TextLink type="secondary">Code Kiwi.com</TextLink>
            <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
            <TextLink type="secondary">Press kit</TextLink>
          </LinkList>
        </Collapse>
        <LinkList>
          <TextLink type="secondary">Sign out</TextLink>
        </LinkList>
      </Drawer>
    </RenderInRtl>
  ),

  args: {
    title: undefined,
    width: "320px",
  },

  parameters: {
    controls: {
      exclude: ["title", "onClose"],
    },
  },
};

export const SmartFaqInRtl: Story = {
  render: args => (
    <RenderInRtl>
      <Drawer {...args}>
        <Stack>
          <Illustration name="Accommodation" />
          <Heading as="h2">Need help?</Heading>
          <Text type="secondary">We are here for you. First, let is narrow down your request.</Text>
          <Button>I have an existing booking</Button>
          <Button type="secondary">I do not have booking</Button>
          <Separator />
          <Text align="center">
            <TextLink iconRight={<NewWindow />} type="secondary">
              Full FAQ site
            </TextLink>
          </Text>
        </Stack>
      </Drawer>
    </RenderInRtl>
  ),

  args: {
    title: undefined,
  },

  parameters: {
    controls: {
      exclude: ["title", "onClose"],
    },
  },
};

export const SmartFaqSearchInRtl: Story = {
  render: args => (
    <RenderInRtl>
      <Drawer
        {...args}
        actions={
          <Button type="secondary" size="small">
            Sign In
          </Button>
        }
      >
        <Stack>
          <InputField placeholder="Search" prefix={<Search />} />
          <Tile
            title="Cabin baggage"
            description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
          />
          <Tile
            title="Cabin baggage"
            description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
          />
          <Tile
            title="Cabin baggage"
            description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
          />
          <Tile
            title="Cabin baggage"
            description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
          />
          <Tile
            title="Cabin baggage"
            description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
          />
          <Tile
            title="Cabin baggage"
            description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
          />
        </Stack>
      </Drawer>
    </RenderInRtl>
  ),

  args: {
    title: "Help",
    fixedHeader: false,
  },
};
