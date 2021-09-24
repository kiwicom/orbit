import React from "react";
import { InputFile } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [fileName, setFileName] = React.useState("");
    const fileTypes = ".png,.jpg,.jpeg,.webp";
    return (
      <InputFile
        label="Profile photo"
        fileName={fileName}
        placeholder="No photo selected"
        buttonLabel="Select photo"
        allowedFileTypes={fileTypes}
        help={`Select a photo in one of the following types: ${fileTypes}`}
        // @ts-expect-error todo
        onChange={event => setFileName(event.currentTarget.files[0].name)}
        onRemoveFile={() => setFileName("")}
      />
    );
  },
  exampleKnobs: [
    {
      component: "InputFile",
      knobs: [
        { name: "error", type: "text", defaultValue: "" },
        { name: "help", type: "text", defaultValue: "" },
        { name: "fileName", type: "text", defaultValue: "" },
        { name: "required", type: "boolean", defaultValue: false },
        { name: "buttonLabel", type: "text", defaultValue: "Select photo" },
        { name: "label", type: "text", defaultValue: "" },
        { name: "placeholder", type: "text", defaultValue: "No photo selected" },
        { name: "allowFileType", type: "text", defaultValue: ".png,.jpg,.jpeg,.webp" },
      ],
    },
  ],
};
