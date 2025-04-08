import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react/";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import type { ColorTokens } from "./types";

import Box from ".";

const DEFAULT_COLOR = "blueDark";

enum DISPLAY {
  NONE = "none",
  FLEX = "flex",
  "INLINE-FLEX" = "inline-flex",
  BLOCK = "block",
  INLINE = "inline",
  "INLINE-BLOCK" = "inline-block",
}

enum WRAP {
  WRAP = "wrap",
  NOWRAP = "nowrap",
}

enum DIRECTION {
  ROW = "row",
  COLUMN = "column",
  "ROW-REVERSE" = "row-reverse",
  "COLUMN-REVERSE" = "column-reverse",
}

enum POSITION {
  ABSOLUTE = "absolute",
  RELATIVE = "relative",
  FIXED = "fixed",
}

enum ALIGN {
  START = "start",
  END = "end",
  CENTER = "center",
  STRETCH = "stretch",
}

enum JUSTIFY {
  CENTER = "center",
  START = "start",
  END = "end",
  BETWEEN = "between",
  AROUND = "around",
}

enum TEXT_ALIGN {
  START = "start",
  END = "end",
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

enum ELEVATION {
  FIXED = "fixed",
  FIXEDREVERSE = "fixedReverse",
  LEVEL_1 = "level1",
  LEVEL_2 = "level2",
  LEVEL_3 = "level3",
  LEVEL_3REVERSE = "level3Reverse",
  LEVEL_4 = "level4",
  NAVBAR = "navBar",
}

enum BORDER_RADIUS {
  FIFTY = "50",
  ONE_HUNDRED = "100",
  ONE_HUNDRED_FIFTY = "150",
  FULL = "full",
}

enum OVERFLOW {
  AUTO = "auto",
  HIDDEN = "hidden",
  SCROLL = "scroll",
  VISIBLE = "visible",
}

const COLORS: ColorTokens[] = [
  "productLight",
  "productLightHover",
  "productLightActive",
  "productNormal",
  "productNormalHover",
  "productNormalActive",
  "productDark",
  "productDarkHover",
  "productDarkActive",
  "productDarker",
  "white",
  "whiteHover",
  "whiteActive",
  "cloudLight",
  "cloudLightHover",
  "cloudLightActive",
  "cloudNormal",
  "cloudNormalHover",
  "cloudNormalActive",
  "cloudDark",
  "inkLight",
  "inkLightHover",
  "inkLightActive",
  "inkNormal",
  "inkNormalHover",
  "inkNormalActive",
  "inkDark",
  "inkDarkHover",
  "inkDarkActive",
  "orangeLight",
  "orangeLightHover",
  "orangeLightActive",
  "orangeNormal",
  "orangeNormalHover",
  "orangeNormalActive",
  "orangeDark",
  "orangeDarkHover",
  "orangeDarkActive",
  "orangeDarker",
  "redLight",
  "redLightHover",
  "redLightActive",
  "redNormal",
  "redNormalHover",
  "redNormalActive",
  "redDark",
  "redDarkHover",
  "redDarkActive",
  "redDarker",
  "greenLight",
  "greenLightHover",
  "greenLightActive",
  "greenNormal",
  "greenNormalHover",
  "greenNormalActive",
  "greenDark",
  "greenDarkHover",
  "greenDarkActive",
  "greenDarker",
  "blueLight",
  "blueLightHover",
  "blueLightActive",
  "blueNormal",
  "blueNormalHover",
  "blueNormalActive",
  "blueDark",
  "blueDarkHover",
  "blueDarkActive",
  "blueDarker",
  "socialFacebook",
  "socialFacebookHover",
  "socialFacebookActive",
];

enum SPACINGS {
  NONE = "none",
  FIFTY = "50",
  ONE_HUNDRED = "100",
  ONE_HUNDRED_FIFTY = "150",
  TWO_HUNDRED = "200",
  THREE_HUNDRED = "300",
  FOUR_HUNDRED = "400",
  FIVE_HUNDRED = "500",
  SIX_HUNDRED = "600",
  EIGHT_HUNDRED = "800",
  ONE_THOUSAND = "1000",
  ONE_THOUSAND_TWO_HUNDRED = "1200",
  ONE_THOUSAND_SIX_HUNDRED = "1600",
}

Box.displayName = "Box";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,

