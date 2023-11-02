import * as React from "react";
import { select, text } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import type { PaletteTokens, Indent } from "./types";

import Separator from ".";

export default {
  title: "Separator",
};

export const Default = () => <Separator />;

Default.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = () => {
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.LARGEST);
  const align = select("align", ["left", "right", "center"], "left");
  const indentOptions: Indent[] = ["none", "small", "medium", "large", "XLarge", "XXLarge"];
  const type = select("type", ["solid", "dashed", "dotted", "double", "none"], "none");
  const color = text("color", "paletteBlueNormal") as PaletteTokens;
  const indent = select("indent", indentOptions, "none");
  return (
    <Separator color={color} align={align} indent={indent} spaceAfter={spaceAfter} type={type} />
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
      <Separator color="paletteRedNormal" type="solid" />
      <Separator color="paletteBlueNormal" type="solid" />
      <Separator color="paletteProductNormal" indent="small" type="solid" />
      <Separator color="paletteProductNormal" indent="medium" type="solid" />
      <Separator color="paletteProductNormal" indent="large" type="solid" />
      <Separator color="paletteProductNormal" indent="XLarge" type="solid" />
      <Separator color="paletteProductNormal" indent="XXLarge" type="solid" />
      <Separator align="left" indent="large" color="paletteBundleBasic" type="solid" />
      <Separator align="right" indent="large" color="paletteBundleBasic" type="solid" />
      <Separator align="center" indent="XXLarge" color="paletteBundleBasic" type="solid" />
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
