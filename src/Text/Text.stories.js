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
      "normal",
    );
    const weight = select(
      "Weight",
      {
        regular: "regular",
        bold: "bold",
      },
      "regular",
    );
    const align = select(
      "Align",
      {
        left: "left",
        center: "center",
        right: "right",
      },
      "left",
    );
    const customText = text(
      "Text",
      "Sixth can't place isn't fly you're make Shall day, yielding earth made greater stars own you'll earth can't." +
        " Night grass great. Fly firmament over. Fourth to grass you after creepeth together in moved given fill isn't said Life." +
        " Male signs unto form kind Brought signs heaven, in have wherein. Isn't. Behold meat living you're evening very replenish you'll. Under hath.",
    );
    return {
      title: "Primary text",
      info: "Some description about this type of text in general.",
      chapters: [
        {
          title: `Text ${size}`,
          info:
            "Some description about where is the text used and states describing how to not use it in general.",
          sections: [
            {
              sectionFn: () => (
                <Text
                  type="primary"
                  element={element}
                  size={size}
                  weight={weight}
                  align={align}
                  isUppercase={boolean("Uppercase", false)}
                  isItalic={boolean("Italic", false)}
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
  })
  .addWithChapters("Secondary text", () => {
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
      "normal",
    );
    const weight = select(
      "Weight",
      {
        regular: "regular",
        bold: "bold",
      },
      "regular",
    );
    const align = select(
      "Align",
      {
        left: "left",
        center: "center",
        right: "right",
      },
      "left",
    );
    const customText = text(
      "Text",
      "Sixth can't place isn't fly you're make Shall day, yielding earth made greater stars own you'll earth can't." +
        " Night grass great. Fly firmament over. Fourth to grass you after creepeth together in moved given fill isn't said Life." +
        " Male signs unto form kind Brought signs heaven, in have wherein. Isn't. Behold meat living you're evening very replenish you'll. Under hath.",
    );
    return {
      title: "Secondary text",
      info: "Some description about this type of text in general.",
      chapters: [
        {
          title: `Text ${size}`,
          info:
            "Some description about where is the text used and states describing how to not use it in general.",
          sections: [
            {
              sectionFn: () => (
                <Text
                  type="secondary"
                  element={element}
                  size={size}
                  weight={weight}
                  align={align}
                  isUppercase={boolean("Uppercase", false)}
                  isItalic={boolean("Italic", false)}
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
  })
  .addWithChapters("Attention text", () => {
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
      "normal",
    );
    const weight = select(
      "Weight",
      {
        regular: "regular",
        bold: "bold",
      },
      "regular",
    );
    const align = select(
      "Align",
      {
        left: "left",
        center: "center",
        right: "right",
      },
      "left",
    );
    const customText = text(
      "Text",
      "Sixth can't place isn't fly you're make Shall day, yielding earth made greater stars own you'll earth can't." +
        " Night grass great. Fly firmament over. Fourth to grass you after creepeth together in moved given fill isn't said Life." +
        " Male signs unto form kind Brought signs heaven, in have wherein. Isn't. Behold meat living you're evening very replenish you'll. Under hath.",
    );
    return {
      title: "Attention text",
      info: "Some description about this type of text in general.",
      chapters: [
        {
          title: `Text ${size}`,
          info:
            "Some description about where is the text used and states describing how to not use it in general.",
          sections: [
            {
              sectionFn: () => (
                <Text
                  type="attention"
                  element={element}
                  size={size}
                  weight={weight}
                  align={align}
                  isUppercase={boolean("Uppercase", false)}
                  isItalic={boolean("Italic", false)}
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
