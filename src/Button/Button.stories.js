// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import Typography from "../Typography";
import Airplane from "../icons/Airplane";

import Button from "./index";

setAddon(chaptersAddon);

const options = {
  showSource: false,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: false,
};

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addWithChapters("Button types", () => {
    const type = select(
      "Type",
      {
        primary: "primary",
        secondary: "secondary",
      },
      "primary",
    );
    const label = text("Label", "Hello Button");
    return {
      info:
        "Examples of all possible buttons, you can easily change button type and state in knobs.",

      chapters: [
        {
          sections: [
            {
              subtitle: "small size",
              sectionFn: () => (
                <Button
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size="small"
                  title={label}
                  type={type}
                />
              ),
              options,
            },
            {
              subtitle: "normal size",
              sectionFn: () => (
                <Button
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size="normal"
                  title={label}
                  type={type}
                />
              ),
              options,
            },
            {
              subtitle: "large size",
              sectionFn: () => (
                <Button
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size="large"
                  title={label}
                  type={type}
                />
              ),
              options,
            },
            {
              subtitle: "Typography children",
              sectionFn: () => (
                <Button
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size="large"
                  type={type}
                >
                  <Typography type="primary" variant="bold">
                    Typo children
                  </Typography>
                  <Airplane fill="#F2473F" size="32" />
                </Button>
              ),
              options,
            },
          ],
        },
      ],
    };
  });
