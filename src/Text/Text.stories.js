// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import Text from "./index";

setAddon(chaptersAddon);

const options = {
  allowSourceToggling: false,
  allowPropTablesToggling: false,
};

storiesOf("Text", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Primary text", () => {
    const customText = text(
      "Text",
      "Sixth can't place isn't fly you're make Shall day, yielding earth made greater stars own you'll earth can't." +
        " Night grass great. Fly firmament over. Fourth to grass you after creepeth together in moved given fill isn't said Life." +
        " Male signs unto form kind Brought signs heaven, in have wherein. Isn't. Behold meat living you're evening very replenish you'll. Under hath.",
    );
    return {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Text>{customText}</Text>,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Secondary text", () => {
    const customText = text(
      "Text",
      "Sixth can't place isn't fly you're make Shall day, yielding earth made greater stars own you'll earth can't." +
        " Night grass great. Fly firmament over. Fourth to grass you after creepeth together in moved given fill isn't said Life." +
        " Male signs unto form kind Brought signs heaven, in have wherein. Isn't. Behold meat living you're evening very replenish you'll. Under hath.",
    );
    return {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Text type="secondary">{customText}</Text>,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Attention text", () => {
    const customText = text(
      "Text",
      "Sixth can't place isn't fly you're make Shall day, yielding earth made greater stars own you'll earth can't." +
        " Night grass great. Fly firmament over. Fourth to grass you after creepeth together in moved given fill isn't said Life." +
        " Male signs unto form kind Brought signs heaven, in have wherein. Isn't. Behold meat living you're evening very replenish you'll. Under hath.",
    );
    return {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Text type="attention">{customText}</Text>,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const type = select(
      "Type",
      {
        primary: "primary",
        secondary: "secondary",
        attention: "attention",
      },
      "attention",
    );
    const element = select(
      "Element",
      {
        p: "p",
        span: "span",
        div: "div",
      },
      "p",
    );
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "small",
    );
    const weight = select(
      "Weight",
      {
        regular: "regular",
        bold: "bold",
      },
      "bold",
    );
    const align = select(
      "Align",
      {
        left: "left",
        center: "center",
        right: "right",
      },
      "center",
    );
    const customText = text(
      "Text",
      "Sixth can't place isn't fly you're make Shall day, yielding earth made greater stars own you'll earth can't." +
        " Night grass great. Fly firmament over. Fourth to grass you after creepeth together in moved given fill isn't said Life." +
        " Male signs unto form kind Brought signs heaven, in have wherein. Isn't. Behold meat living you're evening very replenish you'll. Under hath.",
    );
    return {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Text
                  type={type}
                  element={element}
                  size={size}
                  weight={weight}
                  align={align}
                  uppercase={boolean("Uppercase", false)}
                  italic={boolean("Italic", false)}
                >
                  {customText}
                </Text>
              ),
              options,
            },
          ],
        },
      ],
    };
  });
