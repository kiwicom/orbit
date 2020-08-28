// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, array, select } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import InputFile from "./index";

storiesOf("InputFile", module)
  .add(
    "Default",
    () => {
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Filled with file",
    () => {
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "With help",
    () => {
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "With error",
    () => {
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const label = text("Label", "Label");
      const buttonLabel = text("buttonLabel", "Please select file");
      const name = text("Name", "fileInput");
      const placeholder = text("Placeholder", "No file has been selected yet");
      const fileName = text("fileName", undefined);
      const error = text("Error", "No file has been selected yet");
      const help = text("Help", undefined);
      const allowedFileTypes = array("allowedFileTypes", ["media/*", "image/*"]);
      const dataTest = text("dataTest", "test");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);

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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <InputFile label="My label" />
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
