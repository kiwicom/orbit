import * as React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";

import { PLACEMENTS } from "../common/consts";
import * as Icons from "../icons";
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

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

export default {
  title: "Tooltip",
};

export const TooltipOnInlineElement = () => {
  const content = text("content", "Write your text here.");
  const removeUnderlinedText = boolean("removeUnderlinedText", false);

  return (
    <Alert icon={<Icons.Airplane />} title="Lorem ipsum dolor sit amet">
      <Stack spacing="none">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
        eget mollis sed, tempor sed magna.
        <Tooltip
          content={
            <div>
              <div>Write your text here.</div>
              <TextLink>Clickable element.</TextLink>
            </div>
          }
          placement="left"
        >
          <TextLink>Cras elementum.</TextLink>
        </Tooltip>
        Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada congue.
        Sed vel lectus.
        <Tooltip content={content} removeUnderlinedText={removeUnderlinedText}>
          <Text>
            Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada
            congue. Sed vel lectus.
          </Text>
        </Tooltip>
      </Stack>
    </Alert>
  );
};

TooltipOnInlineElement.story = {
  name: "Tooltip on inline element",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const TooltipOnBlockElement = () => {
  const content = text(
    "content",
    "Write your text here. If it’s longer than three lines though, consider format your content in some more structured way.",
  );
  return (
    <Tooltip content={content}>
      <Heading>Orbit design system</Heading>
    </Tooltip>
  );
};

TooltipOnBlockElement.story = {
  name: "Tooltip on block element",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const TooltipOnDisabledElement = () => {
  const content = text("content", "Write your text here.");
  return (
    <Tooltip content={content}>
      <Button disabled>Disabled</Button>
    </Tooltip>
  );
};

TooltipOnDisabledElement.story = {
  name: "Tooltip on disabled element",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Block = () => {
  const content = text("content", "Write your text here.");
  return (
    <Tooltip block content={content}>
      <Button fullWidth>Full width</Button>
    </Tooltip>
  );
};

export const Placement = () => {
  const size = select("size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
  const placement = select("placement", Object.values(PLACEMENTS), PLACEMENTS.BOTTOM);
  const content = text("content", "Write your text here.");
  return (
    <Stack justify="center">
      <Tooltip placement={placement} size={size} content={content}>
        <Icons.Airplane />
      </Tooltip>
    </Stack>
  );
};

Placement.story = {
  name: "Placement",

  parameters: {
    info:
      "If you want to, you can specify one preferred placement. If it won't be possible to use it, the defaults will be used.",
  },
};

export const WithImageInside = () => {
  const size = select("size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
  const placement = select("placement", Object.values(PLACEMENTS), PLACEMENTS.BOTTOM);
  return (
    <Tooltip
      placement={placement}
      size={size}
      content={
        <Stack>
          <img
            src="/tooltip_card_preview.png"
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
      <Icons.Airplane />
    </Tooltip>
  );
};

WithImageInside.story = {
  name: "With image inside",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = () => {
  const content = text("content", "Write your text here.");
  const dataTest = text("dataTest", "test");
  const Icon = getIcon(getIcons("Airplane"));
  const size = select("size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
  const tabIndex = text("TabIndex", "0");
  const enabled = boolean("enabled", true);
  const removeUnderlinedText = boolean("removeUnderlinedText", false);
  const placement = select("placement", Object.values(PLACEMENTS), PLACEMENTS.BOTTOM);

  return (
    <Tooltip
      placement={placement}
      size={size}
      content={content}
      dataTest={dataTest}
      tabIndex={tabIndex}
      enabled={enabled}
      removeUnderlinedText={removeUnderlinedText}
    >
      <Icon />
    </Tooltip>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = () => {
  return (
    <RenderInRtl>
      <Alert icon={<Icons.Airplane />} title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
        eget mollis sed, tempor sed magna.
        <Tooltip content="Write your text here." placement="left">
          <TextLink>Cras elementum.</TextLink>
        </Tooltip>{" "}
        Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada congue.
        Sed vel lectus.{" "}
        <Tooltip content="Write your text here.">
          <Text>Another Tooltip.</Text>
        </Tooltip>{" "}
        Donec odio tempus molestie, porttitor ut, iaculis quis, sem.
      </Alert>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL ",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
