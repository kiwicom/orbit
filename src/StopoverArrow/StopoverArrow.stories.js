// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { select, text, withKnobs } from "@storybook/addon-knobs";

import STOPS from "./consts";

import StopoverArrow from "./";

setAddon(chaptersAddon);

storiesOf("StopoverArrow", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const stops = select("stops", Object.values(STOPS), STOPS.ZERO);
    const dataTest = text("dataTest", "test");

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <StopoverArrow stops={stops} dataTest={dataTest} />,
            },
          ],
        },
      ],
    };
  });
