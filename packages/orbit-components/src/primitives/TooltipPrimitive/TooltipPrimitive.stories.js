// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../../icons";
import { POSITIONS, SIZE_OPTIONS, ALIGNS } from "./consts";
import Stack from "../../Stack";
import Alert from "../../Alert";
import Text from "../../Text";
import TextLink from "../../TextLink";
import List from "../../List";
import ListItem from "../../List/ListItem";
import Heading from "../../Heading";
import Button from "../../Button";
import RenderInRtl from "../../utils/rtl/RenderInRtl";

import TooltipPrimitive from "./index";

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

storiesOf("TooltipPrimitive", module)
  .add(
    "TooltipPrimitive on inline element",
    () => {
      const content = text("content", "Write your text here.");
      const removeUnderlinedText = boolean("removeUnderlinedText", false);

      return (
        <Alert icon={<Icons.Airplane />} title="Lorem ipsum dolor sit amet">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
          eget mollis sed, tempor sed magna.
          <TooltipPrimitive
            content={
              <div>
                <div>Write your text here.</div>
                <TextLink>Clickable element.</TextLink>
              </div>
            }
            preferredPosition="left"
          >
            <TextLink>Cras elementum.</TextLink>
          </TooltipPrimitive>{" "}
          Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada congue.
          Sed vel lectus.{" "}
          <TooltipPrimitive content={content} removeUnderlinedText={removeUnderlinedText}>
            <Text>
              Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada
              congue. Sed vel lectus.
            </Text>
          </TooltipPrimitive>
        </Alert>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "TooltipPrimitive on block element",
    () => {
      const content = text(
        "content",
        "Write your text here. If it’s longer than three lines though, consider format your content in some more structured way.",
      );
      return (
        <TooltipPrimitive content={content}>
          <Heading>Orbit design system</Heading>
        </TooltipPrimitive>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "TooltipPrimitive on disabled element",
    () => {
      const content = text("content", "Write your text here.");
      return (
        <TooltipPrimitive content={content}>
          <Button disabled>Disabled</Button>
        </TooltipPrimitive>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Preferred position",
    () => {
      const size = select("size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
      const preferredPosition = select(
        "preferredPosition",
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );
      const content = text("content", "Write your text here.");
      return (
        <Stack justify="center">
          <TooltipPrimitive preferredPosition={preferredPosition} size={size} content={content}>
            <Icons.Airplane />
          </TooltipPrimitive>
        </Stack>
      );
    },
    {
      info:
        "If you want to, you can specify one preferred position. If it won't be possible to use it, the defaults will be used.",
    },
  )
  .add(
    "With image inside",
    () => {
      const size = select("size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
      const preferredPosition = select(
        "preferredPosition",
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );
      return (
        <TooltipPrimitive
          preferredPosition={preferredPosition}
          size={size}
          content={
            <Stack>
              <img
                src="/tooltipPrimitive_card_preview.png"
                alt="Preview
                of card help in TooltipPrimitive component"
              />
              <Text>
                We take security very seriously. Especially when it comes to your personal and
                sensitive details.
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .lokiSkip(
    "With long content",
    () => {
      const content = text(
        "content",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Ut tempus purus at lorem. Quisque porta. Sed convallis magna eu sem. Duis viverra diam non justo. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Praesent id justo in neque elementum ultrices. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Curabitur vitae diam non enim vestibulum interdum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Maecenas lorem. Phasellus rhoncus. Nunc tincidunt ante vitae massa. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Etiam posuere lacus quis dolor. Curabitur vitae diam non enim vestibulum interdum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus",
      );
      return (
        <TooltipPrimitive size="medium" content={content}>
          <Icons.Airplane />
        </TooltipPrimitive>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const content = text("content", "Write your text here.");
      const dataTest = text("dataTest", "test");
      const Icon = getIcon(getIcons("Airplane"));
      const size = select("size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
      const tabIndex = text("TabIndex", "0");
      const enabled = boolean("enabled", true);
      const removeUnderlinedText = boolean("removeUnderlinedText", false);
      const preferredAlign = select("preferredAlign", Object.values(ALIGNS), ALIGNS.START);
      const preferredPosition = select(
        "preferredPosition",
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );

      return (
        <TooltipPrimitive
          preferredPosition={preferredPosition}
          preferredAlign={preferredAlign}
          size={size}
          content={content}
          dataTest={dataTest}
          tabIndex={tabIndex}
          enabled={enabled}
          removeUnderlinedText={removeUnderlinedText}
        >
          <Icon />
        </TooltipPrimitive>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL ",
    () => {
      return (
        <RenderInRtl>
          <Alert icon={<Icons.Airplane />} title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
            eget mollis sed, tempor sed magna.
            <TooltipPrimitive content="Write your text here." preferredPosition="left">
              <TextLink>Cras elementum.</TextLink>
            </TooltipPrimitive>{" "}
            Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada
            congue. Sed vel lectus.{" "}
            <TooltipPrimitive content="Write your text here.">
              <Text>Another TooltipPrimitive.</Text>
            </TooltipPrimitive>{" "}
            Donec odio tempus molestie, porttitor ut, iaculis quis, sem.
          </Alert>
        </RenderInRtl>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
