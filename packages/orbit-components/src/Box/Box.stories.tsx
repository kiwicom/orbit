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
  ACTION = "action",
  FIXED = "fixed",
  RAISED = "raised",
  OVERLAY = "overlay",
  FIXEDREVERSE = "fixedReverse",
  RAISEDREVERSE = "raisedReverse",
}

enum BORDER_RADIUS {
  SMALL = "small",
  NORMAL = "normal",
  LARGE = "large",
  RADIUSCIRCLE = "circle",
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
  XXXSmall = "XXXSmall",
  XXSmall = "XXSmall",
  XSmall = "XSmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  XLARGE = "XLarge",
  XXLarge = "XXLarge",
  XXXLarge = "XXXLarge",
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
    margin: SPACINGS.SMALL,
    padding: SPACINGS.SMALL,
    position: POSITION.RELATIVE,
    top: "",
    left: "",
    right: "",
    bottom: "",
    color: COLORS[10],
    background: DEFAULT_COLOR,
    borderRadius: BORDER_RADIUS.NORMAL,
    elevation: ELEVATION.ACTION,
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
  },
};

export const Overflow: Story = {
  render: args => (
    <Box {...args} background={DEFAULT_COLOR} color="cloudLight" padding="large" maxWidth="300px">
      Text
    </Box>
  ),
};

export const TextAlign: Story = {
  render: args => (
    <Box {...args} background={DEFAULT_COLOR} color="cloudLight" padding="large" maxWidth="300px">
      Text
    </Box>
  ),
};

export const Positions: Story = {
  render: args => (
    <Box
      {...args}
      background={DEFAULT_COLOR}
      height="full"
      maxHeight="100px"
      maxWidth="100px"
      width="full"
    >
      <div
        style={{
          height: "50px",
        }}
      />
    </Box>
  ),
};

export const PaddingMargin: Story = {
  render: args => (
    <Box {...args} background={DEFAULT_COLOR} maxWidth="300px">
      <div
        style={{
          height: "50px",
        }}
      />
    </Box>
  ),
};

export const BorderRadius: Story = {
  render: args => (
    <Box {...args} background={DEFAULT_COLOR} maxWidth="150px">
      <div
        style={{
          height: "50px",
        }}
      />
    </Box>
  ),
};

export const Colors: Story = {
  render: args => (
    <Box {...args} display="flex" justify="center" align="center">
      <div
        style={{
          height: "100px",
          width: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Content
      </div>
    </Box>
  ),
};

export const Elevation: Story = {
  render: args => (
    <Box
      {...args}
      display="flex"
      justify="center"
      maxHeight="100px"
      maxWidth="300px"
      align="center"
      background="cloudDark"
    >
      <div
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Content
      </div>
    </Box>
  ),
};

export const Flex: Story = {
  render: args => (
    <Box {...args} height="full">
      <div style={{ height: 50, width: 50, background: "#ccc" }} />
      <div style={{ height: 50, width: 50, background: "#ccc" }} />
    </Box>
  ),
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
  },
};
