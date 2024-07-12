import * as React from "react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import Heading from "../Heading";
import Stack from "../Stack";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SIZES, TYPES } from "./consts";

import Tag from ".";

export default {
  title: "Tag",
};

export const Default = () => {
  return (
    <Stack direction="column">
      <Heading type="title2">Neutral</Heading>
      <Stack inline>
        <Tag>Non actionable</Tag>
        <Tag iconLeft={<Icons.PlusMinus />}>With icon</Tag>
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
        <Tag type="colored" iconLeft={<Icons.PlusMinus />}>
          With icon
        </Tag>
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

export const Playground = ({
  content,
  size,
  removable,
  selected,
  dateTag,
  dataTest,
  type,
  iconLeft,
}) => {
  const IconLeft = iconLeft ? Icons[iconLeft] : null;

  return (
    <Tag
      size={size}
      type={type}
      iconLeft={IconLeft && <IconLeft />}
      dateTag={dateTag}
      selected={selected}
      onClick={action("onClick")}
      onRemove={removable ? action("onRemove") : undefined}
      dataTest={dataTest}
    >
      {content}
    </Tag>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  content: "Transport",
  size: SIZES.NORMAL,
  removable: true,
  selected: true,
  dateTag: false,
  dataTest: "test",
  type: TYPES.NEUTRAL,
  iconLeft: "PlusMinus",
};

Playground.argTypes = {
  size: {
    options: Object.values(SIZES),
    control: {
      type: "select",
    },
  },
  type: {
    options: Object.values(TYPES),
    control: {
      type: "select",
    },
  },
  iconLeft: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Rtl = () => (
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
