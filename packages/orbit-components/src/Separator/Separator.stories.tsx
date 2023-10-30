import * as React from "react";
import { select } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../common/getSpacingToken/consts";
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

export const VisualTest = () => {
  return (
    <div className="space-y-md flex flex-col">
      <Separator />
      <Separator type="dotted" />
      <Separator type="dashed" />
      <Separator type="double" />
      <Separator color="border-red-normal" type="solid" />
      <Separator color="border-blue-normal" type="solid" />
      <Separator color="border-product-normal" sideOffset="small" type="solid" />
      <Separator color="border-product-normal" sideOffset="medium" type="solid" />
      <Separator color="border-product-normal" sideOffset="large" type="solid" />
      <Separator color="border-product-normal" sideOffset="XLarge" type="solid" />
      <Separator color="border-product-normal" sideOffset="XXLarge" type="solid" />
      <Separator align="left" sideOffset="large" color="border-bundle-basic" type="solid" />
      <Separator align="right" sideOffset="large" color="border-bundle-basic" type="solid" />
      <Separator align="center" sideOffset="XXLarge" color="border-bundle-basic" type="solid" />
      <Separator spaceAfter="smallest" />
      <Separator spaceAfter="small" />
      <Separator spaceAfter="medium" />
      <Separator spaceAfter="medium" />
      <Separator spaceAfter="large" />
      <Separator spaceAfter="largest" />
    </div>
  );
};

VisualTest.story = {
  name: "Separator visual story",
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
