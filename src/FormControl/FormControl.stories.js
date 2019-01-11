// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text } from "@storybook/addon-knobs/react";

import InputField from "../InputField";

import FormControl from "./";

setAddon(chaptersAddon);

storiesOf("FormControl", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const error = text("error", "Something is wrong");
    const help = text("help", "Someting for the help");

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <FormControl>
                  <InputField label="Label" placeholder="My InputField" error={error} />
                  <InputField placeholder="My InputField" help={help} />
                </FormControl>
              ),
            },
          ],
        },
      ],
    };
  });
