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
    const url = text("URL", "https://kiwi.com");

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
    const newTab = boolean("Open in new tab?", false);
    const title = text("Title", "Primary link");

    return {
      title: "Primary link",
      info:
        "Link is used usually in the paragraph text to show that something navigates you to another location.",
      chapters: [
        {
          info:
            "You can choose between primary and secondary type and three different sizes. You can also define if you want to open the link in a new tab.",
          sections: [
            {
              sectionFn: () => (
                <TextLink
                  title={title}
                  newTab={newTab}
                  onClick={action("clicked")}
                  url={url}
                  type={type}
                  size={size}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Secondary link", () => {
    const url = text("URL", "https://kiwi.com");

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
      "secondary",
    );
    const newTab = boolean("Open in new tab?", true);
    const title = text("Text", "Secondary link which opens in new tab");
    return {
      title: "Secondary links",
      info:
        "Link is used usually in the paragraph text to show that something navigates you to another location.",
      chapters: [
        {
          info:
            "You can choose between primary and secondary type and three different sizes. You can also define if you want to open the link in a new tab.",
          sections: [
            {
              sectionFn: () => (
                <TextLink
                  title={title}
                  newTab={newTab}
                  onClick={action("clicked")}
                  url={url}
                  type={type}
                  size={size}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  });
