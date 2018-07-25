// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, select } from "@storybook/addon-knobs/react";
import styles from "@sambego/storybook-styles/dist/index";

import { SIZE_OPTIONS, NAMES } from "./consts";

import Illustration from "./index";

setAddon(chaptersAddon);

storiesOf("Illustration", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
    const name = select("Name", Object.values(NAMES), "Accommodation");

    return {
      info: "Explore our new set of illustrations for Kiwi.com.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Illustration size={size} name={name} />,
            },
          ],
        },
      ],
    };
  });
