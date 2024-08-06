import * as React from "react";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import type { SpacingToken, ColorTokens } from "./types";

import Box from ".";

Box.displayName = "Box";

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

export default {
  title: "Box",
};

export const Default = ({ children, as }) => {
  return <Box as={as}>{children}</Box>;
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Default.args = {
  children: "Default box",
  as: "span",
};

export const Overflow = ({ overflow }) => {
  return (
    <Box
      background={DEFAULT_COLOR}
      overflow={overflow}
      color="cloudLight"
      padding="large"
      maxWidth="300px"
    >
      Text
    </Box>
  );
};

Overflow.args = {
  overflow: OVERFLOW.AUTO,
};

Overflow.argTypes = {
  overflow: {
    options: Object.values(OVERFLOW),
    control: {
      type: "select",
    },
  },
};

export const TextAlign = ({ textAlign }) => {
  return (
    <Box
      background={DEFAULT_COLOR}
      textAlign={textAlign}
      color="cloudLight"
      padding="large"
      maxWidth="300px"
    >
      Text
    </Box>
  );
};

TextAlign.story = {
  name: "TextAlign",
};

TextAlign.args = {
  textAlign: TEXT_ALIGN.CENTER,
};

TextAlign.argTypes = {
  textAlign: {
    options: Object.values(TEXT_ALIGN),
    control: {
      type: "select",
    },
  },
};

export const Positions = ({ position, top, left, right, bottom }) => {
  return (
    <Box
      background={DEFAULT_COLOR}
      height="full"
      maxHeight="100px"
      maxWidth="100px"
      width="full"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      position={position}
    >
      <div
        style={{
          height: "50px",
        }}
      />
    </Box>
  );
};

Positions.args = {
  position: POSITION.RELATIVE,
  top: "",
  left: "",
  right: "",
  bottom: "",
};

Positions.argTypes = {
  position: {
    options: Object.values(POSITION),
    control: {
      type: "select",
    },
  },
};

export const PaddingMargin = ({ margin, padding }) => {
  return (
    <Box background={DEFAULT_COLOR} maxWidth="300px" margin={margin} padding={padding}>
      <div
        style={{
          height: "50px",
        }}
      />
    </Box>
  );
};

PaddingMargin.story = {
  name: "Padding & Margin",
};

PaddingMargin.args = {
  margin: SPACINGS.SMALL,
  padding: SPACINGS.SMALL,
};

PaddingMargin.argTypes = {
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
};

export const BorderRadius = ({ borderRadius }) => {
  return (
    <Box background={DEFAULT_COLOR} maxWidth="150px" borderRadius={borderRadius}>
      <div
        style={{
          height: "50px",
        }}
      />
    </Box>
  );
};

BorderRadius.story = {
  name: "BorderRadius",
};

BorderRadius.args = {
  borderRadius: BORDER_RADIUS.ONE_HUNDRED,
};

BorderRadius.argTypes = {
  borderRadius: {
    options: Object.values(BORDER_RADIUS),
    control: {
      type: "select",
    },
  },
};

export const Colors = ({ color, background }) => {
  return (
    <Box display="flex" justify="center" align="center" background={background} color={color}>
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
  );
};

Colors.args = {
  color: COLORS[10],
  background: DEFAULT_COLOR,
};

Colors.argTypes = {
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
};

export const Elevation = ({ elevation }) => {
  return (
    <Box
      display="flex"
      justify="center"
      maxHeight="100px"
      elevation={elevation}
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
  );
};

Elevation.args = {
  elevation: ELEVATION.LEVEL_1,
};

Elevation.argTypes = {
  elevation: {
    options: Object.values(ELEVATION),
    control: {
      type: "select",
    },
  },
};

export const Flex = ({ direction, display, align, justify, wrap, shrink, grow }) => {
  return (
    <Box
      display={display}
      justify={justify}
      shrink={shrink}
      grow={grow}
      height="full"
      wrap={wrap}
      align={align}
      direction={direction}
    >
      <div style={{ height: 50, width: 50, background: "#ccc" }} />
      <div style={{ height: 50, width: 50, background: "#ccc" }} />
    </Box>
  );
};

Flex.args = {
  direction: DIRECTION.ROW,
  display: DISPLAY.FLEX,
  align: ALIGN.START,
  justify: JUSTIFY.START,
  wrap: WRAP.NOWRAP,
  shrink: 0,
  grow: 0,
};

Flex.argTypes = {
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
};

export const Playground = ({
  children,
  display,
  wrap,
  shrink,
  grow,
  align,
  textAlign,
  direction,
  justify,
  width,
  minWidth,
  maxWidth,
  height,
  maxHeight,
  elevation,
  borderRadius,
  position,
  top,
  right,
  bottom,
  left,
  overflow,
  padding,
  margin,
}) => {
  return (
    <Box
      display={display}
      wrap={wrap}
      shrink={shrink}
      grow={grow}
      align={align}
      textAlign={textAlign}
      direction={direction}
      justify={justify}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      maxHeight={maxHeight}
      elevation={elevation}
      borderRadius={borderRadius}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      overflow={overflow}
      padding={padding as SpacingToken}
      margin={margin}
      color="productLight"
      background="inkLight"
    >
      {children}
    </Box>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  children: "Box",
  display: DISPLAY.FLEX,
  overflow: OVERFLOW.VISIBLE,
  wrap: WRAP.NOWRAP,
  shrink: 0,
  grow: 0,
  align: ALIGN.START,
  textAlign: TEXT_ALIGN.LEFT,
  justify: JUSTIFY.CENTER,
  direction: DIRECTION.ROW,
  width: "full",
  minWidth: "",
  maxWidth: "300px",
  height: "auto",
  maxHeight: "100px",
  elevation: ELEVATION.LEVEL_1,
  borderRadius: BORDER_RADIUS.ONE_HUNDRED,
  position: POSITION.RELATIVE,
  top: "10px",
  right: "10px",
  bottom: "10px",
  left: "10px",
  margin: SPACINGS.NONE,
  padding: SPACINGS.NONE,
};

Playground.argTypes = {
  display: {
    options: Object.values(DISPLAY),
    control: {
      type: "select",
    },
  },
  overflow: {
    options: Object.values(OVERFLOW),
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
  align: {
    options: Object.values(ALIGN),
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
  justify: {
    options: Object.values(JUSTIFY),
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
  elevation: {
    options: Object.values(ELEVATION),
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
  position: {
    options: Object.values(POSITION),
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
};

export const Rtl = ({ right, left, margin, padding, textAlign, justify, direction, align }) => {
  return (
    <RenderInRtl>
      <Box
        right={right}
        justify={justify}
        direction={direction}
        textAlign={textAlign}
        left={left}
        align={align}
        margin={margin}
        padding={padding as SpacingToken}
      >
        Box in RTL
      </Box>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

Rtl.args = {
  right: "10px",
  left: "10px",
  margin: SPACINGS.SMALL,
  padding: SPACINGS.NONE,
  textAlign: TEXT_ALIGN.LEFT,
  justify: JUSTIFY.CENTER,
  direction: DIRECTION.ROW,
  align: ALIGN.START,
};

Rtl.argTypes = {
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
  textAlign: {
    options: Object.values(TEXT_ALIGN),
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
  direction: {
    options: Object.values(DIRECTION),
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
};