  args: {
    children: "Default box",
    as: "div",
    overflow: OVERFLOW.AUTO,
    textAlign: TEXT_ALIGN.CENTER,
    margin: SPACINGS.THREE_HUNDRED,
    padding: SPACINGS.THREE_HUNDRED,
    position: POSITION.RELATIVE,
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    color: COLORS[10],
    background: DEFAULT_COLOR,
    borderRadius: BORDER_RADIUS.ONE_HUNDRED,
    elevation: ELEVATION.LEVEL_1,
    direction: DIRECTION.ROW,
    display: DISPLAY.FLEX,
    align: ALIGN.START,
    justify: JUSTIFY.START,
    wrap: WRAP.NOWRAP,
    shrink: 0,
    grow: 0,
    width: "full",
    minWidth: "",
    maxWidth: "300px",
    height: "auto",
    maxHeight: "100px",
  },

  argTypes: {
    overflow: {
      options: Object.values(OVERFLOW),
      control: {
        type: "select",
      },
    },
    textAlign: {
      options: Object.values(TEXT_ALIGN),
      control: {
        type: "select",
      },
    },
    margin: {
      options: Object.values(SPACINGS),
      control: {
        type: "select",
      },
    },
    padding: {
      options: Object.values(SPACINGS),
      control: {
        type: "select",
      },
    },
    position: {
      options: Object.values(POSITION),
      control: {
        type: "select",
      },
    },
    color: {
      options: COLORS,
      control: {
        type: "select",
      },
    },
    background: {
      options: COLORS,
      control: {
        type: "select",
      },
    },
    borderRadius: {
      options: Object.values(BORDER_RADIUS),
      control: {
        type: "select",
      },
    },
    elevation: {
      options: Object.values(ELEVATION),
      control: {
        type: "select",
      },
    },
    direction: {
      options: Object.values(DIRECTION),
      control: {
        type: "select",
      },
    },
    display: {
      options: Object.values(DISPLAY),
      control: {
        type: "select",
      },
    },
    align: {
      options: Object.values(ALIGN),
      control: {
        type: "select",
      },
    },
    justify: {
      options: Object.values(JUSTIFY),
      control: {
        type: "select",
      },
    },
    wrap: {
      options: Object.values(WRAP),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: [
        "overflow",
        "textAlign",
        "margin",
        "padding",
        "position",
        "top",
        "left",
        "right",
        "bottom",
        "color",
        "background",
        "borderRadius",
        "elevation",
        "direction",
        "display",
        "align",
        "justify",
        "wrap",
        "shrink",
        "grow",
        "width",
        "minWidth",
        "maxWidth",
        "height",
        "maxHeight",
        "children",
      ],
    },
  },

  args: {
    overflow: undefined,
    textAlign: undefined,
    margin: undefined,
    padding: undefined,
    position: undefined,
    top: "",
    left: "",
    right: "",
    bottom: "",
    color: undefined,
    background: undefined,
    borderRadius: undefined,
    elevation: undefined,
    direction: undefined,
    display: undefined,
    align: undefined,
    justify: undefined,
    wrap: undefined,
    shrink: undefined,
    grow: undefined,
    width: undefined,
    minWidth: "",
    maxWidth: "",
    height: "",
    maxHeight: "",
  },
};

export const WithCustomStylesSettings: Story = {
  render: args => <Box {...args}>Text</Box>,

  parameters: {
    controls: {
      exclude: ["children"],
    },
  },
};

export const Flex: Story = {
  render: args => (
    <Box {...args}>
      <div style={{ height: 50, width: 50, background: "#14b732" }} />
      <div style={{ height: 50, width: 50, background: "#ff04c0" }} />
      <div style={{ height: 50, width: 50, background: "#f2ff04" }} />
    </Box>
  ),

  parameters: {
    controls: {
      exclude: [
        "children",
        "as",
        "overflow",
        "textAlign",
        "margin",
        "padding",
        "position",
        "top",
        "left",
        "right",
        "bottom",
        "color",
        "background",
        "borderRadius",
        "elevation",
      ],
    },
  },
};

export const Playground: Story = {
  render: ({ children, ...args }) => <Box {...args}>{children}</Box>,

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Box {...args}>Box in RTL</Box>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
