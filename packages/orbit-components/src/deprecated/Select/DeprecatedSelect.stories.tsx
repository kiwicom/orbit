import * as React from "react";
import { action } from "@storybook/addon-actions";
import { object, select, text, boolean } from "@storybook/addon-knobs";

import Airplane from "../../icons/Airplane";
import SIZE_OPTIONS from "./consts";
import CountryFlag from "../../CountryFlag";
import { CODES } from "../../CountryFlag/consts";
import RenderInRtl from "../../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

import Select from ".";

const objectOptions = [
  { value: 0, label: "Zero-th item" },
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
  { value: 3, label: "Third item" },
];

export default {
  title: "Deprecated Select",
};

export const Default = () => <Select options={objectOptions} onChange={action("onChange")} />;

Default.story = {
  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
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
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithCountryFlagPrefix = () => {
  const code = select("Code", Object.values(CODES), CODES.ANYWHERE);
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
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithPlaceholder = () => {
  const placeholder = text("Placeholder", "Select value from list");
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
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithSmallSize = () => (
  <Select
    label="Select box (small size)"
    size="small"
    options={objectOptions}
    onChange={action("onChange")}
  />
);

WithSmallSize.story = {
  name: "With small size",

  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
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
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
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
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = () => {
  const placeholder = text("Placeholder", "Select value from list");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const disabled = boolean("Disabled", false);
  const name = text("Name", "name");
  const customValueText = text("customValueText", "");
  const option = object("Options", objectOptions);
  const value = select(
    "Value",
    objectOptions.map(opt => opt.value),
    undefined,
  );
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.NORMAL);
  const id = text("ID", "select-id");
  const required = boolean("Required", false);
  const dataAttrs = object("dataAttrs", { "data-recording-ignore": true });

  return (
    <Select
      id={id}
      required={required}
      placeholder={placeholder}
      size={size}
      options={option}
      disabled={disabled}
      name={name}
      label={text("Label", "label")}
      onChange={action("onChange")}
      onBlur={action("onBlur")}
      onFocus={action("onFocus")}
      dataTest={dataTest}
      value={value}
      customValueText={customValueText}
      spaceAfter={spaceAfter}
      dataAttrs={dataAttrs}
    />
  );
};

Playground.story = {
  parameters: {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
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
