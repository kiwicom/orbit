// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { POSITIONS } from "./consts";
import Stack from "../Stack";
import List from "../List";
import ListItem from "../List/ListItem";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import ListChoice from "../ListChoice";
import Text from "../Text";
import * as Icons from "../icons";

import Popover from "./index";

const content = (
  <Stack>
    <List>
      <ListItem>24,000 locations around the globe</ListItem>
      <ListItem>
        Lowest price car rental in <strong>&nbsp;Warsaw</strong>
      </ListItem>
      <ListItem>From 3 star budget to 5 star luxury</ListItem>
    </List>
    <ButtonLink type="secondary">Provide action</ButtonLink>
  </Stack>
);

storiesOf("Popover", module)
  .addDecorator(withKnobs)

  .add(
    "Default",
    () => {
      return (
        <Popover content={content}>
          <Button>Button</Button>
        </Popover>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Prefered Position",
    () => {
      const preferredPosition = select(
        "preferredPosition",
        Object.values(POSITIONS),
        POSITIONS.TOP,
      );
      return (
        <Popover
          content={
            <Text>
              Provide an action for a user <ButtonLink>Link</ButtonLink>
            </Text>
          }
          preferredPosition={preferredPosition}
        >
          <Button>Button</Button>
        </Popover>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "With ListChoice",
    () => {
      return (
        <Popover
          content={
            <div>
              <ListChoice
                title="Choice Title"
                description="Further description"
                selectable
                icon={<Icons.Accommodation />}
                onClick={action("onClick")}
              />
              <ListChoice
                title="Choice Title"
                description="Further description"
                selectable
                selected
                icon={<Icons.Accommodation />}
                onClick={action("onClick")}
              />
              <ListChoice
                title="Choice Title"
                description="Further description"
                selectable
                icon={<Icons.Accommodation />}
                onClick={action("onClick")}
              />
            </div>
          }
          preferredPosition="top"
        >
          <Button>Button</Button>
        </Popover>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Opened by prop",
    () => {
      const open = boolean("open", false);

      return (
        <Popover open={open} content={content}>
          <Button>Button</Button>
        </Popover>
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
      const dataTest = text("dataTest", "test");
      const preferredPosition = select(
        "preferredPosition",
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );
      const width = number("width", 350);

      return (
        <Popover
          width={width}
          dataTest={dataTest}
          content={content}
          preferredPosition={preferredPosition}
        >
          <Button>Button</Button>
        </Popover>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => {
      const dataTest = text("dataTest", "test");
      const preferredPosition = select(
        "preferredPosition",
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );

      return (
        <RenderInRtl>
          <Popover dataTest={dataTest} content={content} preferredPosition={preferredPosition}>
            <Button>Button</Button>
          </Popover>
        </RenderInRtl>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
