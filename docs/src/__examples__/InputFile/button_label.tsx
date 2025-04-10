import React from "react";
import { InputFile, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [photoName, setPhotoName] = React.useState("");
    const [statementName, setStatementName] = React.useState("");
    const fileTypes = ".png,.jpg,.jpeg,.webp";
    return (
      <Stack spacing="800">
        <InputFile
          buttonLabel="Select photo"
          label="Profile photo"
          // @ts-expect-error TODO
          onChange={event => setPhotoName(event.target.files[0].name)}
          onRemoveFile={() => setPhotoName("")}
          fileName={photoName}
          placeholder="No photo selected"
          allowedFileTypes={fileTypes}
          help={`Select a photo in one of the following types: ${fileTypes}`}
          labelRemove="Remove file"
        />
        <InputFile
          buttonLabel="Select statement"
          label="Signed statement"
          fileName={statementName}
          placeholder="No file selected"
          allowedFileTypes=".pdf"
          help="Upload a signed statement as a PDF"
          // @ts-expect-error TODO
          onChange={event => setStatementName(event.target.files[0].name)}
          onRemoveFile={() => setStatementName("")}
          labelRemove="Remove file"
        />
      </Stack>
    );
  },
};
