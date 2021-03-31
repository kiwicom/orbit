// @flow
import * as React from "react";

import InputFile from "../index";

export default {
  Example: (): React.Node => {
    const [fileName, setFileName] = React.useState("");
    const fileTypes = ".png,.jpg,.jpeg,.webp";
    const ref: {| current: React.ElementRef<any> |} = React.useRef(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
    return (
      <InputFile
        ref={ref}
        label="Profile photo"
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
