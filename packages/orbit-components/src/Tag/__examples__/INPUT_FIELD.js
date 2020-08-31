// @flow
import * as React from "react";

import InputField from "../../InputField";
import Tag from "../index";

export default {
  Example: () => {
    const [tags, setTags] = React.useState({
      london: { present: true, selected: false },
      manchester: { present: true, selected: false },
      liverpool: { present: true, selected: false },
    });

    const addTag = name => (
      <Tag
        selected={tags[name].selected}
        onClick={() =>
          setTags({ ...tags, [name]: { present: true, selected: !tags[name].selected } })
        }
        onRemove={() => setTags({ ...tags, [name]: { present: false, selected: false } })}
      >
        {`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}
      </Tag>
    );
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
      "If you want to use tags as your input, use the tags prop. See Tag documentation for more.",
  },
};
