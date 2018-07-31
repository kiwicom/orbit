// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, select, text } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import { ICON_SIZES, ICON_COLORS } from "./consts";

setAddon(chaptersAddon);

const options = {
  allowSourceToggling: false,
  allowPropTablesToggling: false,
};

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const size = select("Size", Object.keys(ICON_SIZES), "medium");
    const color = select("Color", Object.keys(ICON_COLORS), "primary");
    const source = select("Icon", Object.keys(Icons), "Airplane");
    const Icon = Icons[source];
    return {
      info:
        "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Icon size={size} color={color} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Custom color", () => {
    const size = select("Size", Object.keys(ICON_SIZES), "medium");
    const customColor = text("Custom color", "#ABCDEF");
    const source = select("Icon", Object.keys(Icons), "Airplane");
    const Icon = Icons[source];
    return {
      info:
        "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Icon size={size} customColor={customColor} />,
              options,
            },
          ],
        },
      ],
    };
  });
