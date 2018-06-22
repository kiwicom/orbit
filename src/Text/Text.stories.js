// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import Text, {
  TYPE_OPTIONS,
  SIZE_OPTIONS,
  WEIGHT_OPTIONS,
  ALIGN_OPTIONS,
  ELEMENT_OPTIONS,
} from "./Text";

setAddon(chaptersAddon);

const options = {
  allowSourceToggling: false,
  allowPropTablesToggling: false,
};

const customText = text(
  "Text",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas dui dolor, ut vestibulum nisi sodales et. Suspendisse molestie felis sit amet dui viverra volutpat sed sit amet lacus. Quisque sapien dolor, blandit ut sodales id, dictum sit amet purus. Nulla facilisi. Nulla eleifend, sem sed fermentum feugiat, eros ligula semper nulla, sit amet semper purus risus nec lorem. Curabitur lectus enim, ornare laoreet tellus vel, tristique porttitor tortor. In lorem ante, feugiat in fringilla sed, rutrum sit amet orci. Nulla ipsum justo, volutpat sed sem sit amet, pretium lacinia metus. Nulla facilisi. Donec dui felis, viverra quis iaculis a, lacinia ut mauris.",
);

storiesOf("Text", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Primary text", () => ({
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
  }))
  .addWithChapters("Secondary text", () => ({
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
  }))
  .addWithChapters("Attention text", () => ({
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
  }))
  .addWithChapters("Playground", () => {
    const type = select("Type", Object.values(TYPE_OPTIONS), "primary");
    const element = select("Element", Object.values(ELEMENT_OPTIONS), "p");
    const size = select("Size", Object.values(SIZE_OPTIONS), "normal");
    const weight = select("Weight", Object.values(WEIGHT_OPTIONS), "regular");
    const align = select("Align", Object.values(ALIGN_OPTIONS), "left");
    const uppercase = boolean("Uppercase", false);
    const italic = boolean("Italic", false);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
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
                  uppercase={uppercase}
                  italic={italic}
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
