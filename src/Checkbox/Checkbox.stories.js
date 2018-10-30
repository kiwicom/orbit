// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";

import Checkbox from "./index";

setAddon(chaptersAddon);

storiesOf("CheckBox", module)
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
      info: "Checkbox needs only label and onChange by default.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Checkbox label={label} checked={checked} onChange={action("changed")} />
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
                <Checkbox label={label} value={value} info={info} onChange={action("changed")} />
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
    const dataTest = text("dataTest", "test");
    const name = text("name", "name");
    return {
      info: "Playground of Checkbox",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Checkbox
                  label={label}
                  value={value}
                  checked={checked}
                  disabled={disabled}
                  name={name}
                  hasError={hasError}
                  dataTest={dataTest}
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
