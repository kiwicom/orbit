import * as React from "react";

import * as Icons from "../../icons";
import Stack from "../../Stack";
import Alert from "../../Alert";
import Text from "../../Text";
import TextLink from "../../TextLink";
import List from "../../List";
import ListItem from "../../List/ListItem";
import Heading from "../../Heading";
import Button from "../../Button";
import RenderInRtl from "../../utils/rtl/RenderInRtl";
import { PLACEMENTS } from "../../common/consts";

import TooltipPrimitive from ".";

enum SIZE_OPTIONS {
  SMALL = "small",
  MEDIUM = "medium",
}

const getIcon = source => Icons[source];

export default {
  title: "TooltipPrimitive",
};

export const TooltipPrimitiveOnInlineElement = ({ content, removeUnderlinedText }) => {
  return (
    <Alert icon={<Icons.Airplane />} title="Lorem ipsum dolor sit amet">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate eget
      mollis sed, tempor sed magna.
      <TooltipPrimitive
        content={
          <div>
            <div>Write your text here.</div>
            <TextLink>Clickable element.</TextLink>
          </div>
        }
        placement="left"
      >
        <TextLink>Cras elementum.</TextLink>
      </TooltipPrimitive>{" "}
      Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada congue. Sed
      vel lectus.{" "}
      <TooltipPrimitive content={content} removeUnderlinedText={removeUnderlinedText}>
        <Text>
          Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada congue.
          Sed vel lectus.
        </Text>
      </TooltipPrimitive>
    </Alert>
  );
};

TooltipPrimitiveOnInlineElement.story = {
  name: "TooltipPrimitive on inline element",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

TooltipPrimitiveOnInlineElement.args = {
  content: "Write your text here.",
  removeUnderlinedText: false,
};

export const TooltipPrimitiveOnBlockElement = ({ content }) => {
  return (
    <TooltipPrimitive content={content}>
      <Heading>Orbit design system</Heading>
    </TooltipPrimitive>
  );
};

TooltipPrimitiveOnBlockElement.story = {
  name: "TooltipPrimitive on block element",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

TooltipPrimitiveOnBlockElement.args = {
  content:
    "Write your text here. If it’s longer than three lines though, consider format your content in some more structured way.",
};

export const TooltipPrimitiveOnDisabledElement = ({ content }) => {
  return (
    <TooltipPrimitive content={content}>
      <Button disabled>Disabled</Button>
    </TooltipPrimitive>
  );
};

TooltipPrimitiveOnDisabledElement.story = {
  name: "TooltipPrimitive on disabled element",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

TooltipPrimitiveOnDisabledElement.args = {
  content: "Write your text here.",
};

export const Placement = ({ size, placement, content }) => {
  return (
    <Stack justify="center">
      <TooltipPrimitive placement={placement} size={size} content={content}>
        <Icons.Airplane />
      </TooltipPrimitive>
    </Stack>
  );
};

Placement.story = {
  name: "Placement",

  parameters: {
    info: "If you want to, you can specify one preferred position. If it won't be possible to use it, the defaults will be used.",
  },
};

Placement.args = {
  size: SIZE_OPTIONS.MEDIUM,
  placement: PLACEMENTS.BOTTOM,
  content: "Write your text here.",
};

Placement.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

export const PlacementRtl = ({ size, placement, content }) => {
  return (
    <RenderInRtl>
      <Stack justify="center">
        <TooltipPrimitive placement={placement} size={size} content={content}>
          <Icons.Airplane />
        </TooltipPrimitive>
      </Stack>
    </RenderInRtl>
  );
};

PlacementRtl.args = {
  size: SIZE_OPTIONS.MEDIUM,
  placement: PLACEMENTS.BOTTOM,
  content: "Write your text here.",
};

PlacementRtl.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

export const WithImageInside = ({ size, placement }) => {
  return (
    <TooltipPrimitive
      placement={placement}
      size={size}
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
      <Icons.Airplane />
    </TooltipPrimitive>
  );
};

WithImageInside.story = {
  name: "With image inside",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

WithImageInside.args = {
  size: SIZE_OPTIONS.MEDIUM,
  placement: PLACEMENTS.BOTTOM,
};

WithImageInside.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({
  content,
  dataTest,
  icon,
  size,
  tabIndex,
  error,
  help,
  enabled,
  removeUnderlinedText,
  placement,
}) => {
  const Icon = getIcon(icon);

  return (
    <Stack flex justify="center">
      <TooltipPrimitive
        placement={placement}
        size={size}
        content={content}
        dataTest={dataTest}
        tabIndex={tabIndex}
        enabled={enabled}
        removeUnderlinedText={removeUnderlinedText}
        error={error}
        help={help}
      >
        <Icon />
      </TooltipPrimitive>
    </Stack>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  content: "Write your text here.",
  dataTest: "test",
  icon: "Airplane",
  size: SIZE_OPTIONS.SMALL,
  tabIndex: "0",
  error: false,
  help: false,
  enabled: true,
  removeUnderlinedText: false,
  placement: PLACEMENTS.BOTTOM,
};

Playground.argTypes = {
  icon: {
    options: Object.keys(Icons),
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
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

export const Rtl = () => {
  return (
    <RenderInRtl>
      <Alert icon={<Icons.Airplane />} title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
        eget mollis sed, tempor sed magna.
        <TooltipPrimitive content="Write your text here." placement="left">
          <TextLink>Cras elementum.</TextLink>
        </TooltipPrimitive>{" "}
        Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada congue.
        Sed vel lectus.{" "}
        <TooltipPrimitive content="Write your text here.">
          <Text>Another TooltipPrimitive.</Text>
        </TooltipPrimitive>{" "}
        Donec odio tempus molestie, porttitor ut, iaculis quis, sem.
      </Alert>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL ",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
