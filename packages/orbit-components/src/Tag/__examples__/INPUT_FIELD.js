// @flow
import * as React from "react";

import InputField from "../../InputField";
import Tag from "../index";

export default {
  Example: (): React.Node => {
    const [tags, setTags] = React.useState({
      london: { present: true, selected: false },
      manchester: { present: true, selected: false },
      liverpool: { present: true, selected: false },
    });

    type Cities = "london" | "manchester" | "liverpool";

    const addTag = (name: Cities) => {
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
    title: "Tags in input fields",
    description:
      "Tags can be used to show selections in input fields, such as possible destinations.",
  },
};
