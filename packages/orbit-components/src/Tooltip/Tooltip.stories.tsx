import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { PLACEMENTS, AUTO_PLACEMENTS } from "../common/placements";
import Airplane from "../icons/Airplane";
import { SIZE_OPTIONS } from "./consts";
import Stack from "../Stack";
import Alert from "../Alert";
import Text from "../Text";
import TextLink from "../TextLink";
import List from "../List";
import ListItem from "../List/ListItem";
import Heading from "../Heading";
import Button from "../Button";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Tooltip from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,

  parameters: {
    controls: {
      exclude: [
        "onShow",
        "enabled",
        "tabIndex",
        "size",
        "labelClose",
        "renderInPortal",
        "stopPropagation",
      ],
    },
  },

  args: {
    onShow: action("onShow"),
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: args => (
    <Stack justify="center">
      <Tooltip {...args}>
        <Airplane ariaLabel="More information" />
      </Tooltip>
    </Stack>
  ),

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: [
        "onShow",
        "enabled",
        "tabIndex",
        "size",
        "labelClose",
        "renderInPortal",
        "stopPropagation",
        "block",
      ],
    },
  },

  args: {
    content: "Write your text here.",
  },
};

export const TooltipOnInlineElement: Story = {
  render: args => (
    <Alert icon title="Lorem ipsum dolor sit amet" type="critical">
      <Stack spacing="none">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
        eget mollis sed, tempor sed magna.{" "}
        <Tooltip {...args}>
          <TextLink>Cras elementum.</TextLink>
        </Tooltip>{" "}
        Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada congue.
        Sed vel lectus.
      </Stack>
    </Alert>
  ),

  args: {
    content: "Write your text here.",
    block: false,
  },
};

export const TooltipOnBlockElements: Story = {
  render: args => (
    <>
      <Tooltip {...args}>
        <Heading>Orbit design system</Heading>
      </Tooltip>
      <div className="mt-600">
        <Tooltip {...args}>
          <Button fullWidth disabled>
            Full width & Disabled
          </Button>
        </Tooltip>
      </div>
    </>
  ),

  parameters: {
    info: "Block prop defines whether the children wrapper is inline or block. Useful when children need to take up the entire container width. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    content:
      "Write your text here. If it’s longer than three lines though, consider format your content in some more structured way.",
    block: true,
  },
};

export const WithImageInside: Story = {
  render: args => (
    <Tooltip
      {...args}
      content={
        <Stack>
          <img
            src="https://images.kiwi.com/illustrations/0x200/Rating-Q85.png"
            alt="Preview
              of card help in Tooltip component"
          />
          <Text>
            We take security very seriously. Especially when it comes to your personal and sensitive
            details.
          </Text>
          <List>
            <ListItem>
              A common variant, especially in older software, is displaying a description.
            </ListItem>
            <ListItem>
              A common variant, especially in older software, is displaying a description.{" "}
              <TextLink href="#">More info.</TextLink>
            </ListItem>
          </List>
        </Stack>
      }
    >
      <Airplane ariaLabel="More information" />
    </Tooltip>
  ),

  parameters: {
    info: "If you want to, you can specify one preferred placement. If it won't be possible to use it, the defaults will be used. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: [
        "onShow",
        "enabled",
        "tabIndex",
        "labelClose",
        "renderInPortal",
        "stopPropagation",
        "block",
      ],
    },
  },

  args: {
    size: SIZE_OPTIONS.MEDIUM,
    placement: PLACEMENTS.BOTTOM,
  },

  argTypes: {
    size: {
      options: Object.values(SIZE_OPTIONS),
      control: {
        type: "select",
      },
    },
    placement: {
      options: [...Object.values(AUTO_PLACEMENTS), ...Object.values(PLACEMENTS)],
      control: {
        type: "select",
      },
    },
  },
};

export const Playground: Story = {
  render: ({ children, content, ...args }) => (
    <Alert icon title="Lorem ipsum dolor sit amet" type="success">
      <Stack spacing="none">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
        eget mollis sed, tempor sed magna. Cras elementum. Aliquam erat volutpat. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Sed ac dolor sit amet purus malesuada congue. Sed vel lectus.{" "}
        <Tooltip
          content={
            <div>
              <div>{content}</div>
              <TextLink>Clickable element.</TextLink>
            </div>
          }
          {...args}
        >
          <Text>{children}</Text>
        </Tooltip>
      </Stack>
    </Alert>
  ),

  parameters: {
    info: "You can try all possible configurations of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onShow"],
    },
  },

  args: {
    children: "Aliquam erat volutpat.",
    enabled: true,
    tabIndex: "0",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada congue. Sed vel lectus.",
    id: "ID",
    labelClose: "Close",
    lockScrolling: false,
    renderInPortal: true,
    stopPropagation: false,
    removeUnderlinedText: false,
    block: false,
    ...WithImageInside.args,
  },

  argTypes: {
    ...WithImageInside.argTypes,
  },
};

export const Rtl: Story = {
  render: ({ content, ...args }) => (
    <RenderInRtl>
      <Alert icon title="Lorem ipsum dolor sit amet" type="success">
        <Stack spacing="none">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
          eget mollis sed, tempor sed magna. Cras elementum. Aliquam erat volutpat. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ac dolor sit amet purus malesuada congue. Sed vel lectus.{" "}
          <Tooltip
            content={
              <div>
                <div>{content}</div>
                <TextLink>Clickable element.</TextLink>
              </div>
            }
            {...args}
          >
            <Text>Aliquam erat volutpat.</Text>
          </Tooltip>
        </Stack>
      </Alert>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    content: "Write your text here.",
    block: false,
    ...WithImageInside.args,
  },

  argTypes: {
    ...WithImageInside.argTypes,
  },
};
