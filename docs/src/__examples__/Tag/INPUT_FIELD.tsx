import * as React from "react";
import { Tag, InputField } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [tags, setTags] = React.useState({
      london: { present: true, selected: false },
      manchester: { present: true, selected: false },
      liverpool: { present: true, selected: false },
    });

    const addTag = name => {
      const newTags = { ...tags };
      return (
        <Tag
          selected={tags[name].selected}
          onClick={() => {
            newTags[name] = { present: true, selected: !tags[name].selected };
            setTags(newTags);
          }}
          onRemove={() => {
            newTags[name] = { present: false, selected: false };
            setTags(newTags);
          }}
        >
          {`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}
        </Tag>
      );
    };
    return (
      <InputField
        label="Destination"
        value=""
        tags={
          <>
            {tags.london.present && addTag("london")}
            {tags.manchester.present && addTag("manchester")}
            {tags.liverpool.present && addTag("liverpool")}
          </>
        }
      />
    );
  },
  info: {
    title: "",
    description: "",
  },
};
