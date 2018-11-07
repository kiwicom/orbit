// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import TYPE_OPTIONS from "./consts";
import * as Icons from "../icons";

import TextLink from "./index";

setAddon(chaptersAddon);

const validate = rel => (rel !== undefined && rel !== "" ? rel : undefined);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

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
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Link with icon", () => {
    const href = text("Href", "https://kiwi.com");
    const title = text("Title", "TextLink with icon");
    const Icon = getIcon(getIcons("ChevronRight"));

    return {
      info:
        "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <TextLink onClick={action("clicked")} href={href} icon={Icon && <Icon />}>
                  {title}
                </TextLink>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const href = text("Href", "https://kiwi.com");
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.SECONDARY);
    const external = boolean("External", true);
    const title = text("Text", "Custom link");
    const rel = text("Rel", undefined);
    const Icon = getIcon(getIcons("ChevronRight"));
    const dataTest = text("dataTest", "test");

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
                  icon={Icon && <Icon />}
                  dataTest={dataTest}
                >
                  {title}
                </TextLink>
              ),
            },
          ],
        },
      ],
    };
  });
