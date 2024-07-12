import * as React from "react";
import { action } from "@storybook/addon-actions";

import Airplane from "../icons/Airplane";
import CountryFlag from "../CountryFlag";
import { CODES } from "../CountryFlag/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import Select from ".";

const objectOptions = [
  { value: 0, label: "Zero-th item" },
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
  { value: 3, label: "Third item" },
];

export default {
  title: "Select",
};

export const Default = () => <Select options={objectOptions} onChange={action("onChange")} />;

Default.story = {
  parameters: {
    info: "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithPrefix = () => (
  <Select
    label="Select box (with prefix)"
    options={objectOptions}
    onChange={action("onChange")}
    prefix={<Airplane color="secondary" />}
  />
);

WithPrefix.story = {
  name: "With prefix",

  parameters: {
    info: "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithCountryFlagPrefix = ({ code }) => {
  return (
    <Select
      label="Select box (with prefix)"
      options={objectOptions}
      onChange={action("onChange")}
      prefix={<CountryFlag code={code} />}
    />
  );
};

WithCountryFlagPrefix.story = {
  name: "With CountryFlag prefix",

  parameters: {
    info: "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

WithCountryFlagPrefix.args = {
  code: CODES.ANYWHERE,
};

WithCountryFlagPrefix.argTypes = {
  code: {
    options: Object.values(CODES),
    control: {
      type: "select",
    },
  },
};

export const WithLongLabel = ({ inlineLabel }) => {
  return (
    <Select
      label="Select box (with long label)"
      options={objectOptions}
      onChange={action("onChange")}
      inlineLabel={inlineLabel}
    />
  );
};

WithLongLabel.story = {
  name: "With long label",

  parameters: {
    info: "Long labels truncate automatically when inline.",
  },
};

WithLongLabel.args = {
  inlineLabel: true,
};

export const WithPlaceholder = ({ placeholder }) => {
  return (
    <Select
      label="Select box (with placeholder)"
      placeholder={placeholder}
      options={objectOptions}
      onChange={action("onChange")}
    />
  );
};

WithPlaceholder.story = {
  name: "With placeholder",

  parameters: {
    info: "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

WithPlaceholder.args = {
  placeholder: "Select value from list",
};

export const WithHelpMessage = () => (
  <Select
    label="Select box (with help text)"
    options={objectOptions}
    help="Most common choice is Booking cancellation"
    onChange={action("onChange")}
  />
);

WithHelpMessage.story = {
  name: "With help message",

  parameters: {
    info: "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithErrorMessage = () => (
  <Select
    label="Select box (with error text)"
    options={objectOptions}
    error={<div>You need to select some value.</div>}
    onChange={action("onChange")}
  />
);

WithErrorMessage.story = {
  name: "With error message",

  parameters: {
    info: "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = ({
  placeholder,
  disabled,
  name,
  customValueText,
  option,
  value,
  dataTest,
  spaceAfter,
  id,
  required,
  dataAttrs,
  width,
  label,
  inlineLabel,
  error,
  help,
}) => {
  return (
    <Select
      id={id}
      required={required}
      placeholder={placeholder}
      width={width}
      options={option}
      disabled={disabled}
      name={name}
      label={label}
      inlineLabel={inlineLabel}
      onChange={action("onChange")}
      onBlur={action("onBlur")}
      onFocus={action("onFocus")}
      dataTest={dataTest}
      value={value}
      customValueText={customValueText}
      spaceAfter={spaceAfter}
      dataAttrs={dataAttrs}
      error={error}
      help={help}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Playground.args = {
  placeholder: "Select value from list",
  disabled: false,
  name: "name",
  customValueText: "",
  option: objectOptions,
  value: undefined,
  dataTest: "test",
  spaceAfter: SPACINGS_AFTER.SMALL,
  id: "select-id",
  required: false,
  dataAttrs: { "data-recording-ignore": true },
  width: "",
  label: "Label",
  inlineLabel: false,
  error: "",
  help: "",
};

Playground.argTypes = {
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
  value: {
    options: objectOptions.map(opt => opt.value),
  },
};

export const Rtl = () => (
  <RenderInRtl>
    <Select placeholder="My placeholder" options={objectOptions} label="My label" />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
