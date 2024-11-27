import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Airplane from "../../icons/Airplane";
import Stack from "../../Stack";
import Alert from "../../Alert";
import Text from "../../Text";
import TextLink from "../../TextLink";
import List from "../../List";
import ListItem from "../../List/ListItem";
import Heading from "../../Heading";
import Button from "../../Button";
import RenderInRtl from "../../utils/rtl/RenderInRtl";
import { PLACEMENTS, AUTO_PLACEMENTS } from "../../common/placements";

import TooltipPrimitive from ".";

enum SIZE_OPTIONS {
  SMALL = "small",
  MEDIUM = "medium",
}

const meta: Meta<typeof TooltipPrimitive> = {
  title: "TooltipPrimitive",
  component: TooltipPrimitive,

  parameters: {
    controls: {
      exclude: ["onShow", "enabled", "tabIndex", "renderInPortal", "size", "stopPropagation"],
    },
  },

  args: {
    onShow: action("onShow"),
  },
};

export default meta;
type Story = StoryObj<typeof TooltipPrimitive>;

export const Default: Story = {
  render: args => (
    <Stack justify="center">
      <TooltipPrimitive {...args}>
        <Airplane ariaLabel="More information" />
      </TooltipPrimitive>
    </Stack>
  ),

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: [
        "onShow",
        "enabled",
        "tabIndex",
        "renderInPortal",
        "size",
        "stopPropagation",
        "block",
      ],
    },
  },

  args: {
    content: "Write your text here.",
  },
};

export const TooltipPrimitiveOnInlineElement: Story = {
  render: args => (
    <Alert icon title="Lorem ipsum dolor sit amet">
      <Stack>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
        eget mollis sed, tempor sed magna. Aliquam erat volutpat. Sed ac dolor sit amet purus
        malesuada congue. Sed vel lectus.{" "}
        <TooltipPrimitive {...args}>
          <Text>
            Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </TooltipPrimitive>{" "}
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum. Sed ac dolor sit amet purus malesuada congue. Sed vel lectus.
      </Stack>
    </Alert>
  ),

  args: {
    content: "Write your text here.",
    block: false,
  },
};

export const TooltipPrimitiveOnBlockElements: Story = {
  render: args => (
    <>
      <TooltipPrimitive {...args}>
        <Heading>Orbit design system</Heading>
      </TooltipPrimitive>
      <div className="mt-lg">
        <TooltipPrimitive {...args}>
          <Button fullWidth disabled>
            Full width & Disabled
          </Button>
        </TooltipPrimitive>
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
    <TooltipPrimitive
      {...args}
      content={
        <Stack>
          <img
            src="https://images.kiwi.com/illustrations/0x200/Rating-Q85.png"
            alt="Preview
              of card help in TooltipPrimitive component"
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
    </TooltipPrimitive>
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
    <Alert icon title="Lorem ipsum dolor sit amet" type="warning">
      <Stack spacing="none">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
        eget mollis sed, tempor sed magna. Cras elementum. Aliquam erat volutpat. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Sed ac dolor sit amet purus malesuada congue. Sed vel lectus.{" "}
        <TooltipPrimitive
          content={
            <div>
              <div>{content}</div>
              <TextLink>Clickable element.</TextLink>
            </div>
          }
          {...args}
        >
          <Text>{children}</Text>
        </TooltipPrimitive>
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
    tooltipShown: false,
    tabIndex: "0",
    id: "ID",
    renderInPortal: true,
    content: "Write your text here.",
    error: false,
    help: false,
    stopPropagation: false,
    removeUnderlinedText: false,
    block: false,
    noFlip: false,
    offset: [0, 5],
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
          <TooltipPrimitive
            content={
              <div>
                <div>{content}</div>
                <TextLink>Clickable element.</TextLink>
              </div>
            }
            {...args}
          >
            <Text>Aliquam erat volutpat.</Text>
          </TooltipPrimitive>
        </Stack>
      </Alert>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    tooltipShown: false,
    content: "Write your text here.",
    block: false,
    ...WithImageInside.args,
  },

  argTypes: {
    ...WithImageInside.argTypes,
  },
};
