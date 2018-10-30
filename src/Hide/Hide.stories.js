// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";

import ChevronLeft from "../icons/ChevronLeft";

import Hide from "./";

setAddon(chaptersAddon);

storiesOf("Hide", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const largeDesktop = boolean("largeDesktop", false);
    const desktop = boolean("desktop", false);
    const tablet = boolean("tablet", false);
    const largeMobile = boolean("largeMobile", false);
    const mediumMobile = boolean("mediumMobile", false);
    const smallMobile = boolean("smallMobile", false);

    const on = [
      largeDesktop && "largeDesktop",
      desktop && "desktop",
      tablet && "tablet",
      largeMobile && "largeMobile",
      mediumMobile && "mediumMobile",
      smallMobile && "smallMobile",
    ].filter(item => typeof item === "string");

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Hide on={on}>
                  <ChevronLeft />
                </Hide>
              ),
            },
          ],
        },
      ],
    };
  });
