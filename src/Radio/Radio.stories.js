// @flow

import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";

import Radio from "./index";

setAddon(chaptersAddon);

const options = {
  showSource: false,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: false,
};

storiesOf("Radio", module)
  .addDecorator(withKnobs)
  .addWithChapters("default", () => {
    const isChecked = boolean("isChecked", false);
    const label = text("Label", "Text label");
    const isDisabled = boolean("isDisabled", false);

    return {
      info: "You can change props in knobs",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Radio
                  label={label}
                  checked={isChecked}
                  disabled={isDisabled}
                  onChange={action("changed")}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  });
