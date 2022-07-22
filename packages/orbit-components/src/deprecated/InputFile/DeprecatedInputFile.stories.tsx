import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, array, select } from "@storybook/addon-knobs";

import RenderInRtl from "../../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

import InputFile from ".";

export default {
  title: "Deprecated InputFile",
};

export const Default = () => {
  const label = text("Label", "Label");
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const FilledWithFile = () => {
  const label = text("Label", "Label");
  const fileName = text("fileName", "file.png");

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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithHelp = () => {
  const label = text("Label", "Label");

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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithError = () => {
  const label = text("Label", "Label");
  const error = text("Error", "Error message (explain how to solve it)");

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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = () => {
  const label = text("Label", "Label");
  const buttonLabel = text("buttonLabel", "Please select file");
  const name = text("Name", "fileInput");
  const placeholder = text("Placeholder", "No file has been selected yet");
  const fileName = text("fileName", "");
  const error = text("Error", "No file has been selected yet");
  const help = text("Help", "");
  const allowedFileTypes = array("allowedFileTypes", ["media/*", "image/*"]);
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.SMALL);

  return (
    <InputFile
      label={label}
      buttonLabel={buttonLabel}
      name={name}
      placeholder={placeholder}
      fileName={fileName}
      error={error}
      help={help}
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = () => (
  <RenderInRtl>
    <InputFile label="My label" />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
