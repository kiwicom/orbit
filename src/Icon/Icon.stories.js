// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, select, text } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import { iconSizes, iconColors } from "../Icon";

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
    const size = select("Size", Object.keys(iconSizes), "medium");
    const color = select("Color", Object.keys(iconColors), "primary");

    return {
      info: "Some description about this Icon component.",
      chapters: [
        {
          info:
            "All icons in Orbit components are using size and color prop. If it's possible for you to use predefined sizes and colors, use it.",
          sections: [
            {
              title: `Icon example`,
              sectionFn: () => <Icons.Airplane size={size} color={color} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Custom color", () => {
    const size = select("Size", Object.keys(iconSizes), "medium");
    const customColor = text("Custom color", "#3b5998");

    return {
      info: "Some description about this component.",
      chapters: [
        {
          info: "In edge cases you can customize color for your Icon.",
          sections: [
            {
              title: `Icon example`,
              sectionFn: () => <Icons.Facebook size={size} customColor={customColor} />,
              options,
            },
          ],
        },
      ],
    };
  });
