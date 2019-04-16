// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { POSITIONS } from "./consts";
import Stack from "../Stack";
import Button from "../Button";
import Stepper from "../Stepper";
import ListChoice from "../ListChoice";
import Text from "../Text";
import * as Icons from "../icons";
import ChevronDown from "../icons/ChevronDown";

import Popover from "./index";

const content = (
  <div>
    <Stack>
      <Stack align="center">
        <Stack spacing="none">
          <Text>Adult</Text>
          <Text type="secondary">11+</Text>
        </Stack>
        <Stepper />
      </Stack>
      <Stack align="center">
        <Stack spacing="none">
          <Text>Child</Text>
          <Text type="secondary">2-11</Text>
        </Stack>
        <Stepper />
      </Stack>
    </Stack>
  </div>
);

storiesOf("Popover", module)
  .addDecorator(withKnobs)

  .add(
    "Default",
    () => {
      return (
        <Popover content={content}>
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
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
          hasPadding={false}
          content={
            <div>
              <ListChoice
                title="Choice Title"
                description="Further description"
                selectable
                icon={<Icons.Accommodation />}
                onClick={action("onClick")}
              />
            </div>
          }
          preferredPosition={preferredPosition}
        >
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
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
          hasPadding={false}
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
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
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
        <Popover open={open} content={content} onOpen={action("open")} onClose={action("close")}>
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
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
      const hasPadding = boolean("hasPadding", true);

      return (
        <Popover
          width={width}
          dataTest={dataTest}
          content={content}
          preferredPosition={preferredPosition}
          hasPadding={hasPadding}
          onOpen={action("open")}
          onClose={action("close")}
        >
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
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
            <Button type="secondary" iconRight={<ChevronDown />}>
              Open popover
            </Button>
          </Popover>
        </RenderInRtl>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
