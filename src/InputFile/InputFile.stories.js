// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, array } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";

import InputFile from "./index";

storiesOf("InputFile", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default", () => {
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
  })
  .add("Filled with file", () => {
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
  })
  .add("With help", () => {
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
  })
  .add("With error", () => {
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
  })
  .add("Playground", () => {
    const label = text("Label", "Label");
    const title = text("Title", "Please select file");
    const name = text("Name", "fileInput");
    const placeholder = text("Placeholder", "No file has been selected yet");
    const fileName = text("fileName", undefined);
    const error = text("Error", "No file has been selected yet");
    const help = text("Help", undefined);
    const allowedFileTypes = array("allowedFileTypes", ["media/*", "image/*"]);
    const dataTest = text("dataTest", "test");

    return (
      <InputFile
        label={label}
        title={title}
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
      />
    );
  })
  .add("RTL", () => (
    <RenderInRtl>
      <InputFile label="My label" />
    </RenderInRtl>
  ));
