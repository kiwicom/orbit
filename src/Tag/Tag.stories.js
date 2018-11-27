// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SIZES } from "./consts";

import Tag from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Tag", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const content = text("Content", "Brno");
    const Icon = getIcon(getIcons("Airplane"));

    return {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Tag icon={Icon && <Icon />} onClick={action("onClick")}>
                  {content}
                </Tag>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const content = text("Content", "Transport");
    const size = select("size", Object.values(SIZES), SIZES.NORMAL);
    const selected = boolean("selected", true);
    const dataTest = text("dataTest", "test");
    const Icon = getIcon(getIcons("Bus"));

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Tag
                  icon={Icon && <Icon />}
                  size={size}
                  selected={selected}
                  onClick={action("onClick")}
                  onRemove={action("onRemove")}
                  dataTest={dataTest}
                >
                  {content}
                </Tag>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("RTL", () => ({
    info: "This is a preview of this component in RTL setup.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <RenderInRtl>
                <Tag icon={<Icons.Airplane />} onRemove={action("onRemove")}>
                  Transport
                </Tag>
              </RenderInRtl>
            ),
          },
        ],
      },
    ],
  }));
