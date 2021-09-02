import React from "react";
import { InputFile } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [fileName, setFileName] = React.useState("");
    const fileTypes = ".png,.jpg,.jpeg,.webp";
    return (
      <InputFile
        help={`Select a photo in one of the following types: ${fileTypes}`}
        label="Profile photo"
        // @ts-expect-error type
        onChange={event => setFileName(event.target.files[0].name)}
        onRemoveFile={() => setFileName("")}
        fileName={fileName}
        placeholder="No photo selected"
        buttonLabel="Select photo"
        allowedFileTypes={fileTypes}
      />
    );
  },
  info: {
    title: "Help messages",
    description:
      "Help text can guide users to selecting the proper file. Note that an error message will override the help text.",
  },
};
