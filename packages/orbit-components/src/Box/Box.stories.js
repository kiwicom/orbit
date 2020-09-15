// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import {
  DISPLAY,
  FLEX_WRAP,
  FLEX_SHRINK,
  FLEX_GROW,
  OVERFLOW,
  ALIGN_ITEMS,
  TEXT_ALIGN,
  JUSTIFY_CONTENT,
  WIDTH_AND_HEIGHT,
  ELEVATION,
  BORDER_RADIUS,
  POSITION,
} from "./consts";

import Box from "./index";

storiesOf("Box", module)
  .add(
    "Default",
    () => {
      const children = text("Children", "Default box");
      const as = text("As", "span");
      return <Box as={as}>{children}</Box>;
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const children = text("Children", "Box");
      const display = select("display", DISPLAY, DISPLAY[1]);
      const overflow = select("overflow", OVERFLOW, OVERFLOW[0]);
      const flexWrap = select("flex-wrap", FLEX_WRAP, FLEX_WRAP[0]);
      const flexShrink = select("flex-shrink", FLEX_SHRINK, FLEX_SHRINK[0]);
      const flexGrow = select("flex-grow", FLEX_GROW, FLEX_GROW[0]);
      const alignItems = select("align-items", ALIGN_ITEMS, ALIGN_ITEMS[0]);
      const textAlign = select("text-align", TEXT_ALIGN, TEXT_ALIGN[0]);
      const justifyContent = select("justify-content", JUSTIFY_CONTENT, JUSTIFY_CONTENT[0]);
      const width = select("width", WIDTH_AND_HEIGHT, WIDTH_AND_HEIGHT[0]);
      const maxWidth = text("max-width", "100px");
      const height = select("height", WIDTH_AND_HEIGHT, WIDTH_AND_HEIGHT[0]);
      const maxHeight = text("max-height", "100px");
      const elevation = select("justify-content", ELEVATION, ELEVATION[0]);
      const borderRadius = select("border-radius", BORDER_RADIUS, BORDER_RADIUS[0]);
      const position = select("position", POSITION, POSITION[1]);
      const top = text("top", "10px");
      const right = text("right", "10px");
      const bottom = text("left", "10px");
      const left = text("botom", "10px");

      return (
        <Box
          display={display}
          flexWrap={flexWrap}
          flexShrink={flexShrink}
          flexGrow={flexGrow}
          alignItems={alignItems}
          textAlign={textAlign}
          justifyContent={justifyContent}
          width={width}
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
          padding={{
            top: "small",
            left: "x-small",
            right: "xx-small",
          }}
          margin="x-small"
          color="productLight"
          background="inkLight"
        >
          {children}
        </Box>
      );
    },
    {
      info: "Some description about this type of component. ",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Box>Box in RTL</Box>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
