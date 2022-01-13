// @flow

import * as React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Heading from "../Heading";
import Stack from "../Stack";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SIZES, TYPES } from "./consts";

import Tag from ".";

export default {
  title: "Tag",
};

export const Default = (): React.Node => {
  return (
    <Stack direction="column">
      <Heading type="title2">Neutral</Heading>
      <Stack inline>
        <Tag>Non actionable</Tag>
        <Tag onClick={action("onClick")}>Default</Tag>
        <Tag selected onClick={action("onClick")}>
          Selected
        </Tag>
        <Tag onRemove={action("onRemove")}>Removable</Tag>
        <Tag selected onRemove={action("onRemove")} onClick={action("onClick")}>
          Selected Removable
        </Tag>
      </Stack>
      <Heading type="title2">Colored</Heading>
      <Stack inline>
        <Tag type="colored">Non actionable</Tag>
        <Tag type="colored" onClick={action("onClick")}>
          Default
        </Tag>
        <Tag type="colored" selected onClick={action("onClick")}>
          Selected
        </Tag>
        <Tag type="colored" onRemove={action("onRemove")}>
          Removable
        </Tag>
        <Tag type="colored" selected onRemove={action("onRemove")} onClick={action("onClick")}>
          Selected Removable
        </Tag>
      </Stack>
      <Heading>dateTag</Heading>
      <Tag type="colored" dateTag selected onClick={action("onClick")}>
        with dateTag selected color is Ink
      </Tag>
    </Stack>
  );
};

Default.story = {
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = (): React.Node => {
  const content = text("Content", "Transport");
  const size = select("size", Object.values(SIZES), SIZES.NORMAL);
  const selected = boolean("selected", true);
  const dateTag = boolean("dateTag", false);
  const dataTest = text("dataTest", "test");
  const type = select("type", Object.values(TYPES), TYPES.NEUTRAL);

  return (
    <Tag
      size={size}
      type={type}
      dateTag={dateTag}
      selected={selected}
      onClick={action("onClick")}
      onRemove={action("onRemove")}
      dataTest={dataTest}
    >
      {content}
    </Tag>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Tag onRemove={action("onRemove")}>Transport</Tag>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
