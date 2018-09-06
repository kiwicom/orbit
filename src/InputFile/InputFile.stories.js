// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { action } from "@storybook/addon-actions";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, array } from "@storybook/addon-knobs/react";

import InputFile from "./index";

setAddon(chaptersAddon);

storiesOf("InputFile", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const label = text("Label", "Label");
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputFile
                  label={label}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                  onRemoveFile={action("removeFile")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Filled with file", () => {
    const label = text("Label", "Label");
    const fileName = text("fileName", "file.png");

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputFile
                  label={label}
                  fileName={fileName}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                  onRemoveFile={action("removeFile")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With help", () => {
    const label = text("Label", "Label");

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
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
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With error", () => {
    const label = text("Label", "Label");
    const error = text("Error", "Error message (explain how to solve it)");

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputFile
                  label={label}
                  error={error}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                  onRemoveFile={action("removeFile")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const label = text("Label", "Label");
    const title = text("Title", "Please select file");
    const name = text("Name", "fileInput");
    const placeholder = text("Placeholder", "No file has been selected yet");
    const fileName = text("fileName", undefined);
    const error = text("Error", "No file has been selected yet");
    const help = text("Help", undefined);
    const allowedFileTypes = array("allowedFileTypes", ["media/*", "image/*"]);

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputFile
                  label={label}
                  title={title}
                  name={name}
                  placeholder={placeholder}
                  fileName={fileName}
                  error={error}
                  help={help}
                  allowedFileTypes={allowedFileTypes}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                  onRemoveFile={action("removeFile")}
                />
              ),
            },
          ],
        },
      ],
    };
  });
