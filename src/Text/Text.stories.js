// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

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

setAddon(chaptersAddon);

const customText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas dui dolor, ut vestibulum nisi sodales et. Suspendisse molestie felis sit amet dui viverra volutpat sed sit amet lacus. Quisque sapien dolor, blandit ut sodales id, dictum sit amet purus. Nulla facilisi. Nulla eleifend, sem sed fermentum feugiat, eros ligula semper nulla, sit amet semper purus risus nec lorem.";

storiesOf("Text", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Primary text", () => {
    const children = text("Text", customText);

    return {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Text>{children}</Text>,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Secondary text", () => {
    const children = text("Text", customText);

    return {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Text type="secondary">{children}</Text>,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Attention text", () => {
    const children = text("Text", customText);

    return {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Text type="attention">{children}</Text>,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Status text", () => {
    const children = text("Text", customText);

    return {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Text type="info">{children}</Text>,
            },
            {
              sectionFn: () => <Text type="success">{children}</Text>,
            },
            {
              sectionFn: () => <Text type="warning">{children}</Text>,
            },
            {
              sectionFn: () => <Text type="critical">{children}</Text>,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("White text", () => {
    const children = text("Text", customText);

    return {
      info:
        "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <div style={{ backgroundColor: "#46515e", padding: "20px" }}>
                  <Text type="white">{children}</Text>
                </div>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
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
                  dataTest={dataTest}
                  spaceAfter={spaceAfter}
                >
                  {children}
                </Text>
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
                <Text align="left">Lorem ipsum dolor sit amet</Text>
              </RenderInRtl>
            ),
          },
        ],
      },
    ],
  }));
