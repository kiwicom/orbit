// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, array, select } from "@storybook/addon-knobs/react";

import InputField from "../InputField";
import Select from "../Select";
import SIZES from "./consts";
import CountryFlag from "../CountryFlag";

import InputGroup from "./index";

setAddon(chaptersAddon);

storiesOf("InputGroup", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Date of birth", () => {
    const label = text("Label", "Date of birth");
    const flex = array("Flex", ["0 0 60px", "1 1 100%", "0 0 90px"]);
    const error = text("Error", undefined);
    const help = text("Help", undefined);

    const selectOptions = [
      { value: "January", label: "January" },
      { value: "February", label: "February" },
      { value: "March", label: "March" },
      { value: "April", label: "April" },
      { value: "May", label: "May" },
      { value: "June", label: "June" },
      { value: "July", label: "July" },
      { value: "August", label: "August" },
      { value: "September", label: "September" },
      { value: "October", label: "October" },
      { value: "November", label: "November" },
      { value: "December", label: "December" },
    ];
    const selectValue = select(
      "Select Value",
      [undefined].concat(...selectOptions.map(opt => opt.value)),
    );

    return {
      info: "Some description about this type of InputGroup in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputGroup
                  label={label}
                  flex={flex}
                  error={error}
                  help={help}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                >
                  <InputField placeholder="DD" />
                  <Select options={selectOptions} value={selectValue} placeholder="Month" />
                  <InputField placeholder="YYYY" />
                </InputGroup>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Phone number", () => {
    const label = text("Label", "Phone number");
    const flex = array("Flex", ["0 0 130px", "1 1 100%"]);
    const error = text("Error", undefined);
    const help = text("Help", undefined);

    const selectOptions = [{ value: 1, label: "+420" }, { value: 2, label: "+421" }];
    const selectValue = select(
      "Select Value",
      [undefined].concat(...selectOptions.map(opt => opt.value)),
    );

    const placeholder = text("Input Placeholder", "e.g. 123 456 789");
    const inputValue = text("Input Value", undefined);

    return {
      info: "Some description about this type of InputGroup in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputGroup
                  label={label}
                  flex={flex}
                  error={error}
                  help={help}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                >
                  <Select
                    options={selectOptions}
                    value={selectValue}
                    prefix={<CountryFlag code="cz" />}
                  />
                  <InputField placeholder={placeholder} maxLength={11} value={inputValue} />
                </InputGroup>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const label = text("Label", "Phone number");
    const flex = array("Flex", ["1 0 200px", "1 1 100%", "1 0 150px", "0 1 50%"]);
    const size = select("Size", Object.values(SIZES), SIZES.NORMAL);
    const error = text("Error", undefined);
    const help = text("Help", undefined);

    const selectOptions = [{ value: 1, label: "First item" }, { value: 2, label: "Second item" }];
    const selectValue = select(
      "Select Value",
      [undefined].concat(...selectOptions.map(opt => opt.value)),
    );

    const placeholder = text("Input Placeholder", "Placeholder");
    const inputValue = text("Input Value", undefined);

    return {
      info: "Some description about this type of InputGroup in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputGroup
                  label={label}
                  flex={flex}
                  error={error}
                  help={help}
                  size={size}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                >
                  <Select options={selectOptions} value={selectValue} />
                  <InputField placeholder={placeholder} value={inputValue} />
                  <Select options={selectOptions} value={selectValue} />
                  <InputField placeholder={placeholder} value={inputValue} />
                </InputGroup>
              ),
            },
          ],
        },
      ],
    };
  });
