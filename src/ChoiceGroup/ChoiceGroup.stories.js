// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";

import { LABEL_ELEMENTS, LABEL_SIZES } from "./consts";
import Radio from "../Radio";
import Checkbox from "../Checkbox";

import ChoiceGroup from "./index";

setAddon(chaptersAddon);

storiesOf("ChoiceGroup", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const label = text("Label", "What was the reason for your cancellation?");
    return {
      info: "Playground of ChoiceGroup",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ChoiceGroup label={label} onChange={action("onChange")}>
                  <Radio label="Reason one" value="one" />
                  <Radio label="Reason two" value="two" />
                  <Radio label="Reason three" value="three" />
                </ChoiceGroup>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Multiple", () => {
    const label = text("Label", "What was the reason for your cancellation?");
    return {
      info: "Playground of ChoiceGroup",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ChoiceGroup label={label} onChange={action("onChange")}>
                  <Checkbox label="Reason one" value="one" />
                  <Checkbox label="Reason two" value="two" />
                  <Checkbox label="Reason three" value="three" />
                </ChoiceGroup>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const dataTest = text("dataTest", "test");
    const label = text("Label", "What was the reason for your cancellation?");
    const labelSize = select("labelSize", Object.values(LABEL_SIZES), LABEL_SIZES.NORMAL);
    const labelElement = select("labelElement", Object.values(LABEL_ELEMENTS), LABEL_ELEMENTS.H4);
    const error = text("error", "Something is wrong");
    return {
      info: "Playground of ChoiceGroup",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ChoiceGroup
                  dataTest={dataTest}
                  label={label}
                  labelSize={labelSize}
                  labelElement={labelElement}
                  onChange={action("onChange")}
                  error={error}
                >
                  <Radio label="Reason one" value="one" />
                  <Radio label="Reason two" value="two" />
                  <Radio label="Reason three" value="three" />
                </ChoiceGroup>
              ),
            },
          ],
        },
      ],
    };
  });
