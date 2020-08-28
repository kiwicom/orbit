// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, array, select } from "@storybook/addon-knobs";

import InputField from "../InputField";
import Select from "../Select";
import { SIZE_OPTIONS } from "./consts";
import CountryFlag from "../CountryFlag";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import InputGroup from "./index";

storiesOf("InputGroup", module)
  .add(
    "Date of birth",
    () => {
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
        [null].concat(...selectOptions.map(opt => opt.value)),
      );

      return (
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
      );
    },
    {
      info: "Some description about this type of InputGroup in general.",
    },
  )
  .add(
    "Phone number",
    () => {
      const flex = array("Flex", ["0 0 110px", "1 1 100%"]);
      const error = text("Error", "error");
      const help = text("Help", undefined);
      const selectOptions = [
        { value: 0, label: "Czech Republic (+420)" },
        { value: 1, label: "Slovak Republic (+421)" },
        { value: 2, label: "United States (+1)" },
      ];
      const selectValue = select(
        "Select Value",
        [null].concat(...selectOptions.map(opt => opt.value)),
        selectOptions[0].value,
      );
      const customValueText = text("customValueText", "+420");
      const placeholder = text("Input Placeholder", "e.g. 123 456 789");
      const inputValue = text("Input Value", undefined);

      return (
        <InputGroup
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
            customValueText={customValueText}
            prefix={<CountryFlag code="cz" />}
          />
          <InputField placeholder={placeholder} maxLength={11} value={inputValue} />
        </InputGroup>
      );
    },
    {
      info: "Some description about this type of InputGroup in general.",
    },
  )
  .add(
    "onChange behaviour",
    () => {
      const inputValue = text("Input Value", undefined);

      return (
        <div>
          <InputGroup label="Change in group" onChange={action("onChange a+b")}>
            <InputField placeholder="a" maxLength={11} value={inputValue} />
            <InputField placeholder="b" maxLength={11} value={inputValue} />
          </InputGroup>

          <InputGroup label="Change in inner inputs">
            <InputField
              placeholder="c"
              maxLength={11}
              value={inputValue}
              onChange={action("onChange c")}
            />
            <InputField
              placeholder="d"
              maxLength={11}
              value={inputValue}
              onChange={action("onChange d")}
            />
          </InputGroup>
        </div>
      );
    },
    {
      info: "Some description about this type of InputGroup in general.",
    },
  )
  .add(
    "Playground",
    () => {
      const label = text("Label", "Phone number");
      const flex = array("Flex", ["1 0 200px", "1 1 100%", "1 0 150px", "0 1 50%"]);
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
      const error = text("Error", undefined);
      const help = text("Help", undefined);

      const selectOptions = [
        { value: 1, label: "First item" },
        { value: 2, label: "Second item" },
      ];
      const selectValue = select(
        "Select Value",
        [null].concat(...selectOptions.map(opt => opt.value)),
      );
      const placeholder = text("Input Placeholder", "Placeholder");
      const inputValue = text("Input Value", undefined);
      const dataTest = text("dataTest", "test");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);

      return (
        <InputGroup
          label={label}
          flex={flex}
          error={error}
          help={help}
          size={size}
          onChange={action("onChange")}
          onFocus={action("onFocus")}
          onBlur={action("onBlur")}
          dataTest={dataTest}
          spaceAfter={spaceAfter}
        >
          <Select options={selectOptions} value={selectValue} />
          <InputField placeholder={placeholder} value={inputValue} />
          <Select options={selectOptions} value={selectValue} />
          <InputField placeholder={placeholder} value={inputValue} />
        </InputGroup>
      );
    },
    {
      info: "Some description about this type of InputGroup in general.",
    },
  )
  .add(
    "RTL",
    () => {
      const flex = array("Flex", ["0 0 60px", "1 1 100%", "0 0 90px"]);
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
        [null].concat(...selectOptions.map(opt => opt.value)),
      );
      return (
        <RenderInRtl>
          <InputGroup
            flex={flex}
            label="My label"
            onChange={action("onChange")}
            onFocus={action("onFocus")}
            onBlur={action("onBlur")}
          >
            <InputField placeholder="DD" />
            <Select options={selectOptions} value={selectValue} placeholder="Month" />
            <InputField placeholder="YYYY" />
          </InputGroup>
        </RenderInRtl>
      );
    },
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
