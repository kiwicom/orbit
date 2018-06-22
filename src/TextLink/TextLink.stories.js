// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import TYPE_OPTIONS from "./consts";
import TextLink from "./TextLink";

setAddon(chaptersAddon);

const validate = rel => (rel !== undefined && rel !== "" ? rel : undefined);

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
    const href = text("Href", "https://kiwi.com");
    const external = boolean("External", false);
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
                  external={external}
                  onClick={action("clicked")}
                  href={href}
                  type="primary"
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
    const href = text("Href", "https://kiwi.com");
    const external = boolean("External", false);
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
                  external={external}
                  onClick={action("clicked")}
                  href={href}
                  type="secondary"
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
    const href = text("Href", "https://kiwi.com");
    const type = select("Type", Object.values(TYPE_OPTIONS));
    const external = boolean("External", true);
    const title = text("Text", "Custom link");
    const rel = text("Rel", undefined);

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <TextLink
                  external={external}
                  onClick={action("clicked")}
                  href={href}
                  type={type}
                  rel={validate(rel)}
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
