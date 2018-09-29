// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { action } from "@storybook/addon-actions";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, number, select, boolean } from "@storybook/addon-knobs";

import { SIZE_OPTIONS } from "../InputField/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import InputStepper from "./index";

setAddon(chaptersAddon);

storiesOf("InputStepper", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )

  .addWithChapters("Default", () => ({
    info: "Some description about this type of InputStepper in general.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <InputStepper onChange={action("onChange")} />,
          },
        ],
      },
    ],
  }))

  .addWithChapters("With help", () => {
    const label = text("Label", "Aduls");
    const help = text("help", "You need to enter count of adults");
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);

    return {
      info: "Here you can try InputStepper component with additional functionality.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputStepper
                  label={label}
                  size={size}
                  help={help}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With different size", () => {
    const label = text("Label", "Label");
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);

    return {
      info: "Here you can try InputStepper component with additional functionality.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputStepper
                  label={label}
                  size={size}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const min = number("minValue", 1);
    const max = number("maxValue", 10);
    const step = number("step", 2);
    const defaultValue = number("defaultValue", 4);
    const label = text("Label", "Label");
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
    const help = text("Help", undefined);
    const name = text("Name", "name");
    const error = text("Error", "Error message (explain how to solve it)");
    const disabled = boolean("disabled", false);
    const required = boolean("required", false);
    const dataTest = text("dataTest", "test");
    return {
      info: "Some description about this type of InputStepper in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputStepper
                  label={label}
                  defaultValue={defaultValue}
                  size={size}
                  step={step}
                  error={error}
                  help={help}
                  name={name}
                  maxValue={max}
                  minValue={min}
                  disabled={disabled}
                  required={required}
                  dataTest={dataTest}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("RTL", () => ({
    info: "This is a preview of this component in RTL setup.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <RenderInRtl>
                <InputStepper label="My label" />
              </RenderInRtl>
            ),
          },
        ],
      },
    ],
  }));
