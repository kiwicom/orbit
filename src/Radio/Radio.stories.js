// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";

import Radio from "./index";

setAddon(chaptersAddon);

storiesOf("Radio", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const label = text("Label", "Label");
    const checked = boolean("Checked", false);
    return {
      info: "Radio needs only label and onChange by default.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Radio label={label} checked={checked} onChange={action("changed")} />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With help", () => {
    const label = text("Label", "Label");
    const value = text("Value", "value");
    const info = text("Info", "Additional information to this choice");
    return {
      info: "Additionally you can add info to this component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Radio label={label} value={value} info={info} onChange={action("changed")} />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const label = text("Label", "Label");
    const value = text("Value", "value");
    const checked = boolean("Checked", true);
    const disabled = boolean("Disabled", true);
    const hasError = boolean("hasError", false);
    const info = text("Info", "Additional information for this choice");
    return {
      info: "Playground of Radio",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Radio
                  label={label}
                  value={value}
                  checked={checked}
                  disabled={disabled}
                  hasError={hasError}
                  info={info}
                  onChange={action("changed")}
                />
              ),
            },
          ],
        },
      ],
    };
  });
