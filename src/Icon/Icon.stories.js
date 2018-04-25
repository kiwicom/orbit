// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, object, select, number, text } from "@storybook/addon-knobs/react";

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
  .addWithChapters("Predefined only", () => {
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
              sectionFn: () => <Icons.Accomodation size={size} color={color} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Predefined and custom", () => {
    const size = select("Size", Object.keys(iconSizes), "medium");
    const customSize = number("Custom size", "");
    const color = select("Color", Object.keys(iconColors), "primary");
    const customColor = text("Custom color", undefined);
    const customStyle = { transform: "rotate(90, 16, 16)", paddingTop: "20px" };
    const style = object("Custom style", customStyle);

    return {
      info: "Some description about this component.",
      chapters: [
        {
          info: "In edge cases you can customize your Icon with own CSS styles.",
          sections: [
            {
              title: `Icon example`,
              sectionFn: () => (
                <Icons.Accomodation
                  size={customSize || size}
                  color={customColor || color}
                  style={style}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Custom only", () => {
    const customSize = number("Custom size", 50);
    const customColor = text("Custom color", "#FF0000");
    const customStyle = { transform: "rotate(90, 16, 16)", paddingTop: "20px" };
    const style = object("Custom style", customStyle);

    return {
      info: "Some description about this component.",
      chapters: [
        {
          info: "In edge cases you can customize your Icon with own CSS styles.",
          sections: [
            {
              title: `Icon example`,
              sectionFn: () => (
                <Icons.Accomodation size={customSize} color={customColor} style={style} />
              ),
              options,
            },
          ],
        },
      ],
    };
  });
