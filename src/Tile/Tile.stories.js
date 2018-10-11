// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";

import Tile from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Tile", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const title = text("Title", "Urgent information");
    return {
      info: "This is the default configuration of this component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Tile onClick={action("clicked")} title={title} />,
            },
          ],
        },
      ],
    };
  })

  .addWithChapters("Expandable", () => {
    const title = text("Title", "Expandable");
    const description = text(
      "Description",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    );
    const Icon = getIcon(getIcons("Airplane"));
    return {
      info: "This is the default configuration of this component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Tile
                  onClick={action("clicked")}
                  icon={Icon && <Icon />}
                  title={title}
                  description={description}
                >
                  This is example of expanded content
                </Tile>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const href = text("Href", "https://www.kiwi.com/");
    const title = text("Title", "Tile with title");
    const external = boolean("External", false);
    const Icon = getIcon(getIcons("Airplane"));
    const description = text(
      "Description",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    );
    const dataTest = text("dataTest", "test");

    return {
      info: "This is the default configuration of this component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Tile
                  href={href}
                  onClick={action("clicked")}
                  icon={Icon && <Icon />}
                  title={title}
                  description={description}
                  external={external}
                  dataTest={dataTest}
                />
              ),
            },
          ],
        },
      ],
    };
  });
