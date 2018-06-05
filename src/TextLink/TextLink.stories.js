// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import TextLink from "./index";

setAddon(chaptersAddon);

const options = {
  allowSourceToggling: false,
  allowPropTablesToggling: false,
};

storiesOf("TextLink", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Primary link", () => {
    const href = text("href", "https://kiwi.com");

    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    const newTab = boolean("New tab", false);
    const title = text("Title", "Primary link");

    return {
      info:
        "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <TextLink
                  newTab={newTab}
                  onClick={action("clicked")}
                  href={href}
                  type="primary"
                  size={size}
                >
                  {title}
                </TextLink>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Secondary link", () => {
    const href = text("href", "https://kiwi.com");

    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    const newTab = boolean("New tab", false);
    const title = text("Title", "Secondary link");

    return {
      info:
        "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <TextLink
                  newTab={newTab}
                  onClick={action("clicked")}
                  href={href}
                  type="secondary"
                  size={size}
                >
                  {title}
                </TextLink>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const href = text("href", "https://kiwi.com");

    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    const type = select(
      "Type",
      {
        primary: "primary",
        secondary: "secondary",
      },
      "primary",
    );
    const newTab = boolean("New tab", true);
    const title = text("Text", "Custom link");
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <TextLink
                  newTab={newTab}
                  onClick={action("clicked")}
                  href={href}
                  type={type}
                  size={size}
                >
                  {title}
                </TextLink>
              ),
              options,
            },
          ],
        },
      ],
    };
  });
