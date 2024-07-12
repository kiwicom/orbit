import * as React from "react";
import { action } from "@storybook/addon-actions";

import Stack from "../Stack";
import InputField from "../InputField";
import Select from "../Select";
import { SIZE_OPTIONS } from "./consts";
import CountryFlag from "../CountryFlag";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import InputGroup from ".";

export default {
  title: "InputGroup",
};

const selectOptionsMonths = [
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

export const DateOfBirth = ({ label, flex, error, help, selectValue }) => {
  return (
    <InputGroup
      label={label}
      flex={flex}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onBlurGroup={action("onBlurGroup")}
    >
      <InputField
        placeholder="DD"
        error={error}
        help={help}
        onBlur={action("onBlurIn")}
        onFocus={action("onFocusIn")}
        onChange={action("onChangeIn")}
      />
      <Select options={selectOptionsMonths} value={selectValue} placeholder="Month" />
      <InputField placeholder="YYYY" />
    </InputGroup>
  );
};

DateOfBirth.story = {
  name: "Date of birth",

  parameters: {
    info: "Some description about this type of InputGroup in general.",
  },
};

DateOfBirth.args = {
  label: "Date of birth",
  flex: ["0 0 60px", "1 1 100%", "0 0 90px"],
  error: "",
  help: "",
  selectValue: selectOptionsMonths[0].value,
};

DateOfBirth.argTypes = {
  selectValue: {
    options: selectOptionsMonths.map(opt => opt.value),
    control: {
      type: "select",
    },
  },
};

const selectOptionsPhoneNumber = [
  { value: 0, label: "Czech Republic (+420)" },
  { value: 1, label: "Slovak Republic (+421)" },
  { value: 2, label: "United States (+1)" },
];

export const PhoneNumber = ({
  flex,
  error,
  help,
  selectValue,
  customValueText,
  placeholder,
  inputValue,
}) => {
  return (
    <InputGroup
      flex={flex}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
    >
      <Select
        options={selectOptionsPhoneNumber}
        value={selectValue}
        customValueText={customValueText}
        prefix={<CountryFlag code="cz" />}
        error={error}
        help={help}
      />
      <InputField placeholder={placeholder} maxLength={11} value={inputValue} />
    </InputGroup>
  );
};

PhoneNumber.story = {
  name: "Phone number",

  parameters: {
    info: "Some description about this type of InputGroup in general.",
  },
};

PhoneNumber.args = {
  flex: ["0 0 110px", "1 1 100%"],
  error: "",
  help: "",
  selectValue: selectOptionsPhoneNumber[0].value,
  customValueText: "+420",
  placeholder: "e.g. 123 456 789",
  inputValue: "",
};

PhoneNumber.argTypes = {
  selectValue: {
    options: selectOptionsPhoneNumber.map(opt => opt.value),
    control: {
      type: "select",
    },
  },
};

const selectOptionsError = [
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
export const Error = ({ label, flex, error, help, selectValue }) => {
  return (
    <InputGroup
      label={label}
      flex={flex}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
    >
      <InputField placeholder="DD" error={error} help={help} />
      <Select
        options={selectOptionsError}
        value={selectValue}
        placeholder="Month"
        error="Something went wrong on month field"
        help={help}
      />
      <InputField placeholder="YYYY" error="Something went wrong on year field" help={help} />
    </InputGroup>
  );
};

Error.args = {
  label: "Label",
  flex: ["0 0 60px", "1 1 100%", "0 0 90px"],
  error: "Something went wrong on day field",
  help: "",
  selectValue: selectOptionsError[0].value,
};

Error.argTypes = {
  selectValue: {
    options: selectOptionsError.map(opt => opt.value),
    control: {
      type: "select",
    },
  },
};

export const ValidationApproaches = ({
  inputValue,
  errorGroup,
  helpGroup,
  errorSingleField,
  helpSingleField,
}) => {
  return (
    <Stack direction="column">
      <InputGroup
        label="Events and states on group"
        onChange={action("onChange Group a+b")}
        onFocus={action("onFocus Group a+b")}
        onBlur={action("onBlur Group a+b")}
        error={errorGroup}
        help={helpGroup}
      >
        <InputField placeholder="a" maxLength={11} value={inputValue} />
        <InputField placeholder="b" maxLength={11} value={inputValue} />
      </InputGroup>

      <InputGroup label="Events andd states on children" error={errorGroup}>
        <InputField
          placeholder="c"
          maxLength={11}
          value={inputValue}
          error={errorSingleField}
          help={helpSingleField}
          onChange={action("onChange c")}
          onFocus={action("onFocus c")}
          onBlur={action("onBlur c")}
        />
        <InputField
          placeholder="d"
          maxLength={11}
          value={inputValue}
          error={errorSingleField}
          help={helpSingleField}
          onChange={action("onChange d")}
          onFocus={action("onFocus d")}
          onBlur={action("onBlur d")}
        />
      </InputGroup>
    </Stack>
  );
};

ValidationApproaches.story = {
  name: "Validation approches",

  parameters: {
    info: "Some description about this type of InputGroup in general.",
  },
};

ValidationApproaches.args = {
  inputValue: "",
  errorGroup: "Something went wrong on day field",
  helpGroup: "",
  errorSingleField: "Something went wrong on day field",
  helpSingleField: "",
};

export const OnChangeBehavior = ({ inputValue }) => {
  return (
    <Stack direction="column">
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
    </Stack>
  );
};

OnChangeBehavior.story = {
  name: "onChange behaviour",

  parameters: {
    info: "Some description about this type of InputGroup in general.",
  },
};

OnChangeBehavior.args = {
  inputValue: "",
};

export const Disabled = () => {
  return (
    <InputGroup disabled label="Disabled">
      <InputField placeholder="a" maxLength={11} />
      <InputField placeholder="b" maxLength={11} />
    </InputGroup>
  );
};

Disabled.story = {
  name: "Disabled",
};

const selectOptionsPlayground = [
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
];

export const Playground = ({
  label,
  flex,
  size,
  error,
  help,
  selectValue,
  placeholder,
  inputValue,
  dataTest,
  spaceAfter,
}) => {
  return (
    <InputGroup
      label={label}
      flex={flex}
      size={size}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    >
      <Select options={selectOptionsPlayground} value={selectValue} error={error} help={help} />
      <InputField placeholder={placeholder} value={inputValue} />
      <Select options={selectOptionsPlayground} value={selectValue} />
      <InputField placeholder={placeholder} value={inputValue} />
    </InputGroup>
  );
};

Playground.story = {
  parameters: {
    info: "Some description about this type of InputGroup in general.",
  },
};

Playground.args = {
  label: "Phone number",
  flex: ["1 0 200px", "1 1 100%", "1 0 150px", "0 1 50%"],
  size: SIZE_OPTIONS.NORMAL,
  error: "",
  help: "",
  selectValue: selectOptionsPlayground[0].value,
  placeholder: "Placeholder",
  inputValue: "",
  dataTest: "test",
  spaceAfter: SPACINGS_AFTER.MEDIUM,
};

Playground.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
  selectValue: {
    options: selectOptionsPlayground.map(opt => opt.value),
    control: {
      type: "select",
    },
  },
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
};

export const Rtl = ({ flex, selectValue, error, help, label }) => {
  return (
    <RenderInRtl>
      <InputGroup
        flex={flex}
        onChange={action("onChange")}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
        label={label}
      >
        <InputField placeholder="DD" help={help} error={error} />
        <Select options={selectOptionsMonths} value={selectValue} placeholder="Month" />
        <InputField placeholder="YYYY" />
      </InputGroup>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

Rtl.args = {
  flex: ["0 0 60px", "1 1 100%", "0 0 90px"],
  selectValue: selectOptionsMonths[0].value,
  error: "",
  help: "",
  label: "Phone number",
};

Rtl.argTypes = {
  selectValue: {
    options: selectOptionsMonths.map(opt => opt.value),
    control: {
      type: "select",
    },
  },
};
