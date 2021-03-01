import * as React from "react";
import { InputFile, Stack, Text, List, ListItem, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [actions, setActions] = React.useState([]);
    const [fileName, setFileName] = React.useState("");

    const fileTypes = ".png,.jpg,.jpeg,.webp";
    const addAction = action => {
      setActions([...actions, action]);
    };
    return (
      <Stack direction="column">
        <InputFile
          onChange={event => {
            addAction("Changed");
            setFileName(event.target.files[0].name);
          }}
          onRemoveFile={() => {
            addAction("File removed");
            setFileName("");
          }}
          onBlur={() => addAction("Blurred")}
          onFocus={() => addAction("Focused")}
          label="Profile photo"
          fileName={fileName}
          placeholder="No photo selected"
          buttonLabel="Select photo"
          allowedFileTypes={fileTypes}
          help={`Select a photo in one of the following types: ${fileTypes}`}
        />
        <Text>
          What has happened?{" "}
          <TextLink type="secondary" onClick={() => setActions([])}>
            Clear list
          </TextLink>
        </Text>
        {actions && (
          <List>
            {actions.map((action, i) => {
              // eslint-disable-next-line react/no-array-index-key
              return <ListItem key={i}>{action}</ListItem>;
            })}
          </List>
        )}
      </Stack>
    );
  },
  info: {
    title: "Callbacks",
    description:
      "If you want to take actions on user interaction, use one of the callbacks available for input files.",
  },
};
