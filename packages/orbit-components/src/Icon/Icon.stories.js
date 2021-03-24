// @flow

import * as React from "react";
import { select, text, boolean } from "@storybook/addon-knobs";

import IconList from "./IconList";
import * as Icons from "../icons";
import { ICON_SIZES, ICON_COLORS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

export const Default = () => {
  const size = select("Size", [null, ...Object.values(ICON_SIZES)]);
  const color = select("Color", [null, ...Object.values(ICON_COLORS)]);
  const source = select("Icon", Object.keys(Icons), "Airplane");
  const dataTest = text("dataTest", "test");
  const ariaLabel = text("ariaLabel", "label");
  const ariaHidden = boolean("ariaHidden", true);
  const Icon = Icons[source];
  return (
    <Icon
      size={size}
      color={color}
      dataTest={dataTest}
      ariaLabel={ariaLabel}
      ariaHidden={ariaHidden}
    />
  );
};

Default.story = {
  name: "Default",
  parameters: {
    info:
      "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CustomColor = () => {
  const size = select("Size", [null, ...Object.values(ICON_SIZES)], ICON_SIZES.MEDIUM);
  const customColor = text("Custom color", "#ABCDEF");
  const source = select("Icon", Object.keys(Icons), "Airplane");
  const Icon = Icons[source];

  return <Icon size={size} customColor={customColor} />;
};

CustomColor.story = {
  name: "Custom Color",
  parameters: {
    info:
      "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const ReversedOnRtl = () => {
  const source = select("Icon", Object.keys(Icons), "ChevronLeft");
  const Icon = Icons[source];
  return (
    <RenderInRtl>
      <Icon reverseOnRtl />
    </RenderInRtl>
  );
};

ReversedOnRtl.story = {
  name: "Reversed on RTL",
  parameters: {
    info:
      "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const ListOfAllIcons = () => <IconList />;

ListOfAllIcons.story = {
  name: "List of all icons",
  parameters: { loki: { skip: true } },
};
