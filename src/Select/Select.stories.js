// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { object, select, text, boolean, withKnobs } from "@storybook/addon-knobs/react";

import Airplane from "../icons/Airplane";
import SIZE_OPTIONS from "./consts";
import CountryFlag from "../CountryFlag";
import { CODES } from "../CountryFlag/consts";

import Select from "./index";

setAddon(chaptersAddon);

const objectOptions = [
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
  { value: 3, label: "Third item" },
];

const groupOptions = [
  { value: 1, label: "First item", group: "Group One" },
  { value: 2, label: "Second item", group: "Group One" },
  { value: 3, label: "Third item", group: "Group Two" },
];

const mixedOptions = [
  { value: 1, label: "First item", group: "Group One" },
  { value: 2, label: "Second item" },
  { value: 3, label: "Third item", group: "Group Two" },
];

storiesOf("Select", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <Select options={objectOptions} onChange={action("onChange")} />,
          },
        ],
      },
    ],
  }))
  .addWithChapters("With prefix", () => ({
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Select
                label="Select box (with prefix)"
                options={objectOptions}
                onChange={action("onChange")}
                prefix={<Airplane color="secondary" />}
              />
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("With CountryFlag prefix", () => {
    const code = select("Code", Object.values(CODES), CODES.ANYWHERE);
    return {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Select
                  label="Select box (with prefix)"
                  options={objectOptions}
                  onChange={action("onChange")}
                  prefix={<CountryFlag code={code} />}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With placeholder", () => {
    const placeholder = text("Placeholder", "Select value from list");
    return {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Select
                  label="Select box (with placeholder)"
                  placeholder={placeholder}
                  options={objectOptions}
                  onChange={action("onChange")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With help message", () => ({
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Select
                label="Select box (with help text)"
                options={objectOptions}
                help="Most common choice is Booking cancellation"
                onChange={action("onChange")}
              />
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("With error message", () => ({
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Select
                label="Select box (with error text)"
                options={objectOptions}
                error={<div>You need to select some value.</div>}
                onChange={action("onChange")}
              />
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("With small size", () => ({
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Select
                label="Select box (small size)"
                size="small"
                options={objectOptions}
                onChange={action("onChange")}
              />
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("With groups", () => {
    const options = object("Options", groupOptions);
    return {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Select options={options} onChange={action("onChange")} />,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With mixed options", () => {
    const options = object("Options", mixedOptions);
    return {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Select options={options} onChange={action("onChange")} />,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const placeholder = text("Placeholder", "Select value from list");
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
    const disabled = boolean("Disabled", false);
    const option = object("Options", objectOptions);
    const value = select("Value", [undefined].concat(...objectOptions.map(opt => opt.value)));
    const dataTest = text("dataTest", "test");

    return {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Select
                  placeholder={placeholder}
                  size={size}
                  options={option}
                  disabled={disabled}
                  label={text("Label")}
                  onChange={action("onChange")}
                  onBlur={action("onBlur")}
                  onFocus={action("onFocus")}
                  dataTest={dataTest}
                  value={value}
                />
              ),
            },
          ],
        },
      ],
    };
  });
