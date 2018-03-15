// @flow

import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";

import Checkbox from "./index";

setAddon(chaptersAddon);

const options = {
  showSource: false,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: false,
};

storiesOf("Checkbox", module)
  .addDecorator(withKnobs)
  .addWithChapters("default", () => {
    const isChecked = boolean("isChecked", false);
    const label = text("Label", "Text label");

    return {
      info: "You can change props in knobs",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Checkbox label={label} checked={isChecked} onChange={action("changed")} />
              ),
              options,
            },
          ],
        },
      ],
    };
  });
