// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, boolean, select } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

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
      const padding = select("padding", [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], "primary");

      return <Box padding={padding}>{children}</Box>;
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
