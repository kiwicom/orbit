import React from "react";
import { InputFile } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [fileName, setFileName] = React.useState("");
    const fileTypes = ".png,.jpg,.jpeg,.webp";
    const ref = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
    return (
      <InputFile
        ref={ref}
        label="Profile photo"
        // @ts-expect-error type
        onChange={event => setFileName(event.target.files[0].name)}
        onRemoveFile={() => setFileName("")}
        fileName={fileName}
        placeholder="No photo selected"
        buttonLabel="Select photo"
        allowedFileTypes={fileTypes}
        help={`Select a photo in one of the following types: ${fileTypes}`}
      />
    );
  },
  info: {
    title: "References",
    description:
      "For actions like automatically focusing on an input file, use the <code>ref</code> prop.",
  },
};
