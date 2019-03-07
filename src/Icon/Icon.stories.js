// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import IconList from "./IconList";
import { ICON_SIZES, ICON_COLORS } from "./consts";

storiesOf("Icon", module)
  .add(
    "Default",
    () => {
      const size = select("Size", [undefined, ...Object.values(ICON_SIZES)]);
      const color = select("Color", [undefined, ...Object.values(ICON_COLORS)]);
      const source = select("Icon", Object.keys(Icons), "Airplane");
      const dataTest = text("dataTest", "test");
      const Icon = Icons[source];
      return <Icon size={size} color={color} dataTest={dataTest} />;
    },
    {
      info:
        "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Custom color",
    () => {
      const size = select("Size", [undefined, ...Object.values(ICON_SIZES)], ICON_SIZES.MEDIUM);
      const customColor = text("Custom color", "#ABCDEF");
      const source = select("Icon", Object.keys(Icons), "Airplane");
      const Icon = Icons[source];
      return <Icon size={size} customColor={customColor} />;
    },
    {
      info:
        "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add("List of all icons", () => <IconList />);
