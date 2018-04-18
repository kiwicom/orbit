// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";

import Heading from "./index";

setAddon(chaptersAddon);

const options = {
  allowSourceToggling: false,
  allowPropTablesToggling: false,
};

storiesOf("Heading", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Display heading", () => {
    const element = select(
      "Element",
      {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
      },
      "h1",
    );
    const size = select(
      "Size",
      {
        display: "display",
        large: "large",
        medium: "medium",
        small: "small",
      },
      "large",
    );
    const weight = select(
      "Weight",
      {
        medium: "medium",
        bold: "bold",
      },
      "bold",
    );
    const customTitle = text("Title", "Orbit design system");
    return {
      title: "Display heading",
      info: "Some description about this type of heading in general.",
      chapters: [
        {
          title: `Heading ${size}`,
          info:
            "Some description about where is the heading used and states describing how to not use it in general.",
          sections: [
            {
              sectionFn: () => (
                <Heading element={element} size={size} weight={weight}>
                  {customTitle}
                </Heading>
              ),
              options,
            },
          ],
        },
      ],
    };
  });
