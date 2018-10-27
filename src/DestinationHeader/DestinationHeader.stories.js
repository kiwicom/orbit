// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text } from "@storybook/addon-knobs/react";
import styles from "@sambego/storybook-styles/dist/index";

import DestinationHeader from "./index";

setAddon(chaptersAddon);

storiesOf("DestinationHeader", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const destination = text("destination", "dubai_ae");
    const destinationName = text("destinationName", "Dubai");
    const dataTest = text("dataTest", "test");

    return {
      info:
        "DestinationHeader is a component providing better visual recognition of city you have chosen. It is placed on the result page and users can easily get back to the serch page by clicking on the back button",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <DestinationHeader
                  destination={destination}
                  destinationName={destinationName}
                  goBack={action("goBack")}
                  dataTest={dataTest}
                />
              ),
            },
          ],
        },
      ],
    };
  });
