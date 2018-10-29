// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import Radio from "../Radio";

import RadioGroup from "./index";

const Choices = {
  first: "first",
  second: "second",
  third: "third",
};

setAddon(chaptersAddon);

storiesOf("RadioGroup", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const label = text("Label", "Label");

    return {
      info: "RadioGroup",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <RadioGroup label={label} onChange={action("onChange")}>
                  <Radio label="Choice" value={Choices.first} />
                  <Radio label="Choice" value={Choices.second} />
                  <Radio label="Choice" value={Choices.third} />
                </RadioGroup>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With defaultValue", () => {
    const label = text("Label", "Label");
    const defaultValue = select(
      "defaultValue",
      [undefined, ...Object.values(Choices)],
      Choices.first,
    );

    return {
      info: "RadioGroup",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <RadioGroup label={label} defaultValue={defaultValue} onChange={action("onChange")}>
                  <Radio
                    label="Choice"
                    value={Choices.first}
                    info="Additional information for this choice"
                  />
                  <Radio
                    label="Choice"
                    value={Choices.second}
                    info="Additional information for this choice"
                  />
                  <Radio
                    label="Choice"
                    value={Choices.third}
                    info="Additional information for this choice"
                  />
                </RadioGroup>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const label = text("Label", "Label");
    const disabled = boolean("Disabled", false);
    const hasError = boolean("hasError", false);
    const dataTest = text("dataTest", "test");
    const defaultValue = select(
      "defaultValue",
      [undefined, ...Object.values(Choices)],
      Choices.first,
    );

    const info = text("Info", "Additional information for this choice");
    const childLabel = text("child label", "Choice");

    return {
      info: "Playground of RadioGroup",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <RadioGroup
                  label={label}
                  defaultValue={defaultValue}
                  disabled={disabled}
                  hasError={hasError}
                  dataTest={dataTest}
                  onChange={action("onChange")}
                >
                  <Radio label={childLabel} value={Choices.first} info={info} />
                  <Radio label={childLabel} value={Choices.second} info={info} />
                  <Radio label={childLabel} value={Choices.third} info={info} />
                </RadioGroup>
              ),
            },
          ],
        },
      ],
    };
  });
