import * as React from "react";
import { action } from "@storybook/addon-actions";

import { RESIZE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import Textarea from ".";

export default {
  title: "Textarea",
};

export const Default = ({ label, value, placeholder }) => {
  return (
    <Textarea label={label} placeholder={placeholder} onChange={action("change")} value={value} />
  );
};

Default.story = {
  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

Default.args = {
  label: "Label",
  value: "",
  placeholder: "Placeholder",
};

export const WithLabel = ({ label, value, placeholder }) => {
  return (
    <Textarea label={label} placeholder={placeholder} onChange={action("change")} value={value} />
  );
};

WithLabel.story = {
  name: "With label",

  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

WithLabel.args = {
  label: "Label",
  value: "",
  placeholder: "Placeholder",
};

export const WithHelp = ({ value, placeholder, help }) => {
  return (
    <Textarea placeholder={placeholder} help={help} onChange={action("change")} value={value} />
  );
};

WithHelp.story = {
  name: "With help",

  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

WithHelp.args = {
  value: "Something",
  placeholder: "Placeholder",
  help: "Everything is fine.",
};

export const WithError = ({ value, placeholder, error }) => {
  return (
    <Textarea placeholder={placeholder} error={error} onChange={action("change")} value={value} />
  );
};

WithError.story = {
  name: "With error",

  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

WithError.args = {
  value: "Something",
  placeholder: "Placeholder",
  error: "Something went wrong.",
};

export const Playground = ({
  label,
  value,
  fullHeight,
  placeholder,
  help,
  error,
  rows,
  required,
  disabled,
  readOnly,
  maxLength,
  resize,
  dataTest,
  spaceAfter,
}) => {
  return (
    <Textarea
      label={label}
      value={value}
      fullHeight={fullHeight}
      placeholder={placeholder}
      help={help}
      error={error}
      rows={rows}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      maxLength={maxLength}
      resize={resize}
      onChange={action("change")}
      onFocus={action("focus")}
      onBlur={action("blur")}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Some description about this type of textarea in general.",
  },
};

Playground.args = {
  label: "Label",
  value: "",
  fullHeight: true,
  placeholder: "Placeholder",
  help: "",
  error: "Something went wrong.",
  disabled: false,
  readOnly: false,
  resize: RESIZE_OPTIONS.VERTICAL,
  maxLength: Infinity,
  dataTest: "test",
  rows: 3,
  required: false,
  spaceAfter: SPACINGS_AFTER.MEDIUM,
};

Playground.argTypes = {
  resize: {
    options: Object.values(RESIZE_OPTIONS),
    control: { type: "select" },
  },
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: { type: "select" },
  },
};

export const Rtl = ({ label, help, error }) => {
  return (
    <RenderInRtl>
      <Textarea
        label={label}
        help={help}
        error={error}
        placeholder="My placeholder"
        value="Content of the Textarea"
      />
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
  label: "Label",
  help: "",
  error: "Something went wrong.",
};
