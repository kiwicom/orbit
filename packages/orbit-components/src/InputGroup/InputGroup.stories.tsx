import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Stack from "../Stack";
import InputField from "../InputField";
import Select from "../Select";
import CountryFlag from "../CountryFlag";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import InputGroup from ".";

type InputGroupPropsAndCustomArgs = React.ComponentProps<typeof InputGroup> & {
  inputValue?: string | number;
  placeholder?: string;
  selectValue?: string | number;
  errorGroup?: string;
  helpGroup?: string;
  errorSingleField?: string;
  helpSingleField?: string;
};

const meta: Meta<InputGroupPropsAndCustomArgs> = {
  title: "InputGroup",
  component: InputGroup,

  parameters: {
    controls: {
      exclude: ["onChange", "onFocus", "onBlur", "onBlurGroup", "size"],
    },
  },

  args: {
    error: "",
    help: "",
    helpClosable: true,
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
    onBlurGroup: action("onBlurGroup"),
  },

  argTypes: {
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<InputGroupPropsAndCustomArgs>;

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

export const DateOfBirth: Story = {
  render: ({ error, help, selectValue, ...args }) => (
    <InputGroup {...args}>
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
  ),

  args: {
    label: "Date of birth",
    flex: ["0 0 60px", "1 1 100%", "0 0 90px"],
    selectValue: selectOptionsMonths[0].value,
  },

  argTypes: {
    selectValue: {
      options: selectOptionsMonths.map(opt => opt.value),
      control: {
        type: "select",
      },
    },
  },
};

const selectOptionsPhoneNumber = [
  { value: 0, label: "Czech Republic (+420)", code: "cz" },
  { value: 1, label: "Slovak Republic (+421)", code: "sk" },
  { value: 2, label: "United States (+1)", code: "us" },
];

export const PhoneNumber: Story = {
  render: ({ error, help, selectValue, placeholder, inputValue, ...args }) => {
    const countryFlagCode = selectOptionsPhoneNumber.filter(
      option => option.value === selectValue,
    )[0].code;

    return (
      <InputGroup {...args}>
        <Select
          options={selectOptionsPhoneNumber}
          value={selectValue}
          prefix={<CountryFlag code={countryFlagCode} />}
          error={error}
          help={help}
        />
        <InputField placeholder={placeholder} maxLength={11} value={inputValue} />
      </InputGroup>
    );
  },

  args: {
    flex: ["0 0 250px", "1 1 100%"],
    selectValue: selectOptionsPhoneNumber[0].value,
    placeholder: "e.g. 123 456 789",
    inputValue: "",
  },

  argTypes: {
    selectValue: {
      options: selectOptionsPhoneNumber.map(opt => opt.value),
      control: {
        type: "select",
      },
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

export const Error: Story = {
  render: ({ error, selectValue, ...args }) => (
    <InputGroup {...args}>
      <InputField placeholder="DD" error={error} />
      <Select
        options={selectOptionsError}
        value={selectValue}
        placeholder="Month"
        error="Something went wrong on month field"
      />
      <InputField placeholder="YYYY" />
    </InputGroup>
  ),

  parameters: {
    controls: {
      exclude: ["onChange", "onFocus", "onBlur", "onBlurGroup", "size", "help", "helpClosable"],
    },
  },

  args: {
    label: "Label",
    flex: ["0 0 60px", "1 1 100%", "0 0 90px"],
    selectValue: selectOptionsError[0].value,
    error: "Something went wrong on day field",
  },

  argTypes: {
    selectValue: {
      options: selectOptionsError.map(opt => opt.value),
      control: {
        type: "select",
      },
    },
  },
};

export const ValidationApproaches: Story = {
  render: ({ inputValue, errorGroup, helpGroup, errorSingleField, helpSingleField }) => (
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

      <InputGroup label="Events and states on children" error={errorGroup} help={helpGroup}>
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
  ),

  parameters: {
    controls: {
      exclude: [
        "onChange",
        "onFocus",
        "onBlur",
        "onBlurGroup",
        "error",
        "help",
        "helpClosable",
        "size",
        "spaceAfter",
      ],
    },
  },

  args: {
    inputValue: "",
    errorGroup: "Something went wrong on day field",
    helpGroup: "",
    errorSingleField: "Something went wrong on day field",
    helpSingleField: "",
  },
};

export const OnChangeBehavior: Story = {
  render: ({ inputValue }) => (
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
  ),

  parameters: {
    controls: {
      exclude: [
        "onChange",
        "onFocus",
        "onBlur",
        "onBlurGroup",
        "error",
        "help",
        "helpClosable",
        "size",
        "spaceAfter",
      ],
    },
  },

  args: {
    inputValue: "",
  },
};

export const Disabled: Story = {
  render: args => (
    <InputGroup {...args}>
      <InputField placeholder="a" maxLength={11} />
      <InputField placeholder="b" maxLength={11} />
    </InputGroup>
  ),

  args: {
    label: "Disabled",
    disabled: true,
  },
};

const selectOptionsPlayground = [
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
];

export const Playground: Story = {
  render: ({ error, help, selectValue, placeholder, inputValue, ...args }) => (
    <InputGroup {...args}>
      <Select options={selectOptionsPlayground} value={selectValue} error={error} help={help} />
      <InputField placeholder={placeholder} value={inputValue} />
      <Select options={selectOptionsPlayground} value={selectValue} />
      <InputField placeholder={placeholder} value={inputValue} />
    </InputGroup>
  ),

  args: {
    label: "Label",
    flex: ["1 0 200px", "1 1 100%", "1 0 150px", "0 1 50%"],
    selectValue: selectOptionsPlayground[0].value,
    placeholder: "Placeholder",
    inputValue: "",
    spaceAfter: SPACINGS_AFTER.MEDIUM,
    disabled: false,
  },

  argTypes: {
    selectValue: {
      options: selectOptionsPlayground.map(opt => opt.value),
      control: {
        type: "select",
      },
    },
  },
};

export const Rtl: Story = {
  render: ({ selectValue, error, help, ...args }) => (
    <RenderInRtl>
      <InputGroup {...args}>
        <InputField placeholder="DD" help={help} error={error} />
        <Select options={selectOptionsMonths} value={selectValue} placeholder="Month" />
        <InputField placeholder="YYYY" />
      </InputGroup>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    label: "Date of birth",
    flex: ["0 0 60px", "1 1 100%", "0 0 90px"],
    selectValue: selectOptionsMonths[0].value,
  },

  argTypes: {
    selectValue: {
      options: selectOptionsMonths.map(opt => opt.value),
      control: {
        type: "select",
      },
    },
  },
};
