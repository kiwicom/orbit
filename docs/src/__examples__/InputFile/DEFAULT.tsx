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
  info: {
    title: "Default input file",
    description:
      "By default, input files offer a place to select files from their devices. Labels and help messages help guide users with what to select. Button labels and placeholders help prompt action.",
  },
};
