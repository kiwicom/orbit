import React from "react";
import { InputField, Tag } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [tags, setTags] = React.useState(["London", "Manchester", "Liverpool"]);
    const removeTag = tag => {
      setTags(tags.filter(place => place !== tag));
    };

    return (
      <InputField
        label="Destination"
        tags={
          <>
            {tags.map(tag => (
              <Tag
                key={tag}
                onRemove={() => {
                  removeTag(tag);
                }}
              >
                {tag}
              </Tag>
            ))}
          </>
        }
      />
    );
  },
  info: {
    title: "Tags in input fields",
    description:
      "If you want to use tags as your input, use the tags prop. See Tag documentation for more.",
  },
};
