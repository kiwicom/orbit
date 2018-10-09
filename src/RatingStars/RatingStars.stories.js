// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, number, text, select } from "@storybook/addon-knobs/react";

import MAX_STARS from "./consts";
import { ICON_SIZES } from "../Icon/consts";

import RatingStars from "./";

setAddon(chaptersAddon);

storiesOf("RatingStars", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const rating = number("rating", 4.4, { min: 0, max: MAX_STARS });
    const size = select("Size", [undefined, ...Object.values(ICON_SIZES)]);
    const dataTest = text("dataTest", "test");

    return {
      info: "Playground of RatingStars",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <RatingStars rating={rating} size={size} dataTest={dataTest} />,
            },
          ],
        },
      ],
    };
  });
