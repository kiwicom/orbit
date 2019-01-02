// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, select } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Separator from "./index";

setAddon(chaptersAddon);

storiesOf("Separator", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <Separator />,
          },
        ],
      },
    ],
  }))
  .addWithChapters("Playground", () => {
    const spaceAfter = select(
      "spaceAfter",
      [undefined, ...Object.values(SPACINGS_AFTER)],
      SPACINGS_AFTER.LARGEST,
    );
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Separator spaceAfter={spaceAfter} />,
            },
          ],
        },
      ],
    };
  });
