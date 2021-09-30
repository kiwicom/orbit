import React from "react";
import { InputFile } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
      <InputFile
        error="The selected file is not one of the supported"
        label="Profile photo"
        fileName="scannedPhoto.pdf"
        placeholder="No photo selected"
        buttonLabel="Select photo"
        allowedFileTypes={[".png", ".jpg", ".jpeg", ".webp"]}
      />
    );
  },
  exampleVariants: [
    {
      name: "Error",
      code: `() => (<InputFile
    error="The selected file is not one of the supported"
    label="Profile photo"
    fileName="scannedPhoto.pdf"
    placeholder="No photo selected"
    buttonLabel="Select photo"
    allowedFileTypes={[".png", ".jpg", ".jpeg", ".webp"]}
  />)`,
    },
    {
      name: "Help",
      code: `() => (<InputFile
    help="Select a photo in one of the following types: png, jpg, jpeg, webp"
    label="Profile photo"
    fileName="scannedPhoto.pdf"
    placeholder="No photo selected"
    buttonLabel="Select photo"
    allowedFileTypes={[".png", ".jpg", ".jpeg", ".webp"]}
  />)`,
    },
  ],
};
