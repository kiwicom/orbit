// @flow
import * as React from "react";
import { select } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Separator, { type Indent } from ".";

export default {
  title: "Separator",
};

export const Default = (): React.Node => <Separator />;

Default.story = {
  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const spaceAfter = select(
    "spaceAfter",
    [null, ...Object.values(SPACINGS_AFTER)],
    SPACINGS_AFTER.LARGEST,
  );
  const align = select("align", ["left", "right", "center"], "left");
  const indentOptions: Indent[] = ["none", "small", "medium", "large", "XLarge", "XXLarge"];
  const indent = select("indent", indentOptions, "none");
  return <Separator align={align} indent={indent} spaceAfter={spaceAfter} />;
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => (
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
