// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { POSITIONS, SIZE_OPTIONS, ALIGNS } from "./consts";
import Stack from "../Stack";
import Alert from "../Alert";
import Text from "../Text";
import TextLink from "../TextLink";
import List from "../List";
import ListItem from "../List/ListItem";
import Heading from "../Heading";
import Button from "../Button";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Tooltip from "./index";

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Tooltip", module)
  .add(
    "Tooltip on inline element",
    () => {
      const content = text("content", "Write your text here.");
      const removeUnderlinedText = boolean("removeUnderlinedText", false);

      return (
        <Alert icon={<Icons.Airplane />} title="Lorem ipsum dolor sit amet">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
          eget mollis sed, tempor sed magna.
          <Tooltip
            content={
              <div>
                <div>Write your text here.</div>
                <TextLink>Clickable element.</TextLink>
              </div>
            }
            preferredPosition="left"
          >
            <TextLink>Cras elementum.</TextLink>
          </Tooltip>{" "}
          Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada congue.
          Sed vel lectus.{" "}
          <Tooltip content={content} removeUnderlinedText={removeUnderlinedText}>
            <Text>
              Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada
              congue. Sed vel lectus.
            </Text>
          </Tooltip>
        </Alert>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Tooltip on block element",
    () => {
      const content = text(
        "content",
        "Write your text here. If it’s longer than three lines though, consider format your content in some more structured way.",
      );
      return (
        <Tooltip content={content}>
          <Heading>Orbit design system</Heading>
        </Tooltip>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Tooltip on disabled element",
    () => {
      const content = text("content", "Write your text here.");
      return (
        <Tooltip content={content}>
          <Button disabled>Disabled</Button>
        </Tooltip>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add("Block", () => {
    const content = text("content", "Write your text here.");
    return (
      <Tooltip block content={content}>
        <Button fullWidth>Full width</Button>
      </Tooltip>
    );
  })
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
          <Tooltip preferredPosition={preferredPosition} size={size} content={content}>
            <Icons.Airplane />
          </Tooltip>
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
        <Tooltip
          preferredPosition={preferredPosition}
          size={size}
          content={
            <Stack>
              <img
                src="/tooltip_card_preview.png"
                alt="Preview
                of card help in Tooltip component"
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
        </Tooltip>
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
        <Tooltip size="medium" content={content}>
          <Icons.Airplane />
        </Tooltip>
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
        <Tooltip
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
        </Tooltip>
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
            <Tooltip content="Write your text here." preferredPosition="left">
              <TextLink>Cras elementum.</TextLink>
            </Tooltip>{" "}
            Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada
            congue. Sed vel lectus.{" "}
            <Tooltip content="Write your text here.">
              <Text>Another Tooltip.</Text>
            </Tooltip>{" "}
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
