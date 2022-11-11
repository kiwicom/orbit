import * as React from "react";
import { select, number, text, boolean } from "@storybook/addon-knobs";

import defaultTheme from "../defaultTheme";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Skeleton from ".";

export default {
  title: "Skeleton",
};

enum PRESETS {
  List = "List",
  Image = "Image",
  Card = "Card",
  Button = "Button",
  Text = "Text",
}

export const Default = () => {
  return <Skeleton height="150px" width="500px" />;
};

Default.story = {
  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = () => {
  const animate = boolean("animate", true);
  const height = text("height", "");
  const maxHeight = text("maxHeight", "");
  const rowBorderRadius = number("rowBorderRadius", 3);
  const rowHeight = number("rowHeight", 21);
  const rowOffset = number("rowOffset", 30);
  const rows = number("rows", 10);
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.NONE);
  const viewBox = text("viewBox", "");
  const width = text("width", "");
  const title = text("title", "Loading");
  const color = select(
    "color",
    Object.keys(defaultTheme.orbit).filter(t => t.startsWith("palette")),
    "",
  );

  return (
    <Skeleton
      animate={animate}
      color={color}
      height={height}
      maxHeight={maxHeight}
      title={title}
      rowBorderRadius={rowBorderRadius}
      rowHeight={rowHeight}
      rowOffset={rowOffset}
      rows={rows}
      spaceAfter={spaceAfter}
      viewBox={viewBox}
      width={width}
    />
  );
};

export const RTL = () => (
  <RenderInRtl>
    <Skeleton rows={5} rowOffset={30} />
  </RenderInRtl>
);

export const Custom = () => {
  const height = text("height", `100px`);
  const viewBox = text("viewBox", "0 0 500 100");
  const width = text("width", `500px`);

  return (
    <Skeleton height={height} width={width} viewBox={viewBox}>
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
    </Skeleton>
  );
};

export const Presets = () => {
  const presets = select("preset", PRESETS, PRESETS.List);
  return <Skeleton preset={presets} />;
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
