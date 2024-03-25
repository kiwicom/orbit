import * as React from "react";
import { select } from "@storybook/addon-knobs";

import { SPACINGS_AFTER } from "../common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import type { BorderColorClass, SideOffset } from "./types";
import defaultTheme from "../defaultTheme";

import Separator from ".";

export default {
  title: "Separator",
};

export const Default = () => <Separator />;

const kebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

Default.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = () => {
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.LARGEST);
  const align = select("align", ["left", "right", "center"], "left");
  const sideOffsetOptions: SideOffset[] = ["none", "small", "medium", "large", "XLarge", "XXLarge"];
  const type = select("type", ["solid", "dashed", "dotted", "double", "none"], "solid");
  const color = select(
    "color",
    Object.keys(defaultTheme.orbit)
      .filter(t => t.startsWith("palette"))
      .map(c => kebabCase(c.replace("palette", "border"))),
    "",
  ) as BorderColorClass;

  const sideOffset = select("sideOffset", sideOffsetOptions, "none");
  return (
    <Separator
      color={color}
      align={align}
      sideOffset={sideOffset}
      spaceAfter={spaceAfter}
      type={type}
    />
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = () => (
  <RenderInRtl>
    <Playground />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
