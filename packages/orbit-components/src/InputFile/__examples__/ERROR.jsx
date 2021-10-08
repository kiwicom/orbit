// @flow
import * as React from "react";

import InputFile from "../index";

export default {
  Example: (): React.Node => {
    const [fileName, setFileName] = React.useState("scannedPhoto.pdf");
    const fileTypes = ".png,.jpg,.jpeg,.webp";
    return (
      <InputFile
        error={
          fileName.endsWith(".pdf")
            ? `The selected file is not one of the supported types (${fileTypes})`
            : ""
        }
        help={`Select a photo in one of the following types: ${fileTypes}`}
        label="Profile photo"
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
    title: "Error messages",
    description:
      "Include error messages when validation isn't passed, either on change in focus or form submission. Note that an error message will override any help text.",
  },
};
