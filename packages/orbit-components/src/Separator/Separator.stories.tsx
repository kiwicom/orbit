import * as React from "react";

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

export const Playground = ({ spaceAfter, align, sideOffset, type, color }) => {
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

Playground.args = {
  spaceAfter: SPACINGS_AFTER.LARGEST,
  align: "left",
  sideOffset: "none" as SideOffset,
  type: "solid",
  color: "" as BorderColorClass,
};

Playground.argTypes = {
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
  align: {
    options: ["left", "right", "center"],
    control: {
      type: "select",
    },
  },
  sideOffset: {
    options: ["none", "small", "medium", "large", "XLarge", "XXLarge"],
    control: {
      type: "select",
    },
  },
  type: {
    options: ["solid", "dashed", "dotted", "double", "none"],
    control: {
      type: "select",
    },
  },
  color: {
    options: Object.keys(defaultTheme.orbit)
      .filter(t => t.startsWith("palette"))
      .map(c => kebabCase(c.replace("palette", "border"))),
    control: {
      type: "select",
    },
  },
};

export const Rtl = args => (
  <RenderInRtl>
    <Playground {...args} />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

Rtl.args = {
  spaceAfter: SPACINGS_AFTER.LARGEST,
  align: "left",
  sideOffset: "none" as SideOffset,
  type: "solid",
  color: "" as BorderColorClass,
};

Rtl.argTypes = {
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
  align: {
    options: ["left", "right", "center"],
    control: {
      type: "select",
    },
  },
  sideOffset: {
    options: ["none", "small", "medium", "large", "XLarge", "XXLarge"],
    control: {
      type: "select",
    },
  },
  type: {
    options: ["solid", "dashed", "dotted", "double", "none"],
    control: {
      type: "select",
    },
  },
  color: {
    options: Object.keys(defaultTheme.orbit)
      .filter(t => t.startsWith("palette"))
      .map(c => kebabCase(c.replace("palette", "border"))),
    control: {
      type: "select",
    },
  },
};
