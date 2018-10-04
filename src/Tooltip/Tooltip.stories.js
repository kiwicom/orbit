// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import { SIZE_OPTIONS } from "./consts";
import Stack from "../Stack";
import Alert from "../Alert";
import TextLink from "../TextLink";
import Tile from "../Tile";

import Tooltip from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Tooltip", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Tooltip on inline element", () => {
    const content = text(
      "content",
      "Write your text here. If it’s longer than three lines though, consider format your content in some more sctructured way.",
    );
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Alert icon={<Icons.Airplane />} title="Lorem ipsum dolor sit amet">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo,
                  vulputate eget mollis sed, tempor sed magna.
                  <Tooltip content={content}>
                    <TextLink>Cras elementum.</TextLink>
                  </Tooltip>{" "}
                  Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus
                  malesuada congue. Sed vel lectus. Donec odio tempus molestie, porttitor ut,
                  iaculis quis, sem.
                </Alert>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Tooltip on block element", () => {
    const content = text(
      "content",
      "Write your text here. If it’s longer than three lines though, consider format your content in some more sctructured way.",
    );
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Stack direction="row">
                  <Tooltip content={content} block>
                    <Tile title="Lorem ipsum" />
                  </Tooltip>
                  <Tile title="Lorem ipsum" />
                </Stack>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const content = text(
      "content",
      "Write your text here. If it’s longer than three lines though, consider format your content in some more sctructured way.",
    );
    const block = boolean("block", true);
    const Icon = getIcon(getIcons("Airplane"));
    const size = select("size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Tooltip size={size} content={content} block={block}>
                  <Icon />
                </Tooltip>
              ),
            },
          ],
        },
      ],
    };
  });
