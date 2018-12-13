// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Stack from "../Stack";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";

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
  .addWithChapters("Expandable with custom description", () => {
    const showMore = boolean("showMore", false);

    return {
      info: "This is the playground configuration of this component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Tile
                  onClick={action("clicked")}
                  description={
                    <Stack justify="between" direction="row">
                      <Text>Mr. John Smith</Text>
                      <Text>20 kg</Text>
                    </Stack>
                  }
                >
                  This is example of expanded content
                  {showMore && (
                    <Text>
                      Etiam posuere lacus quis dolor. Mauris elementum mauris vitae tortor. Class
                      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                      hymenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                      per inceptos hymenaeos. Aenean id metus id velit ullamcorper pulvinar. Mauris
                      metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus.
                    </Text>
                  )}
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
  })
  .addWithChapters("RTL", () => ({
    info: "This is a preview of this component in RTL setup.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <RenderInRtl>
                <Tile
                  onClick={action("clicked")}
                  description={
                    <Stack justify="between" direction="row">
                      <Text>Mr. John Smith</Text>
                      <Text>20 kg</Text>
                    </Stack>
                  }
                >
                  This is example of expanded content
                </Tile>
              </RenderInRtl>
            ),
          },
        ],
      },
    ],
  }));
