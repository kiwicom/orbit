// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";

import {
  TYPE_OPTIONS,
  SIZE_OPTIONS,
  WEIGHT_OPTIONS,
  ALIGN_OPTIONS,
  ELEMENT_OPTIONS,
} from "./consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Text from "./index";

const customText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas dui dolor, ut vestibulum nisi sodales et. Suspendisse molestie felis sit amet dui viverra volutpat sed sit amet lacus. Quisque sapien dolor, blandit ut sodales id, dictum sit amet purus. Nulla facilisi. Nulla eleifend, sem sed fermentum feugiat, eros ligula semper nulla, sit amet semper purus risus nec lorem.";

storiesOf("Text", module)
  .add(
    "Primary text",
    () => {
      const children = text("Text", customText);

      return <Text>{children}</Text>;
    },
    {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Secondary text",
    () => {
      const children = text("Text", customText);

      return <Text type="secondary">{children}</Text>;
    },
    {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Attention text",
    () => {
      const children = text("Text", customText);

      return <Text type="attention">{children}</Text>;
    },
    {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Status text",
    () => {
      const children = text("Text", customText);

      return (
        <div>
          <Text type="info">{children}</Text>
          <Text type="success">{children}</Text>
          <Text type="warning">{children}</Text>
          <Text type="critical">{children}</Text>
        </div>
      );
    },
    {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Link in text",
    () => (
      <Text>
        {customText} <a href="http://kiwi.com">Kiwi.com</a>
      </Text>
    ),
    {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "White text",
    () => {
      const children = text("Text", customText);

      return (
        <div style={{ backgroundColor: "#46515e", padding: "20px" }}>
          <Text type="white">{children}</Text>
        </div>
      );
    },
    {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PRIMARY);
      const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.P);
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
      const weight = select("Weight", Object.values(WEIGHT_OPTIONS), WEIGHT_OPTIONS.NORMAL);
      const align = select("Align", Object.values(ALIGN_OPTIONS), ALIGN_OPTIONS.LEFT);
      const uppercase = boolean("Uppercase", false);
      const italic = boolean("Italic", false);
      const children = text("Text", customText);
      const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
      const dataTest = text("dataTest", "test");

      return (
        <Text
          type={type}
          element={element}
          size={size}
          weight={weight}
          align={align}
          uppercase={uppercase}
          italic={italic}
          dataTest={dataTest}
          spaceAfter={spaceAfter}
        >
          {children}
        </Text>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Text align="left">Lorem ipsum dolor sit amet</Text>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
