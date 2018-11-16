// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import IconList from "./IconList";
import { ICON_SIZES, ICON_COLORS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

setAddon(chaptersAddon);

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const size = select("Size", [undefined, ...Object.values(ICON_SIZES)]);
    const color = select("Color", [undefined, ...Object.values(ICON_COLORS)]);
    const source = select("Icon", Object.keys(Icons), "Airplane");
    const dataTest = text("dataTest", "test");
    const Icon = Icons[source];
    return {
      info:
        "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Icon size={size} color={color} dataTest={dataTest} />,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Custom color", () => {
    const size = select("Size", [undefined, ...Object.values(ICON_SIZES)], ICON_SIZES.MEDIUM);
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
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Reversed on RTL", () => {
    const source = select("Icon", Object.keys(Icons), "ChevronLeft");
    const Icon = Icons[source];
    return {
      info:
        "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <RenderInRtl>
                  <Icon reverseOnRtl />
                </RenderInRtl>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("List of all icons", () => ({
    info:
      "We use icons to draw attention to specific actions in our products. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <IconList />,
            options: {
              showSource: false,
            },
          },
        ],
      },
    ],
  }));
