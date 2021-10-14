// @flow
import * as React from "react";

import InputFile from "../index";

export default {
  Example: (): React.Node => {
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
        onChange={event => setFileName(event.target.files[0].name)}
        onRemoveFile={() => setFileName("")}
      />
    );
  },
  info: {
    title: "Default input file",
    description:
      "By default, input files offer a place to select files from their devices. Labels and help messages help guide users with what to select. Button labels and placeholders help prompt action.",
  },
};
