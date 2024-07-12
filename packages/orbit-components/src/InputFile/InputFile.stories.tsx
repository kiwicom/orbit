import * as React from "react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import InputFile from ".";

export default {
  title: "InputFile",
};

export const Default = ({ label }) => {
  return (
    <InputFile
      label={label}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onRemoveFile={action("removeFile")}
    />
  );
};

Default.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Default.args = {
  label: "Label",
};

export const FilledWithFile = ({ label, fileName }) => {
  return (
    <InputFile
      label={label}
      fileName={fileName}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onRemoveFile={action("removeFile")}
    />
  );
};

FilledWithFile.story = {
  name: "Filled with file",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

FilledWithFile.args = {
  label: "Label",
  fileName: "file.png",
};

export const WithHelp = ({ label }) => {
  return (
    <InputFile
      label={label}
      help={
        <div>
          Supported files: <strong>PNG, JPG, PDF</strong>
        </div>
      }
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onRemoveFile={action("removeFile")}
    />
  );
};

WithHelp.story = {
  name: "With help",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

WithHelp.args = {
  label: "Label",
};

export const WithError = ({ label, error }) => {
  return (
    <InputFile
      label={label}
      error={error}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onRemoveFile={action("removeFile")}
    />
  );
};

WithError.story = {
  name: "With error",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

WithError.args = {
  label: "Label",
  error: "Error message (explain how to solve it)",
};

export const Playground = ({
  label,
  multiple,
  disabled,
  buttonLabel,
  name,
  placeholder,
  fileName,
  error,
  help,
  allowedFileTypes,
  dataTest,
  spaceAfter,
  required,
  width,
}) => {
  return (
    <InputFile
      label={label}
      multiple={multiple}
      buttonLabel={buttonLabel}
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      fileName={fileName}
      width={width}
      error={error}
      help={help}
      required={required}
      dataTest={dataTest}
      allowedFileTypes={allowedFileTypes}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onRemoveFile={action("removeFile")}
      spaceAfter={spaceAfter}
    />
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  label: "Label",
  multiple: false,
  disabled: false,
  buttonLabel: "Please select file",
  name: "fileInput",
  placeholder: "No file has been selected yet",
  fileName: "",
  error: "No file has been selected yet",
  help: "",
  allowedFileTypes: ["media/*", "image/*"].join(","),
  dataTest: "test",
  spaceAfter: SPACINGS_AFTER.SMALL,
  required: false,
  width: "",
};

Playground.argTypes = {
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
};

export const Rtl = ({ label, error, help }) => {
  return (
    <RenderInRtl>
      <InputFile label={label} error={error} help={help} />
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
  error: "Error message (explain how to solve it)",
  help: "",
};
